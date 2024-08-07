import { useState } from "react";

import { TickCircle } from "iconsax-react";

import Modal from "@/components/globals/Modal";

export default function Home() {
  const [isSuccess, setSuccess] = useState(false);
  return (
    <div className="grid grid-cols-3 gap-3">
      <div
        onClick={() => setSuccess(true)}
        className="col-span-2 flex items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <div
        onClick={() => setSuccess(true)}
        className="flex aspect-square items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <div
        onClick={() => setSuccess(true)}
        className="flex aspect-square items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <div
        onClick={() => setSuccess(true)}
        className="flex aspect-square items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <div
        onClick={() => setSuccess(true)}
        className="flex aspect-square items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <div
        onClick={() => setSuccess(true)}
        className="flex aspect-square items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <div
        onClick={() => setSuccess(true)}
        className="col-span-2 flex items-center justify-center rounded-xl bg-gray-300 text-black"
      >
        AD
      </div>
      <Modal status={isSuccess} close={() => setSuccess(false)}>
        <div className="flex flex-col items-center p-5 pt-0">
          <TickCircle
            color="#26e6b2"
            size={60}
            className="relative bottom-6 rounded-full bg-primary-2"
          />
          <div className="mb-5 text-2xl">ماموریت انجام شد!</div>
          <button
            onClick={() => {
              setSuccess(false);
            }}
            className="w-full rounded-2xl bg-secondary-1 p-3"
          >
            بازگشت
          </button>
        </div>
      </Modal>
    </div>
  );
}
