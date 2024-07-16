import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Container from '@/lib/components/container';
import { Markdown } from '@/lib/markdown';

export default async function WhyWeAreHere({
  lang,
  background,
}: {
  lang: Locale;
  background: string;
}) {
  const contentfulText = await getWebContent(lang, false);
  return (
    <Container background={`${background}`}>
      <div className="block w-full">
        <h2 className="mb-8 min-w-0 text-3xl font-medium leading-7 text-gray-900 sm:tracking-tight">
          Why we are here
        </h2>
        <div className="prose flex max-w-none flex-col-reverse md:block">
          <Markdown content={contentfulText.aboutWhywearehere} />
        </div>
      </div>
    </Container>
  );
}
