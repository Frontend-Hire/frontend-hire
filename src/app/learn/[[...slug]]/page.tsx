import { ADVERTISEMENTS, ContentOverviewKeyType } from '@/advertisements';
import GFEAdvertisement from '@/features/advertise/gfe-advertisement';
import PageAdvertisement from '@/features/advertise/page-advertisement';
import { createMetadata } from '@/lib/metadata';
import { source } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { getGithubLastEdit } from 'fumadocs-core/server';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  const time =
    process.env.NODE_ENV !== 'production'
      ? null
      : await getGithubLastEdit({
          owner: 'yaralahruthik',
          repo: 'frontend-hire',
          path: `content/learn/${page.file.path}`,
        });

  const advertisementKey = page.slugs.join('-') as ContentOverviewKeyType;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      lastUpdate={time ? new Date(time) : undefined}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        {page.slugs.includes('questions') && <GFEAdvertisement />}
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        {page.slugs.at(-1) === 'overview' && (
          <PageAdvertisement
            advertisement={
              ADVERTISEMENTS.CONTENT_OVERVIEW_PAGES[advertisementKey]
            }
          />
        )}
        {page.slugs.includes('questions') && <GFEAdvertisement />}
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const image = ['/docs-og', ...slug, 'image.png'].join('/');
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
