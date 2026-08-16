# Miracle In Motion — Portfolio

Multi-page Next.js 14 (App Router) + TypeScript + Tailwind CSS site for
Miracle In Motion, a Brisbane-based videography/photography/editing service.
Structure modeled after createenvision.com per client feedback.

**Status: live and content-complete.** Deployed on Vercel. Remaining
items are listed under "Still open" below.

## Getting started

You'll need [Node.js](https://nodejs.org/) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scope: what's a quick edit vs. what needs real dev work

This README assumes **you're** the one making updates when the client
sends new content — he's not editing code directly.

**Quick edit — just adding data to an existing file, no new code:**
- More photos in an existing category (Birthdays/Concert/Portrait/Sports)
- More videos/reels in an existing group (`videoEntries`, `editingReels`,
  `editingShortForm`, `editingYouTube`)
- Swapping the Formspree endpoint, footer social links, Discord username,
  the logo file, video titles — anything that's a placeholder value

**Real dev work — needs actual new code, not just data entry:**
- A brand new photo category (not one of the 4 that already exist) —
  needs a new folder, a new filter tab, a new `photoCategories` entry
- A brand new section on the Editing page beyond Reels/Shorts/YouTube
  Content (e.g. a "Before & After" section)
- Any new page, new nav item, or structural/layout change

## Site map

This is a **hybrid** structure: Home is one scrolling page, but the
portfolio galleries are separate pages you navigate to.

```
/                    Home — Hero, About, Portfolio (cards), Contact are all
                     sections on this one page (#about, #portfolio, #contact)
/portfolio/photo     Real photo gallery — filterable, with lightbox
/portfolio/video     Videography — 4 real embedded videos
/portfolio/editing   Editing — 3 sections: Reels, Shorts, YouTube Content
```

The nav's About/Portfolio/Contact links, the Services dropdown, and
"Book a Service" all point to `/#section` — this works whether you're
already on the homepage (jumps to the section) or on a gallery page
(navigates home, then scrolls once loaded).

Below the `sm` breakpoint, the nav collapses into a hamburger menu
(`components/Nav.tsx`) — full links, Services list, and Book a Service
are all shown stacked in a dropdown panel instead of the desktop's
inline layout.

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
  Nav.tsx                  # nav using /#section links, Services dropdown,
                            # Book a Service CTA, mobile hamburger menu
  Footer.tsx                # brand info + Instagram/Facebook/Discord links
  DiscordCopyButton.tsx      # click-to-copy Discord username button
  ContactForm.tsx            # Formspree-connected contact form
  PhotoGallery.tsx            # client component: category filter + lightbox
  VideoEmbed.tsx               # responsive iframe wrapper for YouTube
  InstagramEmbed.tsx            # real Instagram Reel embed (embed.js)
  sections/
    Hero.tsx                 # #top — slideshow, letterboxed on mobile
    About.tsx                # #about
    Portfolio.tsx             # #portfolio — cards link out to gallery pages
    Contact.tsx               # #contact
lib/
  categories.ts             # the 4 portfolio card entries
  photography.ts            # photo category definitions + path helpers
  videos.ts                 # real video/reel entries — see below
public/images/
  logo.png                  # transparent-background version
  pfp.jpg, bts.jpg
  slideshow/1-9.jpg          # hero background slides
  cards/{video,photo,editing,other}.jpg
  photography/{birthdays,concert,portrait,sports}/*.jpg   # 69 real photos
```

## Video content

`/portfolio/video` shows a "Previous Projects" grid from `videoEntries`
in `lib/videos.ts` — the 4 wedding/documentary/event videos the client
sent.

`/portfolio/editing` is split into **three** labeled sections, all from
the same file:
- `editingReels` — real Instagram embeds, rendered via
  `components/InstagramEmbed.tsx`. Kept in their own section since
  Instagram's embed UI (profile header, like/comment icons, "View on
  Instagram" link) is a different shape than a plain video and doesn't
  fit the same grid as the others.
- `editingShortForm` — YouTube Shorts, rendered at 9:16
- `editingYouTube` — standard 16:9 YouTube videos

Add more entries the same way:

```ts
export const videoEntries: VideoEntry[] = [
  {
    title: "Brand Story — Example Co.",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
    vertical: true, // only for Shorts (9:16) — omit for normal 16:9
  },
];

export const editingReels: ReelEntry[] = [
  {
    title: "Some Reel",
    url: "https://www.instagram.com/reel/XXXX/",
  },
];
```

If `videoEntries` or all three editing arrays are emptied out, that page
automatically falls back to a "reel coming soon" placeholder — no other
code changes needed.

## Contact form (Formspree)

The form in `components/ContactForm.tsx` submits via
[Formspree](https://formspree.io) — connected and confirmed working.
Shows a "Sending..." state while submitting, a thank-you message on
success, and an inline error message on failure.

To change the destination email or add a Discord notification for new
submissions, use Formspree's dashboard → your form → Workflow tab →
Actions — no code changes needed for either.

## Still open

- **Two "YouTube Content" editing entries need real titles** — currently
  labeled generically "YouTube Content 1" / "2" in `lib/videos.ts`,
  waiting on the client.
- **Custom domain not yet connected** — site is live on the default
  Vercel URL; the client's purchased domain still needs to be pointed at
  it (see Deploying section below).
- **Ownership transfer to the client** — currently hosted under your
  GitHub/Vercel accounts; plan is to transfer both to the client's own
  accounts once he's signed off, then get re-added as a collaborator so
  you can keep pushing updates.
- **Discord notifications for form submissions** — optional, discussed
  but not yet set up (needs a webhook from the client's Discord server).
- **Final client review** — hasn't formally walked through the live site
  yet.

## Deploying (Vercel)

1. Push this to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Next.js — no config needed. Deploy.
4. To connect a custom domain: Project Settings → Domains → add the
   domain → set the DNS records Vercel gives you at wherever the domain
   was purchased → wait for propagation (usually minutes, rarely up to
   24-48h).

### Transferring ownership to the client

1. GitHub repo → Settings → Danger Zone → Transfer ownership → his
   GitHub username → he accepts via email.
2. Vercel project → Settings → Transfer Project → his account/team → he
   accepts.
3. Reconnect the custom domain under his now-owned Vercel project if it
   doesn't carry over automatically.
4. Ask him to add you back as a Collaborator on the repo so your local
   `git push` keeps working the same as before.