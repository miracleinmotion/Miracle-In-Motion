export type PhotoCategory = {
  slug: string;
  label: string;
  count: number;
};

// Update `count` if you add/remove photos from public/images/photography/<slug>/
export const photoCategories: PhotoCategory[] = [
  { slug: "birthdays", label: "Birthdays", count: 34 },
  { slug: "concert", label: "Concert", count: 17 },
  { slug: "portrait", label: "Portrait", count: 23 },
  { slug: "sports", label: "Sports", count: 8 },
];

// Builds the list of image paths for a category, e.g.
// /images/photography/birthdays/1.jpg ... /images/photography/birthdays/30.jpg
export function getPhotosForCategory(slug: string): string[] {
  const category = photoCategories.find((c) => c.slug === slug);
  if (!category) return [];
  return Array.from(
    { length: category.count },
    (_, i) => `/images/photography/${slug}/${i + 1}.jpg`
  );
}

export function getAllPhotos(): { src: string; category: string }[] {
  return photoCategories.flatMap((c) =>
    getPhotosForCategory(c.slug).map((src) => ({ src, category: c.slug }))
  );
}
