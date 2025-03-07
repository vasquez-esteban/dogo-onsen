import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function useUserRole() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserRole() {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data: userData, error } = await supabase
        .from("roles")
        .select("rol")
        .eq("id_usuario", user.id)
        .single();

      if (!error && userData) {
        setRole(userData.rol);
      }

      setLoading(false);
    }

    fetchUserRole();
  }, []);

  return { role, loading };
}
