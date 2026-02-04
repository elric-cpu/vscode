import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY env vars");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const email = "e2e@example.com";
const password = "change-me";

let { data: authData, error: authError } = await supabase.auth.signInWithPassword({
  email,
  password,
});

if (authError || !authData?.user) {
  const { error: signUpError } = await supabase.auth.signUp({ email, password });
  if (signUpError) throw new Error(`Sign up failed: ${signUpError.message}`);
  ({ data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  }));
}

if (authError || !authData?.user) {
  throw new Error(`Auth failed: ${authError?.message || "unknown"}`);
}

const userId = authData.user.id;
const accessToken = authData.session?.access_token;
if (!accessToken) throw new Error("Missing auth session access token.");

const authed = createClient(supabaseUrl, supabaseAnonKey, {
  global: { headers: { Authorization: `Bearer ${accessToken}` } },
});

const { data: existing } = await authed
  .from("organization_members")
  .select("org_id")
  .eq("user_id", userId)
  .limit(1);

let orgId = existing?.[0]?.org_id;
if (!orgId) {
  const { data: org, error: orgError } = await authed
    .from("organizations")
    .insert({ name: "Estimating Workspace", created_by: userId })
    .select()
    .single();
  if (orgError || !org) throw new Error(`Org create failed: ${orgError?.message || "unknown"}`);

  const { error: memberError } = await authed
    .from("organization_members")
    .insert({ org_id: org.id, user_id: userId, role: "owner" });
  if (memberError) throw new Error(`Org membership failed: ${memberError.message}`);
  orgId = org.id;
}

const { data: project, error: projectError } = await authed
  .from("estimate_projects")
  .insert({
    org_id: orgId,
    name: "AI Workspace Demo",
    property_address: "123 Main St, Salem, OR",
    location_zip: "97301",
    created_by: userId,
  })
  .select()
  .single();

if (projectError || !project) {
  throw new Error(`Project create failed: ${projectError?.message || "unknown"}`);
}

const pdfPath = path.resolve("public/resources/home-maintenance-recordbook.pdf");
const fileBuffer = await fs.readFile(pdfPath);
const fileName = path.basename(pdfPath);
const storagePath = `${orgId}/${project.id}/${Date.now()}-${fileName}`;

const { error: uploadError } = await authed.storage
  .from("estimate-documents")
  .upload(storagePath, fileBuffer, { contentType: "application/pdf", upsert: true });

if (uploadError) throw new Error(`Upload failed: ${uploadError.message}`);

const { data: urlData } = authed.storage.from("estimate-documents").getPublicUrl(storagePath);

const { data: doc, error: docError } = await authed
  .from("estimate_documents")
  .insert({
    org_id: orgId,
    project_id: project.id,
    title: fileName,
    storage_bucket: "estimate-documents",
    storage_path: storagePath,
    file_url: urlData?.publicUrl || null,
    uploaded_by: userId,
  })
  .select()
  .single();

if (docError || !doc) throw new Error(`Document insert failed: ${docError?.message || "unknown"}`);

const pdf = await getDocument({ data: fileBuffer }).promise;
const pages = [];
let offset = 0;
for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber);
  const textContent = await page.getTextContent();
  const text = textContent.items
    .map((item) => item.str)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const startOffset = offset;
  const endOffset = startOffset + text.length;
  pages.push({
    page_number: pageNumber,
    text,
    start_offset: startOffset,
    end_offset: endOffset,
  });
  offset = endOffset + 1;
}

const parsedText = pages.map((page) => page.text).join("\n");
const pageMap = pages.map((page) => ({
  page: page.page_number,
  start: page.start_offset,
  end: page.end_offset,
}));

const { data: extractData, error: extractError } = await authed.functions.invoke(
  "extract-estimate",
  {
    body: {
      document_id: doc.id,
      project_id: project.id,
      parsed_text: parsedText,
      page_map: pageMap,
      pages,
    },
  },
);

if (extractError || !extractData?.estimate_version_id) {
  throw new Error(`Extraction failed: ${extractError?.message || "unknown"}`);
}

const estimateVersionId = extractData.estimate_version_id;

const { data: tasks, error: tasksError } = await authed
  .from("estimate_tasks")
  .select("id, task_key, trade, scope_narrative")
  .eq("estimate_version_id", estimateVersionId);

if (tasksError) throw new Error(`Task fetch failed: ${tasksError.message}`);

const taskIds = (tasks || []).map((task) => task.id);
const { data: lineItems, error: lineItemsError } = await authed
  .from("estimate_line_items")
  .select("id, item_key, description, labor_hours, material_unit_price")
  .in("estimate_task_id", taskIds);

if (lineItemsError) throw new Error(`Line item fetch failed: ${lineItemsError.message}`);

const { data: questions, error: questionsError } = await authed
  .from("estimate_questions")
  .select("id, question_key, prompt")
  .eq("estimate_version_id", estimateVersionId);

if (questionsError) throw new Error(`Question fetch failed: ${questionsError.message}`);

const pricingTarget = tasks?.[0]?.task_key || "drywall_patch";
const { data: priceData, error: priceError } = await authed.functions.invoke(
  "price-lookup",
  {
    body: {
      item_key: pricingTarget,
      location_zip: project.location_zip,
      unit: "sqft",
      quantity: 10,
    },
  },
);

if (priceError) throw new Error(`Price lookup failed: ${priceError.message}`);

console.log("E2E OK", {
  estimate_version_id: estimateVersionId,
  task_count: tasks?.length || 0,
  line_item_count: lineItems?.length || 0,
  question_count: questions?.length || 0,
  price_sample: priceData,
});
