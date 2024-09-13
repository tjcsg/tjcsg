import { Locale } from '@/i18n-config';
import { getAllEvents } from '@/lib/api';
import { details } from '@/lib/church-details';
import Container from '@/lib/components/container';
import EventStatus from '@/lib/components/event-status';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/20/solid';
import EventCard from '@/lib/components/event-card';

const text = {
  en: {
    title: 'Special Events',
    subtitle: 'Stay tuned for our special services!',
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
  background,
}: {
  lang: Locale;
  background: string;
}) {
  const allEvents = await getAllEvents(lang);

  return (
    <Container background={`${background}`}>
      <div className="mx-auto block w-full">
        <div className="mb-8 lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {text[lang].title}
          </h2>
          <p className="mt-2 text-xl leading-8 text-gray-600">
            {text[lang].subtitle}
          </p>
          <Link href="/events">
            <p className="mt-2 text-xl leading-8 text-button underline hover:text-button_hover">
              {text[lang].viewall}
            </p>
          </Link>
        </div>
        <div className="mx-auto mt-4 grid w-full grid-cols-1 gap-y-10 pt-1 xs:w-5/6 sm:w-4/5 md:w-2/3 lg:w-full lg:gap-y-16">
          {allEvents &&
            allEvents
              .slice(0, 3)
              .map((event) => (
                <EventCard key={event.slug} lang={'en'} event={event} />
              ))}
        </div>
      </div>
    </Container>
  );
}
