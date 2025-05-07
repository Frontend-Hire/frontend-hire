import { Callout } from 'fumadocs-ui/components/callout';
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

        <div className="flex gap-4">
          <Link
            className={buttonVariants({ color: 'primary' })}
            href="/learn/frontend"
          >
            Learn Now
          </Link>
        </div>

        <Callout
          className="max-w-xl"
          title="Resume Kit for Frontend Developers"
        >
          <p>
            <Link
              className="underline"
              href="https://topmate.io/iamyhr/1336239"
              target="_blank"
            >
              Get our frontend developer resume kit
            </Link>{' '}
            that is built on top of the courses here on the platform. It
            includes 7 resume templates and instructions on how to best share
            the resume with others. Do note that you have to pay a small fee for
            the access.
          </p>
        </Callout>
      </section>
    </main>
  );
}
