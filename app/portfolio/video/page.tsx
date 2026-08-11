import Link from "next/link";
import { videoEntries } from "@/lib/videos";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata = {
  title: "Videography — Miracle In Motion",
};

export default function VideoPortfolioPage() {
  return (
    <div>
      <section className="bg-ink pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-6">
            Portfolio
          </p>
          <h1 className="font-display italic text-5xl text-paper max-w-2xl">
            Videography
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-24">
        {videoEntries.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl mb-4">Reel coming soon.</p>
            <p className="font-sans text-muted max-w-md mx-auto mb-8">
              Videography footage is being edited and will be added here
              once it&apos;s ready — in the meantime, get in touch to see
              recent work directly.
            </p>
            <Link
              href="/#contact"
              className="font-sans text-xs uppercase tracking-widest2 border border-ink px-6 py-4 hover:bg-ink hover:text-paper transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        ) : (
          <>
            <h2 className="font-display text-3xl mb-10 text-center">
              Previous Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              {videoEntries.map((video) => (
                <VideoEmbed key={video.title} video={video} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
