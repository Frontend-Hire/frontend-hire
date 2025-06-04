import { AdvertisementIdType, AdvertisementSourceType } from '@/advertisements';

export function isValidAdvertisementSource(
  value: string,
): value is AdvertisementSourceType {
  const validSources: AdvertisementSourceType[] = [
    'fh',
    'affiliate',
    'advertisement',
  ];

  return validSources.includes(value as AdvertisementSourceType);
}

export default function IsExternalAdvertisementBadge({
  id,
}: {
  id: AdvertisementIdType;
}) {
  const advertisementSource = id.split('-')[0];

  if (!isValidAdvertisementSource(advertisementSource)) {
    return null;
  }

  return <AdvertisementSourceBadge type={advertisementSource} />;
}

function AdvertisementSourceBadge({ type }: { type: AdvertisementSourceType }) {
  if (type === 'fh') {
    return null;
  }

  return (
    <span className="bg-fd-foreground/60 text-fd-background w-fit rounded px-1 py-0.5 text-xs uppercase">
      {type}
    </span>
  );
}
