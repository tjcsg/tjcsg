"use client";

import { getAllEvents } from "@/lib/api";
import Link from "next/link";

export default async function SpecialEvents() {
  const allEvents = await getAllEvents(false);

  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Special Events
          </h2>
          <p className="mt-2 text-md leading-8 text-gray-600">
            Stay tuned for our special services!
          </p>
          <div className="mt-12 space-y-20 lg:mt-20 lg:space-y-20">
            {allEvents &&
              allEvents.slice(0, 3).map((event) => (
                <article
                  key={event.slug}
                  className="relative isolate flex flex-col gap-8 sm:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:w-64 md:w-72 sm:shrink-0">
                    <img
                      src={event.poster.url}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    <p className="absolute bottom-2 left-2 z-10 rounded-full text-xs bg-opacity-85 bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {Date.now() < new Date(event.date).getTime()
                        ? "Upcoming"
                        : "Ended"}
                    </p>
                  </div>
                  <div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/events/${event.slug}`}>
                          <span className="absolute inset-0" />
                          {event.title}
                        </Link>
                      </h3>
                      {/* <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p> */}
                    </div>
                    <div className="flex flex-col items-start gap-x-4 text-xs">
                      <time
                        dateTime={event.date}
                        className="text-gray-500 mt-2"
                      >
                        {new Intl.DateTimeFormat("en-GB", {
                          timeZone: "UTC",
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        }).format(new Date(event.date))}
                        -
                        {new Intl.DateTimeFormat("en-GB", {
                          timeZone: "UTC",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        }).format(
                          new Date(
                            new Date(event.date).getTime() +
                              event.duration * 60000
                          )
                        )}
                      </time>
                      {event.date2 && (
                        <time
                          dateTime={event.date}
                          className="text-gray-500 mt-2"
                        >
                          {new Intl.DateTimeFormat("en-GB", {
                            timeZone: "UTC",
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          }).format(new Date(event.date2))}
                          -
                          {new Intl.DateTimeFormat("en-GB", {
                            timeZone: "UTC",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          }).format(
                            new Date(
                              new Date(event.date2).getTime() +
                                event.duration2 * 60000
                            )
                          )}
                        </time>
                      )}
                      <Link
                        href={`/events/${event.slug}`}
                        className="relative z-10 rounded-full mt-3 bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {event.church}
                      </Link>
                      <Link
                        href={`/events/${event.slug}`}
                        className="relative z-10 mt-3 font-medium text-sm underline text-button hover:text-button_hover"
                      >
                        Find out more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
