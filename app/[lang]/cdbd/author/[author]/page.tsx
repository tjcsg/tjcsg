import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import CdbdList from '../../cdbd-list';

const MAX_ITEMS_PER_PAGE = 8;

const text = {
  en: {
    back: 'Back to all CDBD Devotionals',
    all: 'All Devotionals by',
    cta: 'Read More',
  },
  zh: {
    back: '返回查看所有的每日读经文章',
    all: '所写的灵修文章',
    cta: '阅读文章',
  },
};

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
            href={`/${lang}/cdbd`}
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
          {lang === 'en'
            ? `${text[lang].all} ${author
                .split('-')
                .map((string) => string[0].toUpperCase() + string.slice(1))
                .join(' ')}`
            : `${author
                .split('-')
                .map((string) => string[0].toUpperCase() + string.slice(1))
                .join(' ')} ${text[lang].all} `}
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
