import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";

import { getAllEvents } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";
import Image from "next/image";
import ContentfulImage from "@/lib/contentful-image";
import SpecialEvents from "./special-events";


const carousel_img = [
  { name: "/carousel/1.jpg", alt: "Telok Kurau Church"},
  { name: "/carousel/2.jpeg", alt: "Blue skies"},
  { name: "/carousel/3.jpg", alt: "Adam Road Church"},
  { name: "/carousel/4.jpeg", alt: "Paddy fields"},
  { name: "/carousel/5.jpg", alt: "Adam Road Church"}
]


function Intro() {
  return (
    <div className="relative">
      {/* Carousel from daisyui */}
      <div className="carousel carousel-center">

        {carousel_img.map((img) => (
          <div className="carousel-item max-sm:w-full">
            <ContentfulImage src={img.name} width={693} height={390} alt={img.alt} />
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-85 rounded-lg px-7 pt-4 pb-5 min-w-96 max-w-lg">
            <h1 className="font-semibold dark:text-white mt-2 mb-2">Welcome</h1>
            <p className="text-xs mb-5">Here, you can get to know the truth as given by the Lord Jesus Christ and taught by His apostles. Many have experienced God’s presence and salvation in the True Jesus Church through various miracles and gifts of the Holy Spirit.</p>
            <button
              type="button"
              className="rounded-md bg-button mb-3 px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-button_hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-6"
            >
              Learn more about us
            </button>
            <Link href="#" className="text-button mb-2 hover:text-button_hover text-xs text-nowrap font-semibold underline decoration-2">
              Find a church
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllEvents(isEnabled);
  return (
      <>
        <Intro />
        <SpecialEvents />
      </>
  );
}
