import { ReactElement } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft2,
  Discover,
  Eye,
  Messages,
  VideoVertical,
} from "iconsax-react";

export default function Home() {
  interface itemType {
    icon: ReactElement;
    title: string;
    link: string;
  }
  const items: itemType[] = [
    {
      icon: <Messages color="#26e6b2" size={50} />,
      title: "تیکت های جدید",
      link: "/",
    },
    {
      icon: <VideoVertical color="#26e6b2" size={50} />,
      title: "ویدئو های جدید",
      link: "/",
    },
    {
      icon: <Eye color="#26e6b2" size={50} />,
      title: "لینک های جدید",
      link: "/",
    },
    {
      icon: <Discover color="#26e6b2" size={50} />,
      title: "ماموریت های مجاز جدید",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">پیشخوان</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {items.map((item) => {
          return (
            <Link
              to={item.link}
              key={item.title}
              className="border-primary-2 flex flex-col items-center gap-3 rounded-[12px] border bg-primary-1 py-[20px]"
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
