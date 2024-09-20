'use-client';
import Link from 'next/link';

export default function YoutubeList({
  playlist,
  index,
  sizes = 'w-5/6 xs:w-3/4 md:w-2/3',
}: {
  playlist: string;
  index: number[];
  sizes?: string;
}) {
  return (
    <div
      className={`carousel carousel-center w-full gap-x-5 bg-neutral-100 px-2 py-4`}
    >
      {index.map((i, pos) => (
        <div
          id={`video${pos}`}
          className={`${sizes} carousel-item relative`}
          key={i}
        >
          <div className="relative inline-block w-full overflow-hidden pt-[56.25%]">
            <iframe
              src={`https://www.youtube.com/embed?listType=playlist&list=${playlist}&index=${i}&modestbranding=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            ></iframe>
          </div>
        </div>
      ))}
      <div className={`${sizes} carousel-item relative`}>
        <div className="flex h-full w-full items-center justify-center">
          <div className="block text-pretty text-center ">
            <Link
              href={`https://www.youtube.com/playlist?list=${playlist}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg leading-normal text-button underline hover:text-button_hover xs:text-xl sm:text-2xl"
            >
              Check out the full playlist on our YouTube channel!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
