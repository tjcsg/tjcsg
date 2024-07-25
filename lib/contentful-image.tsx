'use client';

import Image, { type ImageLoaderProps, ImageProps } from 'next/image';

interface ContentfulImageProps {
  src: string;
  width: number;
  height: number;
  quality?: number;
  alt: string;
  [key: string]: any; // For other props that might be passed
}

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 50}`;
};

export default function ContentfulImage(props: ImageProps) {
  return <Image loader={contentfulLoader} {...props} />;
}
