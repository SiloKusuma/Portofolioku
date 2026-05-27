"use client";

import { useState } from "react";

const navItems = [
  { label: "Blog", href: "#blog" },
  { label: "Proyek", href: "#projects" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 md:pt-6 px-4 pointer-events-none">
      <div className="max-w-fit mx-auto pointer-events-auto">
        <div className="bg-black border-2 border-white/20 rounded-full px-8 h-12 md:h-14 flex items-center justify-center gap-2 shadow-lg shadow-black/50">
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-sm text-neutral-400 hover:text-white transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-[1.5px] bg-neutral-400 transition-all" />
              <span className="block w-6 h-[1.5px] bg-neutral-400 transition-all" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden max-w-fit mx-auto mt-2 pointer-events-auto">
          <div className="bg-black border-2 border-white/20 rounded-2xl px-6 py-5 space-y-4 shadow-lg shadow-black/50">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
