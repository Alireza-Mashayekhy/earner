import { Link } from "react-router-dom";

export default function ActivityReport() {
  interface reportType {
    id: string;
    link: string;
    total: number;
    success: number;
  }

  const reports: reportType[] = [
    {
      id: "1",
      success: 180,
      total: 200,
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">گزارش فعالیت</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {reports.map((request) => {
          return (
            <div className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]">
              <div className="text-gray-300">ماموریت های انجام شده</div>
              <div className="text-gray-300">
                {request.total}/
                <span className="text-xs">{request.success}</span>
              </div>
            </div>
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
      </div>
    </div>
  );
}
