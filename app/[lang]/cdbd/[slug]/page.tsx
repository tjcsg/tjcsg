import { draftMode } from 'next/headers';
import { Markdown } from '@/lib/markdown';
import { getAllCDBDSlug, getCDBD } from '@/lib/api';
import { notFound } from 'next/navigation';
import Header from '@/lib/components/header';
import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
export const dynamic = 'force-static';
// export const dynamicParams = false;

export async function generateStaticParams() {
  const allArticles = await getAllCDBDSlug(false);

  return allArticles.map((cdbd) => ({
    slug: cdbd.slug,
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
  const cdbd = await getCDBD(slug, isEnabled, lang);

  if (!cdbd) {
    notFound();
  }

  return (
    <div className="container mx-auto mb-8 max-w-3xl px-6 sm:px-12">
      <Header
        title={cdbd.title}
        breadcrumbs={[
          { name: 'Closer Day By Day', href: '/cdbd' },
          //   {
          //     name: cdbd.book,
          //     href: `/cdbd/${cdbd.book}`,
          //   },
          {
            name: cdbd.title,
            href: `./${cdbd.slug}`,
          },
        ]}
      />
      <article>
        <ContentfulImage
          src={cdbd.image.url}
          height={cdbd.image.height}
          width={cdbd.image.width}
          alt={cdbd.image.description}
          className="w-full py-8"
        />
        <div className="prose max-w-none">
          <Markdown content={cdbd.content} />
        </div>
      </article>
    </div>
  );
}
