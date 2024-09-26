import {
  ArticleEntry,
  getArticlesInSubcat,
  getArticlesSubcategories,
} from '@/lib/api';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import Container from '@/lib/components/container';
import { Aof, categoryDetails } from '@/lib/articles-of-faith';
import Header from '@/lib/components/header';
import Link from 'next/link';
import ChevronRightIcon from '@heroicons/react/24/outline/ChevronRightIcon';
export const dynamic = 'force-static';
// export const dynamicParams = false;

export async function generateStaticParams({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const allSubCategories = await getArticlesSubcategories(category, false);

  return Array.from(allSubCategories);
}

const text = {
  en: {
    title: 'Articles',
    subtitle:
      'We welcome you to join us at one of our four churches in Singapore.',
    eyebrow: 'Study with us',
    empty: 'No articles in this category yet, stay tuned!',
  },
  zh: {
    title: 'Articles',
    subtitle:
      'We welcome you to join us at one of our four churches in Singapore.',
    eyebrow: 'Study with us',
    empty: 'No articles in this category yet, stay tuned!',
  },
};

export default async function Page({
  params,
}: {
  params: { lang: Locale; category: Aof; subcategory: string };
}) {
  const { lang, category, subcategory } = params;
  const articles = await getArticlesInSubcat(category, subcategory, false);
  return (
    <>
      <PageHeader lang={lang} text={text} />

      <Container background="bg-white">
        <div className="block w-full">
          <Header
            title={`${decodeURIComponent(subcategory)}`}
            breadcrumbs={[
              { name: 'Articles', href: '/articles' },
              {
                name: `${categoryDetails[lang][category].name}`,
                href: `/articles/${category}`,
              },
              { name: `${decodeURIComponent(subcategory)}`, href: '#' },
            ]}
          />
          {articles.length > 0 ? (
            <ul role="list" className="divide-y divide-gray-100">
              {articles.map((article: ArticleEntry) => (
                <li key={category} className="relative py-5 hover:bg-gray-50">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 ">
                          <p className="text-md font-semibold leading-6 text-gray-900">
                            <Link
                              href={`/${lang}/articles/pages/${article.slug}`}
                              className="text-md"
                            >
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {article.title}
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-x-4">
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>{text[lang].empty}</p>
          )}
        </div>
      </Container>
    </>
  );
}
