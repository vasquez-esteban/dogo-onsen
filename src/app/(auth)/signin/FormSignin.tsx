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
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Correo"
            required
            aria-describedby="email-error"
          />
          {state?.errors?.email && (
            <p id="email-error" className="text-sm text-red-500">
              {state.errors.email.join(", ") || "Ingresa un correo válido."}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            aria-describedby="password-error"
          />
          {state?.errors?.password && (
            <div id="password-error" className="text-sm text-red-500">
              <p>La contraseña debe:</p>
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {state?.message && (
          <p className="text-sm text-red-500" aria-live="polite">
            {state.message}
          </p>
        )}

        <Button aria-disabled={pending} type="submit" className="w-full">
          {pending ? "Ingresando..." : "Ingresar"}
        </Button>

        <div className="mt-4 text-center text-sm">
          ¿Olvidaste tu contraseña?{" "}
          <Link
            href="/forgot-password"
            className="underline underline-offset-4"
          >
            Recuperar
          </Link>
        </div>
        <div className="mt-4 text-center text-sm">
          ¿Aún no tienes cuenta?{" "}
          <Link href="/signup" className="underline underline-offset-4">
            Registrarse
          </Link>
        </div>
      </div>
    </form>
  );
}
