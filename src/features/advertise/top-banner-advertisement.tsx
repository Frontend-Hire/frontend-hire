import { ADVERTISEMENTS } from '@/advertisements';
import { Banner } from 'fumadocs-ui/components/banner';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function TopBannerAdvertisement() {
  return (
    <Banner
      className="flex flex-wrap items-center gap-1"
      variant="rainbow"
      id={ADVERTISEMENTS.TOP_BANNER.id}
    >
      <p>{ADVERTISEMENTS.TOP_BANNER.content}</p>
      <Link
        className="flex items-center font-semibold"
        href={ADVERTISEMENTS.TOP_BANNER.cta.url}
        target="_blank"
      >
        {ADVERTISEMENTS.TOP_BANNER.cta.text}{' '}
        <ArrowRightIcon className="size-4" />
      </Link>
    </Banner>
  );
}
