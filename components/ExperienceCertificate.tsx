"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const certificates = [
  {
    src: "/assets/dicoding-belajar-ai.png",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    description:
      "dasar dasar AI, machine learning dan deep learning",
  },
  {
    src: "/assets/dicoding-belajar-keuangan.png",
    title: "Belajar Dasar Keuangan",
    issuer: "Dicoding Indonesia",
    description:
      "tentang dasar dasar keuangan, manajemen keuangan",
  },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function ExperienceCertificate() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback((dir: number) => {
    setIndex(([prev]) => [
      (prev + dir + certificates.length) % certificates.length,
      dir,
    ]);
  }, []);

  const goTo = (i: number) => {
    setIndex(([prev]) => [i, i > prev ? 1 : -1]);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paused, paginate]);

  const active = certificates[index];

  return (
    <section
      id="experience-certificate"
      className="section-container border-t border-neutral-900"
    >
      <div className="flex items-end justify-between gap-6 animate-fade-up">
        <div>
          <p className="section-label">Experience Certificate</p>
          <p className="mt-3 text-sm text-neutral-500 max-w-md">
            Sertifikat kompetensi yang saya peroleh dari program pelatihan.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => paginate(-1)}
            aria-label="Sertifikat sebelumnya"
            className="h-11 w-11 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-300 flex items-center justify-center transition-all hover:border-neutral-600 hover:text-white hover:bg-neutral-800"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Sertifikat berikutnya"
            className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center transition-all hover:bg-neutral-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="relative mt-10 animate-fade-up delay-2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto max-w-xl overflow-hidden">
          <div className="relative aspect-[16/10]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
            <Award size={14} className="text-neutral-300" />
            <span className="text-[11px] font-medium tracking-wide text-neutral-200">
              {index + 1} / {certificates.length}
            </span>
          </div>

          <button
            onClick={() => paginate(-1)}
            aria-label="Sertifikat sebelumnya"
            className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-neutral-800 bg-black/70 text-neutral-200 flex items-center justify-center backdrop-blur-md transition-colors hover:bg-black"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Sertifikat berikutnya"
            className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-neutral-800 bg-black/70 text-neutral-200 flex items-center justify-center backdrop-blur-md transition-colors hover:bg-black"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mx-auto mt-8 max-w-xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                Sertifikat Kompetensi — {active.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                {active.issuer}
              </p>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5">
          {certificates.map((cert, i) => (
            <button
              key={cert.src}
              onClick={() => goTo(i)}
              aria-label={`Lihat sertifikat ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-white"
                  : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
