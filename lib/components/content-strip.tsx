import { Locale } from '@/i18n-config';
import Link from 'next/link';
import Container from './container';

export default function ContentStrip({
  lang,
  titleText,
  bodyText,
  links,
  isReversed = false,
  background,
  children,
}: {
  lang: Locale;
  titleText: string;
  bodyText: string;
  links: { en: string; zh: string; href: string }[];
  isReversed?: boolean;
  background: string;
  children: React.ReactNode;
}) {
  return (
    <Container background={background}>
      <div className="mx-auto block w-full lg:w-11/12 xl:w-4/5 2xl:w-3/4">
        <h1
          className={`mb-4 text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl ${isReversed ? 'md:text-right' : ''}`}
        >
          {titleText}
        </h1>
        <div
          className={`flex flex-col md:${isReversed ? 'flex-row-reverse' : 'flex-row'} md:justify-end`}
        >
          <div
            className={`mb-8 block lg:basis-2/3  ${isReversed ? 'md:text-right' : ''}`}
          >
            <p className={`text-md mt-2 leading-8 text-gray-600`}>{bodyText}</p>
            {links[0] && (
              <button
                className={`sm:text-md mb-4 mt-6 block text-nowrap rounded-md border-2 border-button bg-white px-10 py-2 text-sm font-semibold text-button shadow-sm hover:bg-button hover:text-white sm:leading-4 ${isReversed ? 'md:float-right' : ''}`}
              >
                <Link href={links[0].href}>{links[0][lang]}</Link>
              </button>
            )}
            {links.length > 1 &&
              links.slice(1, links.length).map((link) => (
                <button
                  key={link.en}
                  className="block text-nowrap px-2 py-2 text-sm font-semibold text-button underline decoration-2 hover:text-button_hover sm:leading-4"
                >
                  <Link href={link.href}>{link[lang]}</Link>
                </button>
              ))}
          </div>
          {children}
        </div>
      </div>
    </Container>
  );
}
