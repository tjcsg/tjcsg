import { Locale } from '@/i18n-config';
import { getLatestArticles } from '@/lib/api';
import ArticleCard from '@/lib/components/article-card';
import Container from '@/lib/components/container';
import Link from 'next/link';

const text = {
  en: {
    title: 'Latest Articles',
    subtitle: 'Read our latest articles here!',
    viewAll: 'View all articles',
  },
  zh: {
    title: '最新文章',
    subtitle: '阅读本会最新的文章',
    viewAll: '查看所有文章',
  },
};

export default async function FeaturedArticles({
  lang,
  titleClasses = 'text-3xl font-bold tracking-tight sm:text-4xl',
  paragraphClasses = 'text-lg',
}: {
  lang: Locale;
  titleClasses?: string;
  paragraphClasses?: string;
}) {
  const articles = await getLatestArticles(lang, 6);
  return (
    <Container>
      <div className="mx-auto max-w-2xl md:mx-0">
        <h2 className={`text-gray-900 ${titleClasses}`}>{text[lang].title}</h2>
        <p className={`mt-2 text-gray-600 ${paragraphClasses}`}>
          {text[lang].subtitle}
        </p>
      </div>
      {/* Small - 1 column by 3 rows */}
      <div className="mx-auto mt-4 grid max-w-screen-xl grid-cols-1 gap-4   pt-10 sm:hidden">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.slug} lang={lang} article={article} />
        ))}
      </div>
      {/* Medium screen - 2 columns by 2 rows */}
      <div className="mx-auto mt-4 hidden max-w-screen-xl gap-4   pt-10 sm:grid sm:grid-cols-2 lg:hidden">
        {articles.slice(0, 4).map((article) => (
          <ArticleCard key={article.slug} lang={lang} article={article} />
        ))}
      </div>
      {/* Full screen - 3 columns by 2 rows */}
      <div className="mx-auto mt-4 hidden max-w-screen-xl grid-cols-1 gap-4   pt-10 lg:grid lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} lang={lang} article={article} />
        ))}
      </div>
      <div className="mt-10 block text-center">
        <Link
          href={'/articles'}
          className="text-lg capitalize text-button underline hover:text-button_hover lg:text-xl"
        >
          {text[lang].viewAll}
        </Link>
      </div>
    </Container>
  );
}
