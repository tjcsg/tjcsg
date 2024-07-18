import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import ContentStripImage from '@/lib/components/content-strip-image';

export default async function HowToPray({
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
      titleText={contentfulText.worshipHowtoprayTitle}
      bodyText={contentfulText.worshipHowtoprayText}
      links={[]}
      isReversed={isReversed}
      img={contentfulText.worshipHowtoprayMedia.url}
      background={background}
      isMarkdown={true}
    />
  );
}
