import Breadcrumb from './breadcrumb';

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
      {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
      <h1 className="mt-4 min-w-0 text-3xl font-bold leading-9 text-gray-900 sm:text-4xl sm:tracking-normal">
        {title}
      </h1>
    </div>
  );
}
