import Link from 'next/link';
import { draftMode } from 'next/headers';

import Date from '../../date';

import { Markdown } from '@/lib/markdown';
import { getAllEventsSlug, getEvent } from '@/lib/api';
import ContentfulImage from '@/lib/contentful-image';
import LinkButton from '@/lib/components/link-button';
import { Locale } from '@/i18n-config';

export async function generateStaticParams() {
  const allPosts = await getAllEventsSlug(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const text = {
  en: {
    physical: 'Attend in-person service',
    online: 'Watch livestream',
  },
  zh: {
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

  return (
    <div className="mx-auto max-w-screen-lg px-5 py-5 lg:container">
      <article className="mx-auto max-w-2xl">
        <div className="p-3">
          <ContentfulImage
            src={event.poster.url}
            height={event.poster.height}
            width={event.poster.width}
            alt={event.poster.description}
            className="w-full"
          />
        </div>
        <div className="flex flex-row gap-6">
          <LinkButton
            text={text[params.lang].physical}
            href={`/${params.lang}/locations`}
            type="default"
            className="flex-grow"
          />
          <LinkButton
            text={text[params.lang].online}
            href={`/${params.lang}/livestream/${event.church}`}
            type="inverse"
            className="flex-grow"
          />
        </div>
        <div>
          <div className="my-6 text-lg">
            <Date dateString={event.date} />
          </div>
        </div>

        <div>
          <div className="prose">
            <Markdown content={event.summary} />
          </div>
        </div>
      </article>
    </div>
  );
}
