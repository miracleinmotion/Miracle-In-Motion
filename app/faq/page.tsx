import { faqCategories } from "@/lib/faq";
import FaqAccordionItem from "@/components/FaqAccordionItem";

export const metadata = {
  title: "Info & FAQ — Miracle In Motion",
};

export default function FaqPage() {
  return (
    <div>
      <section className="bg-ink pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-6">
            Info &amp; FAQ
          </p>
          <h1 className="font-display italic text-5xl text-paper max-w-2xl">
            Everything you need to know.
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-20">
        {/* Category quick-links */}
        <div className="flex flex-wrap gap-3 justify-center mb-20">
          {faqCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="font-sans text-xs uppercase tracking-widest2 border border-line px-5 py-2 text-muted hover:border-ink hover:text-ink transition-colors"
            >
              {category.label}
            </a>
          ))}
        </div>

        {faqCategories.map((category) => (
          <div
            key={category.slug}
            id={category.slug}
            className="mb-20 scroll-mt-24 last:mb-0"
          >
            <h2 className="font-display text-2xl mb-2">{category.label}</h2>
            <div className="border-t border-line mt-6">
              {category.items.map((item) => (
                <FaqAccordionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}

        <div className="border-t border-line pt-16 text-center">
          <p className="font-sans text-muted mb-6">
            Still have a question?
          </p>
          <a
            href="/#contact"
            className="font-sans text-xs uppercase tracking-widest2 border border-ink text-ink px-6 py-4 hover:bg-ink hover:text-paper transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
