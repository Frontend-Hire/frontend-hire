import { createMetadata } from '@/lib/metadata';
import { blog, source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Control } from './page.client';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const { toc, body: MDX } = page.data;

  return (
    <>
      <div className="container mt-4 rounded-xl border p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          {page.data.title}
        </h1>
        <p className="mb-4 text-white/80">{page.data.description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: 'sm', color: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
        <div className="prose min-w-0 flex-1 p-4">
          <InlineTOC items={toc} />
          <MDX
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div>
            <p className="text-fd-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          <Control url={page.url} />
        </div>
      </article>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = source.getPage([slug]);
  if (!page) notFound();

  const image = ['/docs-og', slug, 'image.png'].join('/');
  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: image,
    },
    twitter: {
      card: 'summary_large_image',
      images: image,
    },
  });
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
