import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FormSingin({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 px-5", className)} {...props}>
      <div className="h-[200px] w-full bg-black"></div>
      <h1>¡Bienvenido Viajero!</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Relájate y haz tu reserva para un descanso en el balneario del mundo
            espiritual.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="user">Usuario</Label>
                <Input id="user" type="text" placeholder="Usuario" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿Aún no tienes cuenta?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Registrarse
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
