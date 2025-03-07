'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) => {
  const { user, role, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Espera a que termine la carga

    if (!user) {
      router.push('/signin');
    } else if (requiredRole && role !== requiredRole) {
      router.push('/'); // Página no autorizada
    }
  }, [user, role, isLoading, requiredRole, router]);

  // Mostrar cargando mientras se resuelve la autenticación
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  // Si no está autenticado, no se renderiza nada (se redirige en el `useEffect`)
  if (!user || (requiredRole && role !== requiredRole)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
