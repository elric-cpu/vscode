import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const anon = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(url, anon);

const { data: signIn, error } = await supabase.auth.signInWithPassword({
  email: "e2e@example.com",
  password: "change-me",
});

if (error) {
  console.error("signIn error", error.message);
  process.exit(1);
}

const token = signIn?.session?.access_token;
const payload = token.split(".")[1];
const decoded = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
console.log(decoded);
