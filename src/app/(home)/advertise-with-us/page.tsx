import { ADVERTISEMENTS_CONSTRAINTS } from '@/features/advertise/constants';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import HomePageAd from './_assets/home-page-ad.webp';
import OverviewPageAd from './_assets/overview-page-ad.webp';
import TopBannerAd from './_assets/top-banner-ad.webp';

const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

function CTA() {
  return (
    <div className="mt-4 flex flex-col gap-4 sm:flex-row">
      <Link
        target="_blank"
        href="https://cal.com/iamyhr/advertisements-on-frontend-hire"
        className={buttonVariants({ color: 'primary' })}
      >
        Contact Us About Advertising
      </Link>
    </div>
  );
}

function CTABlock() {
  return (
    <div
      style={{
        backgroundImage: [
          'radial-gradient(circle at 70% 10%, rgba(92, 22, 22, 0.5), transparent)',
          'radial-gradient(circle at 0% 80%, rgba(100, 13, 13, 0.5), transparent)',
          'radial-gradient(circle at 50% 50%, rgba(1, 1, 134, 0.3), transparent)',
          `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        ].join(', '),
      }}
      className="flex flex-col gap-4 rounded-lg border p-6"
    >
      <h2 className="text-2xl font-semibold">Ready to Get Started?</h2>
      <p>
        We&apos;re selective about our advertising partners to maintain the
        quality and trust our community expects. Get in touch to discuss how we
        can help you reach engaged frontend developers.
      </p>
      <CTA />
    </div>
  );
}

export default function AdvertisePage() {
  return (
    <main className="container py-12">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold sm:text-4xl">Advertise With Us</h1>
          <p className="text-fd-muted-foreground leading-relaxed sm:text-lg">
            Frontend Hire will remain a free resource for developers, but to
            support its growth and maintain quality content, we&apos;re opening
            up limited advertising slots. All advertisements are manually
            reviewed and approved to ensure they provide value to our community.
            Our analytics are publicly available for complete transparency.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold sm:text-2xl">
              Advertising Options
            </h2>
            <p className="text-fd-muted-foreground">
              We offer three strategic placement options designed to reach our
              frontend developers community.
            </p>
          </div>

          <div className="bg-fd-card rounded-lg border p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Home Page Spotlight</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.price}
                  </div>
                  <div className="text-fd-muted-foreground text-sm">
                    {ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.duration}
                  </div>
                </div>
              </div>
              <p className="text-fd-muted-foreground">
                Prime real estate on our homepage where visitors first land.
                Perfect for tools, courses, or services that benefit all
                frontend developers.
              </p>
              <div className="bg-fd-muted/20 border-fd-muted rounded-md border-2 border-dashed p-4">
                <Image src={HomePageAd} alt="Home Page Ad" />
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  Exclusive placement
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-700">
                  Maximum visibility
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">
                  Long duration
                </span>
              </div>
              <CTA />
              <Accordions type="single">
                <Accordion title="Advertisement Constraints">
                  <ul className="text-fd-muted-foreground list-disc pl-4">
                    <li>
                      Title:{' '}
                      {ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.maxTitleLength}{' '}
                      character limit
                    </li>
                    <li>
                      Content:{' '}
                      {ADVERTISEMENTS_CONSTRAINTS.HOME_PAGE.maxContentLength}{' '}
                      character limit
                    </li>
                    <li>Maximum of 1 image/gif</li>
                    <li>Maxium of 1 link</li>
                  </ul>
                </Accordion>
              </Accordions>
            </div>
          </div>

          <div className="bg-fd-card rounded-lg border p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Content Overview Pages
                </h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE.price}
                  </div>
                  <div className="text-fd-muted-foreground text-sm">
                    {ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE.duration}
                  </div>
                </div>
              </div>
              <p className="text-fd-muted-foreground">
                Overview pages get the most attention from our community. They
                are the perfect place to promote your product or service.
              </p>
              <div className="bg-fd-muted/20 border-fd-muted rounded-md border-2 border-dashed p-4">
                <Image src={OverviewPageAd} alt="Overview Page Ad" />
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                  Multiple slots available
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  Contextual targeting
                </span>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-yellow-700">
                  Cost-effective
                </span>
              </div>
              <CTA />
              <Accordions type="single">
                <Accordion title="Advertisement Constraints">
                  <ul className="text-fd-muted-foreground list-disc pl-4">
                    <li>
                      Title:{' '}
                      {
                        ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE
                          .maxTitleLength
                      }{' '}
                      character limit
                    </li>
                    <li>
                      Content:{' '}
                      {
                        ADVERTISEMENTS_CONSTRAINTS.CONTENT_OVERVIEW_PAGE
                          .maxContentLength
                      }{' '}
                      character limit
                    </li>
                    <li>Maximum of 1 image/gif</li>
                    <li>Primary Link: 1 link</li>
                    <li>
                      Secondary Link: 2 links maximum within the content as
                      hyperlinks
                    </li>
                  </ul>
                </Accordion>
              </Accordions>
            </div>
          </div>

          <div className="bg-fd-card rounded-lg border p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Top Banner</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {ADVERTISEMENTS_CONSTRAINTS.TOP_BANNER.price}
                  </div>
                  <div className="text-fd-muted-foreground text-sm">
                    {ADVERTISEMENTS_CONSTRAINTS.TOP_BANNER.duration}
                  </div>
                </div>
              </div>
              <p className="text-fd-muted-foreground">
                A persistent (user can dismiss) banner at the top of every page
                across the entire platform. Ensures your message is seen by
                every visitor, making it perfect for announcements, launches, or
                brand awareness campaigns.
              </p>
              <div className="bg-fd-muted/20 border-fd-muted rounded-md border-2 border-dashed p-3">
                <Image src={TopBannerAd} alt="Top Banner Ad" />
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="rounded-full bg-red-100 px-3 py-1 text-red-700">
                  Site-wide visibility
                </span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">
                  Exclusive placement
                </span>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-teal-700">
                  Visible till user dismisses
                </span>
              </div>
              <CTA />
              <Accordions type="single">
                <Accordion title="Advertisement Constraints">
                  <p className="text-fd-muted-foreground">
                    {ADVERTISEMENTS_CONSTRAINTS.TOP_BANNER.maxLength} character
                    limit with a maximum of 1 link.
                  </p>
                </Accordion>
              </Accordions>
            </div>
          </div>
        </div>

        <CTABlock />

        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            Why Advertise on Frontend Hire?
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Quality Audience</h3>
              <p className="text-fd-muted-foreground">
                Our visitors are actively engaged frontend developers seeking to
                improve their skills and discover new tools and resources.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Manual Approval</h3>
              <p className="text-fd-muted-foreground">
                Every advertisement is personally reviewed to ensure it provides
                genuine value to our developer community.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Transparent Pricing</h3>
              <p className="text-fd-muted-foreground">
                Our current low traffic means affordable rates and longer
                placements, giving you excellent value as we grow together.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-medium">Public Analytics</h3>
              <p className="text-fd-muted-foreground">
                Complete transparency with publicly available analytics so you
                know exactly what reach and engagement to expect.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">
            Transparent, Privacy-Friendly Analytics
          </h2>
          <p className="text-fd-muted-foreground leading-relaxed">
            Explore our real-time analytics to get a complete picture of the
            platform&apos;s reach and engagement. We use Plausible Analytics, a
            privacy-first tool that respects user anonymity without tracking or
            storing personal data. Note that privacy-focused analytics typically
            show 20-40% lower numbers than actual traffic due to ad blockers and
            privacy tools, so the real reach is likely higher than displayed.
            Transparency and trust are fundamental to how we operate.
          </p>

          <iframe
            plausible-embed="true"
            src="https://plausible.withyhr.com/share/frontendhire.com?auth=V7OaDJpzvKXi579sLJf6v&embed=true&theme=system"
            loading="lazy"
            style={{
              width: '1px',
              minWidth: '100%',
              height: '1600px',
              borderRadius: '0.5rem',
              marginTop: '1rem',
            }}
          ></iframe>
          <Script async src="https://plausible.withyhr.com/js/embed.host.js" />
        </div>

        <Callout type="error" title="Analytics Not Loading?">
          <p>
            If the analytics aren&apos;t visible, it may be due to an{' '}
            <Link
              target="_blank"
              href="https://github.com/plausible/analytics/issues/2550"
              className="underline underline-offset-2"
            >
              adblocker
            </Link>
            . Try disabling it or{' '}
            <Link
              target="_blank"
              className="underline underline-offset-2"
              href="https://plausible.withyhr.com/frontendhire.com/"
            >
              view the public analytics page directly
            </Link>
            .
          </p>
        </Callout>

        <CTABlock />

        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

          <Accordions type="multiple">
            <Accordion
              title="What types of ads do you accept?"
              className="text-fd-muted-foreground"
            >
              We accept ads for developer tools, educational resources, courses,
              libraries, frameworks, and services that genuinely benefit
              frontend developers. All ads must provide clear value to our
              community.
            </Accordion>
            <Accordion
              title="How long does the approval process take?"
              className="text-fd-muted-foreground"
            >
              We typically review and respond to advertising requests within 2-3
              business days. We&apos;ll work with you to ensure your ad meets
              our quality standards and resonates with our audience.
            </Accordion>
            <Accordion
              title="Can I track my ad performance?"
              className="text-fd-muted-foreground"
            >
              Kind of! Our public analytics provide detailed insights into page
              views, visitor engagement, and traffic sources. You&apos;ll have
              full visibility into your ad&apos;s reach and performance. But
              please note that privacy-focused analytics typically show 20-40%
              lower numbers than actual traffic due to ad blockers and privacy
              tools.
            </Accordion>
            <Accordion
              title="What ad formats do you support?"
              className="text-fd-muted-foreground"
            >
              We support image-based ads, text-based promotions, and simple
              banner formats. All ads are designed to be non-intrusive and blend
              naturally with our content while still being clearly marked as
              advertisements.
            </Accordion>
          </Accordions>
        </div>
      </section>
    </main>
  );
}
