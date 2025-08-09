import { blog as blogPosts, docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/learn',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in icons)
      return createElement(icons[icon as keyof typeof icons]);
  },
  pageTree: {
    attachFolder(node, folder, meta) {
      const castedMetaData = meta?.data as Partial<{
        title: string;
        isNew?: boolean;
      }>;

      node.name = (
        <span className="flex flex-wrap items-center justify-between gap-2">
          {meta?.data.title}
          {castedMetaData.isNew && (
            <span className="bg-fd-muted-foreground text-fd-muted rounded-sm px-1 py-0.5 text-xs motion-safe:animate-pulse">
              NEW
            </span>
          )}
        </span>
      );

      return node;
    },
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: blogPosts.toFumadocsSource(),
});
