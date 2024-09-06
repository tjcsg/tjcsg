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
    <div className={`pb-6 sm:py-8 ${className}`}>
      {breadcrumbs && (
        <div>
          {breadcrumbs.length > 1 && (
            <nav aria-label="Back" className="sm:hidden">
              <Link
                href={breadcrumbs[breadcrumbs.length - 2].href}
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <ChevronLeftIcon
                  aria-hidden="true"
                  className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
                />
                Back
              </Link>
            </nav>
          )}
          <nav aria-label="Breadcrumb" className="hidden sm:flex">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link
                    href={breadcrumbs[0].href}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {breadcrumbs[0].name}
                  </Link>
                </div>
              </li>
              {breadcrumbs.length > 1 &&
                breadcrumbs.slice(1).map((crumb) => (
                  <li key={crumb.name}>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                      />
                      <Link
                        href={crumb.href}
                        className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        {crumb.name}
                      </Link>
                    </div>
                  </li>
                ))}
            </ol>
          </nav>
        </div>
      )}
      <h1 className="mt-2 min-w-0 text-3xl font-semibold leading-7 text-gray-900 sm:tracking-tight">
        {title}
      </h1>
    </div>
  );
}
