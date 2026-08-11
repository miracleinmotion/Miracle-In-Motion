"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

type InstagramEmbedProps = {
  // Full post/reel URL, e.g. "https://www.instagram.com/reel/DbzGV0ATFzO/"
  url: string;
  caption?: string;
};

export default function InstagramEmbed({ url, caption }: InstagramEmbedProps) {
  // Re-process embeds whenever this component mounts — needed because
  // Instagram's script only scans the page once on load, so it won't
  // pick up embeds added later (e.g. via Next.js client-side navigation).
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "0 auto",
          maxWidth: 540,
          width: "100%",
        }}
      />
      {caption && (
        <p className="font-sans text-sm text-muted mt-3 text-center">
          {caption}
        </p>
      )}

      {/* next/script dedupes by src, so this only loads once even with
          multiple InstagramEmbed components on the same page. */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </div>
  );
}