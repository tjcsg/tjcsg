'use client';

import ImageModal from '@/lib/components/image-modal';
import { useState } from 'react';

export default function CdbdSchedule({
  schedule,
  text,
}: {
  schedule: string;
  text: string;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <ImageModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        src={schedule}
        alt="test"
        width={1019}
        height={1544}
      />
      <button
        onClick={() => setOpenModal(true)}
        className="mt-2 text-lg leading-8 text-button hover:text-button_hover hover:underline"
      >
        {text}
      </button>
    </>
  );
}
