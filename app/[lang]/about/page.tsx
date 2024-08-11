import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import PageHeader from '@/lib/components/page-header';
import WhoWeAre from './who-we-are';
import OurBeliefs from './our-beliefs';
import WhyWeAreHere from './why-we-are-here';
import WhyTrueJesusChurch from './why-true-jesus-church';

const text = {
  en: {
    title: 'About Us',
    subtitle:
      'The True Jesus Church is an international church with presence in over 60 countries.',
    eyebrow: 'Learn more about us',
  },
  zh: {
    title: 'About Us',
    subtitle:
      'The True Jesus Church is an international church with presence in over 60 countries.',
    eyebrow: 'Learn more about us',
  },
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const contentfulText = await getWebContent(lang, false);
  return (
    <>
      <PageHeader lang={lang} text={text} />
      <WhoWeAre lang={lang} background="bg-stone-50" />
      <WhyWeAreHere lang={lang} background="bg-white-50" />
      <WhyTrueJesusChurch lang={lang} background="bg-stone-50" />
      <OurBeliefs lang={lang} background="bg-white-" />
    </>
  );
}
