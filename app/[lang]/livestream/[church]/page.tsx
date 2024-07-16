import { Locale } from '@/i18n-config';
import { details } from '@/lib/church-details';
import Container from '@/lib/components/container';
import Header from '@/lib/components/header';

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
      <div className="mx-auto block">
        <div className="flex w-full flex-col sm:flex-row">
          <div className="h-72 basis-1/2 bg-lightblue sm:max-w-md">
            <h1 className="px-4 pt-4 text-3xl font-semibold">
              Service Timings
            </h1>
            <p className="px-4 pt-4 text-sm">
              We welcome you to worship with us in-person.
            </p>
            <table className="table-xs ml-4 mt-4 md:table-sm">
              <tbody>
                {timings.map((timing) => (
                  <tr key={timing.day}>
                    <td className="sm:text-md text-sm font-semibold">
                      {timing.day}
                    </td>
                    <td className="text-nowrap text-sm">{timing.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <iframe
            src={map_src}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-72 w-96"
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
        title={`${details[lang][church].name} Livestream`}
        breadcrumbs={[
          { name: 'Livestreams', href: '/livestream' },
          { name: `${details[lang][church].name} Livestream`, href: '#' },
        ]}
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
        background="bg-white"
        map_src={details[lang][church].map_src}
      />
    </>
  );
}
