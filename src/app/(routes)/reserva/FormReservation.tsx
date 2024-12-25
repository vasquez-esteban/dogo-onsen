"use client";

import { createReservation } from "@/actions/reservation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import * as React from "react";
import { useFormStatus } from "react-dom";

export default function FormReservationClient() {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState("13:00");
  const [spirits, setSpirits] = React.useState("1");
  const [includeSpecialSoaps, setIncludeSpecialSoaps] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  // Generar los rangos de tiempo de 8AM a 8PM
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  async function handleSubmit(formData: FormData) {
    const result = await createReservation(formData);

    if (result?.success) {
      console.log(result.message);

      setDate(undefined);
      setTime("13:00");
      setSpirits("1");
      setIncludeSpecialSoaps(false);

      redirect("/");
    } else {
      console.log("Error Message");
      setErrorMessage(result?.message ?? null);
    }
  }

  return (
    <form action={handleSubmit}>
      <div className="space-y-4">
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        <div className="space-y-2">
          <Label htmlFor="date">Fecha:</Label>
          <Popover>
            {/* Datepicker from shadcn */}
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 size-4" />
                {date ? format(date, "dd/MM/yyyy") : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={es}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <input
            type="hidden"
            name="date"
            value={date ? date.toISOString() : ""}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Hora:</Label>
          <Select name="time" value={time} onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar hora" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="spirits">Espíritus:</Label>
          <Select name="spirits" value={spirits} onValueChange={setSpirits}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar cantidad" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="special-soaps"
            name="includeSpecialSoaps"
            checked={includeSpecialSoaps}
            onCheckedChange={(checked) =>
              setIncludeSpecialSoaps(checked as boolean)
            }
          />
          <label
            htmlFor="special-soaps"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Incluir Jabones Especiales ($15.000/Persona)
          </label>
        </div>

        <div className="rounded-md border px-4 py-2 text-center font-medium">
          $ 55.000 / Hora
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-4 w-full bg-gray-900 text-white hover:bg-gray-800"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Procesando...
        </>
      ) : (
        "Reservar"
      )}
    </Button>
  );
};
