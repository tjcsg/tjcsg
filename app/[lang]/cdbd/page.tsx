import { Locale } from '@/i18n-config';
import { getCDBDSchedule, getLatestCDBD } from '@/lib/api';
import Container from '@/lib/components/container';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';
import CdbdSchedule from './cdbd-schedule';
import PageHeader from '@/lib/components/page-header';
import { bibleBooks } from '@/lib/bible-books';

const text = {
  en: {
    title: 'Closer Day By Day',
    subtitle: 'Drawing closer to Jesus through His words',
    eyebrow: 'Study with us',
    openSchedule: 'See our latest Bible reading schedule',
    cta: 'Read More',
  },
  zh: {
    title: 'Closer Day By Day',
    subtitle: 'Drawing closer to Jesus through His words',
    eyebrow: 'Study with us',
    openSchedule: 'See our latest Bible reading schedule',
    cta: 'Read More',
  },
};

function obtainTextContent(item: any) {
  let text = '';
  item &&
    item?.json?.content?.forEach(
      (content: any) =>
        content.nodeType === 'paragraph' &&
        (text = `${text} ${content.content[0].value}`),
    );
  return text;
}

export default async function Page({ params }: { params: { lang: Locale } }) {
  const { lang } = params;

  const allCdbd = await getLatestCDBD(3, false, lang);
  const { schedule } = await getCDBDSchedule(false);

  return (
    <>
      <PageHeader lang={lang} text={text} />
      <Container background="bg-white">
        <div className="block w-full max-w-screen-lg">
          <div className="mb-8">
            <CdbdSchedule
              schedule={schedule.url}
              text={text[lang].openSchedule}
            />
          </div>

          {allCdbd &&
            allCdbd.map((cdbd) => (
              <div key={cdbd.slug} className="mb-8 flex flex-col md:flex-row">
                <div className="relative mb-6 aspect-[16/9] w-full flex-none md:mb-0 md:mr-8 md:max-w-72">
                  <ContentfulImage
                    src={cdbd.image.url}
                    alt=""
                    width={1152}
                    height={648}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="">
                  <time
                    dateTime={cdbd.date}
                    className="mt-2 text-sm text-gray-500"
                  >
                    {new Intl.DateTimeFormat(`${lang}-SG`, {
                      timeZone: 'Singapore',
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour12: true,
                    }).format(new Date(cdbd.date))}
                  </time>
                  <Link
                    href={`#`}
                    className="ml-4 mt-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                  >
                    {bibleBooks[cdbd.book][lang]}
                  </Link>
                  <h1 className="mb-2 text-xl font-bold">{cdbd.title}</h1>
                  <p className="text-md line-clamp-3 text-gray-700">
                    {obtainTextContent(cdbd.content)}
                  </p>
                  <p className="mt-3 text-sm capitalize text-gray-600">
                    {cdbd.author}
                  </p>
                  <Link
                    href={`/cdbd/${cdbd.slug}`}
                    className="mt-4 text-sm font-medium text-button underline hover:text-button_hover"
                  >
                    {text[lang].cta}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}
