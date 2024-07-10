import Link from 'next/link';
import ContentfulImage from '@/lib/contentful-image';
import SpecialEvents from './special-events';
import CDBD from './cdbd';
import Container from '@/lib/components/container';
import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';

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
            <ContentfulImage
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

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <Intro lang={lang} />
      <Container background="bg-white">
        <SpecialEvents lang={lang} />
      </Container>

      <Container background="bg-stone-50">
        <CDBD />
      </Container>
    </>
  );
}
