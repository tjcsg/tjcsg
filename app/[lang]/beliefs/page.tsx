import { Locale } from '@/i18n-config';
import { aof, aofDetails } from '@/lib/articles-of-faith';
import Container from '@/lib/components/container';
import FeaturedVerses from '@/lib/components/featured-verses';
import Header from '@/lib/components/header';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import Link from 'next/link';

function TrueGospel({ lang }: { lang: Locale }) {
  return (
    <div className="mt-8">
      <ModernContentStrip
        title={'True Gospel'}
        contents={[
          'There so many Christian denominations and churches in the world. Are all churches the same? Which church should one go to?',
          'The Bible emphasises that there is such a thing as true and false gospels. The Bible is clear that only the church teaching the true gospel may be saved.',
        ]}
        labelClasses="capitalize font-semibold"
        paragraphClasses="text-base"
        otherContents={
          <p className="text-pretty pt-5 text-base text-gray-700">
            Here in the True Jesus Church, we preach the truth that is taught in
            the Bible and upheld by the Apostolic church. We welcome you to
            study the truth with us, or even better, to{' '}
            <Link
              href={'/locations'}
              className="text-button underline hover:text-button_hover"
            >
              visit one of our churches
            </Link>
            .
          </p>
        }
      />
    </div>
  );
}

function AofPublications({ lang }: { lang: Locale }) {
  const publications = [
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
  ];
  return (
    <div className="mt-8">
      <ModernContentStrip
        title={'Our Publications'}
        contents={[]}
        labelClasses="capitalize font-semibold"
        paragraphClasses="text-base"
        otherContents={publications.map((pub) => (
          <div className="mb-4" key={pub.href}>
            <Link
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-button hover:text-button_hover"
            >
              {pub.name}
            </Link>
            <p className="text-sm text-gray-500">{pub.desc}</p>
          </div>
        ))}
      />
    </div>
  );
}

async function OurBeliefs({ lang }: { lang: Locale }) {
  return (
    <div className="mt-16">
      <h2 className="text-base font-semibold capitalize">
        Our Articles of Faith
      </h2>
      {aof.map((aof) => (
        <div key={aof} className="mt-12">
          <ModernContentStrip
            title={aofDetails[lang][aof].name}
            paragraphClasses="text-base"
            labelClasses="capitalize"
            contents={[aofDetails[lang][aof].details.join(' ')]}
            otherContents={
              <div className="mt-2 block">
                <Link
                  key={aof}
                  href={`/beliefs/${aof}`}
                  className="text-base text-button underline hover:text-button_hover"
                >
                  Find out more
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
  return (
    <Container>
      <div className="mx-auto max-w-4xl pb-10">
        <Header
          title={'Our Beliefs'}
          breadcrumbs={[{ name: 'Home', href: '/' }]}
        />
        <TrueGospel lang={lang} />
        <AofPublications lang={lang} />
        <FeaturedVerses
          verses={[
            {
              verse:
                'There is one body and one Spirit, just as you were called in one hope of your calling; one Lord, one faith, one baptism;',
              verseLocation: 'Ephesians 4:4-5 NKJV',
            },
          ]}
          className="my-16"
        />
        <OurBeliefs lang={lang} />
      </div>
    </Container>
  );
}
