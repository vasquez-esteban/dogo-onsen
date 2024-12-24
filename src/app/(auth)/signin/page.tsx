import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { FormSignin } from "./FormSignin";

export default function Page() {
  return (
    <>
      <h1>¡Bienvenido Viajero!</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Relájate y haz tu reserva para un descanso en el balneario del mundo
            espiritual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormSignin></FormSignin>
        </CardContent>
      </Card>
    </>
  );
}
