"use client";

import { useState } from "react";

export default function ExperienceCertificate() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="experience-certificate" className="section-container border-t border-neutral-900">
      <p className="section-label animate-fade-up">Experience Certificate</p>
      <div className="mt-6 animate-fade-up delay-2 flex justify-center">
        <div
          className="cursor-pointer"
          style={{ perspective: "1000px", width: "100%", maxWidth: "420px" }}
          onClick={() => setFlipped(!flipped)}
        >
          <div
            className="relative transition-transform duration-700 ease-in-out"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center top",
              transform: flipped ? "rotateX(-180deg)" : "rotateX(0deg)",
            }}
          >
            <div style={{ backfaceVisibility: "hidden" }}>
              <img
                src="/assets/dicoding-belajar-ai.png"
                alt="Dicoding Belajar AI Certificate"
                className="rounded-2xl w-full shadow-lg"
              />
            </div>
            <div
              className="absolute inset-0 rounded-2xl bg-zinc-900/95 border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg"
              style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
            >
              <h3 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                Sertifikat Kompetensi Dicoding - Belajar Dasar AI
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                yang saya pelajari adalah dasar dasar AI, konsep dasar AI, dan machine learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
