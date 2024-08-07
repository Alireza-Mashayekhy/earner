import { Link } from "react-router-dom";

import { Avatar } from "@chakra-ui/react";

export default function Profile2() {
  const wallet = 1990000;
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center gap-3">
        <Avatar
          size="lg"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <div className="flex flex-col items-start justify-between gap-3">
          <h3 className="text-xl font-bold">مهرداد انصاری فرد</h3>
          <p className="rounded-full bg-primary-1 p-1 px-3 text-xs text-orange-400">
            کاربر طلایی
          </p>
        </div>
      </div>
      <div>
        <div className="text-4xl font-bold text-secondary-1">
          {wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="mt-2 flex justify-between gap-10">
          <div>تومان</div>
          <div className="text-gray-400">درآمد</div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]">
          <span>تعداد آیتم های باقی مانده</span>
          <span>
            180/<span className="text-xs">200</span>
          </span>
        </div>
        <Link
          to="/upgrade"
          className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
        >
          <span>کاربر VIP شوید!</span>
          <span>ارتقاء عضویت</span>
        </Link>
        <Link
          to="/"
          className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
        >
          <div className="w-full text-center text-secondary-1">
            تبلیغات دلخواه - Ads
          </div>
        </Link>
      </div>
    </div>
  );
}
