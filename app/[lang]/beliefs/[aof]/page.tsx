import { openGraph } from '@/app/shared-metadata';
import { Locale } from '@/i18n-config';
import { ArticleEntry, getLatestArticles } from '@/lib/api';
import { Aof, aofNoConst, aofDetails, aof } from '@/lib/articles-of-faith';
import ArticleCard from '@/lib/components/article-card';
import Container from '@/lib/components/container';
import FeaturedVerses from '@/lib/components/featured-verses';
import FeaturedVideo from '@/lib/components/featured-video';
import Header from '@/lib/components/header';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import { slugToContentfulTag } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';
export async function generateStaticParams() {
  return aofNoConst;
}

type Content = {
  featuredVideoUrl: string;
  pdfGDriveId: string;
  imgUrl: string;
  children?: React.ReactNode;
};

const pageContent: { [K in Aof]: Content } = {
  'jesus-christ': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=RuxX5Ftl71VP9ROF&amp;list=PL5WaeSEYxX4OnIQVCg3q-XHhB5nEnNOUT',
    pdfGDriveId: '1BlgkXnU1noZ1UlDEh9Xd9giFEW-vag_Q',
    imgUrl: 'https://tjc.sg/img/aof/jesus-christ.jpg',
  },
  bible: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=_uY9ixwBsyVXaO7k&amp;list=PL5WaeSEYxX4OtvRtU6f6Kqxnsz1mlpKxf',
    pdfGDriveId: '1PyMMYRgq4BFgucUjWb491WAgRQFrRBL_',
    imgUrl: 'https://tjc.sg/img/aof/holy-bible.jpg',
  },
  'one-true-church': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=8OhCt5e2078_yDDS&amp;list=PL5WaeSEYxX4NRfzVG25KPufewf6izt-px',
    pdfGDriveId: '1EGFy2bwV1yU8RvUotqMLjuEprSChVcDY',
    imgUrl: 'https://tjc.sg/img/aof/one-true-church.jpg',
  },
  baptism: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=-OysQxRAgqueFggW&amp;list=PL5WaeSEYxX4O1wCz3EQVMHYgpKuQS6drS',
    pdfGDriveId: '1ukhViV2q5wS1pdhJi8vMg3Mv8HtrUJan',
    imgUrl: 'https://tjc.sg/img/aof/baptism.jpg',
  },
  'holy-spirit': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=bTe1i4bG8asrU8od&amp;list=PL5WaeSEYxX4PvtVqZEV4jOAGCbSZFs3RQ',
    pdfGDriveId: '1akGCGKm1keexGibIZU0-reZQXxIvJyaE',
    imgUrl: 'https://tjc.sg/img/aof/holy-spirit.jpg',
  },
  footwashing: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=iAT1R_oeaeWBUuKF&amp;list=PL5WaeSEYxX4MN3wH2N1BRU_d2HCHOi3ka',
    pdfGDriveId: '1H_x9gMT6rCL_axTkH3GtD4b1KEVIibw9',
    imgUrl: 'https://tjc.sg/img/aof/footwashing.jpg',
  },
  'holy-communion': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=mCIWShgh8uCdS2Dn&amp;list=PL5WaeSEYxX4O71VoDFBkyLfVz366A4ujf',
    pdfGDriveId: '1yz9_7afZsDnCEftRXhmjFvYRYpdWOXRd',
    imgUrl: 'https://tjc.sg/img/aof/holy-communion.png',
  },
  sabbath: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=GsZd23Vp5efFFHQi&amp;list=PL5WaeSEYxX4NotPW56Q4wpbc-vjBoFpOn',
    pdfGDriveId: '1XKpo3Yfvp7hoYYI4PbU4vWJ3mMBMck41',
    imgUrl: 'https://tjc.sg/img/aof/sabbath-day.jpg',
  },
  salvation: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=mZrbSWh7B-aKzX6w&amp;list=PL5WaeSEYxX4M-AI56lNMdK4w84HQ-5DWv',
    pdfGDriveId: '1aDgUtsGzBr3y7nIIYKzemTt_1t61dU2i',
    imgUrl: 'https://tjc.sg/img/aof/salvation.jpg',
  },
  'second-coming': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=uuHyvr7mo6e3XWyM&amp;list=PL5WaeSEYxX4PN9hDQx_Jw7Fgl1FKWQWPG',
    pdfGDriveId: '1gIR6gRE3eAnUJ7DRBNbzYLMfsgfI2zrT',
    imgUrl: 'https://tjc.sg/img/aof/second-coming.jpg',
  },
};

