"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getImage } from "@/utils/supabase/imageMaps";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

interface Bano {
  id_baño: number;
  nombre: string;
  descripcion: string;
  capacidad: number;
  encargado_limpieza: string;
  precio: number;
  cantidad_jabones: number;
  cantidad_toallas: number;
}

export default function CardBath3({ bano, userId }: { bano: Bano; userId: string | null }) {
  const router = useRouter();
  const supabase = createClient();
  const imageSrc = getImage(bano.id_baño, "bath");

  const [reservado, setReservado] = useState(false);
  const [reservaId, setReservaId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      verificarReserva(userId);
    }
  }, [userId]);

  // Verificar si el usuario tiene una reserva en este baño
  const verificarReserva = async (userId: string) => {
    const { data: reserva, error } = await supabase
      .from("reserva")
      .select("id_reserva")
      .eq("id_bano", bano.id_baño)
      .eq("id_usuario", userId)
      .maybeSingle();

    if (error) console.error("Error verificando reserva:", error);
    if (reserva) {
      setReservado(true);
      setReservaId(reserva.id_reserva);
    } else {
      setReservado(false);
      setReservaId(null);
    }
  };

  // Manejar reserva o cancelación
  const handleReserva = async () => {
    if (!userId) {
      alert("Debes iniciar sesión para reservar.");
      return;
    }

    setLoading(true);
    setError(null);

    if (reservado && reservaId) {
      // Llamar a la función almacenada `cancelar_reserva` en Supabase
      const { data, error } = await supabase.rpc("cancelar_reserva", {
        p_id_reserva: reservaId, // Pasar el ID de la reserva
      });

      if (error) {
        console.error("Error al cancelar la reserva:", error);
        setError(error.message || "No se pudo cancelar la reserva.");
      } else {
        alert(data); // Mostrar mensaje de éxito
        setReservado(false);
        setReservaId(null);
      }
    } else {
      // Si no tiene reserva, redirigir a la página de reserva
      router.push(`/banos/crear-reserva/${bano.id_baño}`);
    }

    setLoading(false);
  };

  return (
    <Card className="overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            alt={`Imagen del baño ${bano.nombre}`}
            className="size-full rounded-t-md object-cover md:rounded-l-md"
            src={imageSrc}
            height={300}
            width={400}
          />
        </div>
        <div className="flex flex-col md:w-3/4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{bano.nombre}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {bano.descripcion} Incluye: {bano.cantidad_toallas} toallas y{" "}
              {bano.cantidad_jabones} jabones
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Capacidad</h3>
              <p className="text-sm text-muted-foreground">
                {bano.capacidad} Espíritus
              </p>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">${bano.precio}</span>
              <span className="text-xs text-muted-foreground">/hora</span>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <Button
              onClick={handleReserva}
              className={reservado ? "bg-red-500" : "bg-primarybtn"}
              disabled={loading}
            >
              {loading ? "Cargando..." : reservado ? "Cancelar" : "Reservar"}
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
