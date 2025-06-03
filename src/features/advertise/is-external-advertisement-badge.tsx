export default function IsExternalAdvertisementBadge({ id }: { id: string }) {
  if (id.toUpperCase().includes('FH')) {
    return null;
  }

  return (
    <span className="bg-fd-foreground/60 text-fd-background w-fit rounded px-1 py-0.5 text-xs uppercase">
      Ad
    </span>
  );
}
