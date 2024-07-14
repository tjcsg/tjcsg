import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import GlobalLivestream from '../livestream/global-livestream';
import IaWebsite from './ia-website';
import IaStudy from './ia-study';

const text = {
  en: {
    title: 'TJC Worldwide',
    subtitle:
      'The True Jesus Church is an international church with presence in over 60 countries.',
    eyebrow: 'Join our global family',
  },
  zh: {
    title: 'TJC Worldwide',
    subtitle:
      'The True Jesus Church is an international church with presence in over 60 countries.',
    eyebrow: 'Join our global family',
  },
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <PageHeader lang={lang} text={text} />
      <IaWebsite lang={lang} background="bg-stone-50" />
      <IaStudy lang={lang} background="bg-white" isReversed={true} />
      <GlobalLivestream lang={lang} background="bg-stone-50" />
    </>
  );
}
