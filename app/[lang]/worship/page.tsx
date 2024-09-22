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
import adamCongregation from '@/public/adam_congregation.jpeg';
import ImageBanner from '@/lib/components/image-banner';
import Link from 'next/link';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';
import LinkButton from '@/lib/components/link-button';

const text = {
  en: {
    title: 'Worship',
    eyebrow: 'Worship with us',
    comeVisit: 'Come and visit us',
    watchFeaturedSermon: 'Watch our sermon of the day',
    watchOtherSermons: 'Watch other sermons',
    howToPray: 'How To Pray',
    howToPrayContent: [
      'Prayer is a crucial part of our worship, allowing us to talk to our Heavenly Father. He is everpresent, and you can pray to Him anywhere.',
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
    comeVisit: 'Come and visit us',
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

function FeaturedSermon({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="mt-12 md:mt-16">
      <h1 className={`mb-4  xs:mb-8 ${titleClasses}`}>
        {text[lang].watchFeaturedSermon}
      </h1>
      <div className={`mx-auto block w-full max-w-screen-lg`}>
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
    </div>
  );
}

function OlderSermons({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="mt-12 pb-8 md:mt-16">
      <h1 className={`mb-3  xs:mb-8 ${titleClasses}`}>
        {text[lang].watchOtherSermons}
      </h1>
      <YoutubeList
        playlist={'PLvc6U8OPfT_lqdkfc_udv3hdE_9KR7bwH'}
        index={[2, 3, 4, 5, 6]}
      />
    </div>
  );
}

async function HowToPray({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="my-8 bg-white px-8 py-10 md:py-16">
      <ModernContentStrip
        title={text[lang].howToPray}
        contents={text[lang].howToPrayContent}
        labelClasses={` mb-8 ${titleClasses}`}
        paragraphClasses="text-base lg:text-lg lg:max-w-none"
      />
    </div>
  );
}

function WorshipInPerson({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: String;
}) {
  return (
    <div className="mt-8">
      <h1 className={`mb-2 ${titleClasses}`}>{text[lang].comeVisit}</h1>
      <div className="flex w-full flex-col md:flex-row">
        <div>
          <p className="mb-4 text-pretty leading-relaxed text-gray-800 md:px-0 md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
            The best way to worship with us is to come and join us for an
            in-person church service.
          </p>
          <div className="w-fit">
            <LinkButton
              text={headerButton[lang]}
              href={headerButton.href}
              type={'inverse'}
              className={`mb-8 mt-6 w-full px-8 py-2 lg:text-lg`}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl md:px-8">
          <Image src={adamCongregation} alt={''} className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const titleClasses = 'text-2xl font-bold capitalize sm:text-3xl';
  return (
    <>
      <ImageBanner
        src={adamChapel}
        alt={'Picture of the chapel at Adam Road church'}
      />
      {/* <PageHeader lang={lang} text={text} /> */}
      <Container>
        <Header
          title={text[lang].title}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Worship', href: '/worship' },
          ]}
        />

        <FeaturedSermon lang={lang} titleClasses={titleClasses} />
        <OlderSermons lang={lang} titleClasses={titleClasses} />
        <WorshipInPerson lang={lang} titleClasses={titleClasses} />
      </Container>
      <Container background={"bg-[url('/marble.png')]"}>
        <HowToPray lang={lang} titleClasses={titleClasses} />
      </Container>
      <SpecialEvents
        lang={lang}
        titleClasses={titleClasses}
        paragraphClasses="text-base md:text-lg lg:text-xl"
      />
      <LivestreamList
        lang={lang}
        background={"bg-[url('/marble.png')]"}
        titleClasses={titleClasses}
      />
      <GlobalLivestream
        lang={lang}
        background="bg-white"
        titleClasses={titleClasses}
      />
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
