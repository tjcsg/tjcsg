import { Locale } from '@/i18n-config';
import { getWebContent, MarkdownType } from '@/lib/api';
import Link from 'next/link';
import WhyTrueJesusChurch from './why-true-jesus-church';
import tjcMap from '@/public/tjcmap.png';
import Container from '@/lib/components/container';
import Image from 'next/image';
import { Aof, aof, aofDetails } from '@/lib/articles-of-faith';
import jesusChristPic from '@/public/img/aof/jesus-christ.jpg';
import biblePic from '@/public/img/aof/holy-bible.jpg';
import churchPic from '@/public/img/aof/one-true-church.jpg';
import baptismPic from '@/public/img/aof/baptism.jpg';
import holySpiritPic from '@/public/img/aof/holy-spirit.jpg';
import footwashingPic from '@/public/img/aof/footwashing.jpg';
import holyCommunionPic from '@/public/img/aof/holy-communion.png';
import salvationPic from '@/public/img/aof/salvation.jpg';
import secondComingPic from '@/public/img/aof/second-coming.jpg';
import sabbathPic from '@/public/img/aof/sabbath-day.jpg';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import FeaturedVideo from '@/lib/components/featured-video';
import { Metadata } from 'next';
import { openGraph } from '@/app/shared-metadata';
import Breadcrumb from '@/lib/components/breadcrumb';

const text = {
  en: {
    whoWeAre: 'Who We Are',
    about_1:
      "We're the True Jesus Church, a global, non-denominational church built upon the teachings of Jesus and His apostles.",
    about_2:
      'Founded by the Holy Spirit, our mission is to spread the complete gospel of salvation to the ends of the earth.',
    yearEstablished: 'The year our church was established',
    yearSingapore: 'The year we began preaching in Singapore',
    countriesWithTJC: 'Countries with our presence',
    ourMission: 'Our Mission:',
    preachToAll: 'Preach The True Gospel To Every Soul In Every Nation',
    mapLegend: 'Countries with True Jesus Church',
    whatWeBelieve: 'What we believe',
    learnMore: 'Learn more',
    home: 'Home',
  },
  zh: {
    whoWeAre: '本会简介',
    about_1:
      '我们是真耶稣教会，一间建立在耶稣与使徒们的教导上的全球性非宗派教会。',
    about_2: '藉由圣灵创立，我们的使命是把全备的救恩真理传向地极/世界尽头。',
    yearEstablished: '我们教会成立的年份',
    yearSingapore: '我们在新加坡开始传道的年份',
    countriesWithTJC: '真耶稣教会所在的国家',
    ourMission: '我们的使命：',
    preachToAll: '向每一个国家的每一个灵魂传扬真福音',
    mapLegend: '真耶稣教会所在的国家',
    whatWeBelieve: '基本信仰',
    learnMore: '了解更多',
    home: '主页',
  },
};

const pic: { [K in Aof]: any } = {
  'jesus-christ': jesusChristPic,
  bible: biblePic,
  'one-true-church': churchPic,
  baptism: baptismPic,
  'holy-spirit': holySpiritPic,
  footwashing: footwashingPic,
  'holy-communion': holyCommunionPic,
  sabbath: sabbathPic,
  salvation: salvationPic,
  'second-coming': secondComingPic,
};

function InfoBox({
  largeText,
  description,
}: {
  largeText: string;
  description: string;
}) {
  return (
    <div className="flex max-w-48 flex-col text-center text-gray-700 ">
      <p className="text-3xl font-light xs:text-4xl sm:text-5xl xl:text-6xl">
        {largeText}
      </p>
      <p className="xs:text-md mt-4 text-pretty text-sm sm:text-lg md:text-xl xl:text-2xl">
        {description}
      </p>
    </div>
  );
}

async function WhoWeAre({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <Container>
      <div className="mt-8 flex w-full justify-stretch lg:mt-16">
        <ModernContentStrip
          title={text[lang].whoWeAre}
          contents={[text[lang].about_1, text[lang].about_2]}
          paragraphClasses="text-lg xs:text-xl sm:text-2xl xl:text-3xl"
          labelClasses={`mb-4 ${titleClasses}`}
          otherContents={
            <div className="mt-10 flex justify-around sm:gap-16 xl:mt-20 xl:justify-start xl:gap-24">
              <InfoBox
                largeText={'1917'}
                description={text[lang].yearEstablished}
              />
              <InfoBox
                largeText={'1927'}
                description={text[lang].yearSingapore}
              />
              <InfoBox
                largeText={'60+'}
                description={text[lang].countriesWithTJC}
              />
            </div>
          }
        />
      </div>
    </Container>
  );
}

