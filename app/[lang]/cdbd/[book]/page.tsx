import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import Link from 'next/link';
import { bibleBooks, Book, books, booksNoConst } from '@/lib/bible-books';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import CdbdList from '../cdbd-list';
import { slugToContentfulTag } from '@/lib/utils';
import { getAllCdbdBooks } from '@/lib/api';
import BookSelector from '../book-selector';

const MAX_ITEMS_PER_PAGE = 8;

const text = {
  en: {
    back: 'Back to all CDBD Devotionals',
    all: 'All Devotionals for',
    cta: 'Read More',
  },
  zh: {
    back: 'Back to all CDBD Devotionals',
    all: 'All Devotionals for',
    cta: 'Read More',
  },
};

export async function generateStaticParams() {
  return booksNoConst;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: Locale; book: Book };
  searchParams?: {
    page?: string;
  };
}) {
  const { lang, book } = params;
  const currentPage = Number(searchParams?.page) || 1;

  const booksWithDevotionals = await getAllCdbdBooks();
  // Ensures the books in the Book selector are displayed in the correct order
  let cdbdBooks = books.filter((book: Book) =>
    booksWithDevotionals.some(
      (bookWithDevotionals) => bookWithDevotionals === book,
    ),
  );

  return (
    <Container>
      <div className="max-w-screen-lg">
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
          {`${text[lang].all} ${bibleBooks[book][lang]}`}
        </h1>
        <div className="mb-8">
          <BookSelector cdbdBooks={cdbdBooks} lang={lang} />
        </div>
        <CdbdList
          lang={lang}
          currentPage={currentPage}
          maxItemsPerPage={MAX_ITEMS_PER_PAGE}
          tags={['categoryCdbd', `book${slugToContentfulTag(book)}`]}
          redirectUrl={`/cdbd/${book}`}
        />
      </div>
    </Container>
  );
}
