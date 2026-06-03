import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/NavLinks.ts";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-dark shadow-sm border-b-2 border-ember">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="text-lg md:text-xl tracking-tight font-playfair flex flex-col"
          >
            <span className="text-cream font-bold">De-Light Restro</span>{" "}
            <span className="text-gold font-DM-Sans font-normal">
              & Sekuwa Hub
            </span>
          </a>

          {/* Menu for Desktop */}
          <div className="hidden items-center gap-10 md:flex mb-2 border-gold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative border-b-2 border-transparent
           text-smoke text-sm font-DM-Sans uppercase
           hover:text-gold
           after:absolute after:left-0 after:bottom-0.5
           after:h-0.5 after:w-full
           after:bg-gold after:origin-left
           after:scale-x-0 after:transition-transform
           after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button variant={"reserve"} size={"lg"}>
            Reserve a Table
          </Button>

          {/* ------Mobile-------------- */}
          <button
            type="button"
            className="md:hidden text-cream"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu for mobile */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg px-3 py-2 text-smoke hover:bg-gray-100"
              >
                {link.name}
              </a>
            ))}

            <Button variant={"mobileReserve"} size={"lg"}>
              RESERVE A TABLE
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
