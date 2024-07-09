import Link from 'next/link';
import { draftMode } from 'next/headers';

import { getAllEvents } from '@/lib/api';
import { CMS_NAME, CMS_URL } from '@/lib/constants';
import ContentfulImage from '@/lib/contentful-image';
import SpecialEvents from './special-events';
import CDBD from './cdbd';
import Container from '@/lib/components/container';

const carousel_img = [
  { name: '/carousel/1.jpg', alt: 'Telok Kurau Church' },
  { name: '/carousel/2.jpeg', alt: 'Blue skies' },
  { name: '/carousel/3.jpg', alt: 'Adam Road Church' },
  { name: '/carousel/4.jpeg', alt: 'Paddy fields' },
  { name: '/carousel/5.jpg', alt: 'Adam Road Church' },
];

function Intro({ lang }: { lang: Locale }) {
  return (
    <div className="relative">
      {/* Carousel from daisyui */}
      <div className="carousel carousel-center">
        {carousel_img.map((img) => (
          <div key={img.name} className="carousel-item max-sm:w-full">
            <ContentfulImage
              src={img.name}
              width={693}
              height={390}
              alt={img.alt}
            />
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="min-w-96 max-w-lg rounded-lg bg-white bg-opacity-80 px-7 pb-5 pt-4 dark:bg-gray-900 dark:bg-opacity-85">
            <h1 className="mb-2 mt-2 font-semibold dark:text-white">Welcome</h1>
            <p className="mb-5 text-xs">
              Here, you can get to know the truth as given by the Lord Jesus
              Christ and taught by His apostles. Many have experienced God’s
              presence and salvation in the True Jesus Church through various
              miracles and gifts of the Holy Spirit.
            </p>
            <Link href={`${lang}/about`}>
              <button
                type="button"
                className="mb-3 mr-6 rounded-md bg-button px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-button_hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn more about us
              </button>
            </Link>

            <Link
              href={`${lang}/locations`}
              className="mb-2 text-nowrap text-xs font-semibold text-button underline decoration-2 hover:text-button_hover"
            >
              Find a church
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Page({ lang }: { lang: Locale }) {
  const { isEnabled } = draftMode();
  const allPosts = await getAllEvents(isEnabled);
  return (
    <>
      <Intro lang={lang} />
      <Container background="bg-white">
        <SpecialEvents lang={lang} />
      </Container>

      <Container background="bg-stone-50">
        <CDBD />
      </Container>
    </>
  );
}
