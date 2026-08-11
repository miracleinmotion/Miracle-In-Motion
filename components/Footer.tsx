import DiscordCopyButton from "@/components/DiscordCopyButton";

export default function Footer() {
  // Replace these with the real profile URLs
  const INSTAGRAM_URL = "https://www.instagram.com/miraclemotionau/";
  const FACEBOOK_URL = "https://facebook.com/angelo.fontanilla.330/";

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
        <div>
          <p className="font-display text-lg mb-2">Miracle In Motion</p>
          <p className="font-sans text-xs text-paper/60">
            0423 782 883 &middot; QLD, 4076
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 border border-paper/30 rounded-full flex items-center justify-center text-paper/60 hover:text-brass hover:border-brass transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 border border-paper/30 rounded-full flex items-center justify-center text-paper/60 hover:text-brass hover:border-brass transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <DiscordCopyButton />
          </div>
        </div>

        <p className="font-sans text-xs text-paper/40">
          ABN: 31615298563
        </p>
      </div>
      <div className="border-t border-paper/10">
        <p className="max-w-6xl mx-auto px-8 py-5 font-sans text-xs text-paper/40">
          © {new Date().getFullYear()} Miracle In Motion.
        </p>
      </div>
    </footer>
  );
}
