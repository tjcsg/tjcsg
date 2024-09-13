import Link from 'next/link';

export default function YoutubeList({
  playlist,
  index,
}: {
  playlist: string;
  index: number[];
}) {
  return (
    <div className={`flex overflow-x-scroll`}>
      <div className="flex flex-nowrap gap-8">
        {index.map((i) => (
          <div className="w-[20em] xs:w-[25em] sm:w-[30rem]" key={i}>
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
        <div className="w-[20em] xs:w-[25em] sm:w-[30rem]">
          <div className="flex h-full w-full items-center justify-center">
            <div className="block text-pretty text-center ">
              <Link
                href={`https://www.youtube.com/playlist?list=${playlist}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl leading-loose text-button underline hover:text-button_hover"
              >
                Check out the full playlist on our YouTube channel!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
