// src/context/AuthContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/utils/supabase/client';

interface AuthContextProps {
  user: User | null;
  role: string | null;
  isLoading: boolean; // Nuevo indicador para manejar estados de carga
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //const supabase = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true); // Nuevo estado

  // Función para obtener el rol del usuario
  const fetchUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('roles')
        .select('rol')
        .eq('id_ususario', userId)
        .single();

      if (error) {
        console.error('Error obteniendo user role:', error.message);
        return null;
      }

      return data?.rol ?? null;
    } catch (err) {
      console.error('Inesperado error obteniendo user role:', err);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  console.log(user, role, isLoading);

  return (
    <AuthContext.Provider value={{ user, role, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
