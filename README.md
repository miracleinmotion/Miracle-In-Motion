# Miracle In Motion — Portfolio

Multi-page Next.js 14 (App Router) + TypeScript + Tailwind CSS site for
Miracle In Motion, a Brisbane-based videography/photography/editing service.
Structure modeled after createenvision.com per client feedback.

## Getting started

You'll need [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Site map

This is a **hybrid** structure: Home is one scrolling page, but the
portfolio galleries are separate pages you navigate to.

```
/                    Home — Hero, About, Portfolio (cards), Contact are all
                     sections on this one page (#about, #portfolio, #contact)
/portfolio/photo     Real photo gallery — filterable, with lightbox
/portfolio/video     Videography reel — placeholder until client sends links
/portfolio/editing   Editing reel — placeholder until client sends links
```

The nav's About/Portfolio/Contact links, the Services dropdown, and
"Book a Service" all point to `/#section` — this works whether you're
already on the homepage (jumps to the section) or on a gallery page
(navigates home, then scrolls once loaded).

Each portfolio card's "View" button in the Portfolio section links out to
its matching gallery page. The "More" card's button scrolls to the
Contact section instead, since there's no dedicated page for it.

## Structure

```
app/
  layout.tsx              # fonts, metadata, Nav + Footer shell
  page.tsx                # Home — composes the 4 sections below
  portfolio/
    photo/page.tsx
    video/page.tsx
    editing/page.tsx
components/
  Nav.tsx                  # nav using /#section links, Services dropdown, Book a Service CTA
  Footer.tsx
  PhotoGallery.tsx          # client component: category filter + lightbox
  VideoEmbed.tsx            # responsive iframe wrapper for YouTube/Vimeo
  sections/
    Hero.tsx                 # #top
    About.tsx                # #about
    Portfolio.tsx             # #portfolio — cards link out to gallery pages
    Contact.tsx               # #contact
lib/
  categories.ts             # the 4 portfolio card entries
  photography.ts            # photo category definitions + path helpers
  videos.ts                 # real video entries — see below
public/images/
  logo.png, pfp.jpg, bts.jpg
  slideshow/1-9.jpg          # hero background slides
  cards/{video,photo,editing,other}.jpg
  photography/{birthdays,concert,portrait,sports}/*.jpg   # 69 real photos
```

## Video content

`/portfolio/video` shows a "Previous Projects" grid from `videoEntries`
in `lib/videos.ts` (currently the 4 wedding/documentary/event videos the
client sent).

`/portfolio/editing` is split into two labeled groups, both from the same
file: `editingShortForm` (YouTube Shorts, 9:16) and `editingYouTube`
(standard 16:9). Add more entries the same way:

```ts
export const videoEntries: VideoEntry[] = [
  {
    title: "Brand Story — Example Co.",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
    // Vimeo: "https://player.vimeo.com/video/VIDEO_ID"
    vertical: true, // only for Shorts/Reels (9:16) — omit for normal 16:9
  },
];
```

If either `videoEntries` or both editing arrays are emptied out, that page
automatically falls back to the "reel coming soon" placeholder — no other
code changes needed.

**Note:** "Switchblade Serenade Reel" was originally an Instagram Reel
link. Embedding Instagram directly requires loading their external embed
script and is fragile if the post is edited or removed, so this uses the
YouTube Shorts mirror the client provided as a fallback instead. Worth
flagging to the client that it's pulling from YouTube, not Instagram.

The two "YouTube Content" entries in `editingYouTube` don't have titles
from the client yet — currently labeled "YouTube Content 1" / "2".

## Things still to finish

- **Contact form needs a Formspree endpoint set** — it's wired up (see
  below), just needs a real form ID plugged in before it'll actually send.
- **Two "YouTube Content" editing entries need real titles** — see note
  above, currently labeled generically.
- **Footer social links need real values** — Instagram/Facebook URLs and
  the Discord username are placeholders (see below).
- The photography gallery pulls photo counts from `lib/photography.ts` —
  if more photos are added to a category folder, update the `count` for
  that category to match.

## Footer social links

- Instagram and Facebook — open `components/Footer.tsx` and replace:
  ```ts
  const INSTAGRAM_URL = "https://instagram.com/REPLACE_WITH_HANDLE";
  const FACEBOOK_URL = "https://facebook.com/REPLACE_WITH_HANDLE";
  ```
- Discord — this one's a "click to copy" button, not a link (Discord
  doesn't have public profile URLs the same way). Open
  `components/DiscordCopyButton.tsx` and replace:
  ```ts
  const DISCORD_USERNAME = "REPLACE_WITH_DISCORD_USERNAME";
  ```
  Clicking the button copies that username to the clipboard and shows a
  "Copied!" tooltip for 2 seconds.

## Contact form (Formspree)

The form in `components/ContactForm.tsx` submits via
[Formspree](https://formspree.io) — no backend code needed on our end.

1. Sign up free at formspree.io.
2. Create a new form — it'll give you an endpoint like
   `https://formspree.io/f/xxxxaaaa`.
3. Open `components/ContactForm.tsx` and replace the placeholder:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";
   ```
4. That's it — submissions land in the Formspree dashboard and get
   emailed to whichever address you registered with. The free tier
   covers 50 submissions/month, which should be plenty to start.

The form shows a "Sending..." state while submitting, a thank-you message
on success, and an inline error message (with a fallback pointing to the
footer's contact details) if the request fails.

## Deploying (Vercel)

1. Push this to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Next.js — no config needed. Deploy.
4. Optional: add a custom domain under Project Settings → Domains.
