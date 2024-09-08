import { Locale } from '@/i18n-config';
import {
  getAllCdbdBooks,
  getLatestArticles,
  getTotalArticles,
} from '@/lib/api';
import { bibleBooks, Book, books } from '@/lib/bible-books';
import AvatarLogo from '@/lib/components/avatar-logo';
import ContentfulImage from '@/lib/contentful-image';
import { obtainTextContent } from '@/lib/utils';
import Link from 'next/link';
import Pagination from '../../../lib/components/pagination';
import { redirect } from 'next/navigation';
import BookSelector from './book-selector';

const text = {
  en: {
    cta: 'Read More',
  },
  zh: {
    cta: 'Read More',
  },
};

export default async function CdbdList({
  lang,
  currentPage,
  maxItemsPerPage,
  tags = ['categoryCdbd'],
  redirectUrl = '/cdbd',
}: {
  lang: Locale;
  currentPage: number;
  maxItemsPerPage: number;
  tags?: string[];
  redirectUrl?: string;
}) {
  const totalItems = await getTotalArticles(lang, tags);
  const totalPages = Math.ceil(totalItems / maxItemsPerPage);

  if (currentPage > totalPages) {
    redirect(redirectUrl);
  }

  const allCdbd = await getLatestArticles(
    lang,
    maxItemsPerPage,
    (currentPage - 1) * maxItemsPerPage,
    tags,
  );

  const booksWithDevotionals = await getAllCdbdBooks();
  // Ensures the books in the Book selector are displayed in the correct order
  let cdbdBooks = books.filter((book: Book) =>
    booksWithDevotionals.some(
      (bookWithDevotionals) => bookWithDevotionals === book,
    ),
  );

  return (
    <>
      <div className="mb-8">
        <BookSelector cdbdBooks={cdbdBooks} lang={lang} />
      </div>
      {allCdbd &&
        allCdbd.map((article) => {
          const book = article.contentfulMetadata.tags
            .find((tag) => tag.id.startsWith('book'))
            ?.name.split('-')[1] as Book;

          return (
            <div key={article.slug} className="mb-16 flex flex-col md:flex-row">
              <div className="relative mb-6 aspect-[16/9] w-full flex-none md:mb-0 md:mr-8 md:max-w-72">
                <ContentfulImage
                  src={article.image.url}
                  alt=""
                  width={1152}
                  height={648}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="">
                <time
                  dateTime={article.date}
                  className="mt-2 text-sm text-gray-500"
                >
                  {new Intl.DateTimeFormat(`${lang}-SG`, {
                    timeZone: 'Singapore',
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                    hour12: true,
                  }).format(new Date(article.date))}
                </time>
                <Link
                  href={`/cdbd/${book}`}
                  className="ml-4 mt-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                >
                  {bibleBooks[book][lang]}
                </Link>
                <Link href={`/articles/${article.slug}`}>
                  <h1 className="mb-2 mt-2 text-xl font-bold">
                    {article.title}
                  </h1>
                </Link>
                <p className="text-md mb-1 line-clamp-3 text-gray-700">
                  {article.description !== null
                    ? article.description
                    : obtainTextContent(article.content)}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-6 text-sm font-medium text-button underline hover:text-button_hover"
                >
                  {text[lang].cta}
                </Link>
                {/* <div className="mt-3">
                  <AvatarLogo size={7} />
                  <p className="inline text-sm capitalize text-gray-600">
                    {article.author}
                  </p>
                </div> */}
              </div>
            </div>
          );
        })}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
