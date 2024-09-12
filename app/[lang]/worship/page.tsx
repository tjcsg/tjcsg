import Container from '@/lib/components/container';
import { details } from '@/lib/church-details';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import GlobalLivestream from '../livestream/global-livestream';
import SpecialEvents from '../special-events';
import Header from '@/lib/components/header';
import WorshipWithUs from './worship-with-us';
import ChurchLivestream from '@/lib/components/church-livestream';
import HowToPray from './how-to-pray';
import LivestreamList from '../livestream/livestreams-list';

const text = {
  en: {
    title: 'Worship',
    eyebrow: 'Worship with us',
    watchFeaturedSermon: 'Watch our sermon of the day',
  },
  zh: {
    title: '线上崇拜',
    eyebrow: '与我们一起崇拜',
    watchFeaturedSermon: 'Watch our sermon of the day',
  },
};

const headerButton = {
  href: 'locations',
  en: 'Attend In-Person Church Service',
  zh: '参加实体崇拜聚会',
};

function FeaturedSermon({ lang }: { lang: Locale }) {
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-bold">
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
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <PageHeader lang={lang} text={text} link={headerButton} />
      {/* <WorshipWithUs lang={lang} background={'bg-stone-50'} /> */}
      <FeaturedSermon lang={lang} />
      <HowToPray lang={lang} background={''} />
      <SpecialEvents lang={lang} background="bg-stone-50" />
      <LivestreamList lang={lang} background={"bg-[url('/marble.png')]"} />
      <GlobalLivestream lang={lang} background="bg-stone-50" />
    </>
  );
}
