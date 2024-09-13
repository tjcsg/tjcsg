import { Locale } from '@/i18n-config';
import { ArticleEntry, getLatestArticles } from '@/lib/api';
import { Aof, aofNoConst, aofDetails } from '@/lib/articles-of-faith';
import ArticleCard from '@/lib/components/article-card';
import Container from '@/lib/components/container';
import FeaturedVerses from '@/lib/components/featured-verses';
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

function AOFStatement({ lang, aof }: { lang: Locale; aof: Aof }) {
  return (
    <Container>
      <div className="mt-8 flex w-full justify-stretch lg:mt-12">
        <ModernContentStrip
          title={'Article of Faith'}
          contents={aofDetails[lang][aof].details}
          paragraphClasses="text-md xs:text-lg sm:text-xl mb-4"
        />
      </div>
    </Container>
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
            { name: 'Our Beliefs', href: '/beliefs' },
          ]}
        />
      </Container>
      {/* <div className="relative h-96">
          <iframe
            src="/pdf/footwashing.pdf"
            className="absolute inset-0 h-full w-full"
          />
        </div> */}
      <FeaturedVideo url={pageContent[aof].featuredVideoUrl} maxWidth="lg" />
      <AOFStatement aof={aof} lang={lang} />
      <Container>
        <FeaturedVerses
          verses={aofDetails[lang][aof].verses}
          className="mb-8"
        />
        <RelatedArticles articles={articles} lang={lang} />
      </Container>
    </>
  );
}
