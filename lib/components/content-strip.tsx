import { Locale } from '@/i18n-config';
import Link from 'next/link';
import Container from './container';
import LinkButton from '@/lib/components/link-button';
import { Markdown } from '../markdown';
import { MarkdownType } from '../api';

export default function ContentStrip({
  lang,
  titleText,
  bodyText,
  links,
  isReversed = false,
  isMarkdown = false,
  background,
  children,
}: {
  lang: Locale;
  titleText: string;
  bodyText: string | MarkdownType;
  links: { en: string; zh: string; href: string }[];
  isReversed?: boolean;
  isMarkdown?: boolean;
  background: string;
  children: React.ReactNode;
}) {
  return (
    <Container background={background}>
      <div className="lg:w-11/12 xl:w-4/5 2xl:w-3/4">
        <h1
          className={`mb-4 text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl ${isReversed ? 'md:text-right' : ''}`}
        >
          {titleText}
        </h1>
        <div
          className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} md:justify-end`}
        >
          <div
            className={`mb-8 block lg:basis-2/3  ${isReversed ? 'md:text-right' : ''}`}
          >
            {isMarkdown ? (
              <div className="prose max-w-none">
                <Markdown content={bodyText as MarkdownType} />
              </div>
            ) : (
              <p className={`text-md mt-2 leading-8 text-gray-600`}>
                {bodyText as string}
              </p>
            )}
            {links[0] && (
              <LinkButton
                text={links[0][lang]}
                href={links[0].href}
                type={'inverse'}
                className={`mb-4 px-5 py-2 ${isReversed ? 'md:float-right' : ''}`}
              />
            )}
            {links.length > 1 &&
              links.slice(1, links.length).map((link) => (
                <button
                  key={link.en}
                  className={`clear-right block text-nowrap px-2 py-2 text-sm font-semibold text-button underline decoration-2 hover:text-button_hover sm:leading-4 ${isReversed ? 'md:float-right' : ''}`}
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
