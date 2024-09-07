import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import { books } from '@/lib/bible-books';
import CdbdList from './cdbd-list';

export async function generateStaticParams() {
  return books;
}

const MAX_ITEMS_PER_PAGE = 8;

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

  return (
    <>
      <Container background="bg-white">
        <div className="block w-full max-w-screen-lg">
          <h1 className="mb-8 text-3xl font-bold">All devotionals</h1>
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
