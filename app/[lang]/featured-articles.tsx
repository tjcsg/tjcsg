import { Locale } from '@/i18n-config';
import { getLatestArticles } from '@/lib/api';
import Container from '@/lib/components/container';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';

const text = {
  en: {
    title: 'Latest Articles',
    subtitle: 'Read our latest articles here!',
    cta: 'Read article',
  },
  zh: {
    title: '特别聚会',
    subtitle: '欢迎您参加我们的特别聚会！',
    cta: 'Read article',
  },
};

export default async function FeaturedArticles({ lang }: { lang: Locale }) {
  const articles = await getLatestArticles(3, false);
  return (
    <Container background="">
      <div className="mx-auto block w-full">
        <div className="mx-auto max-w-2xl md:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {text[lang].title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {text[lang].subtitle}
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-12 md:mx-0 md:max-w-none md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="mx-auto flex w-11/12 flex-col items-start xs:w-2/3 md:w-full"
            >
              <div className="relative aspect-[16/9] w-full">
                <ContentfulImage
                  src={article.image.url}
                  alt=""
                  width={1152}
                  height={648}
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              {/* <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div> */}
              <div className="flex flex-col items-start justify-start text-xs">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
                  <Link href={`${lang}/articles/pages/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <Link
                  href={`${lang}/articles/${article.category.doctrine}`}
                  className="mt-2 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {article.category.doctrine}
                </Link>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {article.description}
                </p>
                <Link
                  href={`${lang}/articles/pages/${article.slug}`}
                  className="mt-3 text-sm font-medium text-button underline hover:text-button_hover"
                >
                  {text[lang].cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
