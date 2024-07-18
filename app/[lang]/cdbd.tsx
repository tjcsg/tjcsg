'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import he from 'he';
import Image from 'next/image';
import ImageModal from '@/lib/components/image-modal';
import { Locale } from '@/i18n-config';
import Container from '@/lib/components/container';

const CDBD_EXCERPT_LENGTH = 265;

// UTILITY FUNCTIONS

function truncate(str: string, n: number) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1);
  const formattedString = subString.replace(/&nbsp;/g, '');
  return formattedString.substr(0, formattedString.lastIndexOf(' ')) + '...';
}

const text = {
  en: {
    title: 'Closer Day By Day',
    subtitle: 'Drawing closer to Jesus through His words',
    openSchedule: 'See our latest Bible reading schedule',
  },
  zh: {
    title: 'Closer Day By Day',
    subtitle: 'Drawing closer to Jesus through His words',
    openSchedule: 'See our latest Bible reading schedule',
  },
};

export default function CDBD({
  schedule,
  lang,
}: {
  schedule: string;
  lang: Locale;
}) {
  const [cdbdPosts, setCdbdPosts] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      'https://closerdaybyday.org/wp-json/wp/v2/posts?per_page=4&_fields=title.rendered,yoast_head_json.og_url,yoast_head_json.og_image.0.url,yoast_head_json.og_description,tags',
      { method: 'get' },
    )
      .then((httpResponse) => {
        if (httpResponse.ok) {
          return httpResponse.json();
        } else {
          return Promise.reject('Fetching of CDBD posts did not succeed');
        }
      })
      .then((posts) => {
        setCdbdPosts(
          posts.map((post: any) => {
            let image;
            if (post.yoast_head_json.og_image) {
              image = post.yoast_head_json.og_image[0].url;
            } else {
              image =
                'https://yt3.ggpht.com/DH-EG5RZFxB2xg3dbR-yoN2TcJSd1XNt_OXIbTsUlPXyvM6Ta9EYrrbtCS0hPe5iPcktc4oz1g=s900-c-k-c0x00ffffff-no-rj';
            }
            return {
              url: post.yoast_head_json.og_url,
              book: post.title.rendered
                .toLowerCase()
                .split('chapter')[0]
                .toUpperCase(),
              tag: post.tags[0],
              title: he.decode(post.title.rendered),
              image,
              excerpt: truncate(
                post.yoast_head_json.og_description,
                CDBD_EXCERPT_LENGTH,
              ),
            };
          }),
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    !error &&
    cdbdPosts[0] && (
      <>
        <ImageModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          src={schedule}
          alt="test"
          width={1019}
          height={1544}
        />
        <div className="mx-auto block w-full">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {text[lang].title}
            </h2>
            <p className="mt-2 text-xl leading-8 text-gray-600">
              {text[lang].subtitle}
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="mt-2 text-lg leading-8 text-button hover:text-button_hover hover:underline"
            >
              {text[lang].openSchedule}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2">
            <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-3xl">
              <Image
                src={cdbdPosts[0].image}
                width={200}
                height={200}
                className="mx-auto mb-8 w-1/2 max-w-md"
                alt=""
              />
              <Link
                href="."
                className="block gap-x-2.5 text-lg font-bold uppercase leading-6 text-button"
              >
                {cdbdPosts[0].book}
              </Link>
              <h2
                id="featured-post"
                className="mt-4 text-2xl font-bold tracking-tight text-gray-900"
              >
                {cdbdPosts[0].title}
              </h2>
              <p className="text-md mt-4 leading-8 text-gray-600">
                {cdbdPosts[0].excerpt}
              </p>
              <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                <div className="flex">
                  <Link
                    href={cdbdPosts[0].url}
                    aria-describedby="featured-post"
                    className="text-sm font-semibold leading-6 text-button hover:text-button_hover"
                  >
                    Continue reading <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
            <div className="max-w-2xlsm:pt-16 mx-auto w-full lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
              <div className="-my-12 divide-y divide-gray-900/50">
                {cdbdPosts.slice(1, 4).map((post: any) => (
                  <article
                    key={post.id}
                    className="group relative py-12 lg:max-w-xl"
                  >
                    <div className="block">
                      <Link
                        href="."
                        className="text-md font-bold uppercase leading-6 text-button hover:text-button_hover"
                      >
                        {post.book}
                      </Link>
                    </div>
                    <h2 className="mt-2">
                      <Link
                        href={post.url}
                        className="text-xl font-semibold text-gray-900 hover:text-gray-600"
                      >
                        {/* <span className="absolute inset-0" /> */}
                        {post.title}
                      </Link>
                    </h2>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
