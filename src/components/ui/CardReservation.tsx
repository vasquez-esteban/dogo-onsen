import jabones from "@/assets/producto1.webp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const CardReservation = () => {
  const espiritu = "rojo";

  return (
    <div className="w-70 sm:w-auto">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Image src={jabones} alt="Imagen de jabones"></Image>
        </CardHeader>
        <CardContent>
          <CardTitle>Baño tradicional</CardTitle>
          <p>Reservado por: Espíritu {espiritu}</p>
          <p>3 mayo 2025</p>
          <p>Incluye Jabones</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardReservation;
