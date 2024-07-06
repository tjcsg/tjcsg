import Link from 'next/link';
import { draftMode } from 'next/headers';

import MoreStories from '../../more-stories';
import Avatar from '../../avatar';
import Date from '../../date';
import CoverImage from '../../cover-image';

import { Markdown } from '@/lib/markdown';
import { getAllEventsSlug, getEvent } from '@/lib/api';

export async function generateStaticParams() {
  const allPosts = await getAllEventsSlug(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { event } = await getEvent(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          {event.title}
        </h1>

        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage title={event.title} url={event.poster.url} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-lg">
            <Date dateString={event.date} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown content={event.summary} />
          </div>
        </div>
      </article>
    </div>
  );
}
