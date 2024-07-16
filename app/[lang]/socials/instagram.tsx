import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

const links = [
  {
    en: 'Check out our feed',
    zh: 'Check out our feed',
    href: 'https://www.instagram.com/tjc.sg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
];

export default async function Instagram({
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
      titleText={contentfulText.socialsInstagramTitle}
      bodyText={contentfulText.socialsInstagramText}
      links={links}
      isReversed={isReversed}
      img={contentfulText.socialsInstagramMedia.url}
      background={background}
    />
  );
}
