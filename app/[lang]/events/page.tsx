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

const MAX_ITEMS_PER_PAGE = 5;

const text = {
  en: {
    cta: 'Find out more',
  },
  zh: {
    cta: '欲知更多详情',
  },
};

function DateAndTime({
  date,
  duration,
  lang,
}: {
  date: string;
  duration: number;
  lang: Locale;
}) {
  return (
    <>
      <time
        dateTime={date}
        className="text-md mt-2 font-semibold text-gray-500"
      >
        {new Intl.DateTimeFormat(`${lang}-SG`, {
          timeZone: 'Singapore',
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(date))}{' '}
        {new Intl.DateTimeFormat(`${lang}-SG`, {
          timeZone: 'Singapore',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date(date))}
        -
        {new Intl.DateTimeFormat(`${lang}-SG`, {
          timeZone: 'Singapore',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date(new Date(date).getTime() + duration * 60000))}
      </time>
    </>
  );
}

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
      <div className="container mx-auto max-w-screen-lg sm:px-5">
        <Header
          title={'All Special Events'}
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'All Special Events', href: '/events' },
          ]}
          className="mb-10"
        />

        <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6  sm:w-3/4 md:w-3/5 lg:w-full lg:gap-y-16">
          {allEvents &&
            allEvents.map((event) => {
              const church = event.church as
                | 'adam'
                | 'tk'
                | 'sembawang'
                | 'serangoon';
              return (
                <div
                  key={event.slug}
                  className={`mx-auto flex w-full flex-col justify-start rounded-2xl border border-neutral-300 bg-neutral-100 pb-4 lg:flex-row lg:pb-0`}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <ContentfulImage
                      src={event.poster.url}
                      alt=""
                      width={1152}
                      height={648}
                      className={`absolute inset-0 h-full w-full rounded-t-2xl bg-gray-50 object-cover  lg:h-full lg:rounded-l-2xl lg:rounded-r-none`}
                    />
                    <EventStatus date={event.date} lang={lang} />
                  </div>
                  <div
                    className={` px-4 py-2 sm:py-4 lg:px-8 ${event.title2 ? 'lg:py-4' : 'lg:py-8'}`}
                  >
                    <div className="flex flex-col items-start justify-start text-xs">
                      <div className="relative max-w-xl">
                        <h3 className="mt-2 text-2xl font-semibold text-gray-900 hover:text-gray-600">
                          <Link href={`/events/${event.slug}`}>
                            {event.title}
                          </Link>
                        </h3>
                      </div>
                      <DateAndTime
                        date={event.date}
                        duration={event.duration}
                        lang={lang}
                      />
                      {event.title2 && (
                        <h3 className="mt-4 text-2xl font-semibold text-gray-900 hover:text-gray-600">
                          <Link href={`/events/${event.slug}`}>
                            {event.title2}
                          </Link>
                        </h3>
                      )}
                      {event.date2 && event.duration2 && (
                        <DateAndTime
                          date={event.date2}
                          duration={event.duration2}
                          lang={lang}
                        />
                      )}
                      <div className="text-md mt-6 font-medium text-gray-600">
                        <MapPinIcon className="mb-1 mr-1 inline w-4" />
                        <p className="mt-6 inline">
                          {details[lang][church].name}
                        </p>
                        <p className="mt-2 pl-5">
                          {details[lang][church].address}
                        </p>
                      </div>
                      <Link
                        href={`/events/${event.slug}`}
                        className="relative z-10 mt-3 text-sm font-medium text-button underline hover:text-button_hover"
                      >
                        {text[lang].cta}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mt-10 flex w-full justify-center lg:mt-16">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </Container>
  );
}
