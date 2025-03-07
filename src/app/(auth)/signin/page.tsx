"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { FormSignin } from "./FormSignin";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.push('/'); // Redirige si el usuario está autenticado
    }
  }, [user, isLoading, router]);
  return (
    <>
      <h1>¡Bienvenido Viajero!</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Relájate y haz tu reserva para un descanso en el balneario del mundo
            espiritual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormSignin></FormSignin>
        </CardContent>
      </Card>
    </>
  );
}
