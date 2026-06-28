"use client";

import { Star, GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "rakitweb",
    description: "Website untuk membantu merakit PC impian dengan mudah dan cepat.",
    html_url: "https://github.com/SiloKusuma/rakitweb",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "PostQuily",
    description: "Aplikasi media sosial opensource",
    html_url: "https://github.com/SiloKusuma/web-craft",
    language: "PHP",
    stargazers_count: 1,
    forks_count: 0,
  },
  {
    name: "Jawa-Script-Language",
    description: "Bahasa pemrograman berbasis budaya Jawa yang unik dan edukatif.",
    html_url: "https://github.com/SiloKusuma/Jawa-Script-Language",
    language: "JavaScript",
    stargazers_count: 293,
    forks_count: 26,
  },
  {
    name: "Invoice-Maker-Kosan",
    description: "Aplikasi pembuatan invoice otomatis untuk bisnis kos-kosan.",
    html_url: "https://github.com/SiloKusuma/Invoice-Maker-Kosan",
    language: "Python",
    stargazers_count: 2,
    forks_count: 0,
  },
];

const languageConfig: Record<string, { dot: string; badge: string }> = {
  TypeScript: { dot: "bg-blue-400", badge: "bg-blue-500/10 text-blue-300 border-blue-500/25" },
  JavaScript: { dot: "bg-yellow-400", badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/25" },
  React: { dot: "bg-cyan-400", badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25" },
  Python: { dot: "bg-blue-500", badge: "bg-blue-500/10 text-blue-300 border-blue-500/25" },
  PHP: { dot: "bg-purple-500", badge: "bg-purple-500/10 text-purple-300 border-purple-500/25" },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const lang = project.language ? languageConfig[project.language] : null;

  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_30px_-5px_rgba(255,255,255,0.05)]"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 font-bold border border-white/5 shrink-0">
              {project.name.charAt(0).toUpperCase()}
            </div>
            <h3 className="font-bold text-white truncate group-hover:text-white/90 transition-colors">
              {project.name}
            </h3>
          </div>
          {project.description && (
            <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors">
              {project.description}
            </p>
          )}
        </div>
        <ExternalLink className="w-4 h-4 text-zinc-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex items-center gap-3 mt-4">
        {project.language && lang && (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${lang.badge}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${lang.dot}`} />
            {project.language}
          </span>
        )}
        <span className="text-xs text-zinc-600 flex items-center gap-1">
          <Star className="w-3 h-3" />
          {project.stargazers_count}
        </span>
        {project.forks_count > 0 && (
          <span className="text-xs text-zinc-600 flex items-center gap-1">
            <GitFork className="w-3 h-3" />
            {project.forks_count}
          </span>
        )}
      </div>
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
