import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Header({
  title,
  breadcrumbs,
  className,
}: {
  title: string;
  breadcrumbs?: { name: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      {breadcrumbs && (
        <div>
          <nav aria-label="Back" className="sm:hidden">
            <Link
              href={breadcrumbs[breadcrumbs.length - 2].href}
              className="flex items-center text-sm font-medium text-gray-500 underline hover:text-gray-700"
            >
              <ChevronLeftIcon
                aria-hidden="true"
                className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              {`Back to ${breadcrumbs[breadcrumbs.length - 2].name}`}
            </Link>
          </nav>
          <nav aria-label="Breadcrumb" className="hidden sm:flex">
            <ol
              role="list"
              className="flex items-center space-x-1 xs:space-x-2"
            >
              {breadcrumbs.length >= 1 && (
                <>
                  {breadcrumbs.slice(0, -1).map((crumb) => (
                    <li key={crumb.name}>
                      <div key={crumb.href} className="flex items-center">
                        <Link
                          href={crumb.href}
                          className="mr-1 text-xs font-medium text-gray-500 underline hover:text-gray-700 xs:mr-4 xs:text-sm"
                        >
                          {crumb.name}
                        </Link>
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                        />
                      </div>
                    </li>
                  ))}{' '}
                  <li>
                    <div className="flex overflow-hidden ">
                      <Link
                        href={breadcrumbs[breadcrumbs.length - 1].href}
                        className="text-xs font-medium text-gray-500 hover:text-gray-700 xs:text-sm"
                      >
                        {breadcrumbs[breadcrumbs.length - 1].name}
                      </Link>
                    </div>
                  </li>
                </>
              )}
            </ol>
          </nav>
        </div>
      )}
      <h1 className="mt-4 min-w-0 text-3xl font-semibold leading-9 text-gray-900 sm:tracking-tight">
        {title}
      </h1>
    </div>
  );
}
