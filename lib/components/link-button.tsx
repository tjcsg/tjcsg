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
    <button
      className={`sm:text-md mt-6 block text-nowrap rounded-md border-2 border-button py-2 text-sm font-semibold shadow-sm hover:bg-button_hover sm:leading-4
        ${
          type === 'default'
            ? 'bg-button text-white'
            : 'border-button bg-white text-button hover:text-white'
        }
        ${className}
      `}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
}
