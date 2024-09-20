import Image from 'next/image';
import LinkButton from './link-button';
import Container from './container';
import { Locale } from '@/i18n-config';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';

const text = {
  en: {
    livestream: 'Livestream',
    card_button: 'Watch Livestream',
  },
  zh: {
    livestream: '直播',
    card_button: '参加线上崇拜',
  },
};

const pic = {
  adam: adamPic,
  tk: tkPic,
  sembawang: sembawangPic,
  serangoon: serangoonPic,
};

export default function ChurchLivestream({
  name,
  shortname,
  timings,
  background,
  href,
  lang,
}: {
  name: string;
  shortname: 'adam' | 'tk' | 'sembawang' | 'serangoon';
  timings: { day: string; time: string }[];
  background: string;
  href: string;
  lang: Locale;
}) {
  return (
    <Container background={background}>
      <div className="mx-auto sm:max-w-md  md:max-w-none">
        <h1 className="mb-4 text-xl font-semibold sm:text-2xl md:text-xl lg:mb-6 lg:text-2xl">
          {name} {text[lang].livestream}
        </h1>

        <div className="relative mb-8 bg-lightblue">
          <Image
            src={pic[shortname]}
            className="w-full"
            alt={`A picture of ${name}'s exterior`}
          />
          <LinkButton
            text={text[lang].card_button}
            href={`/${lang}/${href}`}
            type={'default'}
            className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-2 text-base lg:py-1 lg:text-lg`}
          />
          <div className="flex flex-col px-4 py-6 xs:px-8 md:px-4 md:py-6">
            {timings.map((timing) => (
              <div key={timing.day} className="flex flex-row pt-2">
                <p className="lg:text-md basis-1/2 text-xs font-semibold xs:text-sm sm:text-base md:basis-5/12 md:text-sm lg:text-base xl:text-lg">
                  {timing.day}
                </p>
                <p className="lg:text-md text-xs xs:text-sm sm:text-base md:pl-3 md:text-sm lg:text-base xl:text-lg">
                  {timing.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
