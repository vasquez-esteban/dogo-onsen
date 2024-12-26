import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import FormEditarArticulo from "./FormEditarArticulo";

export default function Page() {
  const cantidadActual = 10;

  return (
    <>
      <h1>Editar Artículo</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Cantidad actual disponible: {cantidadActual}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormEditarArticulo></FormEditarArticulo>
        </CardContent>
      </Card>
    </>
  );
}
