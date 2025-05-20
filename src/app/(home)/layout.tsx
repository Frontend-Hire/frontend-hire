import { baseOptions } from '@/app/layout.config';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <footer className="container mx-auto px-4 py-2 text-center text-sm">
        <span className="text-muted-foreground text-sm">
          Frontend Hire is an open-source learning platform and a community
          driven by{' '}
          <Link
            target="_blank"
            className="text-foreground underline underline-offset-2"
            href="https://www.iamyhr.com/"
          >
            YHR
          </Link>{' '}
          and the contributors.
        </span>
      </footer>
    </HomeLayout>
  );
}
