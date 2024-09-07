import Link from 'next/link';
import { draftMode } from 'next/headers';

import { Markdown } from '@/lib/markdown';
import { getAllArticlesSlug, getArticle } from '@/lib/api';
import { notFound } from 'next/navigation';
import Header from '@/lib/components/header';
import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
import AvatarLogo from '@/lib/components/avatar-logo';
import { bibleBooks, books } from '@/lib/bible-books';
export const dynamic = 'force-static';
// export const dynamicParams = false;

export async function generateStaticParams() {
  const allArticles = await getAllArticlesSlug(false);

  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

const text = {
  en: {
    seeAlso: 'See Also',
  },
  zh: {
    seeAlso: 'See Also',
  },
};

export default async function PostPage({
  params,
}: {
  params: { slug: string; lang: Locale };
}) {
  const { isEnabled } = draftMode();
  const { slug, lang } = params;
  const article = await getArticle(slug, isEnabled);

  if (!article) {
    notFound();
  }
  const relatedArticles = article.relatedArticlesCollection?.items;
  let isCdbd = article.contentfulMetadata.tags.some(
    (tag) => tag.id === 'categoryCdbd',
  );
  const book = article.contentfulMetadata.tags
    .find((tag) => tag.id.startsWith('book'))
    ?.name.split('-')[1] as (typeof books)[number];

  return (
    <div className="container mx-auto mb-8 max-w-3xl px-6 sm:px-12">
      {isCdbd ? (
        <Header
          title={article.title}
          breadcrumbs={[
            { name: 'Closer Day by Day', href: '/cdbd' },
            { name: bibleBooks[book][lang], href: `/cdbd/${book}` },
            // {
            //   name: article.title,
            //   href: `./${article.slug}`,
            // },
          ]}
        />
      ) : (
        <Header
          title={article.title}
          breadcrumbs={[
            { name: 'Articles', href: '/articles' },
            // {
            //   name: article.title,
            //   href: `./${article.slug}`,
            // },
          ]}
        />
      )}
      <article>
        {article.description && (
          <p className="text-md text-gray-500">{article.description}</p>
        )}
        {article.author && (
          <div className="pt-2">
            {/* <AvatarLogo size={7} /> */}
            <p className="text-md italic text-gray-500">{`Written by ${article.author}`}</p>
          </div>
        )}

        <time
          dateTime={article.date}
          className="text-md mt-3 italic text-gray-500"
        >
          {new Intl.DateTimeFormat(`${lang}-SG`, {
            timeZone: 'Singapore',
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour12: true,
          }).format(new Date(article.date))}
        </time>
        <ContentfulImage
          src={article.image.url}
          height={article.image.height}
          width={article.image.width}
          alt={article.image.description}
          className="w-full py-6"
        />

        <div className="prose mb-3 max-w-none">
          <Markdown content={article.content} />
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <div>
          <h3 className="mt-8 text-nowrap text-lg font-semibold">
            {text[lang].seeAlso}
          </h3>
          {relatedArticles.map((relatedArticle) => (
            <Link key={relatedArticle.slug} href={relatedArticle.slug}>
              <p className="mt-2 hover:text-button hover:underline">
                {relatedArticle.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
