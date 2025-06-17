import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../supabase/client";

type TransactionData = {
  name: string;
  amount: number;
  type: string;
  date: string;
};

export function useCreateTransaction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const createTransaction = async ({
    name,
    amount,
    type,
    date,
  }: TransactionData) => {
    setError(null);
    setLoading(true);

    const { error } = await supabaseClient.from("transactions").insert([
      {
        name,
        amount,
        type,
        date,
      },
    ]);

    setLoading(false);

    if (error) {
      setError("Error al crear el gasto.");
      return;
    }

    navigate("/transactions");
  };

  return {
    createTransaction,
    loading,
    error,
  };
}
