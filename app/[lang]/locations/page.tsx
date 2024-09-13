import { Church, details } from '@/lib/church-details';
import ChurchLocation from '@/lib/components/church-location';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import tkChurch from '@/public/landingpage_landscape.jpg';
import Image from 'next/image';
import Header from '@/lib/components/header';
import Container from '@/lib/components/container';
import Link from 'next/link';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';

const pic = {
  adam: adamPic,
  tk: tkPic,
  sembawang: sembawangPic,
  serangoon: serangoonPic,
};

const text = {
  en: {
    title: 'Locations',
    subtitle:
      'We welcome you to join us at one of our four churches in Singapore.',
    eyebrow: 'Worship with us',
  },
  zh: {
    title: '教会地点',
    subtitle: '我们欢迎您来我们其中的四件教会与我们一起崇拜。',
    eyebrow: '与我们一起崇拜',
  },
};

function ChurchLink({ lang, church }: { lang: Locale; church: Church }) {
  return (
    <div className="relative mx-auto w-full bg-lightblue pb-4 pt-16 text-center text-sm">
      <Image
        src={pic[church]}
        alt={`Picture of ${details[lang][church].name}`}
        className="absolute -top-1/4 left-0 right-0 mx-auto h-24 w-24 rounded-full"
      />
      <p className="font-bold sm:text-base md:text-sm lg:text-base">
        {details[lang][church].nameChurch}
      </p>
      <p className="py-1 text-xs text-gray-600 sm:text-sm md:text-xs lg:text-sm">{`Nearest MRT - ${details[lang][church].nearestMrt}`}</p>
      <Link
        href={`/locations#${church}`}
        className="text-sm font-semibold text-button underline"
      >
        Locate us
      </Link>
    </div>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const churches = ['adam', 'tk', 'sembawang', 'serangoon'] as Church[];
  return (
    <div className="scroll-smooth">
      <PageHeader lang={lang} text={text} />
      <Container>
        <div className="mx-auto grid max-w-lg grid-cols-2 justify-around gap-x-4 gap-y-16 py-2 md:max-w-screen-lg md:grid-cols-4 md:gap-4">
          {churches.map((church) => (
            <ChurchLink key={church} lang={lang} church={church} />
          ))}
        </div>
      </Container>
      <div className="mx-auto w-full">
        {churches.map((church) => (
          <ChurchLocation
            key={church}
            name={details[lang][church].name}
            shortname={details[lang][church].shortform}
            address={details[lang][church].address}
            timings={details[lang][church].timings}
            map_src={details[lang][church].map_src}
            background="bg-stone-50"
          />
        ))}
      </div>
    </div>
  );
}
