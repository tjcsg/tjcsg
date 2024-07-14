import { Locale } from '@/i18n-config';
import { getWebContent } from '@/lib/api';
import { aof, aofDetails } from '@/lib/articles-of-faith';
import Container from '@/lib/components/container';
import { Markdown } from '@/lib/markdown';
import Link from 'next/link';

export default async function OurBeliefs({
  lang,
  background,
}: {
  lang: Locale;
  background: string;
}) {
  return (
    <Container background={`${background}`}>
      <div className="block w-full max-w-4xl">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-8 lg:px-8">
          <h2 className="mb-4 min-w-0 text-center text-3xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
            Our Beliefs
          </h2>
          <dl className="mt-2 space-y-8 divide-y divide-gray-900/10">
            {aof.map((aof) => (
              <Link key={aof} href={`/articles/${aof}`}>
                <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                  <dt className="text-base font-bold leading-7 text-gray-900 lg:col-span-3">
                    {aofDetails[lang][aof].name}
                  </dt>
                  <dd className="mt-4 lg:col-span-9 lg:mt-0">
                    <p className="text-base leading-7 text-gray-600">
                      {aofDetails[lang][aof].details}
                    </p>
                  </dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  );
}
