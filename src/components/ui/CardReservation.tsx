import jabones from "@/assets/producto1.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Reserva {
  id_reserva: number;
  fecha: string;
  hora: string;
  cantidad_espiritu: number;
  jabon_especial: boolean;
  id_usuario: number;
  id_baño: number;
}

const CardReservation = ({ reserva }: { reserva: Reserva }) => {
  return (
    <div className="w-70 sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Image src={jabones} alt="Imagen de jabones" layout="responsive" />
        </CardHeader>
        <CardContent>
          <CardTitle>Reserva #{reserva.id_reserva}</CardTitle>
          <p>Reservado por usuario ID</p>
          <p>{reserva.id_usuario}</p>
          <p>En baño: {reserva.id_baño}</p>
          <p>
            Fecha: {reserva.fecha} Hora: {reserva.hora}
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
