import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

const links = [
  {
    en: 'Our basic beliefs',
    zh: 'Our basic beliefs',
    href: 'https://tjc.org/intro-to-basic-beliefs/',
  },
  {
    en: 'Bible study guides',
    zh: 'Bible study guides',
    href: 'https://bsg.tjc.org/',
  },
];

export default async function IaStudy({
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
      titleText={contentfulText.globalStudyTitle}
      bodyText={contentfulText.globalStudyText}
      links={links}
      isReversed={isReversed}
      img={contentfulText.globalStudyMedia.url}
      background={background}
    />
  );
}
