export type Category = {
  slug: string;
  title: string;
  image: string;
  href: string;
  cta: string;
};

// The 4 portfolio category cards shown on Home and /portfolio.
export const categories: Category[] = [
  { slug: "video", title: "Video", image: "/images/cards/video.jpg", href: "/portfolio/video", cta: "View" },
  { slug: "photo", title: "Photo", image: "/images/cards/photo.jpg", href: "/portfolio/photo", cta: "View" },
  { slug: "editing", title: "Editing", image: "/images/cards/editing.jpg", href: "/portfolio/editing", cta: "View" },
  { slug: "more", title: "More...", image: "/images/cards/other.jpg", href: "/contact", cta: "Contact" },
];
