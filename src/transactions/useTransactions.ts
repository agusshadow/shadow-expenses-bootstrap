import { useState, useEffect } from "react";
import { supabaseClient } from "../supabase/client";
export function useTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabaseClient
        .from("transactions")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
        setTransactions([]);
      } else {
        setTransactions(data);
      }
      setLoading(false);
    }

    fetchTransactions();
  }, []);

  return { transactions, loading, error };
}
