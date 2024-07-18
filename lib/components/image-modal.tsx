'use client';

import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import ContentfulImage from '../contentful-image';

export default function ImageModal({
  openModal,
  setOpenModal,
  src,
  alt,
  width,
  height,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Dialog open={openModal} onClose={setOpenModal} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 md:max-w-xl"
          >
            <ContentfulImage
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="sm:text-md mt-6 block w-full text-nowrap rounded-md border-2 border-button bg-button py-2 text-sm font-semibold  text-white shadow-sm hover:border-button_hover hover:bg-button_hover sm:leading-4"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
