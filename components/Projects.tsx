"use client";

import { useEffect, useState } from "react";
import { getRepos, type GitHubRepo } from "@/lib/github";

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepos().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="projects" className="section-container border-t border-neutral-200">
      <h2 className="section-title">Projects</h2>
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 bg-neutral-100 animate-pulse" />
          ))}
        </div>
      ) : repos.length === 0 ? (
        <p className="text-neutral-500">Belum ada project yang ditampilkan.</p>
      ) : (
        <div className="space-y-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-neutral-200 hover:border-black transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-black group-hover:underline">
                    {repo.name}
                  </h3>
                  {repo.description && (
                    <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  {repo.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {repo.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-600"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4 shrink-0 text-xs text-neutral-400">
                  {repo.language && (
                    <span>{repo.language}</span>
                  )}
                  <span>★ {repo.stargazers_count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
