"use client";

import { signup } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useActionState } from "react";

export function FormSignup() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
            required
          />
          {state?.errors?.name && (
            <p className="text-sm text-red-500">{state.errors.name}</p>
          )}
        </div>
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
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          {state?.errors?.password && (
            <div className="text-sm text-red-500">
              <p>La contraseña debe:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Button aria-disabled={pending} type="submit" className="w-full">
          {pending ? "Cargando..." : "Registrarse"}
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/signin" className="underline underline-offset-4">
          Ingresar
        </Link>
      </div>
    </form>
  );
}
