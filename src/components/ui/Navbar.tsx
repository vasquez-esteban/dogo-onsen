import { getUserRole } from "@/actions/auth";
import navlogo from "@/assets/navlogo.webp";
import { LogIn, ShieldCheck, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton } from "./SignOutButton";

const navLinks = [
  { href: "/banos", label: "Baños" },
  { href: "/articulos", label: "Artículos" },
  { href: "/guia", label: "Guía" },
];

const adminLinks = [
  { href: "/admin/banos", label: "Baños" },
  { href: "/admin/articulos", label: "Artículos" },
  { href: "/admin/reserva", label: "Reserva" },
];

const Navbar = async () => {
  const rol = await getUserRole();

  // Determine which links to show based on role
  const isAdmin = rol === "Admin";
  const displayLinks = isAdmin ? [...adminLinks] : navLinks;

  return (
    <div className="flex items-center justify-center">
      <nav className="fixed top-0 z-50 flex w-full max-w-[1200px] items-center justify-between p-4">
        <div className="flex size-12 items-center justify-center rounded-md bg-primarylight">
          {rol ? (
            isAdmin ? (
              <Link href="/">
                <ShieldCheck className="size-6 text-primarybtn" />
              </Link>
            ) : (
              <Link href="/">
                <User className="size-6 text-primarybtn" />
              </Link>
            )
          ) : (
            <Link href={"/signin"}>
              <Image
                src={navlogo || "/placeholder.svg"}
                className="h-8 w-6"
                alt="Company logo"
              />
            </Link>
          )}
        </div>

        {/* Navigation Links */}

        <ul className="mx-4 flex h-12 w-full items-center justify-center space-x-[3vw] rounded-md bg-primarylight">
          {displayLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-bold hover:text-primarybtn"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Authentication Button */}
        <div className="flex h-12 w-20 items-center justify-center rounded-md bg-primarylight px-1">
          {rol ? (
            <div className="flex items-center gap-2">
              <SignOutButton />
            </div>
          ) : (
            <Link href="/signin">
              <div className="flex h-12 w-20 cursor-pointer items-center justify-center">
                <div className="flex text-center font-bold">
                  <LogIn></LogIn>
                </div>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
