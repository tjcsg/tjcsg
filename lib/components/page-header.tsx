import { Locale } from '@/i18n-config';
import Link from 'next/link';
import LinkButton from '@/lib/components/link-button';

type header = {
  title: string;
  eyebrow: string;
  subtitle?: string;
};

export default async function PageHeader({
  lang,
  text,
  link,
}: {
  lang: Locale;
  text: { en: header; zh: header };
  link?: { en: string; zh: string; href: string };
}) {
  return (
    <>
      <div className="mx-auto px-6 pb-8 pt-4 text-center sm:pt-8">
        <p className="text-base font-semibold leading-7 text-button">
          {text[lang].eyebrow}
        </p>
        <h2 className="mt-2 text-5xl font-medium tracking-tight text-gray-900 sm:text-6xl">
          {text[lang].title}
        </h2>
        {text[lang].subtitle && (
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {text[lang].subtitle}
          </p>
        )}
        {link && (
          <LinkButton
            text={link[lang]}
            href={link.href}
            type={'inverse'}
            className=" mx-auto px-10 py-2"
          />
        )}
      </div>
    </>
  );
}
