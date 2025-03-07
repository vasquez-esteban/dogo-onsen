import { inknut, inter } from "@/styles/fonts";
import type { Metadata } from "next";
import "../styles/globals.css";
import MainLayout from "./layouts/MainLayout";
import LenisScrollProvider from "./providers/lenis";
import { AuthProvider } from "@/context/AuthContext";

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
      <body className={`${inter.variable} ${inknut.variable} antialiased`}>
        <LenisScrollProvider>
          <AuthProvider>
          <MainLayout>{children}</MainLayout>
          </AuthProvider>
        </LenisScrollProvider>
      </body>
    </html>
  );
}
