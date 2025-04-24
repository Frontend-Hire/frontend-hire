import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        Learn Core Frontend and Product Skills For Real World
      </h1>
      <h2 className="mb-4 text-lg">
        Work on Practical Stuff And Get Hired or Build Your Own Product
      </h2>
      <div>
        <Link
          className={buttonVariants({ color: 'primary' })}
          href="/learn/frontend"
        >
          Learn Now
        </Link>
      </div>
    </main>
  );
}
