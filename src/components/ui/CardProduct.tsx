"use client";

import jabones from "@/assets/producto1.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useAuth } from "./context/AuthProvider";

const CardProduct = () => {
  const { role, isLoading } = useAuth();
  const isAdmin = role === "Admin";

  return (
    <div className="w-70 sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Image src={jabones} alt="Imagen de jabones"></Image>
        </CardHeader>
        <CardContent>
          <CardTitle>Jabones</CardTitle>
          <p>Disfruta de nuestros aromáticos jabones</p>
          <p>
            <span className="text-2xl font-bold">15000</span>/persona
          </p>
          {/*Ocultar el botón "Editar" si No es Admin */}
          {!isLoading && isAdmin &&  (
            <button className="primary-btn mt-10 h-10 w-full">Editar</button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardProduct;
