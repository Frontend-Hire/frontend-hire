import { ADVERTISEMENTS, ContentOverviewKeyType } from '@/advertisements';
import PageAdvertisement from '@/features/advertise/page-advertisement';
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

  console.log(page.url);

  const MDXContent = page.data.body;

  const time =
    process.env.NODE_ENV === 'development'
      ? null
      : await getGithubLastEdit({
          owner: 'Frontend-Hire',
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
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
