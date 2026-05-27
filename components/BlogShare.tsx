"use client";

import { useState } from "react";
import { Linkedin, Mail, Link2 } from "lucide-react";

interface Props {
  title: string;
  excerpt?: string;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function BlogShare({ title, excerpt }: Props) {
  const [copied, setCopied] = useState(false);

  const getPageUrl = () => window.location.href;

  const openShare = (platform: "x" | "linkedin" | "email") => {
    const url = getPageUrl();

    if (platform === "x") {
      const shareUrl = new URL("https://twitter.com/intent/tweet");
      shareUrl.searchParams.set("url", url);
      shareUrl.searchParams.set("text", title);
      window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
      return;
    }

    if (platform === "linkedin") {
      const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
      shareUrl.searchParams.set("url", url);
      window.open(shareUrl.toString(), "_blank", "noopener,noreferrer");
      return;
    }

    const body = excerpt ? `${excerpt}\n\n${url}` : url;
    const mailUrl = new URL("mailto:");
    mailUrl.searchParams.set("subject", title);
    mailUrl.searchParams.set("body", body);
    window.location.href = mailUrl.toString();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getPageUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const input = document.createElement("input");
      input.value = getPageUrl();
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  const buttonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-black text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900";

  return (
    <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-wrap items-center gap-4">
      <span className="text-sm text-white">Share this post:</span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => openShare("x")}
          className={buttonClass}
          aria-label="Share on X"
          title="Share on X"
        >
          <XIcon className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => openShare("linkedin")}
          className={buttonClass}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={() => openShare("email")}
          className={buttonClass}
          aria-label="Share via email"
          title="Share via email"
        >
          <Mail className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <button
          type="button"
          onClick={copyLink}
          className={buttonClass}
          aria-label={copied ? "Link copied" : "Copy link"}
          title={copied ? "Link copied!" : "Copy link"}
        >
          <Link2 className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>

      {copied && (
        <span className="text-xs text-emerald-400" role="status">
          Link copied!
        </span>
      )}
    </div>
  );
}
