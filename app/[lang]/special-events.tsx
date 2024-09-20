import { Locale } from '@/i18n-config';
import { getAllEvents } from '@/lib/api';
import Container from '@/lib/components/container';
import Link from 'next/link';
import EventCard from '@/lib/components/event-card';

const text = {
  en: {
    title: 'Upcoming Events',
    subtitle:
      'Our special services are a great starting point for you to dive into specific topics from the Bible',
    viewall: 'View all events',
    cta: 'Find out more',
  },
  zh: {
    title: '特别聚会',
    subtitle: '欢迎您参加我们的特别聚会！',
    viewall: 'View all events',
    cta: '欲知更多详情',
  },
};

export default async function SpecialEvents({
  lang,
  background = 'bg-white',
  titleClasses = 'text-3xl font-bold tracking-tight md:text-4xl ',
  paragraphClasses = 'text-lg md:text-xl',
}: {
  lang: Locale;
  background?: string;
  titleClasses?: string;
  paragraphClasses?: string;
}) {
  const allEvents = await getAllEvents(lang, 2);

  return (
    <Container background={`${background}`}>
      <div className="mb-8 lg:mb-16">
        <h2 className={`text-gray-900 ${titleClasses}`}>{text[lang].title}</h2>
        <p className={`mt-2 text-pretty text-gray-600 ${paragraphClasses}`}>
          {text[lang].subtitle}
        </p>
        <p className="mt-2">
          <Link
            href="/events"
            className="text-xl leading-8 text-button underline hover:text-button_hover"
          >
            {text[lang].viewall}
          </Link>
        </p>
      </div>

      <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6 sm:w-full sm:grid-cols-2 sm:gap-x-8 lg:w-full lg:grid-cols-1 lg:gap-y-16">
        {allEvents &&
          allEvents.map((event) => (
            <EventCard key={event.slug} lang={'en'} event={event} />
          ))}
      </div>
    </Container>
  );
}
