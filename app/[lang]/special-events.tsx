import { Locale } from '@/i18n-config';
import { getAllEvents } from '@/lib/api';
import Container from '@/lib/components/container';
import EventStatus from '@/lib/components/event-status';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';

const text = {
  en: {
    title: 'Special Events',
    subtitle: 'Stay tuned for our special services!',
    cta: 'Find out more',
  },
  zh: {
    title: '特别聚会',
    subtitle: '欢迎您参加我们的特别聚会！',
    cta: '欲知更多详情',
  },
};

export default async function SpecialEvents({
  lang,
  background,
}: {
  lang: Locale;
  background: string;
}) {
  const allEvents = await getAllEvents(false, lang);

  return (
    <Container background={`${background}`}>
      <div className="mx-auto block w-full">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {text[lang].title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {text[lang].subtitle}
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 border-t pt-12 md:mx-0 md:max-w-none md:grid-cols-3">
          {allEvents &&
            allEvents.slice(0, 3).map((event) => (
              <article
                key={event.slug}
                className="mx-auto flex w-11/12 flex-col items-start xs:w-2/3 md:w-full"
              >
                <div className="relative aspect-[16/9] w-full">
                  <ContentfulImage
                    src={event.poster.url}
                    alt=""
                    width={1152}
                    height={648}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <EventStatus date={event.date} lang={lang} />
                </div>
                <div className="max-w-xl">
                  <div>
                    <div className="relative max-w-xl">
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
                        <Link href={`${lang}/events/${event.slug}`}>
                          <span className="absolute inset-0" />
                          {event.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="flex flex-col items-start justify-start text-xs">
                      <time
                        dateTime={event.date}
                        className="mt-2 text-gray-500"
                      >
                        {new Intl.DateTimeFormat(`${lang}-SG`, {
                          timeZone: 'Singapore',
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }).format(new Date(event.date))}
                        -
                        {new Intl.DateTimeFormat(`${lang}-SG`, {
                          timeZone: 'Singapore',
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        }).format(
                          new Date(
                            new Date(event.date).getTime() +
                              event.duration * 60000,
                          ),
                        )}
                      </time>
                      {event.date2 && (
                        <time
                          dateTime={event.date}
                          className="mt-2 text-gray-500"
                        >
                          {new Intl.DateTimeFormat(`${lang}-SG`, {
                            timeZone: 'Singapore',
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          }).format(new Date(event.date2))}
                          -
                          {new Intl.DateTimeFormat(`${lang}-SG`, {
                            timeZone: 'Singapore',
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
                        href={`${lang}/events/${event.slug}`}
                        className="relative z-10 mt-3 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {event.church}
                      </Link>
                      <Link
                        href={`${lang}/events/${event.slug}`}
                        className="relative z-10 mt-3 text-sm font-medium text-button underline hover:text-button_hover"
                      >
                        {text[lang].cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
      {/* </div>
      </div> */}
    </Container>
  );
}
