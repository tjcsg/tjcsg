import Link from 'next/link';

export default function CdbdSchedule({
  schedule,
  text,
}: {
  schedule: string;
  text: string;
}) {
  return (
    <>
      {/* <ImageModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        src={schedule}
        alt="test"
        width={1019}
        height={1544}
      /> */}
      <Link href={schedule} target="_blank" rel="noopener noreferrer">
        <button className="mt-2 text-lg leading-8 text-button hover:text-button_hover hover:underline">
          {text}
        </button>
      </Link>
    </>
  );
}
