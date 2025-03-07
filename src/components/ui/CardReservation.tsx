"use client";

import jabones from "@/assets/producto1.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client"; // Change to client version
import Image from "next/image";
import { useEffect, useState } from "react";

interface Reserva {
  id_reserva: number;
  fecha: string;
  hora: string;
  cantidad_espiritu: number;
  jabon_especial: boolean;
  id_usuario: number;
  id_bano: number;
}

const CardReservation = ({ reserva }: { reserva: Reserva }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      // Use the client-side Supabase instance
      const supabase = createClient();

      const { data, error } = await supabase
        .from("usuario")
        .select("correo")
        .eq("id_usuario", reserva.id_usuario)
        .single();

      if (error) {
        console.error("Error fetching user email:", error);
      } else {
        setUserEmail(data?.correo || null);
      }
    };

    fetchUserEmail();
  }, [reserva.id_usuario]);

  return (
    <div className="w-70 sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Image
            src={jabones}
            alt="Imagen de jabones"
            width={400}
            height={300}
            layout="responsive"
          />
        </CardHeader>
        <CardContent>
          <CardTitle>Reserva #{reserva.id_reserva}</CardTitle>
          <p>
            Reservado por usuario:{" "}
            {userEmail ? userEmail : "Cargando correo..."}
          </p>
          <p>En baño: {reserva.id_bano}</p>
          <p>
            Fecha: {reserva.fecha} - Hora: {reserva.hora}
          </p>
          {reserva.jabon_especial ? (
            <p>Incluye jabones especiales</p>
          ) : (
            <p>No incluye jabones especiales</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardReservation;
