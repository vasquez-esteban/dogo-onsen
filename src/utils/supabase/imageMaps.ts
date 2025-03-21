import Aceite from "@/assets/aceite.webp";
import bano1 from "@/assets/bano1.webp";
import bano2 from "@/assets/bano2.webp";
import bano3 from "@/assets/bano3.webp";
import bano4 from "@/assets/bano4.webp";
import bano5 from "@/assets/bano5.webp";
import Escencias from "@/assets/escencias.webp";
import Jabon from "@/assets/jabon.webp";
import JabonEspecial from "@/assets/jabonEspecial.webp";
import Toallas from "@/assets/toallas.webp";
import Velas from "@/assets/velas.webp";
import { StaticImageData } from "next/image";

const imageProd: Record<number, StaticImageData> = {
  1: JabonEspecial,
  2: Jabon,
  3: Toallas,
  4: Aceite,
  5: Escencias,
  6: Velas,
};

const imageBano: Record<number, StaticImageData> = {
  1: bano1,
  2: bano2,
  3: bano3,
  4: bano4,
  5: bano5,
};

// Función para obtener la imagen correcta
export function getImage(
  id: number,
  type: "product" | "bath",
  defaultSrc = "/assets/default.webp"
) {
  if (type === "product") {
    return imageProd[id] || defaultSrc;
  } else if (type === "bath") {
    return imageBano[id] || defaultSrc;
  }
  return defaultSrc;
}
