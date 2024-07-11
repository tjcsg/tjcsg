import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import Youtube from './youtube';
import Instagram from './instagram';
import FaceBook from './facebook';

const text = {
  en: {
    title: 'Social Media',
    subtitle:
      'We welcome you to follow us on any of our social media platforms.',
    eyebrow: 'Connect with us',
  },
  zh: {
    title: 'Social Media',
    subtitle:
      'We welcome you to follow us on any of our social media platforms.',
    eyebrow: 'Connect with us',
  },
};

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <PageHeader lang={lang} text={text} />
      <Youtube lang={lang} background="bg-stone-50" />
      <Instagram lang={lang} background="bg-white" isReversed />
      <FaceBook lang={lang} background="bg-stone-50" />
    </>
  );
}