async function BringingSalvationToAll({ lang }: { lang: Locale }) {
  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="py-12 xs:py-16 xl:py-44">
          <div className="relative">
            <p
              className={`absolute -left-6 -top-6 rotate-[-7.12deg] ${lang === 'zh' ? 'font-zhHandwriting' : 'font-handwriting'} text-lg text-gray-800 xs:-left-4 xs:-top-8 xs:text-xl sm:-left-12 sm:-top-12 sm:text-3xl md:-left-16 md:-top-16 md:text-4xl lg:-left-12  lg:-top-20`}
            >
              {text[lang].ourMission}
            </p>
          </div>
          <p className="max-w-2xl text-pretty text-center font-sans text-2xl font-extrabold uppercase tracking-wide text-black xs:text-3xl md:text-4xl lg:max-w-5xl lg:text-5xl">
            {text[lang].preachToAll}
          </p>
        </div>
      </div>
    </Container>
  );
}

async function TJCGlobalMap({ lang }: { lang: Locale }) {
  return (
    <div className="block pb-20 pt-8">
      <Image src={tjcMap} className="w-full" alt={`A map of TJC worldwide`} />
      <div className="mt-4 flex justify-center">
        <div className="w-4 self-center  text-button">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="20" height="20" fill="currentColor" />
          </svg>
        </div>
        <p className="xs:text-md ml-3 text-sm text-gray-500 sm:text-lg">
          {text[lang].mapLegend}
        </p>
      </div>
    </div>
  );
}

async function BasicBeliefs({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div id="beliefs">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <label className={`mb-4 ${titleClasses}`}>
              {text[lang].whatWeBelieve}
            </label>
          </div>
          {aof.map((aof, i) => (
            <div key={aofDetails[lang][aof].name} className="">
              <div className="relative w-full pt-[150%]">
                <Image
                  src={pic[aof]}
                  alt={''}
                  className="absolute inset-0 rounded-ee-3xl rounded-ss-3xl object-fill"
                />
                <p className="absolute left-[10%] top-[10%] text-3xl font-light text-white xs:text-4xl">
                  {i == 9 ? i + 1 : `0${i + 1}`}
                </p>
                <p className="absolute bottom-[8%] left-[10%] max-w-28 text-xl font-normal leading-7 text-white xs:max-w-40 xs:text-2xl sm:max-w-36 sm:text-xl md:max-w-48 md:text-2xl lg:max-w-36 xl:max-w-48 xl:text-3xl">
                  {aofDetails[lang][aof].name}
                </p>
                <Link
                  className="absolute inset-0"
                  href={`/${lang}/beliefs/${aof}`}
                />
              </div>
            </div>
          ))}
          <div className="self-center justify-self-center pb-[10%] text-xl xs:text-2xl">
            <Link href={`/${lang}/beliefs`}>
              <label className="text-button underline hover:text-button_hover">
                {text[lang].learnMore}
              </label>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const contentfulText = await getWebContent(lang, false);
  const titleClasses = 'mb-4 text-2xl font-bold capitalize xl:text-3xl';

  return (
    <>
      <Container>
        <Breadcrumb
          breadcrumbs={[
            { name: text[lang].home, href: '/' },
            { name: text[lang].whoWeAre, href: '/about' },
          ]}
        />
      </Container>
      <FeaturedVideo
        url={`${contentfulText.aboutWhoweareIframe}?playlist=1_6TnUEDym4`}
      />
      <WhoWeAre lang={lang} titleClasses={titleClasses} />
      <BringingSalvationToAll lang={lang} />
      <TJCGlobalMap lang={lang} />
      <BasicBeliefs lang={lang} titleClasses={titleClasses} />
      <WhyTrueJesusChurch lang={lang} titleClasses={titleClasses} />
    </>
  );
}

export const metadata: Metadata = {
  title: 'About Us',
  openGraph: {
    ...openGraph,
    title: 'About Us | True Jesus Church',
  },
};
