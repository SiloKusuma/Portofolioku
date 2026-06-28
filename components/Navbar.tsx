"use client";

const navItems = [
  { label: "Blog", href: "#blog" },
  { label: "Proyek", href: "#projects" },
  { label: "Tentang", href: "#about" },
  { label: "Teman", href: "/friends" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-6 px-3 sm:px-4 pointer-events-none">
      <div className="max-w-fit mx-auto pointer-events-auto">
        <div className="bg-black border-2 border-white/20 rounded-full px-4 sm:px-8 h-10 sm:h-14 flex items-center justify-center shadow-lg shadow-black/50">
          <ul className="flex items-center gap-3 sm:gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative text-[10px] sm:text-sm text-neutral-400 hover:text-white transition-colors duration-300 group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
