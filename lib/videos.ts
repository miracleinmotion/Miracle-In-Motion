export type VideoEntry = {
  title: string;
  embedUrl: string;
  vertical?: boolean;
};

export type ReelEntry = {
  title: string;
  url: string;
};

export const videoEntries: VideoEntry[] = [
  { title: "Clark and Holly Wedding Recap", embedUrl: "https://www.youtube.com/embed/xxvfOTdq2g4" },
  { title: "Hardcore Culture Documentary", embedUrl: "https://www.youtube.com/embed/-dvsEHNGKoY" },
  { title: "Brisbane Ekka 2023 Recap", embedUrl: "https://www.youtube.com/embed/zl-_YA6kJsE" },
  { title: '"Brisbane Bombers" Mock TV Show Opener', embedUrl: "https://www.youtube.com/embed/sOmUW3eQvo8" },
];

export const editingReels: ReelEntry[] = [
  { title: "Switchblade Serenade Reel", url: "https://www.instagram.com/reel/DbzGV0ATFzO/" },
  { title: "BNL Recap Reel", url: "https://www.instagram.com/reel/DZYln5oIF_H/" },
];

export const editingShortForm: VideoEntry[] = [
  { title: "Formal Photography BTS", embedUrl: "https://www.youtube.com/shorts/760MApILeXE", vertical: true },
  { title: "PC Building", embedUrl: "https://www.youtube.com/embed/9NdkzWOm6eY", vertical: true },
  { title: "Concert Photography BTS", embedUrl: "https://www.youtube.com/embed/5WeINDGN0gs", vertical: true },
  { title: "Gaming Reel 1", embedUrl: "https://www.youtube.com/embed/rqWVumU3jpc", vertical: true },
  { title: "Gaming Reel 2", embedUrl: "https://www.youtube.com/embed/tbyh1n84k2g", vertical: true },
  { title: "Gaming Reel 3", embedUrl: "https://www.youtube.com/embed/nqCKxKaQKd4", vertical: true },
  { title: "Gaming Reel 4", embedUrl: "https://www.youtube.com/embed/Sb4WhKUIkdk", vertical: true },
];

export const editingYouTube: VideoEntry[] = [
  { title: "YouTube Content 1", embedUrl: "https://www.youtube.com/embed/o8sy-phtW48" },
  { title: "YouTube Content 2", embedUrl: "https://www.youtube.com/embed/vfnyGU1l1-U" },
];