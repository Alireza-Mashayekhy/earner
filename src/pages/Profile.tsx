import { Link } from "react-router-dom";

import { Avatar, Button } from "@chakra-ui/react";

export default function Profile() {
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
      <div className="flex w-full flex-col gap-4">
        <div className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]">
          <span>رمز عبور</span>
          <span>xxxx</span>
        </div>
        <div className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]">
          <span>ایمیل</span>
          <span>someone@example.com</span>
        </div>
        <div className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]">
          <span>شماره موبایل</span>
          <span>0912-345-6789</span>
        </div>
        <Link
          to="/"
          className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
        >
          <div className="w-full text-center text-secondary-1">
            تبلیغات دلخواه - Ads
          </div>
        </Link>
      </div>
      <Button
        width="100%"
        textColor="#fff"
        borderRadius="16px"
        backgroundColor="#2788ff"
        _hover={{ backgroundColor: "#267ce6" }}
        height="60px"
        marginTop="20px"
      >
        تغیر رمز عبور
      </Button>
    </div>
  );
}
