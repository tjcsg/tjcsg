export default async function FeaturedVideo({
  url,
  maxWidth = 'xl',
}: {
  url: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}) {
  return (
    <div className="bg-black">
      {/* <div className={`max-w- mx-auto block w-full max-w-screen-2xl`}> */}
      <div className={`max-w- mx-auto block w-full max-w-screen-${maxWidth}`}>
        <div className="relative w-full overflow-hidden pt-[56.25%]">
          <iframe
            src={`${url}&autoplay=1&mute=1&rel=0&loop=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
