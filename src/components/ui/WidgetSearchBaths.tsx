"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

const WidgetSearchBaths = () => {
  return (
    <div className="flex flex-col gap-5 rounded-[44px] bg-primarylight p-[8vw]">
      <h2 className="h2-xl text-center">Disponibilidad de baños</h2>
      <p className="text-center">Ver baños disponibles</p>
      <ReservationSearch></ReservationSearch>
    </div>
  );
};

const ReservationSearch = () => {
  const [date, setDate] = React.useState<Date | null>();
  const [time, setTime] = React.useState("13:00");
  const [spirits, setSpirits] = React.useState("1"); // Cambio: Se reemplaza type por spirits
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset error message
    setErrorMessage(null);

    // Validate inputs
    if (!date) {
      setErrorMessage("Por favor, selecciona una fecha.");
      return;
    }

    const params = new URLSearchParams();
    if (date) params.set("date", date.toISOString());
    if (time) params.set("time", time);
    if (spirits) params.set("spirits", spirits); // Cambio: Se usa spirits en lugar de type

    router.push(`/admin/reserva?${params.toString()}`);
  };

  const handleReset = () => {
    setDate(null);
    setTime("13:00");
    setSpirits("1"); // Cambio: Se resetea spirits en lugar de type
    router.push(`/admin/reserva`);
  };

  // Generar los rangos de tiempo de 8AM a 8PM
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        {errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
        <div className="space-y-2">
          <Label htmlFor="date">Fecha:</Label>
          <Popover>
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
                selected={date ?? undefined}
                onSelect={setDate}
                locale={es}
                initialFocus
              />
            </PopoverContent>
          </Popover>
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

        {/* Cambio: Reemplazar el selector de tipo de baño por cantidad de espíritus */}
        <div className="space-y-2">
          <Label htmlFor="spirits">Cantidad de Espíritus:</Label>
          <Select name="spirits" value={spirits} onValueChange={setSpirits}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar cantidad de espíritus" />
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
      </div>
      <div className="mt-4 flex space-x-2">
        <Button type="submit" className="w-full bg-primary text-white">
          Buscar
        </Button>
        <Button
          type="button"
          onClick={handleReset}
          className="w-full bg-primarybtn text-white"
        >
          Resetear
        </Button>
      </div>
    </form>
  );
};

export default WidgetSearchBaths;
