import { Link } from "react-router-dom";

import {
  ArrowLeft2,
  Bubble,
  DirectboxReceive,
  Eye,
  Link2,
  UserEdit,
} from "iconsax-react";

export default function Earn() {
  const items = [
    {
      link: "/",
      title: "بازدید از ویدیو",
      icon: <Eye color="#26e6b2" />,
    },
    {
      link: "/",
      title: "بازدید از لینک ها",
      icon: <Link2 color="#26e6b2" />,
    },
    {
      link: "/",
      title: "نصب بازی و برنامه",
      icon: <DirectboxReceive color="#26e6b2" />,
    },
    {
      link: "/",
      title: "ثبت نام در سایت",
      icon: <UserEdit color="#26e6b2" />,
    },
    {
      link: "/",
      title: "خدمات مجازی",
      icon: <Bubble color="#26e6b2" />,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">کسب درآمد</h1>
      <p className="text-sm text-gray-300">
        یکی از گزینه های زیر را برای کسب درآمد انتخاب کنید.
      </p>
      <div className="flex w-full flex-col items-center gap-4">
        {items.map((item) => {
          return (
            <Link
              to={item.link}
              className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <ArrowLeft2 className="text-gray-500" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
