import {
  getAllPastEvents,
  getAllUpcomingEvents,
  getTotalPastEvents,
} from '@/lib/api';
import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import { redirect } from 'next/navigation';
import Pagination from '@/lib/components/pagination';
import Header from '@/lib/components/header';
import EventCard from '@/lib/components/event-card';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';

const MAX_ITEMS_PER_PAGE = 6;

const text = {
  en: {
    home: 'Home',
    allEvents: 'All Events',
    allSpecialEvents: 'All Special Events',
    upcomingEvents: 'Upcoming Events',
    pastEvents: 'Past Events',
  },
  zh: {
    home: '主页',
    allEvents: '所有的特别聚会',
    allSpecialEvents: '所有的特别聚会',
    upcomingEvents: '即将到来的特别聚会',
    pastEvents: '已结束的特别聚会',
  },
};

export default async function EventsPage({
  params,
  searchParams,
}: {
  params: { slug: string; lang: Locale };
  searchParams?: {
    page?: string;
  };
}) {
  const { lang } = params;

  const currentPage = Number(searchParams?.page) || 1;

  const totalItems = await getTotalPastEvents(
    new Date(Date.now()).toISOString().split('T')[0],
  );
  const totalPages = Math.ceil(totalItems / MAX_ITEMS_PER_PAGE);

  if (currentPage > totalPages) {
    redirect('/events');
  }

  const allUpcomingEvents = await getAllUpcomingEvents(
    lang,
    new Date(Date.now()).toISOString().split('T')[0],
  );

  const allPastEvents = await getAllPastEvents(
    lang,
    new Date(Date.now()).toISOString().split('T')[0],
    MAX_ITEMS_PER_PAGE,
    (currentPage - 1) * MAX_ITEMS_PER_PAGE,
  );

  return (
    <Container>
      <Header
        title={text[lang].allSpecialEvents}
        breadcrumbs={[
          { name: text[lang].home, href: '/' },
          { name: text[lang].allSpecialEvents, href: '/events' },
        ]}
        className="mb-10"
      />
      <h2 className="mb-8 text-2xl font-bold capitalize lg:text-3xl">
        {text[lang].upcomingEvents}
      </h2>
      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6 sm:w-full sm:grid-cols-2 sm:gap-x-8 lg:w-full lg:grid-cols-1 lg:gap-y-16">
        {allUpcomingEvents &&
          allUpcomingEvents.map((event) => (
            <EventCard key={event.slug} lang={lang} event={event} />
          ))}
      </div>
      <h2
        id="past"
        className="mb-8 mt-12 text-2xl font-bold capitalize lg:text-3xl"
      >
        {text[lang].pastEvents}
      </h2>
      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6 sm:w-full sm:grid-cols-2 sm:gap-x-8 lg:w-full lg:grid-cols-1 lg:gap-y-16">
        {allPastEvents &&
          allPastEvents.map((event) => (
            <EventCard key={event.slug} lang={lang} event={event} />
          ))}
      </div>
      <div className="mt-10 flex w-full justify-center lg:mt-16">
        <Pagination totalPages={totalPages} hrefId="past" />
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Upcoming Events',
  openGraph: {
    ...openGraph,
    title: 'Upcoming Events | True Jesus Church',
    url: `https://tjc.sg/events`,
  },
};
