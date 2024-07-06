'use client';

export default function EventStatus({ date }: { date: any }) {
  return (
    <p className="absolute bottom-2 left-2 z-10 rounded-full bg-gray-100 bg-opacity-85 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100">
      {Date.now() < new Date(date).getTime() ? 'Upcoming' : 'Ended'}
    </p>
  );
}
