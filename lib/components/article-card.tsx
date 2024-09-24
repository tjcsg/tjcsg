import { Locale } from '@/i18n-config';
import { ArticleEntry } from '@/lib/api';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';
import { obtainTextContent, tagNameToText } from '../utils';
import ArticleTag from './article-tag';

const text = {
  en: {
    cta: 'Read article',
  },
  zh: {
    cta: '阅读文章',
  },
};

export default function ArticleCard({
  lang,
  article,
}: {
  lang: Locale;
  article: ArticleEntry;
}) {
  const tags = article.contentfulMetadata.tags;
  return (
    <article
      key={article.slug}
      className="mx-auto flex w-full flex-col items-start xs:w-3/4 sm:w-full"
    >
      <Link
        href={`/articles/${article.slug}`}
        className="relative block aspect-[16/9] w-full"
      >
        <ContentfulImage
          src={article.image.url}
          alt={`Featured image of ${article.title}`}
          width={1152}
          height={648}
          className="absolute inset-0 h-full w-full rounded-t-xl border-x-2 border-t-2 bg-gray-50 object-cover"
          role="button"
        />
      </Link>
      <div className="w-full flex-1 rounded-b-xl border-x-2 border-b-2 px-3 py-3">
        <time dateTime={article.date} className="mt-4 text-sm text-gray-500">
          {new Intl.DateTimeFormat(`${lang}-SG`, {
            timeZone: 'Singapore',
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour12: true,
          }).format(new Date(article.date))}
        </time>

        <div className="flex flex-col items-start justify-start">
          <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </h3>
          <div className="mt-2 flex gap-2">
            {tags.map((tag) => (
              <ArticleTag key={tag.id} tag={tag} />
            ))}
          </div>
          <p className="mt-3 line-clamp-2 text-base leading-6 text-gray-600">
            {article.description !== null
              ? article.description
              : obtainTextContent(article.content)}
          </p>
          <Link href={`/${lang}/articles/${article.slug}`} className="">
            <p className="mt-3 font-medium text-button underline hover:text-button_hover">
              {text[lang].cta}
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}
