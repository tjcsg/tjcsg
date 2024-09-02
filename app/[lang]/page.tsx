import SpecialEvents from './special-events';
import { Rock_Salt } from 'next/font/google';
import { Locale } from '@/i18n-config';
import { getCDBDSchedule, getWebContent } from '@/lib/api';
import Image from 'next/image';
import LinkButton from '@/lib/components/link-button';
import tkPicOverlay from '@/public/landingpage_overlap.svg';
import OurBeliefs from './about/our-beliefs';
import FeaturedArticles from './featured-articles';
import Container from '@/lib/components/container';

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const text = {
  en: {
    welcome: 'Discover the full truth of salvation',
    learnMore: 'Learn more about us',
    findChurch: 'Find a church',
    truthWill: 'The truth will',
    truthWillScrollingTexts: ['Change your life', 'Set you free', 'Save you'],
    whatWeBelieve: 'What we believe',
    withUsYouCan: 'With us, you can',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
  },
  zh: {
    welcome: '欢迎到访新加坡真耶稣教会',
    learnMore: '查看本会简介',
    findChurch: '搜寻教会地址',
    truthWill: 'The truth will',
    truthWillScrollingTexts: ['Change your life', 'Set you free', 'Save you'],
    whatWeBelieve: 'What we believe',
    withUsYouCan: 'With us, you can',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
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

async function TruthTransforms({ lang }: { lang: Locale }) {
  return (
    <Container background="bg-white">
      <div className="block py-16 md:py-20 xl:py-24">
        <p className="xs:text-4xl text-center text-3xl font-extrabold uppercase tracking-wide text-black sm:text-5xl md:text-6xl xl:text-7xl">
          {text[lang].truthWill}
        </p>
        <ol className="xs:h-[36px]  h-[30px] list-none overflow-hidden  sm:h-[48px] md:h-[60px] xl:h-[72px]">
          {text[lang].truthWillScrollingTexts.map((item) => (
            <li key={item} className="animate-slide-up text-center">
              <span className="xs:text-4xl xs:leading-[40px] xs:h-[36px] h-[30px] bg-gradient-to-r from-[#294bc3] to-[#007da444] bg-clip-text text-3xl font-extrabold uppercase leading-[30px] tracking-wide text-black text-transparent sm:h-[48px] sm:text-5xl sm:leading-[48px] md:h-[60px] md:text-6xl md:leading-[60px] xl:h-[72px] xl:text-7xl xl:leading-[72px]">
                {item}
              </span>
            </li>
          ))}
        </ol>
        <LinkButton
          text={text[lang].whatWeBelieve}
          href={`${lang}/about`}
          type={'inverse'}
          className="sm:text-md mx-auto mt-8 w-fit px-4 py-2 text-xs uppercase sm:px-6 md:text-lg lg:mt-12"
        />
      </div>
    </Container>
  );
}

async function ReceiveCompleteGospel({ lang }: { lang: Locale }) {
  return (
    <Container background="bg-white">
      <div className="block py-16 md:py-20 xl:py-24">
        <div className="relative">
          <p
            className={`xs:text-2xl xs:-left-8 xs:-top-8 absolute -left-6 -top-6 rotate-[-7.12deg] text-gray-800 sm:-left-12 sm:-top-12 sm:text-3xl md:-left-16 md:-top-16 md:text-4xl xl:-left-20 xl:-top-20 xl:text-5xl ${rockSalt.className}`}
          >
            {' '}
            {text[lang].withUsYouCan}
          </p>
        </div>
        <pre className="xs:text-4xl text-center font-sans text-3xl font-extrabold uppercase tracking-wide text-black sm:text-5xl md:text-6xl xl:text-7xl">
          {text[lang].receiveCompleteGospel}
        </pre>
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const { schedule } = await getCDBDSchedule(false);
  return (
    <>
      <Hero lang={lang} />
      <TruthTransforms lang={lang} />
      <ReceiveCompleteGospel lang={lang} />
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
