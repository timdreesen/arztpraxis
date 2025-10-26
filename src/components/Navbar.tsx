"use client";

import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

type NavbarProps = {
  hasOOO: boolean;
};

export default function Navbar({ hasOOO }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (
        (menuRef.current && menuRef.current.contains(target)) ||
        (buttonRef.current && buttonRef.current.contains(target))
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md bg-primary text-neutral-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 relative">
        <Link href="/" className="text-sm font-semibold md:text-2xl sm:text-sm">
          Dr. med. <br className="lg:hidden" />
          Jens Dreesen
        </Link>

        <ul className="hidden text-sm sm:flex absolute left-1/2 -translate-x-1/2 gap-3 sm:gap-6  sm:font-medium lg:text-lg md:text-base">
          {hasOOO && (
            <li>
              <Link href="#aktuelles" className="hover:text-accent transition">
                Aktuelles
              </Link>
            </li>
          )}
          <li>
            <Link href="#notfaelle" className="hover:text-accent transition">
              Notfälle
            </Link>
          </li>
          <li>
            <Link href="#sprechzeiten" className="hover:text-accent transition">
              Sprechzeiten
            </Link>
          </li>
          <li>
            <Link
              href="#ueber-mich"
              className="hover:text-accent transition whitespace-nowrap"
            >
              Über Mich
            </Link>
          </li>
          <li>
            <Link href="#kontakt" className="hover:text-accent transition">
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Phone number (hidden on mobile) */}
        <p className="hidden sm:block text-sm md:text-base whitespace-nowrap">
          Tel. 04503 4444
        </p>

        {/* Hamburger (mobile) */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="sm:hidden p-2 z-50"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Menu
            className={`w-6 h-6 transition-transform duration-300 ${
              open ? "rotate-90 text-neutral-300" : "rotate-0 text-neutral-100"
            }`}
          />
        </button>

        {/* Mobile dropdown */}
        <div
          ref={menuRef}
          className={`absolute top-14 right-3 w-40 bg-blue-950 rounded-lg shadow-md sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            open
              ? "max-h-50 opacity-100 translate-y-0 pointer-events-auto"
              : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col font-medium">
            {hasOOO && (
              <li>
                <Link
                  href="#aktuelles"
                  onClick={handleLinkClick}
                  className="block w-full hover:bg-blue-900 p-3 border-b border-neutral-700"
                >
                  Aktuelles
                </Link>
              </li>
            )}
            <li>
              <Link
                href="#notfaelle"
                onClick={handleLinkClick}
                className="block w-full hover:bg-blue-900 p-3 border-b border-neutral-700"
              >
                Notfälle
              </Link>
            </li>
            <li>
              <Link
                href="#sprechzeiten"
                onClick={handleLinkClick}
                className="block w-full hover:bg-blue-900 p-3 border-b border-neutral-700"
              >
                Sprechzeiten
              </Link>
            </li>
            <li>
              <Link
                href="#ueber-mich"
                onClick={handleLinkClick}
                className="block w-full hover:bg-blue-900 p-3 border-b border-neutral-700"
              >
                Über Mich
              </Link>
            </li>
            <li>
              <Link
                href="#kontakt"
                onClick={handleLinkClick}
                className="block w-full hover:bg-blue-900 p-3"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
