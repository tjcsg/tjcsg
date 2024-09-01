'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';
import { LocaleSwitcherDesktop, LocaleSwitcherMobile } from './locale-switch';
import { Locale } from '@/i18n-config';
import sitelogo from '@/public/site-logo.png';

const resources = [
  {
    en: 'Articles',
    zh: 'Articles',
    href: '/articles',
  },
  {
    en: 'Social Media',
    zh: 'Articles',
    href: '/socials',
  },
  {
    en: 'TJC Worldwide',
    zh: 'TJC Worldwide',
    href: '/global',
  },
];

const text = {
  en: {
    about: 'About Us',
    worship: 'Worship',
    locations: 'Locations',
    resources: 'Resources',
  },
  zh: {
    about: '​关于本会',
    worship: '崇拜',
    locations: '教会地点',
    resources: '其他资源',
  },
};

export default function NavBar({ lang }: { lang: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`} className="-m-1.5 p-1.5">
            <span className="sr-only">True Jesus Church Singapore</span>
            <Image
              src={sitelogo}
              className="h-10 w-auto"
              alt="True Jesus Church logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href={`/${lang}/worship`}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {text[lang].worship}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {text[lang].about}
          </Link>
          <Link
            href={`/${lang}/locations`}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {text[lang].locations}
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              {text[lang].resources}
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-auto max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {resources.map((item) => (
                  <div
                    key={item.en}
                    className="group relative flex items-center gap-x-6 rounded-sm px-4 py-2 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex-auto">
                      <Link
                        href={`/${lang}/${item.href}`}
                        className="block text-nowrap font-semibold text-gray-900"
                      >
                        {item[lang]}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <Link
            href="."
            locale="zh"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Locale <span aria-hidden="true">&rarr;</span>
          </Link> */}
          {/* <LocaleSwitcherDesktop /> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">True Jesus Church Singapore</span>
              <Image
                src={sitelogo}
                className="h-8 w-auto sm:hidden"
                alt="True Jesus Church logo"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href={`/${lang}/worship`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {text[lang].worship}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {text[lang].about}
                </Link>
                <Link
                  href={`/${lang}/locations`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {text[lang].locations}
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {text[lang].resources}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {resources.map((item) => (
                      <DisclosureButton
                        key={item.en}
                        as="a"
                        href={`/${lang}/${item.href}`}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item[lang]}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-6">{/* <LocaleSwitcherMobile /> */}</div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
