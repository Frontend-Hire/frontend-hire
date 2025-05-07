'use client';

import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from 'fumadocs-ui/utils/cn';
import { useCopyButton } from 'fumadocs-ui/utils/use-copy-button';
import { Check, Share } from 'lucide-react';

export function Control({ url }: { url: string }): React.ReactElement {
  const [isChecked, onCopy] = useCopyButton(() => {
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  });

  return (
    <button
      type="button"
      className={cn(buttonVariants({ className: 'gap-2', color: 'secondary' }))}
      onClick={onCopy}
    >
      {isChecked ? <Check className="size-4" /> : <Share className="size-4" />}
      {isChecked ? 'Copied URL' : 'Share Post'}
    </button>
  );
}
