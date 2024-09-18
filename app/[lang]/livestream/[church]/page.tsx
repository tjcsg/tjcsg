import { openGraph } from '@/app/shared-metadata';
import { Locale } from '@/i18n-config';
import { details } from '@/lib/church-details';
import Container from '@/lib/components/container';
import Header from '@/lib/components/header';
import { Metadata, ResolvingMetadata } from 'next';
export const dynamic = 'force-static';

export async function generateStaticParams() {
  return ['tk', 'adam', 'serangoon', 'sembawang'];
}

function ChurchLivestream({
  timings,
  background,
  map_src,
}: {
  timings: { day: string; time: string }[];
  background: string;
  map_src: string;
}) {
  return (
    <Container background={background}>
      <div className="mx-auto sm:max-w-4xl md:px-2 lg:px-12">
        <div className="flex flex-col sm:flex-row">
          <div className="basis-3/5 bg-lightblue px-4 py-4 xs:px-12 sm:px-2 md:px-8">
            <h1 className="pt-4 text-3xl  font-semibold">Service Timings</h1>
            <p className="pt-4 text-sm xs:text-base sm:text-sm md:text-base">
              We welcome you to worship with us in-person.
            </p>
            <div className="flex flex-col py-2 md:py-6">
              {timings.map((timing) => (
                <div key={timing.day} className="flex flex-row pt-2">
                  <p className="lg:text-md basis-1/2 text-sm font-semibold xs:text-base sm:basis-5/12 sm:text-xs md:text-base lg:text-lg">
                    {timing.day}
                  </p>
                  <p className="lg:text-md text-sm xs:text-base sm:text-xs md:pl-3 md:text-base lg:text-lg">
                    {timing.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <iframe
            src={map_src}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-64 w-full basis-2/5"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}

export default function Page({
  params,
}: {
  params: { church: 'adam' | 'tk' | 'sembawang' | 'serangoon'; lang: Locale };
}) {
  const { church, lang } = params;
  return (
    <>
      <Header
        title={`${details[lang][church].name} Livestreams`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Worship', href: '/worship' },
        ]}
        className="px-6 pb-6 sm:px-12"
      />
      <div className="block bg-stone-50">
        <div className="mx-auto px-6 py-10 sm:px-12 md:max-w-4xl">
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src={`https://player.twitch.tv/?channel=${details[lang][church].twitch}&parent=${process.env.TWITCH_PARENT}&muted=true`}
              height="720"
              width="1280"
              allowFullScreen
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <ChurchLivestream
        timings={details[lang][church].timings}
        background={"bg-[url('/marble.png')] "}
        map_src={details[lang][church].map_src}
      />
    </>
  );
}

export async function generateMetadata(
  { params }: { params: { church: 'adam' | 'tk' | 'sembawang' | 'serangoon' } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { church } = params;

  return {
    title: `Livestream for ${details['en'][church].nameChurch}`,
    openGraph: {
      ...openGraph,
      title: `Livestream for ${details['en'][church].nameChurch} | True Jesus Church`,
    },
  };
}
