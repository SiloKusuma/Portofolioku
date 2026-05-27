"use client";

import { useState } from "react";

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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.063 2.063 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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
          <LinkedInIcon className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => openShare("email")}
          className={buttonClass}
          aria-label="Share via email"
          title="Share via email"
        >
          <MailIcon className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={copyLink}
          className={buttonClass}
          aria-label={copied ? "Link copied" : "Copy link"}
          title={copied ? "Link copied!" : "Copy link"}
        >
          <LinkIcon className="h-4 w-4" />
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
