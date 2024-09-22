import Link from 'next/link';
import { getAllEvents, getTotalEvents } from '@/lib/api';
import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';
import ContentfulImage from '@/lib/contentful-image';
import EventStatus from '@/lib/components/event-status';
import { details } from '@/lib/church-details';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { redirect } from 'next/navigation';
import Pagination from '@/lib/components/pagination';
import Header from '@/lib/components/header';
import EventCard from '@/lib/components/event-card';
import { openGraph } from '@/app/shared-metadata';
import { Metadata } from 'next';

const MAX_ITEMS_PER_PAGE = 6;

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

  const totalItems = await getTotalEvents();
  const totalPages = Math.ceil(totalItems / MAX_ITEMS_PER_PAGE);

  if (currentPage > totalPages) {
    redirect('/events');
  }

  const allEvents = await getAllEvents(
    lang,
    MAX_ITEMS_PER_PAGE,
    (currentPage - 1) * MAX_ITEMS_PER_PAGE,
  );

  return (
    <Container>
      <div className="sm:px-5">
        <Header
          title={'All Special Events'}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'All Events', href: '/events' },
          ]}
          className="mb-10"
        />
      </div>
      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6 sm:w-full sm:grid-cols-2 sm:gap-x-8 lg:w-full lg:grid-cols-1 lg:gap-y-16">
        {allEvents &&
          allEvents.map((event) => (
            <EventCard key={event.slug} lang={'en'} event={event} />
          ))}
      </div>
      <div className="mt-10 flex w-full justify-center lg:mt-16">
        <Pagination totalPages={totalPages} />
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: 'Upcoming Events',
  openGraph: {
    ...openGraph,
    title: 'Upcoming Events | True Jesus Church',
  },
};
