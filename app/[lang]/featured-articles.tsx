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
    title: '特别聚会',
    subtitle: '欢迎您参加我们的特别聚会！',
    viewAll: 'View all articles',
  },
};

export default async function FeaturedArticles({ lang }: { lang: Locale }) {
  const articles = await getLatestArticles(lang, 6);
  return (
    <Container>
      <div className="mx-auto max-w-2xl md:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {text[lang].title}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {text[lang].subtitle}
        </p>
      </div>
      <div className="mx-auto mt-4 grid max-w-screen-xl grid-cols-1 gap-8 border-t border-gray-200 pt-12 sm:grid-cols-2 lg:grid-cols-3">
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
