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
import InstagramEmbed from '@/lib/components/instagram-embed';

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const text = {
  en: {
    welcome: 'Discover the full truth of salvation',
    welcomeContent:
      "We love the Bible, and we're here to help you transform your life with God's words.",
    visitUs: 'Visit us',
    findAChurch: 'Find a church',
    aboutUs: 'Who we are',
    worship: 'Worship',
    truthWill: 'The truth will',
    truthWillScrollingTexts: [
      'Change your life',
      'Set you free',
      'Save you',
      'Grant you hope',
      'Give you peace',
    ],
    whatWeBelieve: 'What we believe',
    withUsYouCan: 'With us, you can',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
    worshipTrueGod: 'Worship the true God',
    joinUs: 'Join us!',
    watchSermons: 'Watch our latest sermons',
  },
  zh: {
    welcome: '欢迎到访新加坡真耶稣教会',
    welcomeContent:
      "We love the Bible, and we're here to help you transform your life with God's words.",
    visitUs: 'Visit us',
    findAChurch: 'Find a church',
    aboutUs: '搜寻教会地址',
    worship: 'Worship',
    truthWill: 'The truth will',
    truthWillScrollingTexts: [
      'Change your life',
      'Set you free',
      'Save you',
      'Grant you hope',
      'Give you peace',
    ],
    whatWeBelieve: 'What we believe',
    withUsYouCan: 'With us, you can',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
    worshipTrueGod: 'Worship the true God',
    joinUs: 'Join us!',
    watchSermons: 'Watch our latest sermons',
  },
};

async function Hero({ lang }: { lang: Locale }) {
  return (
    <div className="my-10 bg-white sm:ml-2 md:ml-4 lg:ml-8 xl:ml-12">
      <div className="mx-auto max-w-screen-xl">
        <main className="w-full xs:relative">
          <div className="mx-auto w-full max-w-7xl py-8 text-center xs:text-left md:py-24 md:pb-20 md:pt-16">
            <div className="px-6 sm:w-3/4 sm:px-8 sm:pr-12 lg:w-2/3 xl:pr-16">
              <h1 className="relative z-10 text-pretty text-4xl font-black uppercase leading-tight tracking-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                {text[lang].welcome}
              </h1>
              <p className="relative z-10 mx-auto mt-4 text-base text-gray-700 xs:mx-0 xs:w-2/3 xs:text-lg sm:mt-8 md:text-xl lg:mt-8 lg:text-2xl">
                {text[lang].welcomeContent}
              </p>
              <div className="relative z-10 mt-4 gap-x-4 xs:max-w-72 xs:justify-center sm:flex sm:justify-start lg:mt-6 lg:gap-x-6">
                <div>
                  <LinkButton
                    text={text[lang].visitUs}
                    href={`${lang}/locations`}
                    type={'default'}
                    className="text-md w-full px-6 uppercase md:py-2 md:text-lg"
                  />
                </div>
                <div>
                  <LinkButton
                    text={text[lang].aboutUs}
                    href={`${lang}/about`}
                    type={'inverse'}
                    className="mt-1 w-full px-6 uppercase md:text-lg lg:py-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="z-0 flex justify-end text-right xs:absolute xs:inset-y-0 xs:right-0 xs:top-40 xs:w-3/5 sm:right-0 sm:top-24 sm:h-full sm:w-2/3 md:top-0  md:w-2/5">
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
    <div className="py-28 sm:py-32 lg:py-36 xl:py-44">
      <p className="text-center text-3xl font-extrabold uppercase tracking-wide text-black xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        {text[lang].truthWill}
      </p>
      <ol className="h-[30px]  list-none overflow-hidden xs:h-[36px]  sm:h-[48px] md:h-[60px] lg:h-[72px] xl:h-[96px]">
        {text[lang].truthWillScrollingTexts.map((item) => (
          <li key={item} className="animate-slide-up text-center">
            <span className="h-[30px] bg-gradient-to-r from-[#294bc3] to-[#007da444] bg-clip-text text-3xl font-extrabold uppercase leading-[30px] tracking-wide text-black text-transparent xs:h-[36px] xs:text-4xl xs:leading-[40px] sm:h-[48px] sm:text-5xl sm:leading-[48px] md:h-[60px] md:text-6xl md:leading-[60px] lg:h-[72px] lg:text-7xl lg:leading-[72px] xl:h-[96px] xl:text-8xl xl:leading-[96px]">
              {item}
            </span>
          </li>
        ))}
      </ol>
      <LinkButton
        text={text[lang].whatWeBelieve}
        href={`${lang}/beliefs`}
        type={'inverse'}
        className="mx-auto mt-8 w-fit px-4 py-1 uppercase sm:px-6 md:text-lg lg:mt-12"
      />
    </div>
  );
}

async function ReceiveCompleteGospel({ lang }: { lang: Locale }) {
  return (
    <Container>
      <div className=" pb-16 pt-32 md:pb-28 md:pt-40">
        <div className="relative mx-auto w-full">
          <p
            className={`absolute -top-10 rotate-[-7.12deg] text-gray-800 xs:-top-12 xs:text-2xl sm:-top-14 sm:left-[5%] sm:text-3xl md:text-4xl xl:text-5xl ${rockSalt.className}`}
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
      <div className="flex flex-col justify-between px-2 py-8 md:py-16 lg:flex-row xl:py-24">
        <div className="flex justify-center lg:block">
          <div>
            <div className="relative">
              <h1 className="w-full text-center text-3xl font-black uppercase tracking-tight text-gray-900 xs:text-4xl md:text-5xl lg:mx-0 lg:text-left">
                {text[lang].worshipTrueGod}
              </h1>
              <p
                className={`absolute -right-[3%] -top-8 rotate-[9.8deg] text-lg text-gray-800 xs:text-2xl md:-top-12 md:text-3xl lg:-right-[6%] xl:-top-12 ${rockSalt.className}`}
              >
                {' '}
                {text[lang].joinUs}
              </p>
            </div>
            <p className="mx-auto mt-3 block w-full max-w-2xl text-pretty text-center text-base text-gray-500 md:mx-0 md:text-lg lg:mt-5 lg:text-left lg:text-xl">
              {contentfulText.homepageWorshipTrueGodText}
            </p>
            <div className="mt-4 gap-x-4 sm:flex sm:justify-center lg:justify-start lg:gap-x-8">
              <div>
                <LinkButton
                  text={text[lang].findAChurch}
                  href={`${lang}/locations`}
                  type={'default'}
                  className="w-full px-6 text-base uppercase md:py-2 md:text-lg"
                />
              </div>
              <div>
                <LinkButton
                  text={text[lang].worship}
                  href={`${lang}/worship`}
                  type={'inverse'}
                  className=" w-full px-6 text-base uppercase md:py-2 md:text-lg"
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
      <InstagramEmbed />
    </>
  );
}
