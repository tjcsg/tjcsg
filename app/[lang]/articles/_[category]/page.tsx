import { getArticlesCategories, getArticlesSubcategories } from '@/lib/api';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import Container from '@/lib/components/container';
import { Aof, categoryDetails } from '@/lib/articles-of-faith';
import Header from '@/lib/components/header';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export const dynamic = 'force-static';
// export const dynamicParams = false;

export async function generateStaticParams() {
  const allCategories = await getArticlesCategories(false);

  return Array.from(allCategories.keys());
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
  params: { lang: Locale; category: Aof };
}) {
  const { lang, category } = params;
  const subcat = await getArticlesSubcategories(category, false);
  return (
    <>
      <PageHeader lang={lang} text={text} />

      <Container background="bg-white">
        <div className="block w-full">
          <Header
            title={`${categoryDetails[lang][category].name}`}
            breadcrumbs={[
              { name: 'Articles', href: '/articles' },
              { name: `${categoryDetails[lang][category].name}`, href: '#' },
            ]}
          />
          {subcat.length > 0 ? (
            <ul role="list" className="divide-y divide-gray-100">
              {subcat.map((subcat: string) => (
                <li key={category} className="relative py-5 hover:bg-gray-50">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 ">
                          <p className="text-md font-semibold leading-6 text-gray-900">
                            <Link
                              href={`./${category}/${subcat}`}
                              className="text-md"
                            >
                              <span className="absolute inset-x-0 -top-px bottom-0" />
                              {/* {categoryDetails[lang][category].name} */}
                              {subcat}
                            </Link>
                          </p>
                          <p className="mt-1 flex text-sm leading-5 text-gray-500">
                            {/* {getArticlesSubcat(category)} */}
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
