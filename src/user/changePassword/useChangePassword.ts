import { supabaseClient } from "@supabase-client/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useChangePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function changePassword(newPassword: string, confirmPassword: string) {
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }

    if (newPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }

    setLoading(true);

    const { error } = await supabaseClient.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return false;
    }

    navigate("/profile");
    setLoading(false);
    return true;
  }

  return {
    loading,
    error,
    changePassword,
  };
}
