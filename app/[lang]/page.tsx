import SpecialEvents from './special-events';
import { Rock_Salt } from 'next/font/google';
import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import Image from 'next/image';
import LinkButton from '@/lib/components/link-button';
import tkPicOverlay from '@/public/landingpage_overlap.svg';
import prayerPic from '@/public/landingpage_prayer.png';
import biblePic from '@/public/landingpage_bible2.png';
import biblePic2 from '@/public/landingpage_bible.png';
import FeaturedArticles from './featured-articles';
import Container from '@/lib/components/container';
import YoutubeList from '@/lib/components/youtube-list';

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
    livestream: 'Livestream',
    truthWill: 'The truth will',
    truthWillScrollingTexts: ['Change your life', 'Set you free', 'Save you'],
    whatWeBelieve: 'What we believe',
    withUsYouCan: 'With us, you can',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
    worshipTrueGod: 'Worship the true God',
    joinUs: 'Join us!',
    watchSermons: 'Watch our latest sermons',
  },
  zh: {
    welcome: '欢迎到访新加坡真耶稣教会',
    learnMore: '查看本会简介',
    findChurch: '搜寻教会地址',
    livestream: 'Livestream',
    truthWill: 'The truth will',
    truthWillScrollingTexts: ['Change your life', 'Set you free', 'Save you'],
    whatWeBelieve: 'What we believe',
    withUsYouCan: 'With us, you can',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
    worshipTrueGod: 'Worship the true God',
    joinUs: 'Join us!',
    watchSermons: 'Watch our latest sermons',
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
              className="h-fit w-3/4 object-contain xs:w-2/3 md:h-full md:w-full"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

async function TruthTransforms({ lang }: { lang: Locale }) {
  return (
    <Container>
      <div className="py-10 md:py-14 xl:py-16">
        <p className="text-center text-3xl font-extrabold uppercase tracking-wide text-black xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
          {text[lang].truthWill}
        </p>
        <ol className="h-[30px]  list-none overflow-hidden xs:h-[36px]  sm:h-[48px] md:h-[60px] xl:h-[72px]">
          {text[lang].truthWillScrollingTexts.map((item) => (
            <li key={item} className="animate-slide-up text-center">
              <span className="h-[30px] bg-gradient-to-r from-[#294bc3] to-[#007da444] bg-clip-text text-3xl font-extrabold uppercase leading-[30px] tracking-wide text-black text-transparent xs:h-[36px] xs:text-4xl xs:leading-[40px] sm:h-[48px] sm:text-5xl sm:leading-[48px] md:h-[60px] md:text-6xl md:leading-[60px] xl:h-[72px] xl:text-7xl xl:leading-[72px]">
                {item}
              </span>
            </li>
          ))}
        </ol>
        <LinkButton
          text={text[lang].whatWeBelieve}
          href={`${lang}/beliefs`}
          type={'inverse'}
          className="sm:text-md mx-auto mt-8 w-fit px-4 py-2 text-xs uppercase sm:px-6 md:text-lg lg:mt-12"
        />
      </div>
    </Container>
  );
}

async function ReceiveCompleteGospel({ lang }: { lang: Locale }) {
  return (
    <Container>
      <div className=" pb-16 pt-20 md:pb-20 md:pt-24 xl:pb-24 xl:pt-32">
        <div className="relative">
          <p
            className={`absolute -left-6 -top-6 rotate-[-7.12deg] text-gray-800 xs:-left-8 xs:-top-8 xs:text-2xl sm:-left-12 sm:-top-12 sm:text-3xl md:-left-16 md:-top-16 md:text-4xl xl:-left-20 xl:-top-20 xl:text-5xl ${rockSalt.className}`}
          >
            {' '}
            {text[lang].withUsYouCan}
          </p>
        </div>
        {/* prettier-ignore */}
        <p className="text-center font-sans text-3xl font-extrabold uppercase tracking-wide text-black xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
          Receive the <span className="animate-highlight whitespace-pre-line inline bg-no-repeat transition-all ease-in delay-500 bg-left bg-[length:0%_95%] bg-gradient-to-r from-[#294ac39e] to-[#007da444]">{`True
          & Complete`}</span> Gospel
        </p>
        {/* <pre className="text-center font-sans text-3xl font-extrabold uppercase tracking-wide text-black xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
          {text[lang].receiveCompleteGospel}
        </pre> */}
      </div>
    </Container>
  );
}

async function WorshipTrueGod({ lang }: { lang: Locale }) {
  const contentfulText = await getWebContent(lang, false);

  return (
    <Container>
      <div className="flex flex-col justify-between py-8 md:py-12 lg:flex-row xl:py-16">
        <div className="flex justify-center lg:block">
          <div>
            <div className="relative">
              <h1 className="w-full text-center text-3xl font-extrabold uppercase tracking-tight text-gray-900 xs:text-4xl md:text-5xl lg:mx-0 lg:text-left">
                {text[lang].worshipTrueGod}
              </h1>
              <p
                className={`absolute -right-2 -top-8 rotate-[9.8deg] text-lg text-gray-800 xs:-right-4 xs:text-2xl md:-right-16 md:-top-12 md:text-3xl lg:-right-32 xl:-top-12 ${rockSalt.className}`}
              >
                {' '}
                {text[lang].joinUs}
              </p>
            </div>
            <p className="text-md mx-auto mt-3 block w-full max-w-xl text-center text-gray-500 md:mx-0 lg:mt-5 lg:text-left lg:text-lg">
              {contentfulText.homepageWorshipTrueGodText}
            </p>
            <div className="mt-4 gap-x-4 sm:flex sm:justify-center lg:justify-start lg:gap-x-8">
              <div>
                <LinkButton
                  text={text[lang].findChurch}
                  href={`${lang}/locations`}
                  type={'default'}
                  className="text-md w-full px-6 lg:px-6 lg:py-2 lg:text-lg"
                />
              </div>
              <div>
                <LinkButton
                  text={text[lang].livestream}
                  href={`${lang}/livestream`}
                  type={'inverse'}
                  className=" text-md w-full px-6 lg:px-6 lg:py-2 lg:text-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-12 flex justify-center md:mt-16 lg:mt-0 lg:justify-end">
          <Image
            alt="A picture of the front of Telok Kurau Church"
            src={prayerPic}
            className="block w-2/3 object-contain md:w-1/2 lg:w-72 xl:w-96"
          />
          <Image
            alt="A picture of the front of Telok Kurau Church"
            src={biblePic}
            className="absolute -right-[5%] -top-[10%] w-28 max-w-xl object-contain xs:w-32 md:w-40 lg:-right-8 lg:-top-16 lg:w-32 xl:-right-10 xl:w-40"
          />
          <Image
            alt="A picture of the front of Telok Kurau Church"
            src={biblePic2}
            className="absolute right-3/4 top-3/4 w-28 max-w-xl object-contain xs:w-32 md:w-40 lg:right-80 lg:top-40 lg:w-32 xl:-left-48 xl:top-48 xl:w-40"
          />
        </div>
      </div>
    </Container>
  );
}

function LatestYoutubeVideos({ lang }: { lang: Locale }) {
  return (
    <Container>
      <h1 className="mb-10 text-2xl font-bold capitalize tracking-tight text-gray-900 sm:text-3xl">
        {text[lang].watchSermons}
      </h1>
      <YoutubeList
        playlist={'PLvc6U8OPfT_lqdkfc_udv3hdE_9KR7bwH'}
        index={[1, 2, 3, 4, 5]}
      />
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  return (
    <>
      <Hero lang={lang} />
      <TruthTransforms lang={lang} />
      <WorshipTrueGod lang={lang} />
      <ReceiveCompleteGospel lang={lang} />
      <SpecialEvents lang={lang} background="bg-white" />
      <FeaturedArticles lang={lang} />
      <LatestYoutubeVideos lang={lang} />
    </>
  );
}
