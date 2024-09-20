import { openGraph } from '@/app/shared-metadata';
import { Locale } from '@/i18n-config';
import { aof, aofDetails } from '@/lib/articles-of-faith';
import Container from '@/lib/components/container';
import FeaturedVerses from '@/lib/components/featured-verses';
import Header from '@/lib/components/header';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import YoutubeList from '@/lib/components/youtube-list';
import { Metadata } from 'next';
import Link from 'next/link';

const text = {
  en: {
    watchAofSermons: 'Sermons introducing our beliefs',
    trueGospel: 'True Gospel',
    trueGospelContents: [
      'There are so many Christian denominations and churches in the world. Are all churches the same? Which church should one go to?',
      'The Bible emphasises that there is such a thing as true and false gospels. The Bible is clear that only the church teaching the true gospel may be saved.',
    ],
    ourAof: 'Our Articles Of Faith',
    findOutMore: 'Find Out More',
    withUsYouCan: 'With us, you can',
  },
  zh: {
    watchAofSermons: 'Sermons introducing our beliefs',
    trueGospel: 'True Gospel',
    trueGospelContents: [
      'There are so many Christian denominations and churches in the world. Are all churches the same? Which church should one go to?',
      'The Bible emphasises that there is such a thing as true and false gospels. The Bible is clear that only the church teaching the true gospel may be saved.',
    ],
    ourAof: 'Our Articles Of Faith',
    findOutMore: 'Find Out More',
    withUsYouCan: 'With us, you can',
  },
};

const trueGospelCta = {
  en: (
    <p className="text-pretty text-black md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
      Here in the True Jesus Church, we preach the truth that is taught in the
      Bible and upheld by the Apostolic church. We welcome you to study the
      truth for yourself, or even better, to{' '}
      <Link
        href={'/locations'}
        className="text-button underline hover:text-button_hover"
      >
        come and visit us
      </Link>
      .
    </p>
  ),
  zh: (
    <p className="text-pretty text-black md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
      Here in the True Jesus Church, we preach the truth that is taught in the
      Bible and upheld by the Apostolic church. We welcome you to study the
      truth for yourself, or even better, to{' '}
      <Link
        href={'/locations'}
        className="text-button underline hover:text-button_hover"
      >
        come and visit us
      </Link>
      .
    </p>
  ),
};

const publications = {
  en: [
    {
      name: 'Our Basic Beliefs (Introduction)',
      href: '/pdf/intro-to-TJC-basic-beliefs.pdf',
      desc: 'Want a simple overview of what we believe in? This booklet gives a simple introduction.',
    },
    {
      name: 'Q & A on The Basic Beliefs',
      href: '/pdf/QnA.pdf',
      desc: 'Have questions about our beliefs that you would like answered? Check out this Q & A publication on our beliefs!',
    },
    {
      name: 'Essential Biblical Doctrines',
      href: '/pdf/essential-biblical-doctrines.pdf',
      desc: 'Looking to study more in-depth and go into more details? Perhaps this publication is for you!',
    },
  ],
  zh: [
    {
      name: 'Our Basic Beliefs (Introduction)',
      href: '/pdf/intro-to-TJC-basic-beliefs.pdf',
      desc: 'Want a simple overview of what we believe in? This booklet gives a simple introduction.',
    },
    {
      name: 'Q & A on The Basic Beliefs',
      href: '/pdf/QnA.pdf',
      desc: 'Have questions about our beliefs that you would like answered? Check out this Q & A publication on our beliefs!',
    },
    {
      name: 'Essential Biblical Doctrines',
      href: '/pdf/essential-biblical-doctrines.pdf',
      desc: 'Looking to study more in-depth and go into more details? Perhaps this publication is for you!',
    },
  ],
};

