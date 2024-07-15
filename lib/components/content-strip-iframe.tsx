import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
import ContentStrip from './content-strip';

export default function ContentStripIFrame({
  lang,
  titleText,
  bodyText,
  links,
  url,
  isReversed = false,
  background,
}: {
  lang: Locale;
  titleText: string;
  bodyText: string;
  links: { en: string; zh: string; href: string }[];
  url: string;
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
      <div className="w-full md:px-16">
        <div className="relative block w-full overflow-hidden pt-[56.25%]">
          <iframe
            width="1920"
            height="1080"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          ></iframe>
        </div>
      </div>
    </ContentStrip>
  );
}
