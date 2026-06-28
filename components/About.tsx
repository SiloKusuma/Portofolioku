export default function About() {
  const techLogos = [
    {
      name: "React",
      url: "https://reactjs.org/",
      img: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
    },
    {
      name: "Rust",
      url: "https://www.rust-lang.org/",
      img: "https://skillicons.dev/icons?i=rust",
    },
    {
      name: "Next.js",
      url: "https://nextjs.org/",
      img: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
    },
    {
      name: "C++",
      url: "https://en.cppreference.com/",
      img: "https://skillicons.dev/icons?i=cpp",
    },
  ];

  return (
    <section id="about" className="section-container">
      <p className="section-label animate-fade-up">About</p>
      <div className="mt-6 animate-fade-up delay-2">
        <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
          Halo, saya silokusuma.dev. Saya seorang frontend developer
          yang antusias dalam menciptakan antarmuka digital yang bersih,
          fungsional, dan nyaman digunakan.
        </p>
        <p className="mt-5 text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
          Saya percaya produk digital yang baik lahir dari kode yang
          terstruktur, perhatian terhadap detail, dan empati terhadap
          pengguna. Setiap baris kode adalah keputusan desain.
        </p>
      </div>

      <div className="mt-12 overflow-hidden animate-fade-up delay-4">
        <div className="flex gap-12 marquee-right">
          {[...techLogos, ...techLogos].map((logo, i) => (
            <a key={`${logo.name}-${i}`} href={logo.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
              <img src={logo.img} alt={logo.name} height={50} className="h-12 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
