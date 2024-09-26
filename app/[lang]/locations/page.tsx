import { Church, details } from '@/lib/church-details';
import ChurchLocation from '@/lib/components/church-location';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import adamFlowers from '@/public/adam_flowers.jpg';
import Image from 'next/image';
import Header from '@/lib/components/header';
import Container from '@/lib/components/container';
import Link from 'next/link';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';
import ImageBanner from '@/lib/components/image-banner';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';
import LinkButton from '@/lib/components/link-button';
import lekasChurch from '@/public/lekas_church.jpeg';

const pic = {
  adam: adamPic,
  tk: tkPic,
  sembawang: sembawangPic,
  serangoon: serangoonPic,
};

const text = {
  en: {
    title: 'Locations',
    eyebrow: 'Worship with us',
    home: 'Home',
    upcomingEvents: 'See Our Upcoming Events',
    locateUs: 'Locate us',
    global: 'Not from Singapore?',
    findChurch: 'Find a church near you',
  },
  zh: {
    title: '教会地点',
    eyebrow: '与我们一起崇拜',
    home: '主页',
    upcomingEvents: '查看将来的特别聚会',
    locateUs: '地址',
    global: '不在新加坡？',
    findChurch: '寻找离您最近的教会',
  },
};

const joinUs = {
  en: (
    <>
      We welcome you to join us at one of our churches in Singapore. Not from
      Singapore? Feel free to{' '}
      <Link
        href={`/en/contact`}
        className="text-button underline hover:text-button_hover"
      >
        contact us
      </Link>{' '}
      or{' '}
      <Link
        href={'https://tjc.org/find-a-church/'}
        className="text-button underline hover:text-button_hover"
      >
        find a church near you
      </Link>
      .
    </>
  ),
  zh: (
    <>
      我们欢迎您拜访我们的教会。不是来自新加坡？欢迎
      <Link
        href={`/zh/contact`}
        className="text-button underline hover:text-button_hover"
      >
        联系我们
      </Link>
      或
      <Link
        href={'https://tjc.org/find-a-church/'}
        className="text-button underline hover:text-button_hover"
      >
        搜寻您附近的教会
      </Link>
      。
    </>
  ),
};

function ChurchLink({ lang, church }: { lang: Locale; church: Church }) {
  return (
    <div className="relative mx-auto w-full bg-neutral-50 pb-4 pt-16 text-center">
      <Image
        src={pic[church]}
        alt={`Picture of ${details[lang][church].name}`}
        className="absolute -top-1/4 left-0 right-0 mx-auto h-24 w-24 rounded-full object-cover"
      />
      <p className="text-base font-bold">{details[lang][church].nameChurch}</p>
      <p className="py-1 text-base text-gray-600 lg:text-sm">{`Nearest MRT - ${details[lang][church].nearestMrt}`}</p>
      <Link
        href={`/${lang}/locations#${church}`}
        className="font-semibold text-button underline"
      >
        {text[lang].locateUs}
      </Link>
    </div>
  );
}

function GlobalChurch({ lang }: { lang: Locale }) {
  const reachUs = {
    en: (
      <p className="mb-4 text-lg">
        The True Jesus Church has presence in more than 60 countries all over
        the world. We welcome you to{' '}
        <Link
          href={`/${lang}/contact`}
          className="text-button underline hover:text-button_hover"
        >
          reach out to us
        </Link>{' '}
        or to find a church near you.
      </p>
    ),
    zh: (
      <p className="mb-4 text-lg">
        真耶稣教会在全球60多个国家设有堂会。我们欢迎您{' '}
        <Link
          href={`/${lang}/contact`}
          className="text-button underline hover:text-button_hover"
        >
          与我们联系
        </Link>
        ，或寻找离您最近的教会。
      </p>
    ),
  };
  return (
    <Container>
      <h1 className="mb-6 text-xl font-bold xs:text-2xl md:-mt-12 md:text-3xl">
        {text[lang].global}
      </h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          {reachUs[lang]}
          <div className="w-fit">
            <LinkButton
              text={text[lang].findChurch}
              href={'https://tjc.org/find-a-church/'}
              type={'inverse'}
              className="w-full px-8 text-base"
            />
          </div>
        </div>
        <div className="mx-auto sm:w-11/12 md:w-1/2 lg:w-1/3">
          <Image
            src={lekasChurch}
            alt={'A picture of Lekas church in Sabah.'}
          />
        </div>
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const churches = ['adam', 'tk', 'sembawang', 'serangoon'] as Church[];

  return (
    <>
      <ImageBanner
        src={adamFlowers}
        alt={'Picture of flowers at Adam road church'}
      />
      <PageHeader
        lang={lang}
        text={text}
        breadcrumbs={[
          { name: text[lang].home, href: '/' },
          { name: text[lang].title, href: '/locations' },
        ]}
      />

      <Container>
        <p className="mx-auto -mt-8 mb-20 max-w-lg text-pretty text-center text-gray-600 sm:-mt-12 sm:text-lg md:-mt-14 md:max-w-xl">
          {joinUs[lang]}
        </p>
        <div className="mx-auto -mt-16 w-fit pb-20">
          <LinkButton
            text={text[lang].upcomingEvents}
            href={`/${lang}/events`}
            type={'inverse'}
            className="mx-auto w-full px-8"
          />
        </div>
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
            background="even:bg-white odd:bg-stone-50"
          />
        ))}
      </div>
      <GlobalChurch lang={lang} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Our Locations',
  description:
    'Interested to find out more about our church and our beliefs? We warmly welcome you to come and visit any one of our four churches in Singapore!',
  openGraph: {
    ...openGraph,
    title: 'Our Locations | True Jesus Church',
    description:
      'Interested to find out more about our church and our beliefs? We warmly welcome you to come and visit any one of our four churches in Singapore!',
  },
};
