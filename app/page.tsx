import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "./date";
import CoverImage from "./cover-image";
import Avatar from "./avatar";
import MoreStories from "./more-stories";

import { getAllEvents } from "@/lib/api";
import { CMS_NAME, CMS_URL } from "@/lib/constants";

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h2>
    </section>
  );
}

// function Intro() {
//   return (
// <div className="carousel carousel-center rounded-box">
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
//       alt="Pizza" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
//       alt="Pizza" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
//       alt="Pizza" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
//       alt="Pizza" />
//   </div>
// </div>
//   );
// }

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/events/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllEvents(isEnabled);

  return (
    <div className="container mx-auto px-5">
      <Intro />
    </div>
  );
}
