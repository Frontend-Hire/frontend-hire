import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import Link from 'next/link';
import { baseOptions } from './layout.config';

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-1 flex-col justify-center">
        <section className="flex grow flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-black">404 - Page Not Found</h1>
            <h2 className="text-xl font-bold">
              The page you are looking for might have been removed or moved to
              another location.
            </h2>
          </div>

          <div className="flex gap-4">
            <Link className={buttonVariants({ color: 'primary' })} href="/">
              Go Home
            </Link>
          </div>
        </section>
      </main>

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
