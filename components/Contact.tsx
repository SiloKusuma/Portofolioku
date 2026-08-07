const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SiloKusuma",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/silokusuma.bsky.social",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.526-2.833 8.922 4.897 5.06 6.73-1.1 7.686-4.32.957 3.22 2.05 9.382 7.686 4.32 4.267-6.09 1.19-8.342-2.833-8.922a23.84 23.84 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
      </svg>
    ),
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/SiloKusuma",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="m23.6 9.593-.033-.09L20.34.593a.851.851 0 0 0-.336-.405.865.865 0 0 0-.51-.088.883.883 0 0 0-.483.215l-4.711 4.99-4.425-4.99a.853.853 0 0 0-.672-.323.857.857 0 0 0-.671.323L.743 9.502a.847.847 0 0 0-.099.94l9.94 14.5a.85.85 0 0 0 .308.308.862.862 0 0 0 1.216 0 .847.847 0 0 0 .308-.308l3.84-5.61 3.84 5.61a.85.85 0 0 0 .308.308.862.862 0 0 0 1.216 0 .847.847 0 0 0 .308-.308l9.94-14.5a.845.845 0 0 0-.098-.94z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-neutral-900">
      <p className="section-label animate-fade-up">Contact</p>

      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 animate-fade-up delay-2">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white transition-opacity hover:opacity-80"
          >
            {link.icon}
            <span className="text-lg font-bold underline underline-offset-[6px] decoration-white">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10 text-base text-white animate-fade-up delay-4">
        Or mail me at{" "}
        <a
          href="mailto:silokusuma17@gmail.com"
          className="font-bold underline underline-offset-[6px] decoration-white hover:opacity-80 transition-opacity"
        >
          silokusuma17@gmail.com
        </a>
      </p>
    </section>
  );
}
