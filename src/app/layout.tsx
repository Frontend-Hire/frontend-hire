import { Banner } from 'fumadocs-ui/components/banner';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <script
        defer
        data-domain="frontendhire.com"
        src="https://plausible.io/js/script.js"
      ></script>
      <body className="flex min-h-screen flex-col">
        <Banner variant="rainbow" id="launch">
          We revamped our site to better serve our users!
        </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
