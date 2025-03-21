import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { FormSignup } from "./FormSignup";

export default function Page() {
  return (
    <>
      <h1>Desde ahora te llamarás...</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Regístrate para comenzar tu viaje hacia la paz y la serenidad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormSignup></FormSignup>
        </CardContent>
      </Card>
    </>
  );
}
