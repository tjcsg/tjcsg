import { details } from '@/lib/church-details';
import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import { getArticlesCategories, getArticlesSubcategories } from '@/lib/api';
import { aof, Aof, aofDetails } from '@/lib/articles-of-faith';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Container from '@/lib/components/container';

const text = {
  en: {
    title: 'Articles',
    subtitle:
      'We welcome you to join us at one of our four churches in Singapore.',
    eyebrow: 'Study with us',
  },
  zh: {
    title: 'Articles',
    subtitle:
      'We welcome you to join us at one of our four churches in Singapore.',
    eyebrow: 'Study with us',
  },
};

async function getArticlesSubcat(aof: Aof) {
  const subcat = await getArticlesSubcategories(aof, false);
  return subcat.join(' | ');
}

async function BasicBeliefs({ lang }: { lang: Locale }) {
  const subCategories = await getArticlesCategories(false);

  return (
    <Container background="bg-white">
      <div className="block w-full">
        <div>
          <h2 className="pb-4 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:pl-8 sm:text-3xl sm:tracking-tight">
            Our Basic Beliefs
          </h2>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {aof.map((category: Aof) => (
            <li key={category} className="relative py-5 hover:bg-gray-50">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
                  <div className="flex min-w-0 gap-x-4">
                    {/* <img
                    alt=""
                    src={person.imageUrl}
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  /> */}
                    <div className="min-w-0 ">
                      <p className="text-md font-semibold leading-6 text-gray-900">
                        <Link
                          href={`./articles/${category}`}
                          className="text-md"
                        >
                          <span className="absolute inset-x-0 -top-px bottom-0" />
                          {aofDetails[lang][category].name}
                        </Link>
                      </p>
                      <p className="mt-1 flex text-sm leading-5 text-gray-500">
                        {getArticlesSubcat(category)}
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
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;

  return (
    <>
      <PageHeader lang={lang} text={text} />
      <BasicBeliefs lang={lang} />
    </>
  );
}
