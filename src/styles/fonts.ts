import { Inknut_Antiqua, Poppins } from "next/font/google";

const inknut = Inknut_Antiqua({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inknut",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export { inknut, poppins };
