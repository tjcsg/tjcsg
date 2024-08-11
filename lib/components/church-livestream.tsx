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
      <div className="block">
        <h1 className="mb-4 text-lg font-semibold lg:text-2xl">
          {name} {text[lang].livestream}
        </h1>

        <div className="relative mx-auto mb-8 bg-lightblue sm:max-w-md">
          <Image
            src={pic[shortname]}
            className="w-full"
            alt={`A picture of ${name}'s exterior`}
          />
          <LinkButton
            text={text[lang].card_button}
            href={`/${lang}/${href}`}
            type={'default'}
            className={`text-md absolute left-1/2 -translate-x-1/2 -translate-y-full px-10 py-2`}
          />
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