async function ReceiveCompleteGospel({ lang }: { lang: Locale }) {
  return (
    <Container>
      <div className=" pb-16 pt-16 md:pb-28 md:pt-24">
        <div className="relative mx-auto w-full">
          <p
            className={`absolute -top-10 rotate-[-7.12deg] font-handwriting text-gray-800 xs:-top-12 xs:text-2xl sm:-top-14 sm:left-[5%] sm:text-3xl md:text-4xl xl:text-5xl`}
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

function AofSermons({ lang }: { lang: Locale }) {
  return (
    <div className="mb-20 mt-16">
      <h1 className="mb-8 text-2xl font-bold capitalize xl:text-3xl">
        {text[lang].watchAofSermons}
      </h1>
      <YoutubeList
        playlist={'PLvc6U8OPfT_mUfBv_KHKCT7nb_l_q1UXh'}
        index={[1, 2, 3, 4, 5]}
      />
    </div>
  );
}

function TrueGospel({ lang }: { lang: Locale }) {
  return (
    <div className="pb-4 pt-8">
      <h2 className="mb-8 text-2xl font-bold capitalize xl:text-3xl">
        {text[lang].trueGospel}
      </h2>
      <div
        className={`w-full text-pretty text-base md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed`}
      >
        {text[lang].trueGospelContents.map((content, i) => (
          <p key={i} className={`pb-5`}>
            {content}
          </p>
        ))}
        {trueGospelCta[lang]}
      </div>
    </div>
  );
}

function AofPublications({ lang }: { lang: Locale }) {
  return (
    <div className="mt-6 md:mt-12">
      <ModernContentStrip
        title={'Our Publications'}
        contents={[]}
        labelClasses="capitalize font-bold text-2xl xl:text-3xl mb-8 md:mr-10"
        otherContents={publications[lang].map((pub) => (
          <div className="mb-4" key={pub.href}>
            <Link
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-button hover:text-button_hover sm:text-lg md:text-xl"
            >
              {pub.name}
            </Link>
            <p className="text-base text-gray-500 md:text-lg md:leading-relaxed">
              {pub.desc}
            </p>
          </div>
        ))}
      />
    </div>
  );
}

async function OurBeliefs({ lang }: { lang: Locale }) {
  return (
    <div className="mt-8 md:mt-12">
      <h2 className="text-2xl font-bold capitalize xl:text-3xl">
        {text[lang].ourAof}
      </h2>
      {aof.map((aof) => (
        <div key={aof} className="mt-8 md:mt-12">
          <ModernContentStrip
            title={aofDetails[lang][aof].name}
            paragraphClasses="text-base md:text-lg md:leading-relaxed max-w-none md:max-w-[65ch]"
            labelClasses="capitalize mb-3 font-medium md:text-lg"
            contents={[aofDetails[lang][aof].details.join(' ')]}
            otherContents={
              <div className="mt-2 block">
                <Link
                  key={aof}
                  href={`/beliefs/${aof}`}
                  className="text-base text-button underline hover:text-button_hover md:text-lg md:leading-relaxed"
                >
                  {text[lang].findOutMore}
                </Link>
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
}

export default function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const verses1 = [
    {
      verse:
        "Not everyone who says to Me, 'Lord, Lord,' shall enter the kingdom of heaven, but he who does the will of My Father in heaven.",
      verseLocation: 'Matthew 7:21 NKJV',
    },
  ];
  const verses2 = [
    {
      verse:
        'There is one body and one Spirit, just as you were called in one hope of your calling; one Lord, one faith, one baptism;',
      verseLocation: 'Ephesians 4:4-5 NKJV',
    },
  ];
  return (
    <>
      <Container>
        <Header
          title={'What We Believe'}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
            { name: 'What We Believe', href: '/beliefs' },
          ]}
          className="mb-10 mt-2"
        />
      </Container>
      <ReceiveCompleteGospel lang={lang} />
      <Container>
        <div className="mx-auto max-w-4xl pb-10">
          {/* <Header
            title={'Our Beliefs'}
            breadcrumbs={[{ name: 'Home', href: '/' }]}
          /> */}
          <TrueGospel lang={lang} />
          <FeaturedVerses
            verses={verses1}
            className="my-16 sm:my-24 md:my-28 lg:my-32"
          />
          <OurBeliefs lang={lang} />
          <FeaturedVerses
            verses={verses2}
            className="my-16 sm:my-24 md:my-28 lg:my-32"
          />
          <AofSermons lang={lang} />

          <AofPublications lang={lang} />
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Our Beliefs',
  openGraph: {
    ...openGraph,
    title: 'Our Beliefs | True Jesus Church',
  },
};
