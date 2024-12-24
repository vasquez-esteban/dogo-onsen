import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import FormReservationClient from "./FormReservation";

export default function Page() {
  return (
    <>
      <h1>Reserva Baño</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Diligencia el formulario para poder darte tu espacio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormReservationClient></FormReservationClient>
        </CardContent>
      </Card>
    </>
  );
}
