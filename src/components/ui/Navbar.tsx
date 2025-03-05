"use client";
import { useAuth } from "./context/AuthProvider";
import navlogo from "@/assets/navlogo.webp";
import { LogIn, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "./SignOutButton";

const guestLinks = [
  { href: "/banos", label: "Baños" },
  { href: "/articulos", label: "Artículos" },
  { href: "/guia", label: "Guía" },
];

const adminLinks = [
  { href: "/admin/banos", label: "Baños" },
  { href: "/admin/articulos", label: "Artículos" },
  { href: "/admin/reserva", label: "Reserva" },
];

const clientLinks = [
  { href: "/banos", label: "Baños" },
  { href: "/articulos", label: "Artículos" },
  { href: "/guia", label: "Guía" },
];

const Navbar = () => {
  const { role, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center p-4">Cargando...</div>;
  }

  const displayLinks =
    role === "Admin" ? adminLinks : role === "Cliente" ? clientLinks : guestLinks;

  return (
    <div className="flex items-center justify-center">
      <nav className="fixed top-0 z-50 flex w-full max-w-[1200px] items-center justify-between p-4">
        {/* Logo y Rol */}
        <div className="flex size-12 items-center justify-center rounded-md bg-primarylight">
          <Link href={isAuthenticated ? "/" : "/signin"} title="Ir a la página principal">
          {role === "Admin" ? (
            <ShieldCheck className="size-6 text-primarybtn" />
          ) : (
            <Image src={navlogo} className="h-8 w-6" alt="Company logo" />
          )}
        </Link>
      </div>
        {/* Enlaces de navegación */}
        <ul className="mx-4 flex h-12 w-full items-center justify-center space-x-[3vw] rounded-md bg-primarylight">
          {displayLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="font-bold hover:text-primarybtn">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de autenticación */}
      <div className="flex h-12 w-20 items-center justify-center rounded-md bg-primarylight px-1">
        {isAuthenticated ? <SignOutButton /> : (
          <Link href="/signin">
            <div className="flex h-12 w-20 cursor-pointer items-center justify-center">
              <LogIn className="text-center font-bold" />
            </div>
          </Link>
        )}
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
