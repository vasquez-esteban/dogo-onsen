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

export default function EditBathForm() {
  const [state, action] = useActionState(updateBath, undefined);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Editar baño</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              placeholder="Nombre del baño"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Lorem ipsum dolor..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="capacity">Capacidad</Label>
            <Select name="capacity" defaultValue="1">
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
            <Label htmlFor="spiritType">Encargado de limpieza</Label>
            <Select name="spiritType" defaultValue="rojo">
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
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min="0"
              step="1000"
              placeholder="80000"
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
              placeholder="3"
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
              placeholder="4"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-gray-900">
            Editar
          </Button>

          {state?.message && (
            <p className="mt-2 text-sm text-green-600">{state.message}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
