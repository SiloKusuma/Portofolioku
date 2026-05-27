export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-neutral-900">
      <p className="section-label animate-fade-up">Contact</p>
      <p className="text-sm text-neutral-600 mb-12 max-w-md leading-relaxed mt-6 animate-fade-up delay-2">
        Ingin ngobrol, kolaborasi, atau sekadar bertanya? Temukan saya di salah
        satu platform berikut.
      </p>
      <div className="grid sm:grid-cols-3 gap-3 animate-fade-up delay-4">
        <a
          href="https://wa.me/6281220136633"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 border border-neutral-900 hover:bg-neutral-900/50 hover:border-neutral-600 transition-all"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-2 group-hover:text-neutral-400 transition-colors">
            WhatsApp
          </p>
          <p className="text-sm text-white group-hover:underline">
            +62 812-2013-6633
          </p>
        </a>
        <a
          href="mailto:silokusuma17@gmail.com"
          className="group p-5 border border-neutral-900 hover:bg-neutral-900/50 hover:border-neutral-600 transition-all"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-2 group-hover:text-neutral-400 transition-colors">
            Email
          </p>
          <p className="text-sm text-white group-hover:underline break-all">
            silokusuma17@gmail.com
          </p>
        </a>
        <a
          href="https://github.com/SiloKusuma"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 border border-neutral-900 hover:bg-neutral-900/50 hover:border-neutral-600 transition-all"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-700 mb-2 group-hover:text-neutral-400 transition-colors">
            GitHub
          </p>
          <p className="text-sm text-white group-hover:underline">
            @SiloKusuma
          </p>
        </a>
      </div>
    </section>
  );
}
