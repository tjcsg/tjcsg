import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import CdbdList from './cdbd-list';

const MAX_ITEMS_PER_PAGE = 8;

const text = {
  en: {
    all: 'All Devotionals',
  },
  zh: {
    all: 'All Devotionals',
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

  return (
    <>
      <Container background="bg-white">
        <div className="block w-full max-w-screen-lg">
          <h1 className="mb-8 text-3xl font-bold">{text[lang].all}</h1>
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
