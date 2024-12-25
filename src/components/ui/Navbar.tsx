import navlogo from "@/assets/navlogo.webp";
import Image from "next/image";
import Link from "next/link";

const leftNavLinks = [
  { href: "/", label: "Home" },
  { href: "/banos", label: "Baños" },
];

const rightNavLinks = [
  { href: "/articulos", label: "Artículos" },
  { href: "/guia", label: "Guía" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between rounded-lg border p-4">
      <ul className="flex items-center space-x-6">
        {leftNavLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-blue-500">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Link href="/" className="flex size-6 items-center justify-center">
          <Image src={navlogo} alt="Company logo"></Image>
        </Link>
      </div>
      <ul className="flex items-center space-x-6 font-medium">
        {rightNavLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-blue-500">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/signup">
            <div className="flex size-4 cursor-pointer items-center justify-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H16C13.8783 30 11.8434 30.8429 10.3431 32.3431C8.84285 33.8434 8 35.8783 8 38V42"
                    stroke="#2E2E38"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 22C28.4183 22 32 18.4183 32 14C32 9.58172 28.4183 6 24 6C19.5817 6 16 9.58172 16 14C16 18.4183 19.5817 22 24 22Z"
                    stroke="#2E2E38"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
