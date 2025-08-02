import { ADVERTISEMENTS } from '@/advertisements';
import PageAdvertisement from '@/features/advertise/page-advertisement';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-4">
      <section className="flex grow flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-black">
            Learn Core Frontend and Product Skills For Real World
          </h1>
          <h2 className="text-xl font-bold">
            Work on Practical Stuff And Get Hired or Build Your Own Product
          </h2>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            className={buttonVariants({ color: 'secondary' })}
            href="/learn/frontend"
          >
            Join Discord Community
          </Link>
          <Link
            className={buttonVariants({ color: 'primary' })}
            href="/learn/frontend"
          >
            Learn Now
          </Link>
        </div>
        <div className="w-full max-w-xl">
          <PageAdvertisement advertisement={ADVERTISEMENTS.HOME_PAGE} />
        </div>
      </section>
    </main>
  );
}
