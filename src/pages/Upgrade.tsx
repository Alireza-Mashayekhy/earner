import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { ArrowLeft2, MedalStar, Triangle, Unlimited } from "iconsax-react";

export default function Upgrade() {
  interface itemType {
    icon: ReactElement;
    title: string;
    description: string;
    link: string;
  }
  const items: itemType[] = [
    {
      icon: <Unlimited color="#26e6b2" size={50} />,
      description: "استفاده نامحدود از آیتم ها",
      title: "ویژه",
      link: "/",
    },
    {
      icon: <Triangle color="#26e6b2" size={50} />,
      description: "استفاده از 250 آیتم",
      title: "الماسی",
      link: "/",
    },
    {
      icon: <MedalStar color="#26e6b2" size={50} />,
      description: "استفاده از 200 آیتم",
      title: "طلایی",
      link: "/",
    },
    {
      icon: <MedalStar color="#26e6b2" size={50} />,
      description: "استفاده از 150 آیتم",
      title: "نقره ای",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">کسب درآمد</h1>
      <p className="mb-5 text-sm text-gray-300">
        از پلن های زیر برای ارتقاء خود استفاده کنید.
      </p>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((item) => {
          return (
            <Link
              to={item.link}
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-[12px] border border-primary-2 bg-primary-1 py-[20px]"
            >
              {item.icon}
              <span className="text-center">{item.title}</span>
              <div className="flex items-center text-sm text-gray-400">
                مشاهده
                <ArrowLeft2 size={10} className="relative right-1" />
                <ArrowLeft2 size={10} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
