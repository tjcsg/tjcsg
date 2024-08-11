import { Locale } from '@/i18n-config';
import PageHeader from '@/lib/components/page-header';
import { getArticlesCategories } from '@/lib/api';
import {
  aof,
  Aof,
  categoryDetails,
  OtherCategories,
  otherCategories,
} from '@/lib/articles-of-faith';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Container from '@/lib/components/container';
import Header from '@/lib/components/header';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

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

async function ArticleDirectory({ lang }: { lang: Locale }) {
  const categoriesMap = await getArticlesCategories(false);

  return (
    <Container background="bg-white">
      <div className="block w-full">
        <Header title={'Our Basic Beliefs'} />

        {aof.map((category: Aof) => (
          <Disclosure as="div" className="-mx-3" key={category}>
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-4 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              {categoryDetails[lang][category].name}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
              />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
              {categoriesMap.get(category) &&
                Array.from(categoriesMap.get(category)).map((item: any) => (
                  <DisclosureButton
                    key={item}
                    as="a"
                    href={`/${lang}/articles/${category}/${item}`}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </DisclosureButton>
                ))}
            </DisclosurePanel>
          </Disclosure>
        ))}
        <Header title={'Other Articles'} />
        {otherCategories.map((category: OtherCategories) => (
          <Disclosure as="div" className="-mx-3" key={category}>
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-4 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              {categoryDetails[lang][category].name}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
              />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
              {categoriesMap.get(category) &&
                Array.from(categoriesMap.get(category)).map((item: any) => (
                  <DisclosureButton
                    key={item}
                    as="a"
                    href={`/${lang}/articles/${category}/${item}`}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item}
                  </DisclosureButton>
                ))}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </Container>
  );
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;

  return (
    <>
      <PageHeader lang={lang} text={text} />
      <ArticleDirectory lang={lang} />
    </>
  );
}
