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
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (menuRef.current) {
      setMaxHeight(open ? `${menuRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

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
    <nav className="sticky top-0 z-50 w-full bg-primary text-neutral-100 shadow-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between p-3">
        <Link href="/" className="text-sm font-semibold sm:text-sm md:text-2xl">
          Dr. med. <br className="lg:hidden" />
          Jens Dreesen
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-3 text-sm sm:flex sm:gap-6 sm:font-medium md:text-base lg:text-lg">
          {hasOOO && (
            <li>
              <Link href="#aktuelles" className="transition hover:text-accent">
                Aktuelles
              </Link>
            </li>
          )}
          <li>
            <Link href="#notfaelle" className="transition hover:text-accent">
              Notfälle
            </Link>
          </li>
          <li>
            <Link href="#sprechzeiten" className="transition hover:text-accent">
              Sprechzeiten
            </Link>
          </li>
          <li>
            <Link
              href="#ueber-mich"
              className="whitespace-nowrap transition hover:text-accent"
            >
              Über Mich
            </Link>
          </li>
          <li>
            <Link href="#kontakt" className="transition hover:text-accent">
              Kontakt
            </Link>
          </li>
        </ul>

        {/* Phone number (hidden on mobile) */}
        <p className="hidden text-sm whitespace-nowrap sm:block md:text-base">
          Tel. 04503 4444
        </p>

        {/* Hamburger (mobile) */}
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="z-50 p-2 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Menu
            className={`h-6 w-6 transition-transform duration-300 ${
              open ? "rotate-90 text-neutral-300" : "rotate-0 text-neutral-100"
            }`}
          />
        </button>

        {/* Mobile dropdown */}
        <div
          ref={menuRef}
          className={`absolute top-14 right-3 w-40 overflow-hidden rounded-lg bg-blue-950 shadow-md transition-all duration-300 ease-in-out sm:hidden ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          style={{ maxHeight }}
        >
          <ul className="flex flex-col font-medium">
            {hasOOO && (
              <li>
                <Link
                  href="#aktuelles"
                  onClick={handleLinkClick}
                  className="block w-full border-b border-neutral-700 p-3 hover:bg-blue-900"
                >
                  Aktuelles
                </Link>
              </li>
            )}
            <li>
              <Link
                href="#notfaelle"
                onClick={handleLinkClick}
                className="block w-full border-b border-neutral-700 p-3 hover:bg-blue-900"
              >
                Notfälle
              </Link>
            </li>
            <li>
              <Link
                href="#sprechzeiten"
                onClick={handleLinkClick}
                className="block w-full border-b border-neutral-700 p-3 hover:bg-blue-900"
              >
                Sprechzeiten
              </Link>
            </li>
            <li>
              <Link
                href="#ueber-mich"
                onClick={handleLinkClick}
                className="block w-full border-b border-neutral-700 p-3 hover:bg-blue-900"
              >
                Über Mich
              </Link>
            </li>
            <li>
              <Link
                href="#kontakt"
                onClick={handleLinkClick}
                className="block w-full p-3 hover:bg-blue-900"
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
