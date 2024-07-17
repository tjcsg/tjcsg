import Link from 'next/link';
import SpecialEvents from './special-events';
import CDBD from './cdbd';
import Container from '@/lib/components/container';
import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Image from 'next/image';

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
            <Image
              src={img.name}
              width={693}
              height={390}
              alt={img.alt}
            />
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

            <Link href={`${lang}/about`}>
              <button
                type="button"
                className="mb-3 mr-6 rounded-md bg-button px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-button_hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {text[lang].learnMore}
              </button>
            </Link>

            <Link
              href={`${lang}/locations`}
              className="mb-2 text-nowrap text-xs font-semibold text-button underline decoration-2 hover:text-button_hover"
            >
              {text[lang].findChurch}
            </Link>
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
                  <p className="text-md mx-auto mt-3 max-w-md text-gray-500 sm:text-lg lg:mt-5 lg:max-w-3xl">
                    {contentfulText.welcomeText}
                  </p>
                  <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center text-nowrap rounded-md border border-transparent bg-button px-8 py-3 text-base font-medium text-white hover:bg-button_hover md:px-10 md:py-4 md:text-lg"
                      >
                        {text[lang].learnMore}
                      </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                      <a
                        href="#"
                        className="flex w-full  items-center justify-center text-nowrap rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-button hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
                      >
                        {text[lang].findChurch}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto h-64 w-full sm:h-72 md:h-96 md:w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                {' '}
                <Image
                  alt=""
                  src="/landingpage.jpg"
                  width={720}
                  height={898}
                  className="absolute inset-0 hidden h-full w-full object-cover lg:block lg:max-w-none"
                />
                <Image
                  alt=""
                  src="/landingpage_landscape.jpg"
                  width={1459}
                  height={1062}
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
      <Container background="bg-white">
        <SpecialEvents lang={lang} />
      </Container>

      <Container background="bg-stone-50">
        <CDBD />
      </Container>
    </>
  );
}
