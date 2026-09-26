import { supabase } from "./supabaseClient";

export async function fetchSiteContent() {
  const { data, error } = await supabase.from("site_content").select("data").eq("id", 1).single();
  if (error) throw error;
  return data.data;
}
