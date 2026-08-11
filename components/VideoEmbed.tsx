import { VideoEntry } from "@/lib/videos";

export default function VideoEmbed({ video }: { video: VideoEntry }) {
  return (
    <div>
      <div
        className={`relative bg-ink ${
          video.vertical ? "aspect-[9/16] max-w-xs mx-auto" : "aspect-video"
        }`}
      >
        <iframe
          src={video.embedUrl}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="font-sans text-sm text-muted mt-3 text-center">
        {video.title}
      </p>
    </div>
  );
}
