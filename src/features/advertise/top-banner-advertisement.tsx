import { AdvertisementType } from '@/advertisements';
import { Banner } from 'fumadocs-ui/components/banner';
import Link from 'next/link';
import { ADVERTISEMENTS_CONSTRAINTS } from './constants';
import IsExternalAdvertisementBadge from './is-external-advertisement-badge';

export default function TopBannerAdvertisement({
  advertisement,
}: {
  advertisement?: AdvertisementType['TOP_BANNER'];
}) {
  if (!advertisement) {
    return null;
  }

  const { id, content, url } = advertisement;

  if (content.length >= ADVERTISEMENTS_CONSTRAINTS.TOP_BANNER.maxLength) {
    throw new Error('Content should be maximum 60 characters');
  }

  return (
    <Banner className="flex flex-wrap gap-1" variant="rainbow" id={id}>
      <span className="space-x-1">
        <IsExternalAdvertisementBadge id={id} />
        <Link className="hover:underline" href={url} target="_blank">
          {content} →
        </Link>
      </span>
    </Banner>
  );
}
