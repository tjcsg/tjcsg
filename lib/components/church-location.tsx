import Container from '@/lib/components/container';
import Image from 'next/image';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';

const pic = {
  adam: adamPic,
  tk: tkPic,
  sembawang: sembawangPic,
  serangoon: serangoonPic,
};

export default function ChurchLocation({
  name,
  shortname,
  address,
  timings,
  map_src,
  background,
}: {
  name: string;
  shortname: 'adam' | 'tk' | 'serangoon' | 'sembawang';
  address: string;
  timings: { day: string; time: string }[];
  map_src: string;
  background: string;
}) {
  return (
    <div id={shortname}>
      <Container background={background}>
        <div className="max-w-md md:max-w-screen-lg">
          <div className="mb-4 flex flex-col lg:mb-8 lg:flex-row">
            <h1 className="text-xl font-semibold sm:text-2xl">{name}</h1>
            <p className="text-base text-gray-500 md:text-lg lg:self-end lg:pl-4">
              {address}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-2 lg:gap-8">
            <div className=" bg-lightblue md:mb-0 md:basis-1/2">
              <Image
                src={pic[shortname]}
                className="w-full"
                alt={`A picture of ${name}'s exterior`}
              />
              <div className="flex flex-col px-4 py-6 xs:px-8 md:px-4 md:py-6">
                {timings.map((timing) => (
                  <div key={timing.day} className="flex flex-row pt-2">
                    <p className="md:text-md basis-1/2 text-sm font-semibold xs:text-base md:basis-5/12 lg:text-lg xl:text-xl">
                      {timing.day}
                    </p>
                    <p className="text-sm xs:text-base md:pl-3 lg:text-lg xl:text-xl">
                      {timing.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:relative md:basis-1/2">
              <iframe
                src={map_src}
                width="600"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="inset-0 w-full md:absolute md:h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
