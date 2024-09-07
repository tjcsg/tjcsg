import { Locale } from '@/i18n-config';
import { getLatestArticles } from '@/lib/api';
import Container from '@/lib/components/container';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';
import { bibleBooks, books } from '@/lib/bible-books';
import { obtainTextContent } from '@/lib/utils';
import AvatarLogo from '@/lib/components/avatar-logo';
export const dynamic = 'force-static';

const text = {
  en: {
    cta: 'Read More',
  },
  zh: {
    cta: 'Read More',
  },
};

// This function converts the bible book slug into the Contentful tag (e.g. 1-samuel to book1Samuel)
function slugToContentfulTag(string: String) {
  let arr = string.split('-');

  arr[arr.length - 1] =
    arr[arr.length - 1].charAt(0).toUpperCase() + arr[arr.length - 1].slice(1);

  return `book${arr.join('')}`;
}

export default async function Page({
  params,
}: {
  params: { lang: Locale; book: (typeof books)[number] };
}) {
  const { lang, book } = params;

  const allCdbd = await getLatestArticles(lang, 100, 0, [
    'categoryCdbd',
    slugToContentfulTag(book),
  ]);

  return (
    <>
      <Container background="bg-white">
        <div className="block w-full max-w-screen-lg">
          <h1 className="mb-8 text-3xl font-bold">
            All articles for {bibleBooks[book][lang]}
          </h1>
          {allCdbd &&
            allCdbd.map((article) => {
              const book = article.contentfulMetadata.tags
                .find((tag) => tag.id.startsWith('book'))
                ?.name.split('-')[1] as (typeof books)[number];

              return (
                <div
                  key={article.slug}
                  className="mb-8 flex flex-col md:mb-16 md:flex-row"
                >
                  <div className="relative mb-6 aspect-[16/9] w-full flex-none md:mb-0 md:mr-8 md:max-w-72">
                    <ContentfulImage
                      src={article.image.url}
                      alt=""
                      width={1152}
                      height={648}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="">
                    <time
                      dateTime={article.date}
                      className="mt-2 text-sm text-gray-500"
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
                    <Link
                      href={`#`}
                      className="ml-4 mt-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                    >
                      {bibleBooks[book][lang]}
                    </Link>
                    <Link href={`/articles/${article.slug}`}>
                      <h1 className="mb-2 mt-2 text-xl font-bold">
                        {article.title}
                      </h1>
                    </Link>
                    <p className="text-md line-clamp-3 text-gray-700">
                      {article.description !== null
                        ? article.description
                        : obtainTextContent(article.content)}
                    </p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="mt-5 text-sm font-medium text-button underline hover:text-button_hover"
                    >
                      {text[lang].cta}
                    </Link>
                    <div className="mt-3">
                      <AvatarLogo size={7} />
                      <p className="inline text-sm capitalize text-gray-600">
                        {article.author}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
}
