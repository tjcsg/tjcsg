'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '../../i18n-config';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const text = {
  en: 'English',
  zh: '中文',
};

export function LocaleSwitcherDesktop() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
        Locale
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-4">
          {i18n.locales.map((locale) => (
            <div
              key={locale}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex-auto">
                <Link
                  href={redirectedPathName(locale)}
                  className="block text-nowrap font-semibold text-gray-900"
                >
                  {text[locale]}
                  <span className="absolute inset-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export function LocaleSwitcherMobile() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <>
      <Disclosure as="div" className="-mx-3">
        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
          Locale
          <ChevronDownIcon
            aria-hidden="true"
            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
          />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-2">
          {i18n.locales.map((locale) => (
            <DisclosureButton
              key={locale}
              as="a"
              href={redirectedPathName(locale)}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {text[locale]}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
