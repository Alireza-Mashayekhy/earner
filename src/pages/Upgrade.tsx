import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import { MedalStar, Triangle, Unlimited } from "iconsax-react";

import Modal from "@/components/globals/Modal";

export default function Upgrade() {
  interface itemType {
    icon: ReactElement;
    title: string;
    description: string;
    price: number;
  }
  const items: itemType[] = [
    {
      icon: <Unlimited color="#26e6b2" size={50} />,
      description: "استفاده نامحدود از آیتم ها",
      title: "ویژه",
      price: 500000,
    },
    {
      icon: <Triangle color="#26e6b2" size={50} />,
      description: "استفاده از 250 آیتم",
      title: "الماسی",
      price: 250000,
    },
    {
      icon: <MedalStar color="#26e6b2" size={50} />,
      description: "استفاده از 200 آیتم",
      title: "طلایی",
      price: 200000,
    },
    {
      icon: <MedalStar color="#26e6b2" size={50} />,
      description: "استفاده از 150 آیتم",
      title: "نقره ای",
      price: 150000,
    },
  ];

  const [price, setPrice] = useState(1690550);
  const [warningModal, setWarningModal] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">کسب درآمد</h1>
      <p className="mb-5 text-sm text-gray-300">
        از پلن های زیر برای ارتقاء خود استفاده کنید.
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((item) => {
          return (
            <div
              onClick={() => {
                setPrice(item.price);
                setWarningModal(true);
              }}
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-[12px] border border-primary-2 bg-primary-1 py-[20px]"
            >
              {item.icon}
              <span className="text-center">{item.title}</span>
              <span className="text-center text-xs text-gray-300">
                {item.description}
              </span>
              <span className="text-center text-secondary-1">
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                تومان
              </span>
            </div>
          );
        })}
      </div>
      <Link
        to="/"
        className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
      >
        <div className="w-full text-center text-secondary-1">
          تبلیغات دلخواه - Ads
        </div>
      </Link>
      <Modal status={warningModal} close={() => setWarningModal(false)}>
        <div className="flex flex-col gap-3 p-5">
          <h2 className="mb-3 text-center text-2xl">هشدار</h2>
          <p className="mb-5">
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            تومان برای خرید پلن ویژه از کیف پول برداشته شود؟
          </p>
          <button
            onClick={() => {
              setWarningModal(false);
            }}
            className="rounded-2xl bg-secondary-1 p-3"
          >
            تایید
          </button>
          <button
            onClick={() => {
              setWarningModal(false);
            }}
            className="rounded-2xl bg-primary-2 p-3"
          >
            بازگشت
          </button>
        </div>
      </Modal>
    </div>
  );
}
