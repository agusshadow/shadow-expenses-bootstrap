import { supabaseClient } from "@supabase-client/client";
import { useState, useEffect } from "react";

export function useTransaction(id: string | undefined) {
  const [transaction, setTransaction] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchTransaction() {
      setLoading(true);
      setError(null);

      const { data, error } = await supabaseClient
        .from("transactions")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError(error.message);
        setTransaction(null);
      } else {
        setTransaction(data);
      }

      setLoading(false);
    }

    fetchTransaction();
  }, [id]);

  return { transaction, loading, error };
}
