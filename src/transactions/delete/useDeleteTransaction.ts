import { useState } from "react";
import { supabaseClient } from "../../supabase/client";
import { useNavigate } from "react-router-dom";

export function useDeleteTransaction() {
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const deleteTransaction = async (id: string) => {
    setDeleting(true);
    const { error } = await supabaseClient
      .from("transactions")
      .delete()
      .eq("id", id);
    setDeleting(false);

    if (error) {
      console.error("Error al eliminar transacción:", error.message);
      throw error;
    }

    navigate("/transactions");
  };

  return { deleteTransaction, deleting };
}
