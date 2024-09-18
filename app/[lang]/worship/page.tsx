import Container from '@/lib/components/container';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import GlobalLivestream from '../livestream/global-livestream';
import SpecialEvents from '../special-events';
import Header from '@/lib/components/header';
import adamChapel from '@/public/adam_chapel.jpg';
import LivestreamList from '../livestream/livestreams-list';
import YoutubeList from '@/lib/components/youtube-list';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import Image from 'next/image';
import ImageBanner from '@/lib/components/image-banner';
import Link from 'next/link';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';

const text = {
  en: {
    title: 'Worship',
    eyebrow: 'Worship with us',
    watchFeaturedSermon: 'Watch our sermon of the day',
    watchOtherSermons: 'Watch other sermons',
    howToPray: 'How To Pray',
    howToPrayContent: [
      '1) Kneel and close your eyes',
      '2) Begin by saying, "In the name of the Lord Jesus I pray."',
      '3) Praise the Lord by saying, "Hallelujah!"',
      '4) Spend time to speak with God from your heart and ask Him to fill you with the Holy Spirit',
      '5) End the prayer by saying, "Amen."',
    ],
  },
  zh: {
    title: '线上崇拜',
    eyebrow: '与我们一起崇拜',
    watchFeaturedSermon: 'Watch our sermon of the day',
    watchOtherSermons: 'Watch other sermons',
    howToPray: 'How To Pray',
    howToPrayContent: [
      '1) Kneel and close your eyes',
      '2) Begin by saying, "In the name of the Lord Jesus I pray."',
      '3) Praise the Lord by saying, "Hallelujah!"',
      '4) Spend time to speak with God from your heart and ask Him to fill you with the Holy Spirit',
      '5) End the prayer by saying, "Amen."',
    ],
  },
};

const headerButton = {
  href: 'locations',
  en: 'Attend In-Person Church Service',
  zh: '参加实体崇拜聚会',
};

function FeaturedSermon({ lang }: { lang: Locale }) {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">
        {text[lang].watchFeaturedSermon}
      </h1>
      <div className={`max-w- mx-auto block w-full max-w-screen-lg`}>
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed?listType=playlist&list=PLvc6U8OPfT_lqdkfc_udv3hdE_9KR7bwH&index=1&modestbranding=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}

function OlderSermons({ lang }: { lang: Locale }) {
  return (
    <div className="mt-16 lg:mt-16">
      <h1 className="mb-8 text-2xl font-bold">
        {text[lang].watchOtherSermons}
      </h1>
      <YoutubeList
        playlist={'PLvc6U8OPfT_lqdkfc_udv3hdE_9KR7bwH'}
        index={[2, 3, 4, 5, 6]}
      />
    </div>
  );
}

async function HowToPray({ lang }: { lang: Locale }) {
  return (
    <div className="my-16">
      <ModernContentStrip
        title={text[lang].howToPray}
        contents={text[lang].howToPrayContent}
        labelClasses="capitalize text-2xl font-bold mb-8"
        paragraphClasses="text-base lg:text-lg lg:max-w-none"
      />
    </div>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <ImageBanner
        src={adamChapel}
        alt={'Picture of the chapel at Adam Road church'}
      />
      {/* <PageHeader lang={lang} text={text} link={headerButton} /> */}
      <Container>
        <Header
          title={text[lang].title}
          breadcrumbs={[{ name: 'Home', href: '/' }]}
        />
        <p className="pb-12 pt-4 text-gray-800 md:text-lg lg:pb-16">
          The best way to worship with us is to{' '}
          <Link
            href={'/locations'}
            className="text-button underline hover:text-button_hover"
          >
            come and join us for an in-person church service
          </Link>
          .
        </p>
        <FeaturedSermon lang={lang} />
        <OlderSermons lang={lang} />
        <HowToPray lang={lang} />
      </Container>
      <SpecialEvents lang={lang} background="bg-stone-50" />
      <LivestreamList lang={lang} background={"bg-[url('/marble.png')]"} />
      <GlobalLivestream lang={lang} background="bg-stone-50" />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Worship',
  openGraph: {
    ...openGraph,
    title: 'Worship | True Jesus Church',
  },
};
