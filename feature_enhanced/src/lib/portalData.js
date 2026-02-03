import { supabase } from "@/lib/customSupabaseClient";

export const getClientPortalBundle = async () => {
  const { data, error } = await supabase.rpc("get_client_portal_bundle");

  if (error) {
    throw error;
  }

  return data;
};

export const getSubcontractorPortalBundle = async () => {
  const { data, error } = await supabase.rpc("get_subcontractor_portal_bundle");

  if (error) {
    throw error;
  }

  return data;
};

export const getSubcontractorProfile = async (userId) => {
  const { data, error } = await supabase
    .from("subcontractors")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
};