function RelatedArticles({
  articles,
  lang,
}: {
  lang: Locale;
  articles: ArticleEntry[];
}) {
  return (
    <>
      {articles.length > 0 && (
        <div className="my-16">
          <h1 className="mb-8 text-2xl font-bold capitalize xl:text-3xl">
            Related articles
          </h1>
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles &&
              articles.map((article) => (
                <ArticleCard key={article.slug} lang={lang} article={article} />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

function AOFStatement({ lang, aof }: { lang: Locale; aof: Aof }) {
  return (
    <Container>
      <div className="mt-8 flex w-full justify-stretch lg:mt-12">
        <ModernContentStrip
          title={'Article of Faith'}
          contents={aofDetails[lang][aof].details}
          paragraphClasses="text-md xs:text-lg sm:text-xl mb-4"
          labelClasses="text-2xl font-bold capitalize mb-4 lg:text-3xl"
        />
      </div>
    </Container>
  );
}

function PDFViewer({ pdfName }: { pdfName: string }) {
  return (
    <div className="relative mt-16 h-[30rem] w-full">
      <iframe
        src={`https://drive.google.com/file/d/${pdfName}/preview?usp=sharing`}
        className="absolute inset-0 h-full w-full"
        height="100%"
        width="100%"
      />
    </div>
  );
}

function Footer({ currAof, lang }: { currAof: Aof; lang: Locale }) {
  const index = aof.findIndex((curr) => curr === currAof);
  return (
    <div className="mt-12 flex justify-between text-base text-button underline md:mt-20 md:text-lg lg:text-xl">
      {index > 0 ? (
        <Link
          href={`/${lang}/beliefs/${aof[index - 1]}`}
          className="flex hover:text-button_hover"
        >
          <ChevronLeftIcon aria-hidden="true" className="block w-6" />
          {index > 0 && aofDetails[lang][aof[index - 1]].name}
        </Link>
      ) : (
        <p></p>
      )}
      {index < aof.length - 1 && (
        <Link
          href={`/${lang}/beliefs/${aof[index + 1]}`}
          className="flex hover:text-button_hover"
        >
          {aofDetails[lang][aof[index + 1]].name}
          <ChevronRightIcon aria-hidden="true" className="block w-6" />
        </Link>
      )}
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: { lang: Locale; aof: Aof };
}) {
  const { lang, aof } = params;

  const articles = await getLatestArticles(lang, 100, 0, [
    `doctrine${slugToContentfulTag(aof)}`,
  ]);

  return (
    <>
      <Container>
        <Header
          title={aofDetails[lang][aof].name}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'What We Believe', href: '/beliefs' },
            { name: aofDetails[lang][aof].name, href: `/beliefs/${aof}` },
          ]}
        />
      </Container>
      <FeaturedVideo url={pageContent[aof].featuredVideoUrl} maxWidth="lg" />
      <AOFStatement aof={aof} lang={lang} />
      <Container>
        <FeaturedVerses
          verses={aofDetails[lang][aof].verses}
          className="mb-8"
        />
        <PDFViewer pdfName={pageContent[aof].pdfGDriveId} />
        <RelatedArticles articles={articles} lang={lang} />
        <Footer currAof={aof} lang={lang} />
      </Container>
    </>
  );
}

export async function generateMetadata(
  { params }: { params: { aof: Aof } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { aof } = params;
  return {
    title: aofDetails['en'][aof].name,
    description: aofDetails['en'][aof].details.join(' '),
    openGraph: {
      ...openGraph,
      title: `${aofDetails['en'][aof].name} | True Jesus Church`,
      description: aofDetails['en'][aof].details.join(' '),
      images: [
        {
          url: pageContent[aof].imgUrl,
        },
      ],
    },
  };
}
