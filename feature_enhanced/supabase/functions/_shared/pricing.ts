import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const SEED_PRICES: Record<string, { unit: string; price: number }> = {
  drywall_patch: { unit: "sqft", price: 3.5 },
  flooring_remove: { unit: "sqft", price: 2.1 },
  water_extract: { unit: "sqft", price: 1.8 },
  mold_treat: { unit: "sqft", price: 4.2 },
  smoke_clean: { unit: "sqft", price: 3.9 },
};

const ttlHours = Number(Deno.env.get("PRICING_CACHE_TTL_HOURS") || "168");

const getClient = (url: string, key: string, token: string) =>
  createClient(url, key, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

const nowIso = () => new Date().toISOString();

export const getCachedPrice = async (
  supabaseUrl: string,
  supabaseKey: string,
  token: string,
  itemKey: string,
  locationZip: string | null,
  unit: string | null,
) => {
  const supabase = getClient(supabaseUrl, supabaseKey, token);
  const { data, error } = await supabase
    .from("estimate_pricing_cache")
    .select("unit_price, unit, expires_at, source_meta")
    .eq("item_key", itemKey)
    .eq("location_zip", locationZip)
    .eq("unit", unit)
    .maybeSingle();

  if (error || !data) return null;
  if (new Date(data.expires_at).getTime() < Date.now()) return null;
  return data;
};

export const upsertCache = async (
  supabaseUrl: string,
  supabaseKey: string,
  token: string,
  itemKey: string,
  locationZip: string | null,
  unit: string,
  price: number,
  sourceMeta: Record<string, unknown>,
) => {
  const supabase = getClient(supabaseUrl, supabaseKey, token);
  const expiresAt = new Date(Date.now() + ttlHours * 60 * 60 * 1000).toISOString();

  await supabase.from("estimate_pricing_cache").upsert(
    {
      item_key: itemKey,
      location_zip: locationZip,
      unit,
      unit_price: price,
      source_meta: sourceMeta,
      expires_at: expiresAt,
      created_at: nowIso(),
    },
    { onConflict: "item_key,location_zip,unit" },
  );
};

export const getSeedPrice = (itemKey: string) => {
  const seed = SEED_PRICES[itemKey];
  if (!seed) return null;
  return {
    unit_price: seed.price,
    unit: seed.unit,
    source_meta: { provider: "seed" },
  };
};

export const fetchScrapedPrice = async (
  itemKey: string,
  locationZip: string | null,
  unit: string | null,
) => {
  const allow = Deno.env.get("ALLOW_SCRAPE") === "true";
  const scrapeUrl = Deno.env.get("SCRAPE_PROVIDER_URL");
  if (!allow || !scrapeUrl) return null;

  const response = await fetch(`${scrapeUrl.replace(/\\/$/, "")}/pricing/scrape`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item_key: itemKey, location_zip: locationZip, unit }),
  });

  if (!response.ok) return null;
  return response.json();
};
