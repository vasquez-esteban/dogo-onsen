"use client";
/*
import { createContext, useContext, useEffect, useState } from "react";
import { getUserRole } from "@/actions/auth";

interface AuthContextType {
  role: string;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState("Guest");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
      try {
        const { role } = await getUserRole();
        setRole(role || "Guest");
      } catch {
        setRole("Guest");
      } finally {
        setIsLoading(false);
      }
    }
    fetchRole();
  }, []);

  return (
    <AuthContext.Provider value={{ role, isAuthenticated: role !== "Guest", isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
*/

import { createContext, useContext, useEffect, useState } from "react";
import { getUserRole } from "@/actions/auth";
import { createClient } from "@/utils/supabase/client";

interface AuthContextType {
  role: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState("Guest");
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient(); // Inicializar Supabase

  const refreshAuth = async () => {
    setIsLoading(true);
    try {
      const { role } = await getUserRole();
      setRole(role || "Guest");
    } catch {
      setRole("Guest");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      refreshAuth();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]); //Se incluye supabase en las dependencias

  return (
    <AuthContext.Provider value={{ role, isAuthenticated: role !== "Guest", isLoading, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
