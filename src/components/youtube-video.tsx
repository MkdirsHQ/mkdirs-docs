interface YoutubeVideoProps {
  url: string;
  title?: string;
}

export function YoutubeVideo({
  url,
  title = 'YouTube video player',
}: YoutubeVideoProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border bg-fd-card shadow-sm">
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="aspect-video w-full"
      />
    </div>
  );
}
