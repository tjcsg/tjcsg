import { details } from '@/lib/church-details';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import ChurchLivestream from '@/lib/components/church-livestream';
import LivestreamList from './livestreams-list';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';

const text = {
  en: {
    title: 'Livestreams',
    eyebrow: 'Worship with us',
    card_title: 'Livestream',
  },
  zh: {
    title: '线上崇拜',
    eyebrow: '与我们一起崇拜',
    card_title: '直播',
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
      <LivestreamList lang={lang} background={"bg-[url('/marble.png')]"} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Our Livestreams',
  openGraph: {
    ...openGraph,
    title: 'Our Livestreams | True Jesus Church',
  },
};
