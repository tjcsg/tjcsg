import { Locale } from '@/i18n-config';
import { EventEntry } from '@/lib/api';
import ContentfulImage from '@/lib/contentful-image';
import EventStatus from '@/lib/components/event-status';
import Link from 'next/link';
import MapPinIcon from '@heroicons/react/24/outline/MapPinIcon';
import { details } from '@/lib/church-details';

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
        className="text-md mt-2 font-semibold text-gray-500 sm:text-lg"
      >
        {new Intl.DateTimeFormat(`${lang}-SG`, {
          timeZone: 'Singapore',
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(date))}{' '}
        {/* </time>
      <time dateTime={date} className="text-lg font-semibold text-gray-500"> */}
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

function Title({ title, slug }: { title: string; slug: string }) {
  return (
    <h3 className="mt-2 text-2xl font-semibold text-gray-900 hover:text-gray-600 sm:text-3xl">
      <Link href={`/events/${slug}`}>{title}</Link>
    </h3>
  );
}

export default async function EventCard({
  lang,
  event,
}: {
  lang: Locale;
  event: EventEntry;
}) {
  const church = event.church as 'adam' | 'tk' | 'sembawang' | 'serangoon';
  return (
    <div
      key={event.slug}
      className={`mx-auto flex w-full flex-col justify-start rounded-2xl border border-neutral-300 bg-neutral-100 pb-4 lg:flex-row lg:pb-0`}
    >
      <div className="relative aspect-[16/9] w-full lg:block lg:basis-3/4 lg:overflow-hidden lg:pt-[56.25] min-[1100px]:basis-7/12 xl:basis-1/2">
        <ContentfulImage
          src={event.poster.url}
          alt=""
          width={1152}
          height={648}
          className={`absolute inset-0 h-full w-full rounded-t-2xl bg-gray-50 object-cover lg:rounded-l-2xl lg:rounded-r-none`}
        />
        <EventStatus date={event.date} lang={lang} />
      </div>

      <div
        className={` px-4 py-2 sm:py-4 lg:min-h-[260px] lg:w-2/3 lg:px-8 lg:py-2 min-[1100px]:py-4 ${event.title2 ? `` : `lg:mt-6`}`}
      >
        <div className="flex flex-col items-start justify-start text-xs">
          <Title title={event.title} slug={event.slug} />
          <DateAndTime
            date={event.date}
            duration={event.duration}
            lang={lang}
          />

          {event.title2 && <Title title={event.title2} slug={event.slug} />}
          {event.date2 && event.duration2 && (
            <DateAndTime
              date={event.date2}
              duration={event.duration2}
              lang={lang}
            />
          )}

          <div className="text-md mt-3 font-medium text-gray-600 sm:text-lg">
            <MapPinIcon className="mb-1 mr-2 inline w-4" />
            <p className=" mt-2 inline">{details[lang][church].address}</p>
          </div>
          <Link
            href={`/events/${event.slug}`}
            className="text-md relative z-10 mt-3 font-medium text-button underline hover:text-button_hover sm:text-lg"
          >
            {text[lang].cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
