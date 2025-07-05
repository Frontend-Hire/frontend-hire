import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://www.frontendhire.com/',
      images: '/banner.png',
      siteName: 'Frontend Hire',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@thisisyhr',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/banner.png',
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.URL
    ? new URL('http://localhost:3000')
    : new URL(process.env.URL);
