import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n-config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  if (
    [
      '/favicon.ico',
      '/android-chrome-96x96.png',
      '/apple-touch-icon.png',
      '/browserconfig.xml',
      '/favicon-16x16.png',
      '/favicon-32x32.png',
      '/mstile-150x150.png',
      '/safari-pinned-tab.svg',
      '/site-logo.png',
      '/marble.png',
      '/pdf/baptism.pdf',
      '/pdf/bible.pdf',
      '/pdf/one-true-church.pdf',
      '/pdf/essential-biblical-doctrines.pdf',
      '/pdf/footwashing.pdf',
      '/pdf/holy-communion.pdf',
      '/pdf/holy-spirit.pdf',
      '/pdf/intro-to-TJC-basic-beliefs.pdf',
      '/pdf/jesus-christ.pdf',
      '/pdf/QnA.pdf',
      '/pdf/sabbath.pdf',
      '/pdf/salvation.pdf',
      '/pdf/saving-grace-vol1.pdf',
      '/pdf/saving-grace-vol2.pdf',
      '/pdf/second-coming.pdf',
      '/img/aof/jesus-christ.jpg',
      '/img/aof/holy-bible.jpg',
      '/img/aof/one-true-church.jpg',
      '/img/aof/baptism.jpg',
      '/img/aof/holy-spirit.jpg',
      '/img/aof/footwashing.jpg',
      '/img/aof/holy-communion.png',
      '/img/aof/salvation.jpg',
      '/img/aof/second-coming.jpg',
      '/img/aof/sabbath-day.jpg',
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|android-chrome-96x96|apple-touch-icon|browserconfig.xml|favicon-16x16|favicon-32x32|mstile-150x150|safari-pinned-tab|robots|manifest).*)',
  ],
};
