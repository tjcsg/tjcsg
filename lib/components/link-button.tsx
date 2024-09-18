import Link from 'next/link';

export default function LinkButton({
  text,
  href,
  type,
  className,
}: {
  text: string;
  href: string;
  /** 'default': blue. 'inverse': white */
  type: 'default' | 'inverse';
  className?: string;
}) {
  return (
    <Link href={href}>
      <button
        className={`sm:text-md mt-6 block text-nowrap rounded-3xl border-2 border-button py-2 text-sm font-semibold shadow-sm  sm:leading-4
        ${
          type === 'default'
            ? 'bg-button text-white hover:border-button_hover hover:bg-button_hover'
            : 'border-button bg-white text-button  hover:bg-button hover:text-white'
        }
        ${className}
      `}
      >
        {text}
      </button>
    </Link>
  );
}
