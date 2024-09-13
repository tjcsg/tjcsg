'use client';

import Link from 'next/link';
import { tagNameToText } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';

export default function ArticleTag({
  tag,
}: {
  tag: { name: string; id: string };
}) {
  const searchParams = useSearchParams();

  const createPageURL = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tags', tag);
    params.set('page', '1');
    return `/en/articles?${params.toString()}`;
  };
  return (
    <p
      key={tag.id}
      className="relative inline rounded-full bg-gray-100 px-2 py-1 text-sm capitalize text-gray-600 hover:bg-gray-200"
    >
      {tagNameToText(tag.name)}
      <Link className="absolute inset-0" href={createPageURL(tag.id)} />
    </p>
  );
}
