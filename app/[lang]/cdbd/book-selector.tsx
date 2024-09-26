import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { bibleBooks, Book } from '@/lib/bible-books';
import Link from 'next/link';
import { Locale } from '@/i18n-config';

const text = {
  en: {
    filter: 'Filter by book:',
    all: 'All',
  },
  zh: {
    filter: '按书籍筛选:',
    all: '所有',
  },
};

export default function BookSelector({
  cdbdBooks,
  lang,
  currentBook,
}: {
  cdbdBooks: Book[];
  lang: Locale;
  currentBook?: Book;
}) {
  return (
    <Listbox>
      <div className="flex items-center gap-x-6">
        <Label className="pt-2 text-lg font-semibold text-gray-900">
          {text[lang].filter}
        </Label>
        <div className="relative mt-2">
          <ListboxButton className="relative inline cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-button sm:text-sm sm:leading-6">
            <span className="block truncate capitalize">
              {currentBook ? bibleBooks[currentBook][lang] : text[lang].all}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {/* Option for "all" */}
            <Link key={'all'} href={`/${lang}/cdbd/`}>
              <ListboxOption
                value={'all'}
                className="group relative select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-button data-[focus]:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {text[lang].all}
                </span>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-button group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            </Link>

            {/* Option for Bible books */}
            {cdbdBooks.map((book) => (
              <Link key={book} href={`/${lang}/cdbd/${book}`}>
                <ListboxOption
                  value={book}
                  className="group relative select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-button data-[focus]:text-white"
                >
                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                    {bibleBooks[book][lang]}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-button group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              </Link>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
}
