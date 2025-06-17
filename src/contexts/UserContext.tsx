import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabaseClient } from "@supabase-client/client";

// Tipado del contexto
interface UserContextType {
  user: User | null;
  loading: boolean;
}

// Contexto con valor inicial
const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
});

// Tipado de las props del provider
interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: listener } = supabaseClient.auth.onAuthStateChange(
      async (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
}

// Hook personalizado
export const useUser = () => useContext(UserContext);
