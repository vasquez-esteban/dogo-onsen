"use client";

import bathImg from "@/assets/bano1.webp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";

export default function CardBath() {
  const [includeSpecialSoaps, setIncludeSpecialSoaps] = useState(false);

  return (
    <Card className="overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            alt="Natural hot spring with blue water surrounded by rocks"
            className="size-full object-cover"
            src={bathImg}
            height={300}
            width={400}
          />
        </div>
        <div className="flex flex-col md:w-3/4">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Baño Curativo</CardTitle>
            <p className="text-sm text-muted-foreground">
              Indulge in a Memorable One-Time Romantic Dinner for Two (Incluye 3
              jabones y 2 toallas)
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Capacidad</h3>
                <p className="text-sm text-muted-foreground">4 Espíritus</p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="soaps"
                  checked={includeSpecialSoaps}
                  onCheckedChange={(checked) =>
                    setIncludeSpecialSoaps(checked as boolean)
                  }
                />
                <label
                  htmlFor="soaps"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Incluir Jabones Especiales ($15.000/Persona)
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">$105.000</span>
              <span className="text-xs text-muted-foreground">/hora</span>
            </div>
            <Button asChild className="bg-primarybtn">
              <a href="#">Reservar</a>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
