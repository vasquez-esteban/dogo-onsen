"use client";

import { addProducts } from "@/actions/amenity";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

export default function FormEditarArticulo() {
  const [state, action, pending] = useActionState(addProducts, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="cantidad">Cantidad a agregar</Label>
          <Input id="cantidad" name="cantidad" type="number" required />
          {state?.errors?.cantidad && (
            <p className="text-sm text-red-500">{state.errors.cantidad}</p>
          )}
        </div>
        <Button aria-disabled={pending} type="submit" className="w-full">
          {pending ? "Agregando..." : "Agregar"}
        </Button>
        {state?.message && (
          <p
            className={`text-sm ${state.success ? "text-green-500" : "text-red-500"}`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
