import { openGraph } from '@/app/shared-metadata';
import { Locale } from '@/i18n-config';
import {
  getAllArticleTags,
  getLatestArticles,
  getTotalArticles,
} from '@/lib/api';
import ArticleCard from '@/lib/components/article-card';
import Container from '@/lib/components/container';
import Header from '@/lib/components/header';
import Pagination from '@/lib/components/pagination';
import { tagNameToText } from '@/lib/utils';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const MAX_ITEMS_PER_PAGE = 12;

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: Locale };
  searchParams: { page?: string; tags?: string };
}) {
  const { lang } = params;
  const tags = searchParams?.tags ? searchParams.tags.split(',') : [];

  const currentPage = Number(searchParams?.page) || 1;
  const totalItems = await getTotalArticles(lang, tags);
  const totalPages = Math.ceil(totalItems / MAX_ITEMS_PER_PAGE);

  if (currentPage > totalPages) {
    redirect('/articles');
  }

  const allArticles = await getLatestArticles(
    lang,
    MAX_ITEMS_PER_PAGE,
    (currentPage - 1) * MAX_ITEMS_PER_PAGE,
    tags,
  );
  const allTags = await getAllArticleTags();

  return (
    <Container>
      <Header
        title={'Read Our Articles'}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Articles', href: '/articles' },
        ]}
        className="mb-10 mt-2"
      />
      {tags.length > 0 && (
        <Link
          href={'/articles'}
          className="text-md flex items-center font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon
            aria-hidden="true"
            className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
          />
          Back to all articles
        </Link>
      )}

      <div className="mb-8 text-2xl">
        {tags.length > 0 && (
          <h2 className="inline">Showing all articles for </h2>
        )}
        {tags.map((tagid) => {
          let tagName = allTags.get(tagid) as string;
          return (
            <h2 key={tagid} className="inline capitalize">
              {`${tagNameToText(tagName)} `}
            </h2>
          );
        })}
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allArticles &&
          allArticles.map((article) => (
            <ArticleCard key={article.slug} lang={lang} article={article} />
          ))}
      </div>
      <div className="mt-10 flex w-full justify-center lg:mt-16">
        <Pagination totalPages={totalPages} />
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Articles',
  openGraph: {
    ...openGraph,
    title: 'Articles | True Jesus Church',
  },
};
