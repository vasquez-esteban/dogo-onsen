"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { resetPassword } from "@/actions/auth";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [pending, setPending] = useState<boolean>(false);
  const [code, setCode] = useState<string | null>(null);


  // Obtén el código de los parámetros de búsqueda solo en el cliente
  useEffect(() => {
    setCode(searchParams.get("code"));
  }, [searchParams]);

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await resetPassword(
      formData, 
      code as string
    );

    if (result.status === "success"){
      router.push("/");
    }else{
      setError(result.status);
    }

    setPending(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-800">
            Nueva contraseña
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            id="Password"
            name="password"
            className="mt-1 h-10 w-full rounded-md  border border-gray-200 bg-white p-2 px-4 text-sm text-gray-700"
          />
        </div>

        <div className="mt-4">
        <Button aria-disabled={pending} type="submit" className="w-full">
          {pending ? "Ingresando..." : "Ingresar"}
        </Button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;