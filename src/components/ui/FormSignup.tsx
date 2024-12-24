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

export function FormSignup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 px-5", className)} {...props}>
      <div className="h-[200px] w-full bg-black"></div>
      <h1>Desde ahora te llamarás...</h1>
      <Card>
        <CardHeader>
          <CardDescription>
            Regístrate para comenzar tu viaje hacia la paz y la serenidad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" type="text" placeholder="Nombre" required />
              </div>
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
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/signin" className="underline underline-offset-4">
                Registrarse
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
