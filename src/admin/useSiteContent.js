import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useSiteContent() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase.from("site_content").select("data").eq("id", 1).single();
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setError("");
    setContent(data.data);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const saveSection = useCallback(async (key, value) => {
    const { data: current, error: readError } = await supabase.from("site_content").select("data").eq("id", 1).single();
    if (readError) throw readError;
    const next = { ...current.data, [key]: value };
    const { error: writeError } = await supabase.from("site_content").update({ data: next }).eq("id", 1);
    if (writeError) throw writeError;
    setContent(next);
  }, []);

  return { content, loading, error, saveSection };
}
