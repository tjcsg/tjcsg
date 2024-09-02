import SpecialEvents from './special-events';
import { Locale } from '@/i18n-config';
import { getCDBDSchedule, getWebContent } from '@/lib/api';
import Image from 'next/image';
import LinkButton from '@/lib/components/link-button';
import tkPicOverlay from '@/public/landingpage_overlap.svg';
import OurBeliefs from './about/our-beliefs';
import FeaturedArticles from './featured-articles';

const text = {
  en: {
    welcome: 'Discover the full truth of salvation',
    learnMore: 'Learn more about us',
    findChurch: 'Find a church',
  },
  zh: {
    welcome: '欢迎到访新加坡真耶稣教会',
    learnMore: '查看本会简介',
    findChurch: '搜寻教会地址',
  },
};

async function Hero({ lang }: { lang: Locale }) {
  const contentfulText = await getWebContent(lang, false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl">
        <main className="w-full md:relative">
          <div className="mx-auto w-full max-w-7xl py-8 text-center md:py-24 md:pb-20 md:pt-16 md:text-left">
            <div className="px-6 sm:px-8 md:w-3/5 md:pr-12 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900 md:text-5xl">
                {text[lang].welcome}
              </h1>
              <p className="text-md mx-auto mt-3 max-w-lg text-gray-500 md:mx-0 lg:mt-5 lg:max-w-3xl lg:text-lg">
                {contentfulText.welcomeText}
              </p>
              <div className="mt-4 gap-x-4 sm:flex sm:justify-center md:justify-start lg:gap-x-8">
                <div>
                  <LinkButton
                    text={text[lang].learnMore}
                    href={`${lang}/about`}
                    type={'default'}
                    className="text-md w-full px-6 lg:px-6 lg:py-2 lg:text-lg"
                  />
                </div>
                <div>
                  <LinkButton
                    text={text[lang].findChurch}
                    href={`${lang}/locations`}
                    type={'inverse'}
                    className=" text-md w-full px-6 lg:px-6 lg:py-2 lg:text-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end text-right md:absolute md:inset-y-0 md:right-0 md:h-full md:w-2/5 lg:w-1/2">
            {' '}
            <Image
              alt="A picture of the front of Telok Kurau Church"
              src={tkPicOverlay}
              className="xs:w-2/3 h-fit w-3/4 object-contain md:h-full md:w-full"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const { schedule } = await getCDBDSchedule(false);
  return (
    <>
      <Hero lang={lang} />
      <SpecialEvents lang={lang} background="bg-white" />
      <FeaturedArticles lang={lang} />
      <OurBeliefs lang={lang} background={''} />

      {/* For some reason, adding the container into the CDBD client component gives an error */}
      {/* <Container background="bg-stone-50">
        <CDBD lang={lang} schedule={schedule.url} />
      </Container> */}
    </>
  );
}
