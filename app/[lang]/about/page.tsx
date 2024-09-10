import { Locale } from '@/i18n-config';
import { getWebContent, MarkdownType } from '@/lib/api';
import OurBeliefs from '../beliefs/our-beliefs';
import Link from 'next/link';
import WhyTrueJesusChurch from './why-true-jesus-church';
import tjcMap from '@/public/tjcmap.png';
import Container from '@/lib/components/container';
import Image from 'next/image';
import { Aof, aof, categoryDetails } from '@/lib/articles-of-faith';
import jesusChristPic from '@/public/beliefs/jesus-christ.jpg';
import biblePic from '@/public/beliefs/holy-bible.jpg';
import salvationPic from '@/public/beliefs/salvation.jpg';
import secondComingPic from '@/public/beliefs/second-coming.jpg';
import sabbathPic from '@/public/beliefs/sabbath-day.jpg';
import { Rock_Salt } from 'next/font/google';

const rockSalt = Rock_Salt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const text = {
  en: {
    title: 'About Us',
    subtitle:
      'The True Jesus Church is an international church with presence in over 60 countries.',
    eyebrow: 'Learn more about us',
    about_1:
      "We're the True Jesus Church, a global, non-denominational church built upon the teachings of Jesus and His apostles.",
    about_2:
      'Founded by the Holy Spirit, our mission is to spread the complete gospel of salvation to the ends of the earth.',
    yearEstablished: 'The year our church was established',
    yearSingapore: 'The year we began preaching in Singapore',
    countriesWithTJC: 'Countries with our presence',
    ourMission: 'Our Mission:',
    preachToAll: ' Preach The True Gospel To Every Soul In Every Nation',
    mapLegend: 'Countries with True Jesus Church',
    whatWeBelieve: 'What we believe',
    learnMore: 'Learn more',
  },
  zh: {
    title: 'About Us',
    subtitle:
      'The True Jesus Church is an international church with presence in over 60 countries.',
    eyebrow: 'Learn more about us',
    about_1:
      "We're the True Jesus Church, a global, non-denominational church built upon the teachings of Jesus and His apostles.",
    about_2:
      'Founded by the Holy Spirit, our mission is to spread the complete gospel of salvation to the ends of the earth.',
    yearEstablished: 'The year our church was established',
    yearSingapore: 'The year we began preaching in Singapore',
    countriesWithTJC: 'Countries with our presence',
    ourMission: 'Our Mission:',
    preachToAll: ' Preach The True Gospel To Every Soul In Every Nation',
    mapLegend: 'Countries with True Jesus Church',
    whatWeBelieve: 'What we believe',
    learnMore: 'Learn more',
  },
};

const pic: { [K in Aof]: any } = {
  'jesus-christ': jesusChristPic,
  bible: biblePic,
  'one-true-church': jesusChristPic,
  baptism: jesusChristPic,
  'holy-spirit': jesusChristPic,
  footwashing: jesusChristPic,
  'holy-communion': jesusChristPic,
  sabbath: sabbathPic,
  salvation: salvationPic,
  'second-coming': secondComingPic,
};

async function IntroductionVideo({ url }: { url: string }) {
  return (
    <div className="bg-black">
      <div className=" mx-auto block w-full max-w-screen-2xl">
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            src={`${url}?autoplay=1&mute=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function InfoBox({
  largeText,
  description,
}: {
  largeText: string;
  description: string;
}) {
  return (
    <div className="max-w-48 text-center">
      <p className="text-4xl font-light sm:text-5xl xl:text-6xl">{largeText}</p>
      <p className="mt-4 text-lg sm:text-xl xl:text-2xl">{description}</p>
    </div>
  );
}

async function WhoWeAre({ lang }: { lang: Locale }) {
  return (
    <Container background="bg-white">
      <div className="mt-10 flex flex-col md:mt-16 md:flex-row">
        <label className="text-md mb-8 basis-1/3 font-normal uppercase md:mb-0 xl:text-lg">
          About
        </label>
        <div>
          <div className="prose w-full text-2xl  xl:text-3xl">
            <p className="leading-normal">{text[lang].about_1}</p>
            <p className="leading-normal">{text[lang].about_2}</p>
          </div>
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
        </div>
      </div>
    </Container>
  );
}

async function BringingSalvationToAll({ lang }: { lang: Locale }) {
  return (
    <Container background="bg-white">
      <div className="block py-12 xs:py-16 xl:py-44">
        <div className="relative">
          <p
            className={`absolute -left-6 -top-6 rotate-[-7.12deg] text-lg text-gray-800 xs:-left-4 xs:-top-8 xs:text-xl sm:-left-12 sm:-top-12 sm:text-3xl md:-left-16 md:-top-16 md:text-4xl lg:-left-12 lg:-top-20  ${rockSalt.className}`}
          >
            {text[lang].ourMission}
          </p>
        </div>
        <p className="max-w-2xl text-pretty text-center font-sans text-2xl font-extrabold uppercase tracking-wide text-black xs:text-3xl md:text-4xl lg:max-w-5xl lg:text-5xl">
          {text[lang].preachToAll}
        </p>
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

async function BasicBeliefs({ lang }: { lang: Locale }) {
  return (
    <Container background={'bg-white'}>
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
        <div>
          <label className="text-md uppercase xl:text-lg">
            {text[lang].whatWeBelieve}
          </label>
        </div>
        {aof.map((aof, i) => (
          <div key={categoryDetails[lang][aof].name} className="">
            <div className="relative w-full pt-[170%]">
              <Image
                src={pic[aof]}
                alt={''}
                className="absolute inset-0 rounded-ee-3xl rounded-ss-3xl object-contain"
              />
              <p className="absolute left-[10%] top-[10%] text-4xl font-thin text-white">
                {i == 9 ? i + 1 : `0${i + 1}`}
              </p>
              <p className="absolute bottom-[20%] left-[10%] max-w-28 text-xl font-normal leading-7 text-white xs:max-w-40 xs:text-2xl sm:max-w-36 sm:text-xl md:max-w-48 md:text-2xl lg:max-w-36 xl:max-w-48 xl:text-3xl">
                {categoryDetails[lang][aof].name}
              </p>
            </div>
          </div>
        ))}
        <div className="self-center justify-self-center pb-[30%] text-xl xs:text-2xl">
          <Link href="/beliefs">
            <label className="text-button underline hover:text-button_hover">
              {text[lang].learnMore}
            </label>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const contentfulText = await getWebContent(lang, false);

  return (
    <>
      <IntroductionVideo url={contentfulText.aboutWhoweareIframe} />
      <WhoWeAre lang={lang} />
      <BringingSalvationToAll lang={lang} />
      <TJCGlobalMap lang={lang} />
      <BasicBeliefs lang={lang} />
      <WhyTrueJesusChurch lang={lang} background="bg-stone-50" />
    </>
  );
}
