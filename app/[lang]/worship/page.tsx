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
  },
  zh: {
    title: '线上崇拜',
    eyebrow: '与我们一起崇拜',
  },
};

const headerButton = {
  href: 'locations',
  en: 'Attend In-Person Church Service',
  zh: '参加实体崇拜聚会',
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <PageHeader lang={lang} text={text} link={headerButton} />
      <WorshipWithUs lang={lang} background={'bg-stone-50'} />
      <HowToPray lang={lang} background={''} />
      <SpecialEvents lang={lang} background="bg-stone-50" />
      <LivestreamList lang={lang} background={"bg-[url('/marble.png')]"} />
      <GlobalLivestream lang={lang} background="bg-stone-50" />
    </>
  );
}
