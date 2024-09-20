import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Container from '@/lib/components/container';
import LinkButton from '@/lib/components/link-button';
import ContentfulImage from '@/lib/contentful-image';

const links = [
  {
    en: 'View Global Livestream',
    zh: 'View Global Livestream',
    href: 'https://tjc.org/livestream/',
  },
];

export default async function GlobalLivestream({
  lang,
  background,
}: {
  lang: Locale;
  background: string;
  isReversed?: boolean;
}) {
  const contentfulText = await getWebContent(lang, false);
  return (
    <Container background={background}>
      <h1
        className={`mb-4 mt-12 text-2xl font-bold capitalize text-gray-900 xl:text-3xl`}
      >
        {contentfulText.livestreamGlobalTitle}
      </h1>
      <div className={`flex flex-col md:flex-row md:justify-end`}>
        <div className={`mb-8 block`}>
          <p
            className={`mt-2 leading-relaxed text-gray-600 md:text-lg md:leading-relaxed lg:mb-8 lg:text-xl lg:leading-relaxed`}
          >
            {contentfulText.livestreamGlobalText}
          </p>

          <LinkButton
            text={links[0][lang]}
            href={links[0].href}
            type={'inverse'}
            className={`mb-4 mt-6 px-5 py-2`}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="block xs:w-5/6 sm:w-2/3 md:w-full">
            <ContentfulImage
              alt=""
              src={contentfulText.livestreamGlobalMedia.url}
              width={1414}
              height={640}
              className="mx-auto block h-auto w-full max-w-xl px-4 lg:px-8"
            ></ContentfulImage>
          </div>
        </div>
      </div>
    </Container>
  );
}
