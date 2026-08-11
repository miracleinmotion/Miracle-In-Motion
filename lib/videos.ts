export type VideoEntry = {
  title: string;
  // Embeddable URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  embedUrl: string;
  // true for YouTube Shorts / Instagram Reels (9:16). Defaults to 16:9.
  vertical?: boolean;
};

// /portfolio/video — "Previous Projects"
export const videoEntries: VideoEntry[] = [
  {
    title: "Clark and Holly Wedding Recap",
    embedUrl: "https://www.youtube.com/embed/xxvfOTdq2g4",
  },
  {
    title: "Hardcore Culture Documentary",
    embedUrl: "https://www.youtube.com/embed/-dvsEHNGKoY",
  },
  {
    title: "Brisbane Ekka 2023 Recap",
    embedUrl: "https://www.youtube.com/embed/zl-_YA6kJsE",
  },
  {
    title: '"Brisbane Bombers" Mock TV Show Opener',
    embedUrl: "https://www.youtube.com/embed/sOmUW3eQvo8",
  },
];

// /portfolio/editing — "Previous Projects" → Short Form Content
// Note: "Switchblade Serenade Reel" was originally an Instagram Reel link
// (https://www.instagram.com/p/DbzGV0ATFzO/). Instagram embeds require
// loading Instagram's external embed script and are prone to breaking if
// the post is edited/removed, so this uses the YouTube Shorts mirror the
// client provided as a fallback instead — more reliable to embed directly.
export const editingShortForm: VideoEntry[] = [
  // {
  //   title: "Switchblade Serenade Reel",
  //   embedUrl: "https://www.instagram.com/p/DbzGV0ATFzO/",
  //   vertical: true,
  // },  
  {
    title: "PC Building",
    embedUrl: "https://www.youtube.com/embed/9NdkzWOm6eY",
    vertical: true,
  },
  {
    title: "Behind the Scenes Content",
    embedUrl: "https://www.youtube.com/embed/5WeINDGN0gs",
    vertical: true,
  },
  {
    title: "Gaming Reel 1",
    embedUrl: "https://www.youtube.com/embed/rqWVumU3jpc",
    vertical: true,
  },
  {
    title: "Gaming Reel 2",
    embedUrl: "https://www.youtube.com/embed/tbyh1n84k2g",
    vertical: true,
  },
  {
    title: "Gaming Reel 3",
    embedUrl: "https://www.youtube.com/embed/nqCKxKaQKd4",
    vertical: true,
  },
  {
    title: "Gaming Reel 4",
    embedUrl: "https://www.youtube.com/embed/Sb4WhKUIkdk",
    vertical: true,
  },
];

// /portfolio/editing — "Previous Projects" → YouTube Content
// The client didn't send titles for these two — update once you have them.
export const editingYouTube: VideoEntry[] = [
  {
    title: "YouTube Content 1",
    embedUrl: "https://www.youtube.com/embed/o8sy-phtW48",
  },
  {
    title: "YouTube Content 2",
    embedUrl: "https://www.youtube.com/embed/vfnyGU1l1-U",
  },
];
