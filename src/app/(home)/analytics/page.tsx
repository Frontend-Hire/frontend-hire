import { Callout } from 'fumadocs-ui/components/callout';
import Link from 'next/link';
import Script from 'next/script';

export default function AnalyticsPage() {
  return (
    <main className="container flex grow flex-col px-4">
      <section className="py-4">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Find our privacy friendly user analytics here
        </p>

        <iframe
          plausible-embed="true"
          src="https://plausible.io/share/frontendhire.com?auth=ixmgX9zqPLr5BTDX7czZa&embed=true&theme=system"
          loading="lazy"
          style={{
            width: '1px',
            minWidth: '100%',
            height: '1600px',
            borderRadius: '0.5rem',
            marginTop: '1rem',
          }}
        ></iframe>
        <Script async src="https://plausible.io/js/embed.host.js"></Script>

        <Callout type="error" title="Analytics Not Working?">
          <p>
            If you are not seeing anything on this page then it is highly likely
            that{' '}
            <Link
              target="_blank"
              href="https://github.com/plausible/analytics/issues/2550"
            >
              your adblocker
            </Link>{' '}
            is interfering with the analytics. You can try disabling your
            adblocker or{' '}
            <Link href="https://plausible.io/frontendhire.com/" target="_blank">
              visit this public link
            </Link>{' '}
            to see the analytics.
          </p>
        </Callout>
      </section>
    </main>
  );
}
