import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Container from '@/lib/components/container';
import { Markdown } from '@/lib/markdown';

export default async function WhoWeAre({
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
        <h2 className="mb-8 min-w-0 text-3xl font-medium leading-7 text-gray-900  sm:tracking-tight">
          Who we are
        </h2>
        <div className="flex flex-col-reverse md:block">
          <div className="px-4 py-4 md:float-right md:w-7/12">
            <div className="relative block w-full overflow-hidden pt-[56.25%] ">
              <iframe
                src={`${contentfulText.aboutWhoweareIframe}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
              ></iframe>
            </div>
          </div>
          <div className="prose max-w-none">
            <Markdown content={contentfulText.aboutWhoweare} />
          </div>
        </div>
      </div>
    </Container>
  );
}
