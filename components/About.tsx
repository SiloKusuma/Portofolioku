export default function About() {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-base text-neutral-600 leading-relaxed">
            Halo! Saya Marvin Silo Kusuma, seorang frontend developer yang
            bersemangat dalam menciptakan pengalaman digital yang bersih,
            intuitif, dan modern.
          </p>
          <p className="mt-6 text-base text-neutral-600 leading-relaxed">
            Saya percaya bahwa kode yang baik adalah kode yang tidak hanya
            berfungsi, tetapi juga mudah dibaca dan dipelihara. Saya selalu
            berusaha untuk menulis kode yang bersih, terstruktur, dan mengikuti
            best practices industri.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-black mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-neutral-300 text-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
