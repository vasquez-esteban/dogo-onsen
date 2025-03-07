"use client";

import { updateBath } from "@/actions/bathroom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";

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

export default function FormEditarBano({ bano }: { bano: Bano }) {
  const [state, action] = useActionState(updateBath, undefined);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Editar baño</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          {/* ID oculto para identificar el baño */}
          <input type="hidden" name="id_baño" value={bano.id_baño} />

          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              name="nombre"
              defaultValue={bano.nombre}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descripcion">Descripción</Label>
            <Textarea
              id="descripcion"
              name="descripcion"
              defaultValue={bano.descripcion}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="capacidad">Capacidad</Label>
            <Select name="capacidad" defaultValue={String(bano.capacidad)}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar capacidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 persona</SelectItem>
                <SelectItem value="2">2 personas</SelectItem>
                <SelectItem value="4">4 personas</SelectItem>
                <SelectItem value="6">6 personas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="encargado_limpieza">Encargado de limpieza</Label>
            <Select
              name="encargado_limpieza"
              defaultValue={bano.encargado_limpieza}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar espíritu" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rojo">Espíritu Rojo</SelectItem>
                <SelectItem value="azul">Espíritu Azul</SelectItem>
                <SelectItem value="verde">Espíritu Verde</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="precio">Precio</Label>
            <Input
              id="precio"
              name="precio"
              type="number"
              min="0"
              step="1000"
              defaultValue={bano.precio}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="soapCount">Jabones</Label>
            <Input
              id="soapCount"
              name="soapCount"
              type="number"
              min="0"
              defaultValue={bano.cantidad_jabones}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="towelCount">Toallas</Label>
            <Input
              id="towelCount"
              name="towelCount"
              type="number"
              min="0"
              defaultValue={bano.cantidad_toallas}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maintenance">Mantenimiento</Label>
            <Input id="maintenance" name="maintenance" type="checkbox" />
          </div>

          <Button type="submit" className="w-full bg-gray-900">
            Guardar cambios
          </Button>

          {state?.message && (
            <p className="mt-2 text-sm text-green-600">{state.message}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
