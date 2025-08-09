import { ADVERTISEMENTS } from '@/advertisements';
import PageAdvertisement from '@/features/advertise/page-advertisement';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import Link from 'next/link';

function SupportUsButton() {
  return (
    <Link
      href="https://www.buymeacoffee.com/iamyhr"
      className="group relative mx-auto inline-block w-fit cursor-pointer rounded-full bg-slate-800 p-px text-xs leading-6 font-semibold text-white no-underline shadow-2xl shadow-zinc-900"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10">
        <span>Support Us</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-4">
      <section className="flex grow flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-2 text-center">
          <SupportUsButton />
          <h1 className="text-3xl font-black">
            100% Free & Open-Source Learning Platform for Frontend Developers
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
