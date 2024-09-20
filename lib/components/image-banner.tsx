import Image, { StaticImageData } from 'next/image';

export default function ImageBanner({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-40 object-cover sm:h-52 lg:h-64 xl:h-72"
    />
  );
}
