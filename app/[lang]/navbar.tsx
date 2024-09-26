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

const navbar = [
  {
    en: 'Visit',
    zh: '拜访',
    href: '/locations',
    subcat: [],
    emphasis: true,
  },
  {
    en: 'About',
    zh: '​关于本会',
    href: '',
    subcat: [
      {
        en: 'Who We Are',
        zh: '本会简介',
        href: '/about',
      },
      {
        en: 'What We Believe',
        zh: '基本信仰',
        href: '/beliefs',
      },
    ],
  },
  {
    en: 'Worship',
    zh: '崇拜聚会',
    href: '',
    subcat: [
      {
        en: 'Livestream',
        zh: '线上直播聚会',
        href: '/livestream',
      },
      {
        en: 'Watch Sermons',
        zh: '证道分享',
        href: '/worship',
      },
      {
        en: 'In-Person Services',
        zh: '实体聚会',
        href: '/locations',
      },
      {
        en: 'All Events',
        zh: '所有特别聚会',
        href: '/events',
      },
    ],
  },
  {
    en: 'Library',
    zh: '文字资源',
    href: '',
    subcat: [
      {
        en: 'CDBD (Bible Reading)',
        zh: 'CDBD（每日读经）',
        href: '/cdbd',
      },
      {
        en: 'All Articles',
        zh: '所有文字资源',
        href: '/articles',
      },
    ],
  },
  {
    en: 'Contact Us',
    zh: '联系我们',
    href: '/contact',
    subcat: [],
  },
];

export default function NavBar({ lang }: { lang: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const desktopClasses = `text-sm font-semibold uppercase leading-6 tracking-normal`;
  const mobileClasses = `text-base font-semibold uppercase leading-7 text-gray-900 hover:bg-gray-50`;

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className=" w-full shadow-md">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:pr-0 lg:px-8"
        >
          <div className="flex md:flex-1">
            <Link href={`/${lang}`} className="-m-1.5 px-1.5">
              <span className="sr-only">True Jesus Church Singapore</span>
              <Image
                src={sitelogo}
                className="h-7 w-auto xs:h-8 lg:h-9"
                alt="True Jesus Church logo"
              />
            </Link>
          </div>

          <div className="flex md:hidden">
            <LocaleSwitcherDesktop />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 ml-4 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Wide screen navbar */}
          <PopoverGroup className="hidden md:mr-8 md:flex md:gap-x-5 lg:mr-12 lg:gap-x-10">
            {navbar.map((item) =>
              // Case 1: Has subcategories i.e. is a drop down
              item.subcat.length > 0 ? (
                <Popover className="relative" key={item.href}>
                  <PopoverButton
                    className={`flex items-center gap-x-1 text-gray-900 hover:text-gray-600 ${desktopClasses}`}
                  >
                    {item[lang]}
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
                      {item.subcat.map((subitem) => (
                        <div
                          key={subitem.href}
                          className="group relative flex items-center gap-x-6 rounded-sm px-4 py-2 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex-auto">
                            <Link
                              href={`/${lang}/${subitem.href}`}
                              className={`block text-nowrap ${desktopClasses}`}
                            >
                              {subitem[lang]}
                              <span className="absolute inset-0" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : item.emphasis ? (
                // Case 2: Is link with emphasis
                <Link
                  key={item.href}
                  href={`/${lang}/${item.href}`}
                  className={`-mt-0.5 rounded-2xl border border-button px-4 py-0.5 text-button hover:bg-button hover:text-white ${desktopClasses}`}
                >
                  {item[lang]}
                </Link>
              ) : (
                // Case 3: Is a normal link
                <Link
                  key={item.href}
                  href={`/${lang}/${item.href}`}
                  className={`text-gray-900 hover:text-gray-600 ${desktopClasses}`}
                >
                  {item[lang]}
                </Link>
              ),
            )}
            <LocaleSwitcherDesktop />
          </PopoverGroup>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
          {/* <Link
            href="."
            locale="zh"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Locale <span aria-hidden="true">&rarr;</span>
          </Link> */}
          {/* <LocaleSwitcherDesktop /> */}
          {/* </div> */}
        </nav>
      </div>

      {/* Narrow screen navbar */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">True Jesus Church Singapore</span>
              <Image
                src={sitelogo}
                className="h-7 w-auto xs:h-8 sm:hidden"
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
                {navbar.map((item) =>
                  item.subcat.length > 0 ? (
                    // Case 1: Has subcategories i.e. is a drop down
                    <Disclosure as="div" className="-mx-3" key={item.href}>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 ${mobileClasses}`}
                      >
                        {item[lang]}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {item.subcat.map((subitem) => (
                          <DisclosureButton
                            key={subitem.href}
                            as="a"
                            href={`/${lang}/${subitem.href}`}
                            className={`block rounded-lg py-2 pl-6 pr-3 ${mobileClasses}`}
                          >
                            {subitem[lang]}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  ) : item.emphasis ? (
                    // Case 2: Is link with emphasis
                    <Link
                      href={`/${lang}/${item.href}`}
                      key={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold uppercase leading-7 text-button hover:bg-gray-50`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item[lang]}
                    </Link>
                  ) : (
                    // Case 3: Is a normal link
                    <Link
                      href={`/${lang}/${item.href}`}
                      key={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 ${mobileClasses}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item[lang]}
                    </Link>
                  ),
                )}
              </div>
              <div className="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
