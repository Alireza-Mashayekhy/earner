import { Link } from "react-router-dom";

import { DirectboxReceive } from "iconsax-react";

export default function FinancialReport() {
  interface reportType {
    id: string;
    price: number;
    link: string;
    date: Date;
  }

  const reports: reportType[] = [
    {
      id: "1",
      price: 120000,
      link: "/",
      date: new Date(),
    },
    {
      id: "2",
      price: 170000,
      link: "/",
      date: new Date(),
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">گزارش گیری</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {reports.map((request) => {
          return (
            <Link
              to={request.link}
              className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
            >
              <div className="text-gray-300">
                {request.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                تومان
              </div>
              <div className="text-gray-300">
                {request.date.toLocaleDateString("fa-ir", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </div>
            </Link>
          );
        })}
        <Link
          to="/"
          className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
        >
          <div className="w-full text-center text-secondary-1">
            تبلیغات دلخواه - Ads
          </div>
        </Link>
        <button className="fixed bottom-10 left-10 flex items-center gap-3 rounded-xl bg-secondary-1 p-3">
          <span className="mt-1">دریافت PDF</span>
          <DirectboxReceive />
        </button>
      </div>
    </div>
  );
}
