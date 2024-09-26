import SpecialEvents from './special-events';
import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import tjcMap from '@/public/tjcmap.png';
import Image from 'next/image';
import LinkButton from '@/lib/components/link-button';
import tkPicOverlay from '@/public/landingpage_overlap.svg';
import prayerPic from '@/public/landingpage_prayer.jpeg';
import biblePic from '@/public/landingpage_bible2.png';
import biblePic2 from '@/public/landingpage_bible.png';
import FeaturedArticles from './featured-articles';
import Container from '@/lib/components/container';
import YoutubeList from '@/lib/components/youtube-list';
import InstagramEmbed from '@/lib/components/instagram-embed';

const text = {
  en: {
    welcome: 'Discover the full truth of salvation',
    welcomeContent:
      "We love the Bible, and we're here to help you transform your life with God's words.",
    visitUs: 'Visit us',
    findAChurch: 'Find a church',
    aboutUs: 'About us',
    worship: 'Worship',
    truthWill: 'The truth will',
    truthWillScrollingTexts: [
      'Give you peace',
      'Grant you hope',
      'Change your life',
      'Set you free',
      'Save you',
    ],
    whatWeBelieve: 'What we believe',
    receiveCompleteGospel: 'Receive the true &\ncomplete gospel',
    worshipTrueGod: 'Worship the true God',
    joinUs: 'Join us!',
    watchSermons: 'Watch our latest sermons',
    watchLivestream: 'Watch Livestreams',
  },
  zh: {
    welcome: '探索关于救恩的全部真理',
    welcomeContent: '我们热爱圣经，在这里帮助您通过神的话语改变您的生活。',
    visitUs: '拜访我们',
    findAChurch: '寻找教会',
    aboutUs: '本会简介',
    worship: '崇拜',

    truthWill: '真理必',
    truthWillScrollingTexts: [
      '赐你盼望',
      '赐你平安',
      '使你得自由',
      '改变你的生命',
      '拯救你',
    ],
    whatWeBelieve: '基本信仰',
    worshipTrueGod: '敬拜真神',
    joinUs: '参与我们的聚会！',
    watchSermons: '观看本会最新的证道',
    watchLivestream: '观看线上直播聚会',
  },
};

async function Hero({ lang }: { lang: Locale }) {
  return (
    <div className="my-10 bg-white sm:ml-2 md:ml-4 lg:ml-8 xl:ml-12">
      <div className="mx-auto max-w-screen-xl">
        <main className="w-full xs:relative">
          <div className="mx-auto w-full max-w-7xl py-8 text-center xs:text-left md:py-24 md:pb-20 md:pt-16">
            <div className="px-6 sm:w-3/4 sm:px-8 sm:pr-12 lg:w-2/3 xl:pr-16">
              <h1 className="relative z-10 text-pretty text-4xl font-bold uppercase leading-tight tracking-normal text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                {text[lang].welcome}
              </h1>
              <p className="relative z-10 mx-auto mt-4 text-base text-gray-700 xs:mx-0 xs:w-2/3 xs:text-lg sm:mt-8 md:text-xl lg:mt-8 lg:text-2xl">
                {text[lang].welcomeContent}
              </p>
              <div className="relative z-10 mt-4 gap-x-4 xs:max-w-72 xs:justify-center sm:flex sm:justify-start lg:mt-6 lg:gap-x-6">
                <div>
                  <LinkButton
                    text={text[lang].visitUs}
                    href={`/${lang}/locations`}
                    type={'default'}
                    className="text-md mt-4 w-full px-6 uppercase md:py-2 md:text-lg"
                  />
                </div>
                <div>
                  <LinkButton
                    text={text[lang].aboutUs}
                    href={`/${lang}/about`}
                    type={'inverse'}
                    className="mt-4 w-full px-6 uppercase md:text-lg lg:py-2"
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
              priority
              loading="eager"
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
      <div className="mx-auto w-fit">
        <LinkButton
          text={text[lang].whatWeBelieve}
          href={`/${lang}/beliefs`}
          type={'inverse'}
          className="mt-8 w-full px-4 py-1 uppercase sm:px-6 md:text-lg lg:mt-12"
        />
      </div>
    </div>
  );
}

async function WorshipTrueGod({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  const contentfulText = await getWebContent(lang, false);

  return (
    <Container>
      <div className="mb-8 flex flex-col justify-between px-2 py-8 md:mb-12 md:py-16 lg:flex-row xl:py-24">
        <div className="flex justify-center lg:block">
          <div>
            <div className="relative">
              <h1
                className={`w-full text-center  lg:mx-0 lg:text-left ${titleClasses}`}
              >
                {text[lang].worshipTrueGod}
              </h1>
              <p
                className={`absolute -right-[3%] -top-8 rotate-[9.8deg] ${lang === 'zh' ? 'font-zhHandwriting' : 'font-handwriting'} text-lg text-gray-800 xs:text-2xl md:-top-12 md:text-3xl lg:-right-[6%] xl:-top-12`}
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
                  href={`/${lang}/locations`}
                  type={'default'}
                  className="w-full px-6 text-base uppercase md:py-2 md:text-lg"
                />
              </div>
              <div>
                <LinkButton
                  text={text[lang].worship}
                  href={`/${lang}/worship`}
                  type={'inverse'}
                  className=" mt-4 w-full px-6 text-base uppercase sm:mt-0 md:py-2 md:text-lg"
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

function LatestYoutubeVideos({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <Container>
      <div className="my-8">
        <h1 className={`mb-10 ${titleClasses}`}>{text[lang].watchSermons}</h1>
        <YoutubeList
          playlist={'PLvc6U8OPfT_lqdkfc_udv3hdE_9KR7bwH'}
          index={[1, 2, 3, 4, 5]}
        />
        <div className="w-fit">
          <LinkButton
            text={text[lang].watchLivestream}
            href={`/${lang}/livestream`}
            type={'inverse'}
            className="mt-6 w-full px-4 py-2 text-lg"
          />
        </div>
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const titleClasses =
    'text-3xl font-bold uppercase tracking-normal text-gray-900 xs:text-4xl md:text-5xl';
  return (
    <>
      <Hero lang={lang} />
      <TruthTransforms lang={lang} />
      <WorshipTrueGod lang={lang} titleClasses={titleClasses} />
      {/* <ReceiveCompleteGospel lang={lang} /> */}
      {/* <JoinGlobalFamily lang={lang} /> */}
      <SpecialEvents
        lang={lang}
        titleClasses={titleClasses}
        paragraphClasses="text-base md:text-lg lg:text-xl"
      />
      <LatestYoutubeVideos lang={lang} titleClasses={titleClasses} />
      <FeaturedArticles
        lang={lang}
        titleClasses={titleClasses}
        paragraphClasses="text-base md:text-lg lg:text-xl"
      />
      <InstagramEmbed />
    </>
  );
}
