"use client";

import { searchBano } from "@/actions/bathroom";
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
import { CalendarIcon, Loader2 } from "lucide-react";
import * as React from "react";
import { useFormStatus } from "react-dom";

const WidgetSeachBano = () => {
  return (
    <div className="flex flex-col gap-5 rounded-[44px] bg-primarylight p-[8vw]">
      <h2 className="h2-xl text-center">Reservar un Baño</h2>
      <p className="text-center">Descubre tu espacio perfecto para relajarte</p>
      <ReservationSearch></ReservationSearch>
    </div>
  );
};

const ReservationSearch = () => {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState("13:00");
  const [spirits, setSpirits] = React.useState("1");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  // Generar los rangos de tiempo de 8AM a 8PM
  const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const hour = i + 8;
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  async function handleSubmit(formData: FormData) {
    const result = await searchBano(formData);

    if (result?.success) {
      console.log(result.message);

      setDate(undefined);
      setTime("13:00");
      setSpirits("1");
    } else {
      console.log("Error Message");
      setErrorMessage(result?.message ?? null);
    }
  }

  return (
    <form action={handleSubmit}>
      <div className="space-y-4">
        {errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}
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
      </div>
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-4 w-full bg-primarybtn text-white"
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

export default WidgetSeachBano;
