"use client";

import { useState } from "react";

// Replace with the real Discord username
const DISCORD_USERNAME = "REPLACE_WITH_DISCORD_USERNAME";

export default function DiscordCopyButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. very old browser, non-HTTPS) — fail silently
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy Discord username"
      title={copied ? "Copied!" : `Copy Discord: ${DISCORD_USERNAME}`}
      className="w-8 h-8 border border-paper/30 rounded-full flex items-center justify-center text-paper/60 hover:text-brass hover:border-brass transition-colors relative"
    >
      {copied ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M20.3 4.9A18 18 0 0 0 15.7 3.4c-.2.4-.5.9-.7 1.3a16.7 16.7 0 0 0-5 0 8.8 8.8 0 0 0-.7-1.3 18 18 0 0 0-4.6 1.5C1.7 9 1 13 1.3 17a18 18 0 0 0 5.5 2.8c.4-.6.8-1.2 1.1-1.9-.6-.2-1.2-.5-1.8-.9l.4-.3c3.5 1.6 7.3 1.6 10.7 0l.4.3c-.6.4-1.2.7-1.8.9.3.7.7 1.3 1.1 1.9a18 18 0 0 0 5.5-2.8c.4-4.6-.8-8.6-2.9-12.1ZM8.7 14.6c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm6.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.8 2.2-1.9 2.2Z" />
        </svg>
      )}
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-paper text-ink text-xs px-2 py-1 whitespace-nowrap font-sans">
          Copied!
        </span>
      )}
    </button>
  );
}
