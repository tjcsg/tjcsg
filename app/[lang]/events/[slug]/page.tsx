import Link from 'next/link';
import { draftMode } from 'next/headers';
import Image from 'next/image';

import { Markdown } from '@/lib/markdown';
import { getAllEventsSlug, getEvent } from '@/lib/api';
import ContentfulImage from '@/lib/contentful-image';
import LinkButton from '@/lib/components/link-button';
import { Locale } from '@/i18n-config';
import { details } from '@/lib/church-details';
import Socials from '@/lib/components/socials';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';
import { Metadata, ResolvingMetadata } from 'next';
import { openGraph } from '@/app/shared-metadata';
import Breadcrumb from '@/lib/components/breadcrumb';

export async function generateStaticParams() {
  const allPosts = await getAllEventsSlug(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const pic = {
  adam: adamPic,
  tk: tkPic,
  sembawang: sembawangPic,
  serangoon: serangoonPic,
};

const text = {
  en: {
    title: 'Join us for our special service!',
    physical: 'Attend in-person service',
    online: 'Watch Livestream',
  },
  zh: {
    title: 'Join us for our special service!',
    physical: '参加实体崇拜聚会',
    online: '参加线上崇拜聚会',
  },
};

export default async function PostPage({
  params,
}: {
  params: { lang: Locale; slug: string };
}) {
  const { isEnabled } = draftMode();
  const { event } = await getEvent(params.slug, isEnabled);
  const { lang, slug } = params;
  const date: any = event.date;

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-5 py-5 md:pb-12 xl:flex-row xl:gap-16">
      <article className="mx-auto mb-2 mt-4 max-w-2xl basis-2/3 sm:mb-8 sm:mt-8 xl:mr-0">
        <Breadcrumb
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'All Events', href: '/events' },
            { name: event.title, href: `/events/${event.slug}` },
          ]}
        />
        <h1 className="mb-4 mt-2 text-4xl font-extrabold">
          {text[lang].title}
        </h1>
        <div className="py-3">
          <ContentfulImage
            src={event.poster.url}
            height={event.poster.height}
            width={event.poster.width}
            alt={event.poster.description}
            className="w-full"
          />
        </div>
        {event.ctaButtonText && (
          <LinkButton
            text={event.ctaButtonText}
            href={event.ctaButtonLink}
            type="inverse"
            className="w-full py-2 text-lg capitalize"
          />
        )}
        <div>
          <div className="my-6 flex flex-col text-lg">
            <time dateTime={event.date} className="mt-2 text-gray-500">
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
                  new Date(event.date).getTime() + event.duration * 60000,
                ),
              )}
            </time>
            {event.date2 && event.duration2 && (
              <time dateTime={event.date} className="mt-2 text-gray-500">
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
                    new Date(event.date2).getTime() + event.duration2 * 60000,
                  ),
                )}
              </time>
            )}
          </div>
        </div>

        <div className="prose max-w-full">
          <Markdown content={event.summary} />
        </div>
      </article>
      <div className="mx-auto max-w-2xl basis-1/3 xl:ml-0">
        <div className="mt-8">
          <h1 className="mb-6 text-4xl font-bold xl:hidden">Location</h1>
          <h1 className="mb-4 text-2xl font-bold">
            {details[lang][event.church].name}
          </h1>
          <p className="mb-4 text-gray-500">
            {details[lang][event.church].address}
          </p>
          <div className="flex flex-col md:flex-row xl:flex-col">
            <div className="min-h-72 w-full">
              <Image
                src={pic[details[lang][event.church].shortform]}
                className="h-full w-full object-cover"
                alt={`A picture of ${details[lang][event.church].name}'s exterior`}
              />
            </div>
            <iframe
              src={details[lang][event.church].map_src}
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-72 w-full max-w-full md:w-96 xl:w-full"
            ></iframe>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="mb-6 text-4xl font-bold xl:text-2xl">Who Are We</h1>
          <p className="mb-2 leading-7 text-gray-700">
            We’re the True Jesus Church, a global, non-denominational church
            built upon the teachings of Jesus and His apostles. Founded by the
            Holy Spirit, our mission is to spread the complete gospel of
            salvation to the ends of the earth.
          </p>
          <Link
            className={
              'text-nowrap font-medium text-button underline decoration-2 hover:text-button_hover sm:leading-4'
            }
            href={'/about'}
          >
            {'Learn more about us'}
          </Link>
          <p className="mb-2 mt-6 leading-7 text-gray-700">
            We have four places of worship, and we gather for Sabbath and night
            worship services. We welcome you to join us for any of our in-person
            services!
          </p>
          <Link
            className={
              'text-nowrap font-medium text-button underline decoration-2 hover:text-button_hover sm:leading-4'
            }
            href={'/locations'}
          >
            {'Worship with us'}
          </Link>
        </div>
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Follow us on social media</h2>
          <Socials size={6} colour={'text-gray-600'} />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const { event } = await getEvent(params.slug, isEnabled);

  return {
    title: `${event.title}${event.title2 ? ` & ${event.title2}` : ''}`,
    openGraph: {
      ...openGraph,
      title: `${event.title}${event.title2 ? ` & ${event.title2}` : ''} | True Jesus Church`,
      images: [
        {
          url: event.poster.url,
          width: event.poster.width,
          height: event.poster.height,
          alt: event.poster.description,
        },
      ],
      description: `Curious to find out more? We warmly welcome you to join us on ${new Intl.DateTimeFormat(
        `en-SG`,
        {
          timeZone: 'Singapore',
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        },
      ).format(new Date(event.date))}${
        event.date2
          ? ` and ${new Intl.DateTimeFormat(`en-SG`, {
              timeZone: 'Singapore',
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            }).format(new Date(event.date2))}`
          : ``
      }.`,
    },
  };
}
