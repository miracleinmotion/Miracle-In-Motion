import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-panel py-28">
      <div className="max-w-6xl mx-auto px-8">
        <p className="font-sans text-xs uppercase tracking-widest2 text-brass mb-4 text-center">
          Portfolio
        </p>
        <h2 className="font-display text-4xl mb-14 text-center">
          Selected Work
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category) => {
            // "More" points to the Contact section on this same page;
            // the others link out to their dedicated gallery pages.
            const isSamePage = category.href === "/contact";
            const href = isSamePage ? "#contact" : category.href;

            return (
              <div
                key={category.slug}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start">
                  <h3 className="font-display text-xl text-paper mb-3">
                    {category.title}
                  </h3>
                  {isSamePage ? (
                    <a
                      href={href}
                      className="font-sans text-xs uppercase tracking-widest2 text-paper border border-paper/60 px-4 py-2 hover:bg-paper hover:text-ink transition-colors"
                    >
                      {category.cta}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="font-sans text-xs uppercase tracking-widest2 text-paper border border-paper/60 px-4 py-2 hover:bg-paper hover:text-ink transition-colors"
                    >
                      {category.cta}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
