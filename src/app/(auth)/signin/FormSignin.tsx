"use client";

import { signin } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";

export function FormSignin() {
  const [state, action, pending] = useActionState(signin, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="user">Usuario</Label>
          <Input
            id="user"
            name="user"
            type="text"
            placeholder="Usuario"
            required
          />
          {state?.errors?.user && (
            <p className="text-sm text-red-500">{state.errors.user}</p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required
          />
          {state?.errors?.password && (
            <p className="text-sm text-red-500">{state.errors.password}</p>
          )}
        </div>
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <Button aria-disabled={pending} type="submit" className="w-full">
          {pending ? "Ingresando..." : "Ingresar"}
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        ¿Aún no tienes cuenta?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Registrarse
        </Link>
      </div>
    </form>
  );
}
