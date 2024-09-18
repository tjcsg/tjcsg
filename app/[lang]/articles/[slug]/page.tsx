import Link from 'next/link';
import { draftMode } from 'next/headers';

import { Markdown } from '@/lib/markdown';
import {
  ArticleEntry,
  getAllArticlesSlug,
  getAllCdbdSlugs,
  getArticle,
} from '@/lib/api';
import { notFound } from 'next/navigation';
import Header from '@/lib/components/header';
import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
import { bibleBooks, Book } from '@/lib/bible-books';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Metadata, ResolvingMetadata } from 'next';
import { openGraph } from '@/app/shared-metadata';
import { obtainTextContent } from '@/lib/utils';
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
    previous: 'Newer',
    next: 'Older',
  },
  zh: {
    seeAlso: 'See Also',
    previous: 'Newer',
    next: 'Older',
  },
};

async function ArticleHead({
  isCdbd,
  article,
  lang,
}: {
  isCdbd: boolean;
  article: ArticleEntry;
  lang: Locale;
}) {
  if (isCdbd) {
    const book = article.contentfulMetadata.tags
      .find((tag) => tag.id.startsWith('book'))
      ?.name.split('-')[1] as Book;

    return (
      <Header
        title={article.title}
        breadcrumbs={[
          // { name: 'Home', href: '/' },
          { name: 'All Articles', href: '/articles' },
          { name: 'Closer Day by Day', href: '/cdbd' },
          { name: bibleBooks[book][lang], href: `/cdbd/${book}` },
        ]}
      />
    );
  }

  return (
    <>
      <Header
        title={article.title}
        breadcrumbs={[
          // { name: 'Home', href: '/' },
          { name: 'Articles', href: '/articles' },
        ]}
      />
    </>
  );
}

async function ArticleFoot({
  isCdbd,
  article,
  lang,
}: {
  isCdbd: boolean;
  article: ArticleEntry;
  lang: Locale;
}) {
  if (isCdbd) {
    const cdbdSlugs = await getAllCdbdSlugs();
    const index = cdbdSlugs.findIndex(
      (cdbdSlug) => cdbdSlug.slug === article.slug,
    );

    return (
      <div className="text-md mt-6 flex justify-between text-button underline">
        {index > 0 ? (
          <Link
            href={`/articles/${cdbdSlugs[index - 1].slug}`}
            className="flex hover:text-button_hover"
          >
            <ChevronLeftIcon aria-hidden="true" className="block w-6" />
            {index > 0 && text[lang].previous}
          </Link>
        ) : (
          <p></p>
        )}
        {index < cdbdSlugs.length - 1 && (
          <Link
            href={`/articles/${cdbdSlugs[index + 1].slug}`}
            className="flex hover:text-button_hover"
          >
            {text[lang].next}
            <ChevronRightIcon aria-hidden="true" className="block w-6" />
          </Link>
        )}
      </div>
    );
  }

  return <></>;
}

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

  return (
    <div className="container mx-auto mb-8 mt-6 max-w-3xl px-6 sm:px-12">
      <ArticleHead isCdbd={isCdbd} article={article} lang={lang} />

      <article>
        {article.description && (
          <p className="text-md text-gray-500">{article.description}</p>
        )}
        {article.author && (
          <div className="text-md pt-2 italic text-gray-500">
            <p className="inline">{`Written by `}</p>
            {isCdbd ? (
              <Link
                href={`/cdbd/author/${article.author.toLowerCase().split(' ').join('-')}`}
                className="underline hover:text-gray-700"
              >
                <p className="inline">{article.author}</p>
              </Link>
            ) : (
              <p className="inline">{article.author}</p>
            )}
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

      <ArticleFoot isCdbd={isCdbd} article={article} lang={lang} />

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

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const { slug } = params;
  const article = await getArticle(slug, isEnabled);

  return {
    title: `${article.title}`,
    description: `${
      article.description !== null
        ? article.description
        : `${obtainTextContent(article.content).slice(0, 300)}...`
    }`,
    openGraph: {
      ...openGraph,
      title: `${article.title} | True Jesus Church`,
      description: `${
        article.description !== null
          ? article.description
          : `${obtainTextContent(article.content).slice(0, 300)}...`
      }`,
      images: [
        {
          url: article.image.url,
          width: article.image.width,
          height: article.image.height,
          alt: article.image.description,
        },
      ],
    },
  };
}
