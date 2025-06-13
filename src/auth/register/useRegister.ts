import { useState } from "react";
import { supabaseClient } from "../../supabase/client";
import { useNavigate } from "react-router-dom";

type RegisterParams = {
  email: string;
  password: string;
  username: string;
};

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const register = async ({ email, password, username }: RegisterParams) => {
    setLoading(true);
    setError(null);

    try {
      const { data: signUpData, error: signUpError } =
        await supabaseClient.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
            },
          },
        });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return null;
      }

      const { data: signInData, error: signInError } =
        await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return null;
      }

      navigate("/gastos");
      setLoading(false);
      return signInData;
    } catch (e) {
      setError("Ocurrió un error inesperado");
      setLoading(false);
      return null;
    }
  };

  return { register, loading, error };
}
