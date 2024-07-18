import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

const links = [
  {
    en: 'Visit one of our locations',
    zh: 'Visit one of our locations',
    href: '/locations',
  },
];

export default async function WorshipWithUs({
  lang,
  background,
  isReversed = false,
}: {
  lang: Locale;
  background: string;
  isReversed?: boolean;
}) {
  const contentfulText = await getWebContent(lang, false);
  return (
    <ContentStripImage
      lang={lang}
      titleText={contentfulText.worshipInpersonTitle}
      bodyText={contentfulText.worshipInpersonText}
      links={links}
      isReversed={isReversed}
      img={contentfulText.worshipInpersonMedia.url}
      background={background}
    />
  );
}
