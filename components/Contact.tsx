export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-neutral-200">
      <h2 className="section-title">Contact</h2>
      <div className="max-w-lg">
        <p className="text-base text-neutral-500 mb-10 leading-relaxed">
          Punya pertanyaan atau mau bekerja sama? Hubungi saya melalui salah
          satu kontak di bawah ini.
        </p>
        <div className="space-y-6">
          <a
            href="https://wa.me/6281220136633"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="w-10 h-10 flex items-center justify-center border border-neutral-300 group-hover:border-black transition-colors text-sm">
              WA
            </span>
            <div>
              <p className="text-xs text-neutral-400">WhatsApp</p>
              <p className="text-sm text-black group-hover:underline">
                +62 812-2013-6633
              </p>
            </div>
          </a>
          <a
            href="mailto:silokusuma17@gmail.com"
            className="flex items-center gap-4 group"
          >
            <span className="w-10 h-10 flex items-center justify-center border border-neutral-300 group-hover:border-black transition-colors text-sm">
              @
            </span>
            <div>
              <p className="text-xs text-neutral-400">Email</p>
              <p className="text-sm text-black group-hover:underline">
                silokusuma17@gmail.com
              </p>
            </div>
          </a>
          <a
            href="https://github.com/SiloKusuma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className="w-10 h-10 flex items-center justify-center border border-neutral-300 group-hover:border-black transition-colors text-sm">
              GH
            </span>
            <div>
              <p className="text-xs text-neutral-400">GitHub</p>
              <p className="text-sm text-black group-hover:underline">
                github.com/SiloKusuma
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
