import { useState, useEffect } from "react";
import { supabaseClient } from "../supabase/client";
export function useExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExpenses() {
      setLoading(true);
      setError(null);
      const { data, error } = await supabaseClient
        .from("expenses")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
        setExpenses([]);
      } else {
        setExpenses(data);
      }
      setLoading(false);
    }

    fetchExpenses();
  }, []);

  return { expenses, loading, error };
}
