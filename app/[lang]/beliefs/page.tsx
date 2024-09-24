import { openGraph } from '@/app/shared-metadata';
import { Locale } from '@/i18n-config';
import { aof, aofDetails } from '@/lib/articles-of-faith';
import Container from '@/lib/components/container';
import FeaturedVerses from '@/lib/components/featured-verses';
import Header from '@/lib/components/header';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import YoutubeList from '@/lib/components/youtube-list';
import { Metadata } from 'next';
import bibleCoffee from '@/public/bible_coffee.jpg';
import Image from 'next/image';
import Link from 'next/link';

const text = {
  en: {
    whatWeBelieve: 'What We Believe',
    home: 'Home',
    watchAofSermons: 'Sermons introducing our beliefs',
    trueGospel: 'True Gospel',
    trueGospelContents: [
      'There are so many Christian denominations and churches in the world. Are all churches the same? Which church should one go to?',
      'The Bible emphasises that there is such a thing as true and false gospels. The Bible is clear that only the church teaching the true gospel may be saved.',
    ],
    ourAof: 'Our Articles Of Faith',
    findOutMore: 'Find Out More',
    withUsYouCan: 'With us, you can',
    joinUs:
      'Here in the True Jesus Church, we preach the truth that is taught in the Bible and upheld by the Apostolic church. We welcome you to study the truth for yourself, or even better, to',
    joinUsCta: 'come and visit us',
    ourPublications: 'Our Publications',
  },
  zh: {
    whatWeBelieve: '基本信仰',
    home: '主页',
    watchAofSermons: '介绍我们信仰的证道',
    trueGospel: '全备的福音',
    trueGospelContents: [
      '在这个世界上有那么多的基督教派。是否所有的教会都是一样的呢？应该去哪一间教会呢？',
      '圣经强调了真假福音的存在，并且明确地指出只有传讲真福音的教会才能得救。',
    ],
    ourAof: '本会的十大信条',
    findOutMore: '了解更多',
    withUsYouCan: '与我们在一起，',
    joinUs:
      '在真耶稣教会这里，我们传讲圣经里的真理，持守使徒教会的教义。我们欢迎您亲自查考真理，如若更好',
    joinUsCta: '亲临我们的教会拜访',
    ourPublications: '我们的出版物',
  },
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
            className={`absolute -top-10 rotate-[-7.12deg] ${lang === 'zh' ? 'font-zhHandwriting' : 'font-handwriting'} text-gray-800 xs:-top-12 xs:text-2xl sm:-top-14 sm:left-[5%] sm:text-3xl md:text-4xl xl:text-5xl`}
          >
            {' '}
            {text[lang].withUsYouCan}
          </p>
        </div>
        {lang === 'en' ? (
          <p className="text-center font-sans text-3xl font-extrabold uppercase tracking-wide text-black xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
            Receive the{' '}
            <span className="inline animate-highlight whitespace-pre-line bg-gradient-to-r from-[#294ac39e] to-[#007da444] bg-[length:0%_95%] bg-left bg-no-repeat transition-all delay-500 ease-in">{`True
          & Complete`}</span>{' '}
            Gospel
          </p>
        ) : (
          <p className="text-center font-sans text-3xl font-extrabold uppercase tracking-wide text-black xs:text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
            您可以领受
            <span className="inline animate-highlight whitespace-pre-line bg-gradient-to-r from-[#294ac39e] to-[#007da444] bg-[length:0%_95%] bg-left bg-no-repeat transition-all delay-500 ease-in">{`真实
          与完全`}</span>
            的福音
          </p>
        )}
      </div>
    </Container>
  );
}

function AofSermons({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="mb-20 mt-16">
      <h1 className={`mb-8 ${titleClasses}`}>{text[lang].watchAofSermons}</h1>
      <YoutubeList
        playlist={'PLvc6U8OPfT_mUfBv_KHKCT7nb_l_q1UXh'}
        index={[1, 2, 3, 4, 5]}
      />
    </div>
  );
}

