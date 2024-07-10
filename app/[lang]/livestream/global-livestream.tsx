import { Locale } from '@/i18n-config';
import ContentfulImage from '@/lib/contentful-image';
import Link from 'next/link';

const text = {
  en: {
    title: 'True Jesus Church Global Livestream',
    body: 'Feel free to join any of the live stream worship services offered by True Jesus Churches all around the world.',
    button: 'View global livestream',
  },
  zh: {
    title: 'True Jesus Church Global Livestream',
    body: 'Feel free to join any of the live stream worship services offered by True Jesus Churches all around the world.',
    button: 'View global livestream',
  },
};

export default function GlobalLivestream({ lang }: { lang: Locale }) {
  return (
    <div className="block">
      <h1 className="mb-4 text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl">
        {text[lang].title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mr-8">
          <p className="text-md mt-2 leading-8 text-gray-600">
            {text[lang].body}
          </p>
          <Link href="https://tjc.org/livestream/">
            <button className="sm:text-md my-6 text-nowrap rounded-md border-2 border-button bg-white px-10 py-2 text-sm font-semibold text-button shadow-sm hover:bg-button hover:text-white sm:leading-4">
              {text[lang].button} &rarr;
            </button>
          </Link>
        </div>
        <ContentfulImage
          src="/global_livestream.png"
          width={1414}
          height={640}
          className="max-w-full md:max-w-sm lg:max-w-lg"
        ></ContentfulImage>
      </div>
    </div>
  );
}
