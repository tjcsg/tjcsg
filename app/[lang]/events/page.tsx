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

const MAX_ITEMS_PER_PAGE = 5;

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
    <Container background="bg-white">
      <div className="mx-auto block w-full sm:px-5">
        <Header
          title={'All Special Events'}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'All Special Events', href: '/events' },
          ]}
          className="mb-10"
        />

        <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6 sm:w-4/5 md:w-2/3  lg:w-full lg:gap-y-16">
          {allEvents &&
            allEvents.map((event) => (
              <EventCard key={event.slug} lang={'en'} event={event} />
            ))}
        </div>
        <div className="mt-10 flex w-full justify-center lg:mt-16">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </Container>
  );
}
