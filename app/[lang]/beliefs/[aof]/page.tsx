import { Locale } from '@/i18n-config';
import { ArticleEntry, getLatestArticles } from '@/lib/api';
import { Aof, aofNoConst, aofDetails } from '@/lib/articles-of-faith';
import ArticleCard from '@/lib/components/article-card';
import Container from '@/lib/components/container';
import FeaturedVideo from '@/lib/components/featured-video';
import Header from '@/lib/components/header';
import ModernContentStrip from '@/lib/components/modern-content-strip';
import { slugToContentfulTag } from '@/lib/utils';

export const dynamic = 'force-static';
export async function generateStaticParams() {
  return aofNoConst;
}

type Content = {
  featuredVideoUrl: string;
  children?: React.ReactNode;
};

const pageContent: { [K in Aof]: Content } = {
  'jesus-christ': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=RuxX5Ftl71VP9ROF&amp;list=PL5WaeSEYxX4OnIQVCg3q-XHhB5nEnNOUT',
  },
  bible: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=_uY9ixwBsyVXaO7k&amp;list=PL5WaeSEYxX4OtvRtU6f6Kqxnsz1mlpKxf',
  },
  'one-true-church': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=8OhCt5e2078_yDDS&amp;list=PL5WaeSEYxX4NRfzVG25KPufewf6izt-px',
  },
  baptism: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=-OysQxRAgqueFggW&amp;list=PL5WaeSEYxX4O1wCz3EQVMHYgpKuQS6drS',
  },
  'holy-spirit': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=bTe1i4bG8asrU8od&amp;list=PL5WaeSEYxX4PvtVqZEV4jOAGCbSZFs3RQ',
  },
  footwashing: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=iAT1R_oeaeWBUuKF&amp;list=PL5WaeSEYxX4MN3wH2N1BRU_d2HCHOi3ka',
  },
  'holy-communion': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=mCIWShgh8uCdS2Dn&amp;list=PL5WaeSEYxX4O71VoDFBkyLfVz366A4ujf',
  },
  sabbath: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=GsZd23Vp5efFFHQi&amp;list=PL5WaeSEYxX4NotPW56Q4wpbc-vjBoFpOn',
  },
  salvation: {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=mZrbSWh7B-aKzX6w&amp;list=PL5WaeSEYxX4M-AI56lNMdK4w84HQ-5DWv',
  },
  'second-coming': {
    featuredVideoUrl:
      'https://www.youtube.com/embed/videoseries?si=uuHyvr7mo6e3XWyM&amp;list=PL5WaeSEYxX4PN9hDQx_Jw7Fgl1FKWQWPG',
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
          <h1 className="mb-8 text-xl font-bold">Related articles</h1>
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

function FeaturedVerses({
  verses,
}: {
  verses: {
    verse: string;
    verseLocation: string;
  }[];
}) {
  return (
    <>
      {verses.map((v) => {
        const { verse, verseLocation } = v;
        return (
          <div className="mx-auto max-w-screen-md pb-8 pt-16">
            <div className="text-md text-pretty text-center font-serif sm:text-xl md:text-2xl">
              <p className="mb-4">{verse}</p>
              <p>{verseLocation}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

function AOFStatement({ lang, aof }: { lang: Locale; aof: Aof }) {
  return (
    <div className="my-8 lg:my-12">
      <ModernContentStrip
        title={'Article of Faith'}
        contents={aofDetails[lang][aof].details}
        paragraphClasses="text-sm xs:text-md sm:text-lg xl:text-xl mb-4 text-pretty"
      />
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
      <Container background="bg-white">
        <div className="mx-auto w-full">
          <Header
            title={aofDetails[lang][aof].name}
            breadcrumbs={[
              { name: 'Home', href: '/' },
              { name: 'Our Beliefs', href: '/beliefs' },
            ]}
          />
        </div>
      </Container>
      <FeaturedVideo url={pageContent[aof].featuredVideoUrl} maxWidth="lg" />
      <Container background="bg-white">
        <div className="mx-auto w-full">
          <AOFStatement aof={aof} lang={lang} />
          <FeaturedVerses verses={aofDetails[lang][aof].verses} />
          <RelatedArticles articles={articles} lang={lang} />
        </div>
      </Container>
    </>
  );
}
