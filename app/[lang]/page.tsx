import Link from 'next/link';
import SpecialEvents from './special-events';
import CDBD from './cdbd';
import Container from '@/lib/components/container';
import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Image from 'next/image';
import LinkButton from '@/lib/components/link-button';
import tkPicPortrait from '@/public/landingpage.jpg';
import tkPicLandscape from '@/public/landingpage_landscape.jpg';

const carousel_img = [
  { name: '/carousel/1.jpg', alt: 'Telok Kurau Church' },
  { name: '/carousel/2.jpeg', alt: 'Blue skies' },
  { name: '/carousel/3.jpg', alt: 'Adam Road Church' },
  { name: '/carousel/4.jpeg', alt: 'Paddy fields' },
  { name: '/carousel/5.jpg', alt: 'Adam Road Church' },
];

const text = {
  en: {
    welcome: 'Welcome',
    learnMore: 'Learn more about us',
    findChurch: 'Find a church',
  },
  zh: {
    welcome: '欢迎到访新加坡真耶稣教会',
    learnMore: '查看本会简介',
    findChurch: '搜寻教会地址',
  },
};

async function Intro({ lang }: { lang: Locale }) {
  const contentfulText = await getWebContent(lang, false);

  return (
    <div className="relative">
      {/* Carousel from daisyui */}
      <div className="carousel carousel-center">
        {carousel_img.map((img) => (
          <div key={img.name} className="carousel-item max-sm:w-full">
            <Image src={img.name} width={693} height={390} alt={img.alt} />
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="min-w-96 max-w-lg rounded-lg bg-white bg-opacity-80 px-7 pb-5 pt-4 dark:bg-gray-900 dark:bg-opacity-85">
            <h1 className="mb-2 mt-2 font-semibold dark:text-white">
              {text[lang].welcome}
            </h1>

            {contentfulText && (
              <p className="mb-5 text-xs">{contentfulText.welcomeText}</p>
            )}

            <LinkButton
              text={text[lang].learnMore}
              href={`${lang}/about`}
              type={'default'}
            />
            <LinkButton
              text={text[lang].findChurch}
              href={`${lang}/location`}
              type={'inverse'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

async function Intro2({ lang }: { lang: Locale }) {
  const contentfulText = await getWebContent(lang, false);

  return (
    <div className="bg-stone-50">
      <div className="mx-auto max-w-screen-xl">
        <div className={`flex items-center justify-center`}>
          <div className="relative w-full">
            <main className="lg:relative">
              <div className="mx-auto w-full max-w-7xl py-8 text-center md:pb-20 md:pt-16 lg:py-48 lg:text-left">
                <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
                  <h1 className="text-5xl font-medium tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
                    {text[lang].welcome}
                  </h1>
                  <p className="text-md mx-auto mt-3 max-w-lg text-gray-500 sm:text-lg lg:mt-5 lg:max-w-3xl">
                    {contentfulText.welcomeText}
                  </p>
                  <div className="mt-4 gap-x-4 sm:flex sm:justify-center lg:justify-start">
                    <div>
                      <LinkButton
                        text={text[lang].learnMore}
                        href={`${lang}/about`}
                        type={'default'}
                        className="w-full px-8 text-lg md:text-lg lg:px-10 lg:py-4"
                      />
                    </div>
                    <div>
                      <LinkButton
                        text={text[lang].findChurch}
                        href={`${lang}/location`}
                        type={'inverse'}
                        className=" w-full px-8 md:text-lg lg:px-10 lg:py-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto h-64 w-full sm:h-72 md:h-96 md:w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                {' '}
                <Image
                  alt="A picture of the front of Telok Kurau Church"
                  src={tkPicPortrait}
                  className="absolute inset-0 hidden h-full w-full object-cover lg:block lg:max-w-none"
                />
                <Image
                  alt="A landscape picture of the top of Telok Kurau Church"
                  src={tkPicLandscape}
                  className="absolute inset-0 h-full w-full object-cover lg:hidden lg:max-w-none"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <Intro2 lang={lang} />
      <SpecialEvents lang={lang} background="bg-white" />

      <Container background="bg-stone-50">
        <CDBD />
      </Container>
    </>
  );
}
