import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import Link from 'next/link';
import { bibleBooks, books } from '@/lib/bible-books';
import AvatarLogo from '@/lib/components/avatar-logo';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import CdbdList from '../cdbd-list';
// export const dynamic = 'force-static';

const MAX_ITEMS_PER_PAGE = 5;

const text = {
  en: {
    back: 'Back to all CDBD Devotionals',
    cta: 'Read More',
  },
  zh: {
    back: 'Back to all CDBD Devotionals',
    cta: 'Read More',
  },
};

// This function converts the bible book slug into the Contentful tag (e.g. 1-samuel to book1Samuel)
function slugToContentfulTag(string: String) {
  let arr = string.split('-');

  arr[arr.length - 1] =
    arr[arr.length - 1].charAt(0).toUpperCase() + arr[arr.length - 1].slice(1);

  return `book${arr.join('')}`;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: Locale; book: (typeof books)[number] };
  searchParams?: {
    page?: string;
  };
}) {
  const { lang, book } = params;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Container background="bg-white">
        <div className="block w-full max-w-screen-lg">
          <nav aria-label="Back" className="mb-4">
            <Link
              href={'/cdbd'}
              className="text-md flex items-center font-medium text-gray-500 hover:text-gray-700"
            >
              <ChevronLeftIcon
                aria-hidden="true"
                className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              {text[lang].back}
            </Link>
          </nav>

          <h1 className="mb-8 text-3xl font-bold">
            All devotionals for {bibleBooks[book][lang]}
          </h1>
          <CdbdList
            lang={lang}
            currentPage={currentPage}
            maxItemsPerPage={MAX_ITEMS_PER_PAGE}
            tags={['categoryCdbd', slugToContentfulTag(book)]}
            redirectUrl={`/cdbd/${book}`}
          />
        </div>
      </Container>
    </>
  );
}
