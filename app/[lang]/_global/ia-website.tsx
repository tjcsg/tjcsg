import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

const links = [
  {
    en: 'View international site',
    zh: 'View international site',
    href: 'https://tjc.org/',
  },
  {
    en: 'eRhema Bible App',
    zh: 'eRhema Bible App',
    href: 'https://bible1.tjc.org/',
  },
  {
    en: 'Manna magazine',
    zh: 'Manna magazine',
    href: 'https://tjc.org/manna-magazine/',
  },
];

export default async function IaWebsite({
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
      titleText={contentfulText.globalTjciaTitle}
      bodyText={contentfulText.globalTjciaText}
      links={links}
      isReversed={isReversed}
      img={contentfulText.globalTjciaMedia.url}
      background={background}
    />
  );
}
