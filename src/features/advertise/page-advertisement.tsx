import { PageAdvertisementType } from '@/advertisements';
import { Callout } from 'fumadocs-ui/components/callout';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { MegaphoneIcon } from 'lucide-react';
import Link from 'next/link';
import { ADVERTISEMENTS_CONSTRAINTS } from './constants';
import IsExternalAdvertisementBadge from './is-external-advertisement-badge';

export default function PageAdvertisement({
  advertisement,
}: {
  advertisement?: PageAdvertisementType;
}) {
  if (!advertisement) {
    return (
      <Callout
        id="fh-advertisement"
        icon={<MegaphoneIcon />}
        className="relative w-full border-s-fuchsia-500/90"
        title="Promote your product or service here"
      >
        <p>
          Get in front of thousands of frontend developers and tech enthusiasts
          with our advertising slots.
        </p>
        <div className="mt-4 flex flex-col items-start">
          <Link
            className={buttonVariants({
              color: 'primary',
              size: 'sm',
              className: 'motion-safe:animate-pulse',
            })}
            href="/advertise-with-us"
          >
            Advertise With Us
          </Link>
        </div>
        <div className="absolute top-1 right-1">
          <IsExternalAdvertisementBadge id="fh-advertisement" />
        </div>
      </Callout>
    );
  }

  const { id, title, content, cta, type } = advertisement;

  if (type === 'HOME_PAGE') {
    if (title.length >= ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.maxTitleLength) {
      throw new Error(
        `Title should be maximum ${ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.maxTitleLength} characters`,
      );
    }

    if (
      content.length >= ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.maxContentLength
    ) {
      throw new Error(
        `Content should be maximum ${ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.maxContentLength} characters`,
      );
    }
  }

  if (type === 'CONTENT_OVERVIEW_PAGE') {
    if (
      title.length >=
      ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE.maxTitleLength
    ) {
      throw new Error(
        `Title should be maximum ${ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE.maxTitleLength} characters`,
      );
    }

    if (
      content.length >=
      ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE.maxContentLength
    ) {
      throw new Error(
        `Content should be maximum ${ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE.maxContentLength} characters`,
      );
    }
  }

  return (
    <Callout
      id={id}
      icon={<MegaphoneIcon />}
      className="relative w-full border-s-fuchsia-500/90"
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
      <div className="absolute top-1 right-1">
        <IsExternalAdvertisementBadge id={id} />
      </div>
    </Callout>
  );
}
