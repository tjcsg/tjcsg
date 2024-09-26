import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import CdbdList from './cdbd-list';
import { getAllCdbdBooks } from '@/lib/api';
import { Book, books } from '@/lib/bible-books';
import BookSelector from './book-selector';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';

const MAX_ITEMS_PER_PAGE = 8;

const text = {
  en: {
    all: 'All Devotionals',
  },
  zh: {
    all: '所有每日读经的灵修文章',
  },
};

export default async function Page({
  params,
  searchParams,
}: {
  params: {
    lang: Locale;
  };
  searchParams?: {
    page?: string;
  };
}) {
  const { lang } = params;
  const currentPage = Number(searchParams?.page) || 1;

  const booksWithDevotionals = await getAllCdbdBooks();
  // Ensures the books in the Book selector are displayed in the correct order
  let cdbdBooks = books.filter((book: Book) =>
    booksWithDevotionals.some(
      (bookWithDevotionals) => bookWithDevotionals === book,
    ),
  );

  return (
    <>
      <Container>
        <div className="max-w-screen-lg">
          <h1 className="mb-8 text-3xl font-bold">{text[lang].all}</h1>
          <div className="mb-8">
            <BookSelector cdbdBooks={cdbdBooks} lang={lang} />
          </div>
          <CdbdList
            lang={lang}
            currentPage={currentPage}
            maxItemsPerPage={MAX_ITEMS_PER_PAGE}
          />
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Closer Day By Day',
  description:
    'Drawing closer to Jesus through His words. Come and study the Bible with us!',
  openGraph: {
    ...openGraph,
    title: 'Closer Day By Day | True Jesus Church',
    description:
      'Drawing closer to Jesus through His words. Come and study the Bible with us!',
  },
};
