import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import Link from 'next/link';
import { booksNoConst } from '@/lib/bible-books';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import CdbdList from '../../cdbd-list';
import { getAllCdbdAuthors } from '@/lib/api';
export const dynamic = 'force-static';

const MAX_ITEMS_PER_PAGE = 8;

const text = {
  en: {
    back: 'Back to all CDBD Devotionals',
    all: 'All Devotionals by',
    cta: 'Read More',
  },
  zh: {
    back: 'Back to all CDBD Devotionals',
    all: 'All Devotionals by',
    cta: 'Read More',
  },
};

export async function generateStaticParams() {
  const authors = await getAllCdbdAuthors();
  return authors;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { lang: Locale; author: string };
  searchParams?: {
    page?: string;
  };
}) {
  const { lang, author } = params;
  const currentPage = Number(searchParams?.page) || 1;
  let author_Text = author.split('-').join(' ');
  author_Text = author_Text[0].toUpperCase() + author_Text.slice(1);

  return (
    <Container>
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
          {`${text[lang].all} ${author
            .split('-')
            .map((string) => string[0].toUpperCase() + string.slice(1))
            .join(' ')}`}
        </h1>

        <CdbdList
          lang={lang}
          currentPage={currentPage}
          maxItemsPerPage={MAX_ITEMS_PER_PAGE}
          tags={['categoryCdbd']}
          redirectUrl={`/cdbd/author/${author}`}
          author={author_Text}
        />
      </div>
    </Container>
  );
}
