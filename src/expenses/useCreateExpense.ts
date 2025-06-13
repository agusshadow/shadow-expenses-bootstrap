import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../supabase/client";

type ExpenseData = {
  name: string;
  amount: number;
};

export function useCreateExpense() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const createExpense = async ({ name, amount }: ExpenseData) => {
    setError(null);
    setLoading(true);

    const { error } = await supabaseClient.from("expenses").insert([
      {
        name,
        amount,
      },
    ]);

    setLoading(false);

    if (error) {
      setError("Error al crear el gasto.");
      return;
    }

    navigate("/expenses");
  };

  return {
    createExpense,
    loading,
    error,
  };
}
