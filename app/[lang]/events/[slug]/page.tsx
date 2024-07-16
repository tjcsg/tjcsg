import Link from 'next/link';
import { draftMode } from 'next/headers';

import MoreStories from '../../more-stories';
import Avatar from '../../avatar';
import Date from '../../date';
import CoverImage from '../../cover-image';

import { Markdown } from '@/lib/markdown';
import { getAllEventsSlug, getEvent } from '@/lib/api';
import ContentfulImage from '@/lib/contentful-image';

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
    <div className="lg:container mx-auto px-5 max-w-screen-lg">
      <article>
        <div className='mx-auto max-w-2xl p-3'>
          <ContentfulImage src={event.poster.url} height={event.poster.height} width={event.poster.width} alt={event.poster.description} className='w-full'/>
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
