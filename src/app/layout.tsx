import { baseUrl, createMetadata } from '@/lib/metadata';
import { Banner } from 'fumadocs-ui/components/banner';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = createMetadata({
  title: {
    template: '%s | Frontend Hire',
    default: 'Frontend Hire',
  },
  description:
    'Learn frontend and product skills while working on practical stuff and get hired or build your own product',
  metadataBase: baseUrl,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <Script
        defer
        data-domain="frontendhire.com"
        src="https://plausible.io/js/script.js"
      ></Script>
      <body className="flex min-h-screen flex-col">
        <Banner variant="rainbow" id="launch">
          We revamped our site to better serve our users!
        </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
