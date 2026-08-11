import PhotoGallery from "@/components/PhotoGallery";

export const metadata = {
  title: "Photography — Miracle In Motion",
};

export default function PhotoPortfolioPage() {
  return (
    <div>
      <section className="bg-ink pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-6">
            Portfolio
          </p>
          <h1 className="font-display italic text-5xl text-paper max-w-2xl">
            Photography
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <PhotoGallery />
      </section>
    </div>
  );
}
