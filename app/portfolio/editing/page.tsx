import Link from "next/link";
import { editingReels, editingShortForm, editingYouTube } from "@/lib/videos";
import VideoEmbed from "@/components/VideoEmbed";
import InstagramEmbed from "@/components/InstagramEmbed";

export const metadata = {
  title: "Editing — Miracle In Motion",
};

export default function EditingPortfolioPage() {
  const hasContent =
    editingReels.length > 0 ||
    editingShortForm.length > 0 ||
    editingYouTube.length > 0;

  return (
    <div>
      <section className="bg-ink pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-6">
            Portfolio
          </p>
          <h1 className="font-display italic text-5xl text-paper max-w-2xl">
            Editing
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-24">
        {!hasContent ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl mb-4">Reel coming soon.</p>
            <p className="font-sans text-muted max-w-md mx-auto mb-8">
              Editing samples are being finalized and will be added here
              shortly — in the meantime, get in touch to see recent work
              directly.
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
            <h2 className="font-display text-3xl mb-16 text-center">
              Previous Projects
            </h2>

            {editingReels.length > 0 && (
              <div className="mb-24">
                <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-10 text-center">
                  Reels
                </p>
                <div className="flex flex-wrap justify-center gap-10">
                  {editingReels.map((reel) => (
                    <div key={reel.title} className="w-full max-w-sm">
                      <InstagramEmbed url={reel.url} caption={reel.title} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {editingShortForm.length > 0 && (
              <div className="mb-24">
                <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-10 text-center">
                  Shorts
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                  {editingShortForm.map((video) => (
                    <VideoEmbed key={video.title} video={video} />
                  ))}
                </div>
              </div>
            )}

            {editingYouTube.length > 0 && (
              <div>
                <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-10 text-center">
                  YouTube Content
                </p>
                <div className="grid sm:grid-cols-2 gap-10">
                  {editingYouTube.map((video) => (
                    <VideoEmbed key={video.title} video={video} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}