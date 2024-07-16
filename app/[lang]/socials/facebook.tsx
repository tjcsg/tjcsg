import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

const links = [
  {
    en: 'Like our Facebook page',
    zh: 'Like our Facebook page',
    href: 'https://www.facebook.com/truejesuschurchsg',
  },
];

export default async function FaceBook({
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
      titleText={contentfulText.socialsFacebookTitle}
      bodyText={contentfulText.socialsFacebookText}
      links={links}
      isReversed={isReversed}
      img={contentfulText.socialsFacebookMedia.url}
      background={background}
    />
  );
}
