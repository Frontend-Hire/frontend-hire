import { Callout } from 'fumadocs-ui/components/callout';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { MegaphoneIcon } from 'lucide-react';
import Link from 'next/link';

export default function PageAdvertisement({
  advertisement = {
    id: 'advertise-here',
    title: 'Promote Your Product or Service',
    content:
      'Get in front of thousands of developers and tech enthusiasts by advertising with us.',
    cta: { url: '/advertise-with-us', text: 'Advertise with Us' },
  },
}: {
  advertisement?: {
    title: string;
    id: string;
    content: string;
    cta: { url: string; text: string };
  };
}) {
  const { id, title, content, cta } = advertisement;

  return (
    <Callout
      id={id}
      icon={<MegaphoneIcon />}
      className="w-full border-s-fuchsia-500/90"
      title={title}
    >
      <p>{content}</p>
      <div className="mt-4 flex flex-col items-start">
        <Link
          className={buttonVariants({
            color: 'primary',
            size: 'sm',
            className: 'motion-safe:animate-pulse',
          })}
          href={cta.url}
          target="_blank"
        >
          {cta.text}
        </Link>
      </div>
    </Callout>
  );
}
