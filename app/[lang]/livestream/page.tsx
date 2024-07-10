import Link from 'next/link';

import ContentfulImage from '@/lib/contentful-image';
import Container from '@/lib/components/container';
import { details } from '@/lib/church-details';
import { Locale } from '@/i18n-config';

const text = {
  en: {
    title: 'Livestreams',
    button: 'Attend In-Person Church Service',
    eyebrow: 'Worship with us',
    card_title: 'Livestream',
    card_button: 'Watch Livestream',
  },
  zh: {
    title: '线上崇拜',
    button: '参加实体崇拜聚会',
    eyebrow: '与我们一起崇拜',
    card_title: '直播',
    card_button: '参加线上崇拜',
  },
};

function ChurchLivestream({
  name,
  shortname,
  timings,
  background,
  href,
  lang,
}: {
  name: string;
  shortname: string;
  timings: { day: string; time: string }[];
  background: string;
  href: string;
  lang: Locale;
}) {
  return (
    <Container background={background}>
      <div className="block">
        <h1 className="mb-4 text-lg font-semibold lg:text-2xl">
          {name} {text[lang].card_title}
        </h1>

        <div className="relative mx-auto mb-8 bg-lightblue sm:max-w-md">
          <ContentfulImage
            src={`/locations/${shortname}.jpg`}
            width={723}
            height={445}
            className="w-full"
          ></ContentfulImage>
          <Link href={`/${lang}/${href}`}>
            <button className="text-md absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap rounded-md bg-button px-10 py-2 font-semibold text-white shadow-lg hover:bg-button_hover sm:text-xs">
              {text[lang].card_button}
            </button>
          </Link>
          <table className="table-sm mt-6">
            <tbody>
              {timings.map((timing) => (
                <tr key={timing.day}>
                  <td className="sm:text-md text-sm font-semibold">
                    {timing.day}
                  </td>
                  <td className="text-sm">{timing.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <div className="mx-auto px-6 pb-8 pt-4 text-center sm:pt-8">
        <p className="text-base font-semibold leading-7 text-button">
          {text[lang].eyebrow}
        </p>
        <h2 className="mt-2 text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          {text[lang].title}
        </h2>
        <Link href="locations">
          <button className="sm:text-md mt-6 rounded-md border-2 border-button bg-white px-10 py-2 text-sm font-semibold text-button shadow-sm hover:bg-button hover:text-white sm:leading-4">
            {text[lang].button} &rarr;
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ChurchLivestream
          name={details[lang]['adam'].name}
          shortname={details[lang]['adam'].shortform}
          timings={details[lang]['adam'].timings}
          background="bg-stone-50"
          href="livestream/adam"
          lang={lang}
        />
        <ChurchLivestream
          name={details[lang]['tk'].name}
          shortname={details[lang]['tk'].shortform}
          timings={details[lang]['tk'].timings}
          background="bg-white"
          href="livestream/tk"
          lang={lang}
        />
        <ChurchLivestream
          name={details[lang]['sembawang'].name}
          shortname={details[lang]['sembawang'].shortform}
          timings={details[lang]['sembawang'].timings}
          background="bg-stone-50 md:bg-white"
          href="livestream/sembawang"
          lang={lang}
        />
        <ChurchLivestream
          name={details[lang]['serangoon'].name}
          shortname={details[lang]['serangoon'].shortform}
          timings={details[lang]['serangoon'].timings}
          background="bg-white md:bg-stone-50"
          href="livestream/serangoon"
          lang={lang}
        />
      </div>
    </>
  );
}
