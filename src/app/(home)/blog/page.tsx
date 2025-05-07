import { blog } from '@/lib/source';
import Link from 'next/link';

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

  return (
    <main className="container max-sm:px-0 md:py-12">
      <div
        className="p-8"
        style={{
          backgroundImage: [
            'radial-gradient(circle at 70% 10%, rgba(57, 1, 1, 0.5), transparent)',
            'radial-gradient(circle at 0% 80%, rgba(124, 2, 2, 0.5), transparent)',
            'radial-gradient(circle at 50% 50%, rgba(1, 1, 134, 0.3), transparent)',
            `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
          ].join(', '),
        }}
      >
        <h1 className="border-fd-foreground mb-4 border-b-4 pb-2 text-4xl font-bold md:text-5xl">
          Frontend Hire Blog
        </h1>
        <p className="text-sm md:text-base">
          All the articles on this platform.
        </p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground flex flex-col p-4 transition-colors"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-fd-muted-foreground text-sm">
              {post.data.description}
            </p>

            <p className="text-fd-muted-foreground mt-auto pt-4 text-xs">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
