import Container from '@/lib/components/container';
import Image from 'next/image';
import adamPic from '@/public/locations/adam.jpg';
import tkPic from '@/public/locations/tk.jpg';
import sembawangPic from '@/public/locations/sembawang.jpg';
import serangoonPic from '@/public/locations/serangoon.jpg';
import { Church } from '@/lib/church-details';

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
  shortname: Church;
  address: string;
  timings: { day: string; time: string }[];
  map_src: string;
  background: string;
}) {
  return (
    <div
      id={shortname}
      className={`${background} xs:pb-6 xs:pt-2 md:pb-12 md:pt-6 xl:pb-16 xl:pt-10`}
    >
      <Container>
        <div className="mx-auto max-w-lg md:max-w-screen-lg">
          <div className="mb-4 flex flex-col lg:mb-8 lg:flex-row">
            <h1 className="text-xl font-bold xs:text-2xl md:text-3xl">
              {name}
            </h1>
            <p className="text-lg font-medium text-gray-500 md:text-xl lg:self-end lg:pl-4 xl:text-2xl">
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
                    <p className="basis-1/2 text-sm font-semibold xs:text-base md:basis-5/12 lg:text-lg xl:text-xl">
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
                loading="eager"
                title={`Map showing the location of ${name}`}
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
