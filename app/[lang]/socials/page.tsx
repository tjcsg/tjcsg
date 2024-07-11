import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';

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
    </>
  );
}
