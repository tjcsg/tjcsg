import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Container from '@/lib/components/container';
import LinkButton from '@/lib/components/link-button';
import { Markdown } from '@/lib/markdown';
import adamPic from '@/public/locations/adam.jpg';
import Image from 'next/image';

const text = {
  en: {
    title: 'Why "True" Jesus Church?',
    learnMore: 'Learn more',
  },
  zh: {
    title: '为何称为【真】耶稣教会？',
    learnMore: 'Learn more',
  },
};

export default async function WhyTrueJesusChurch({
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
        <div className={`flex flex-col md:flex-row md:justify-end`}>
          <div className="block md:basis-2/3">
            <h2 className="mb-8 min-w-0 text-3xl font-medium leading-7 text-gray-900  sm:tracking-tight">
              {text[lang].title}
            </h2>
            <div className="prose max-w-none">
              <Markdown content={contentfulText.aboutWhytrue} />
            </div>
            <LinkButton
              text={text[lang].learnMore}
              href={'tjc.org/the-one-church'}
              type={'inverse'}
              className={`mb-8 px-24 py-2 md:mx-0`}
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="block">
              <Image
                alt="A picture of Adam Road Church"
                src={adamPic}
                className=" block h-auto w-full px-4"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
