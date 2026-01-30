"use client";

import { useState } from "react";
import { NavLink } from "../NavLink";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center bg-violet-300 h-14 mt-3 rounded-2xl w-full lg:max-w-6xl lg:mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <img src="/main_logo.png" alt="Logo" className="h-10 sm:h-16 w-auto" />
        <h1 className="text-white relative right-3 text-lg sm:text-2xl font-extrabold">
          Violet Cycle
        </h1>
      </div>

      {/* Mobile button */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Menu desktop */}
      <ul className="hidden sm:flex gap-6">
        <NavLink href="/" name="Home" />
        <NavLink href="/contacts" name="Contacts" />
        <NavLink href="/dashboard" name="Dashboard" />
      </ul>

      {/* Menu mobile */}
      {open && (
        <ul className="sm:hidden absolute top-full mt-2 right-2 rounded-2xl w-45 bg-violet-300 shadow-md border-t border-violet-400 flex flex-col gap-3 p-4">
          <NavLink href="/" name="Home" />
          <NavLink href="/contacts" name="Contacts" />
          <NavLink href="/dashboard" name="Dashboard" />
        </ul>
      )}
    </nav>
  );
}
