import { getAllEvents } from '@/lib/api';
import EventStatus from '@/lib/components/event-status';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';

export default async function SpecialEvents() {
  const allEvents = await getAllEvents(false);

  return (
    <div className="mx-auto block w-full">
      <h1 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl">
        Special Events
      </h1>
      <p className="text-md mt-2 leading-8 text-gray-600">
        Stay tuned for our special services!
      </p>

      <div className="mt-12 space-y-20 lg:mt-20 lg:space-y-20">
        {allEvents &&
          allEvents.slice(0, 3).map((event) => (
            <article
              key={event.slug}
              className="relative isolate flex flex-col gap-8 sm:flex-row"
            >
              <div className="relative aspect-[16/9] sm:w-1/2 sm:shrink-0 md:w-1/3">
                <ContentfulImage
                  src={event.poster.url}
                  alt=""
                  width={1152}
                  height={648}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <EventStatus date={event.date} />
              </div>
              <div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/events/${event.slug}`}>
                      <span className="absolute inset-0" />
                      {event.title}
                    </Link>
                  </h3>
                  {/* <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p> */}
                </div>
                <div className="flex flex-col items-start gap-x-4 text-xs">
                  <time dateTime={event.date} className="mt-2 text-gray-500">
                    {new Intl.DateTimeFormat('en-GB', {
                      timeZone: 'UTC',
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    }).format(new Date(event.date))}
                    -
                    {new Intl.DateTimeFormat('en-GB', {
                      timeZone: 'UTC',
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    }).format(
                      new Date(
                        new Date(event.date).getTime() + event.duration * 60000,
                      ),
                    )}
                  </time>
                  {event.date2 && (
                    <time dateTime={event.date} className="mt-2 text-gray-500">
                      {new Intl.DateTimeFormat('en-GB', {
                        timeZone: 'UTC',
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      }).format(new Date(event.date2))}
                      -
                      {new Intl.DateTimeFormat('en-GB', {
                        timeZone: 'UTC',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      }).format(
                        new Date(
                          new Date(event.date2).getTime() +
                            event.duration2 * 60000,
                        ),
                      )}
                    </time>
                  )}
                  <Link
                    href={`/events/${event.slug}`}
                    className="relative z-10 mt-3 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {event.church}
                  </Link>
                  <Link
                    href={`/events/${event.slug}`}
                    className="relative z-10 mt-3 text-sm font-medium text-button underline hover:text-button_hover"
                  >
                    Find out more
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}
