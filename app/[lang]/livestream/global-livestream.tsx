import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

const links = [
  {
    en: 'View global livestream',
    zh: 'View global livestream',
    href: 'https://tjc.org/livestream/',
  },
];

export default async function GlobalLivestream({
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
      titleText={contentfulText.livestreamGlobalTitle}
      bodyText={contentfulText.livestreamGlobalText}
      links={links}
      isReversed={isReversed}
      img={contentfulText.livestreamGlobalMedia.url}
      background={background}
    />
  );
}
