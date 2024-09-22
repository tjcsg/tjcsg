import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Breadcrumb({
  breadcrumbs,
  className,
}: {
  breadcrumbs: { name: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div>
        {/* <nav aria-label="Back" className="sm:hidden">
          <Link
            href={breadcrumbs[breadcrumbs.length - 1].href}
            className="flex items-center text-sm font-medium text-gray-500 underline hover:text-gray-700"
          >
            <ChevronLeftIcon
              aria-hidden="true"
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
            />
            {`Back to ${breadcrumbs[breadcrumbs.length - 1].name}`}
          </Link>
        </nav> */}

        {breadcrumbs.length > 1 ? (
          <nav aria-label="Breadcrumb" className="flex">
            <ol
              role="list"
              className="flex items-center space-x-1 xs:space-x-2"
            >
              {breadcrumbs.slice(0, -1).map((crumb) => (
                <li key={crumb.name}>
                  <div key={crumb.href} className="flex items-center">
                    <Link
                      href={crumb.href}
                      className="mr-1 text-xs font-medium text-gray-500 underline hover:text-gray-700 xs:mr-4 xs:text-sm md:text-base"
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
                <div className="flex max-w-36 overflow-hidden xs:max-w-64 sm:max-w-xs md:max-w-sm lg:max-w-md">
                  <Link
                    href={breadcrumbs[breadcrumbs.length - 1].href}
                    className="truncate text-xs font-medium text-gray-500 hover:text-gray-700 xs:text-sm md:text-base "
                  >
                    {breadcrumbs[breadcrumbs.length - 1].name}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        ) : (
          <nav aria-label="Back" className="flex">
            <Link
              href={breadcrumbs[breadcrumbs.length - 1].href}
              className="flex items-center text-sm font-medium text-gray-500 underline hover:text-gray-700"
            >
              <ChevronLeftIcon
                aria-hidden="true"
                className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              />
              {`Back to ${breadcrumbs[breadcrumbs.length - 1].name}`}
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
