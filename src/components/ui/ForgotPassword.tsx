"use client";
import { forgotPassword } from "@/actions/auth";
import { Button } from "./button";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [state, action, pending] = useActionState(forgotPassword, undefined);
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

        {/* Mensaje de confirmación */}
        {state?.message && (
          <p
            className={`text-sm ${
              state.message.includes("¡Restauracion exitosa!")
                ? "text-green-500"
                : "text-red-500"
            }`}
            aria-live="polite"
          >
            {state.message}
          </p>
        )}

        <Button aria-disabled={pending} type="submit" className="w-full">
          {pending ? "Ingresando..." : "Ingresar"}
        </Button>
        <div className="flex flex-col gap-6"></div>
        </div>
      </form>
  );
};

export default ForgotPassword;
