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
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Correo Electrónico"
            required
            aria-describedby="email-error"
          />
          {state?.errors?.email && state?.message === undefined && (
            <p id="email-error" className="text-sm text-red-500">
              {state.errors.email.join(", ") || "Ingresa un correo válido."}
            </p>
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
            aria-describedby="password-error"
          />
          {state?.errors?.password && state?.message === undefined && (
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
        {/* Mensaje de confirmación */}
        {state?.message && (
          <p
            className={`text-sm ${
              state.message.includes("¡Registro exitoso!")
                ? "text-green-500"
                : "text-red-500"
            }`}
            aria-live="polite"
          >
            {state.message}
          </p>
        )}
        
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
