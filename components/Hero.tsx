"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-28">
      <div className="max-w-3xl mx-auto w-full">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-700 mb-8 animate-fade-up">
          Software Engineer
        </p>

        <h1 className="text-[clamp(3.5rem,15vw,10rem)] font-bold tracking-tight text-white leading-[0.82] -ml-[0.03em] animate-fade-up delay-2">
          Silo
          <br />
          Kusuma
        </h1>

        <div className="mt-10 space-y-5 text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl animate-fade-up delay-4">
          <p>
            Halo! Saya <strong className="font-semibold text-white">Silo Kusuma</strong>,
            seorang <strong className="font-semibold text-white">Software Engineer</strong> yang antusias dengan dunia teknologi dan pengembangan perangkat lunak.
          </p>
          <p>
            Saya percaya bahwa{" "}
            <strong className="font-semibold text-white">sistem yang baik</strong>{" "}
            adalah perpaduan antara kode dan logika. Setiap
            antarmuka yang saya bangun selalu mengutamakan{" "}
            <strong className="font-semibold text-white">
              pengalaman pengguna
            </strong>
            , performa, dan perhatian terhadap detail.
          </p>
          <p>
            Saat ini saya fokus membangun aplikasi web modern menggunakan beberapa framework{" "}
            <strong className="font-semibold text-white">React</strong>,{" "}
            <strong className="font-semibold text-white">Next.js</strong>,{" "}
            <strong className="font-semibold text-white">Tailwind</strong>,{" "}
            <strong className="font-semibold text-white">TypeScript</strong>, dan berbagai teknologi lainnya
            — dari frontend hingga backend.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 animate-fade-up delay-6">
          <a
            href="#projects"
            className="inline-flex h-11 items-center px-6 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:-translate-y-1"
          >
            Lihat karya &rarr;
          </a>
          <a
            href="mailto:silokusuma17@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center px-6 text-sm text-neutral-500 border border-neutral-800 hover:text-white hover:border-neutral-500 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:-translate-y-1"
          >
            Hubungi saya
          </a>
        </div>
      </div>
    </section>
  );
}
