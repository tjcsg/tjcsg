import Link from 'next/link';
import { draftMode } from 'next/headers';

import { Markdown } from '@/lib/markdown';
import { getAllArticlesSlug, getArticle } from '@/lib/api';
import { notFound } from 'next/navigation';
import Header from '@/lib/components/header';
import { categoryDetails } from '@/lib/articles-of-faith';
import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
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
  const { doctrine } = article.category;
  const relatedArticles = article.relatedArticlesCollection?.items;

  return (
    <div className="container mx-auto mb-8 max-w-3xl px-6 sm:px-12">
      <Header
        title={article.title}
        breadcrumbs={[
          { name: 'Articles', href: '/articles' },
          {
            name: categoryDetails[lang][doctrine].name,
            href: `/articles/${doctrine}`,
          },
          {
            name: article.category.subcategory,
            href: `/articles/${doctrine}/${article.category.subcategory}`,
          },
          {
            name: article.title,
            href: `./${article.slug}`,
          },
        ]}
      />
      <article>
        <ContentfulImage
          src={article.image.url}
          height={article.image.height}
          width={article.image.width}
          alt={article.image.description}
          className="w-full py-8"
        />
        <div className="prose max-w-none">
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