function TrueGospel({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="pb-4 pt-8">
      <h2 className={`mb-8 ${titleClasses}`}>{text[lang].trueGospel}</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div
          className={`w-full text-pretty text-base leading-relaxed sm:text-lg  sm:leading-relaxed`}
        >
          {text[lang].trueGospelContents.map((content, i) => (
            <p key={i} className={`pb-5`}>
              {content}
            </p>
          ))}
          <p className="text-pretty leading-relaxed sm:text-lg sm:leading-relaxed">
            {text[lang].joinUs}{' '}
            <Link
              href={`/${lang}/locations`}
              className="text-button underline hover:text-button_hover"
            >
              {text[lang].joinUsCta}
            </Link>
            {lang === 'zh' ? '。' : '.'}
          </p>
        </div>
        <div className="mx-auto w-11/12 xs:w-5/6 sm:w-3/4 lg:w-4/5 ">
          <Image src={bibleCoffee} alt={'A picture of a bible on a table'} />
        </div>
      </div>
    </div>
  );
}

function AofPublications({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="mt-6 md:mt-12">
      <ModernContentStrip
        title={text[lang].ourPublications}
        contents={[]}
        labelClasses={`${titleClasses} mb-4 md:mr-10`}
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

async function OurBeliefs({
  lang,
  titleClasses,
}: {
  lang: Locale;
  titleClasses: string;
}) {
  return (
    <div className="mt-8 md:mt-12">
      <h2 className={titleClasses}>{text[lang].ourAof}</h2>
      {aof.map((aof) => (
        <div key={aof} className="mt-8 md:mt-12">
          <ModernContentStrip
            title={aofDetails[lang][aof].name}
            paragraphClasses="text-base sm:text-lg sm:leading-relaxed max-w-none sm:min-w-[61ch] sm:max-w-[65ch]"
            labelClasses="capitalize mb-3 font-semibold text-lg md:text-xl"
            contents={[aofDetails[lang][aof].details.join(' ')]}
            otherContents={
              <div className="mt-1 block">
                <Link
                  key={aof}
                  href={`/${lang}/beliefs/${aof}`}
                  className="text-base text-button underline hover:text-button_hover sm:text-lg sm:leading-relaxed"
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
  const verses1 = {
    en: [
      {
        verse:
          "Not everyone who says to Me, 'Lord, Lord,' shall enter the kingdom of heaven, but he who does the will of My Father in heaven.",
        verseLocation: 'Matthew 7:21 NKJV',
      },
    ],
    zh: [
      {
        verse:
          '凡称呼我『主啊，主啊』的人不能都进天国；惟独遵行我天父旨意的人才能进去。',
        verseLocation: '马太福音 七 21',
      },
    ],
  };
  const verses2 = {
    en: [
      {
        verse:
          'There is one body and one Spirit, just as you were called in one hope of your calling; one Lord, one faith, one baptism;',
        verseLocation: 'Ephesians 4:4-5 NKJV',
      },
    ],
    zh: [
      {
        verse:
          '身体只有一个，圣灵只有一个，正如你们蒙召同有一个指望。 一主，一信，一洗',
        verseLocation: '以弗所书 四 4-5',
      },
    ],
  };

  const titleClasses = 'text-2xl font-bold capitalize xl:text-3xl';
  return (
    <>
      <Container>
        <Header
          title={text[lang].whatWeBelieve}
          breadcrumbs={[
            { name: text[lang].home, href: '/' },
            { name: text[lang].whatWeBelieve, href: '/beliefs' },
          ]}
          className="mb-10 mt-2"
        />
      </Container>
      <ReceiveCompleteGospel lang={lang} />
      <Container>
        <div className="mx-auto max-w-5xl">
          <TrueGospel lang={lang} titleClasses={titleClasses} />
          <FeaturedVerses
            verses={verses1[lang]}
            className="my-16 sm:my-24 md:my-28 lg:my-32"
          />
          <OurBeliefs lang={lang} titleClasses={titleClasses} />
          <FeaturedVerses
            verses={verses2[lang]}
            className="my-16 sm:my-24 md:my-28 lg:my-32"
          />
          <AofSermons lang={lang} titleClasses={titleClasses} />

          <AofPublications lang={lang} titleClasses={titleClasses} />
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
