import { supabaseClient } from "@supabase-client/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return null;
    }

    navigate("/transactions");

    return data;
  };

  return { login, loading, error };
}
