export default function VideoEmbed({
  id,
  title,
  startAt,
}: {
  id: string;
  title: string;
  startAt?: number;
}) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={`https://www.youtube.com/embed/${id}?start=${startAt || 0}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
