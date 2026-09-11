"use client";

import { Star, GitFork, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "Miku-Miku",
    description: "Portal berita tentang anime, culture jepang",
    html_url: "https://mikumiku.karyasilo.web.id/",
    language: "PHP",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "PostQuily",
    description: "Aplikasi media sosial untuk berbagi cerita dan pengalaman",
    html_url: "https://postquily.web.id/",
    language: "PHP",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Jawa-Script-Language",
    description: "Bahasa pemrograman berbasis budaya Jawa yang unik dan edukatif.",
    html_url: "https://github.com/SiloKusuma/Jawa-Script-Language",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Invoice-Maker-Kosan",
    description: "Aplikasi pembuatan invoice otomatis untuk bisnis kos-kosan.",
    html_url: "https://github.com/SiloKusuma/Invoice-Maker-Kosan",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
];

const languageConfig: Record<string, { dot: string; badge: string }> = {
  JavaScript: { dot: "bg-yellow-400", badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/25" },
  Python: { dot: "bg-blue-500", badge: "bg-blue-500/10 text-blue-300 border-blue-500/25" },
  PHP: { dot: "bg-purple-500", badge: "bg-purple-500/10 text-purple-300 border-purple-500/25" },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const lang = project.language ? languageConfig[project.language] : null;

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { id, x, y }]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_-5px_rgba(255,255,255,0.05)] hover:bg-white hover:shadow-xl"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex items-start justify-between gap-4 relative z-10">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-bold border border-white/5 shrink-0 group-hover:bg-gray-300 group-hover:text-gray-800 transition-colors">
              {project.name.charAt(0).toUpperCase()}
            </div>
            <h3 className="font-bold text-white truncate group-hover:text-black transition-colors">
              {project.name}
            </h3>
          </div>
          {project.description && (
            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors">
              {project.description}
            </p>
          )}
        </div>
        <ExternalLink className="w-4 h-4 text-zinc-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:text-black transition-all" />
      </div>

      <div className="flex items-center gap-3 mt-4 relative z-10">
        {project.language && lang && (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${lang.badge} group-hover:bg-black/10 group-hover:text-black group-hover:border-gray-400 transition-all`}>
            <span className={`w-1.5 h-1.5 rounded-full ${lang.dot} group-hover:bg-gray-600`} />
            {project.language}
          </span>
        )}
        <span className="text-xs text-zinc-600 flex items-center gap-1 group-hover:text-gray-700 transition-colors">
          <Star className="w-3 h-3" />
          {project.stargazers_count}
        </span>
        {project.forks_count > 0 && (
          <span className="text-xs text-zinc-600 flex items-center gap-1 group-hover:text-gray-700 transition-colors">
            <GitFork className="w-3 h-3" />
            {project.forks_count}
          </span>
        )}
      </div>

      {/* Ripple Effect */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none bg-white/30"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
            animation: `ripple 0.6s ease-out`,
          }}
        />
      ))}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-container border-t border-neutral-900">
      <p className="section-label animate-fade-up">Projects</p>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
