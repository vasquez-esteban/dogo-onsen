import { inknut, poppins } from "@/styles/fonts";
import type { Metadata } from "next";
import "../styles/globals.css";
import LenisScrollProvider from "./providers/lenis";

export const metadata: Metadata = {
  title: "Dogo Onsen",
  description: "Proyecto de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inknut.variable} antialiased`}>
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
