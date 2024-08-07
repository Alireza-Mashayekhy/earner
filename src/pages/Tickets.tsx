import LinkCard from "@/components/globals/LinkCard";

export default function Tickets() {
  interface depositType {
    id: string;
    date: Date;
  }

  const deposits: depositType[] = [
    {
      id: "339",
      date: new Date(),
    },
    {
      id: "301",
      date: new Date(),
    },
    {
      id: "553",
      date: new Date(),
    },
    {
      id: "187",
      date: new Date(),
    },
    {
      id: "190",
      date: new Date(),
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">تیکت های پشتیبانی</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {deposits.map((request) => {
          return (
            <LinkCard
              withText
              key={request.id}
              title={`تیکت "${request.id}" در تاریخ ${request.date.toLocaleDateString("fa-ir", { day: "numeric", month: "numeric" })}`}
              link="/"
            />
          );
        })}
      </div>
    </div>
  );
}
