import { Inknut_Antiqua, Inter } from "next/font/google";

const inknut = Inknut_Antiqua({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inknut",
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export { inknut, inter };
