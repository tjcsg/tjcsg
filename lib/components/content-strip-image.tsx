import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
import ContentStrip from './content-strip';

export default function ContentStripImage({
  lang,
  titleText,
  bodyText,
  links,
  img,
  isReversed = false,
  background,
}: {
  lang: Locale;
  titleText: string;
  bodyText: string;
  links: { en: string; zh: string; href: string }[];
  img: string;
  isReversed?: boolean;
  background: string;
}) {
  return (
    <ContentStrip
      background={background}
      lang={lang}
      titleText={titleText}
      bodyText={bodyText}
      links={links}
      isReversed={isReversed}
    >
      <div className="flex items-center justify-center">
        <div className="block">
          <ContentfulImage
            alt=""
            src={img}
            width={1414}
            height={640}
            className="mx-auto block h-auto w-full max-w-xl px-4 lg:px-8"
          ></ContentfulImage>
        </div>
      </div>
    </ContentStrip>
  );
}
