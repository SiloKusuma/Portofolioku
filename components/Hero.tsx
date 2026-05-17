export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm text-neutral-400 mb-6 tracking-widest uppercase">
          Frontend Developer
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[0.9]">
          Marvin
          <br />
          Silo Kusuma
        </h1>
        <p className="mt-8 max-w-lg text-base text-neutral-500 leading-relaxed">
          Saya seorang frontend developer yang fokus membangun website modern,
          cepat, dan responsif dengan pengalaman pengguna yang exceptional.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white text-sm hover:bg-neutral-800 transition-colors"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-300 text-sm hover:border-black transition-colors"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
