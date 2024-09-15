import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStrip from '@/lib/components/content-strip';
import ContentStripIFrame from '@/lib/components/content-strip-iframe';

const links = [
  {
    en: 'Explore our YouTube channel',
    zh: 'Explore our YouTube channel',
    href: 'https://tjc.org/livestream/',
  },
  {
    en: 'Choir playlist',
    zh: 'Choir playlist',
    href: 'https://tjc.org/livestream/',
  },
];

export default async function Youtube({
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
    <ContentStripIFrame
      lang={lang}
      titleText={contentfulText.socialsYoutubeTitle}
      bodyText={contentfulText.socialsYoutubeText}
      links={links}
      isReversed={isReversed}
      url="https://www.youtube.com/embed/qOw6z27eKOI?si=3sVQomcFfnRzSrcP"
      background={background}
    />
  );
}
