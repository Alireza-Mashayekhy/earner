import LinkCard from "@/components/globals/LinkCard";

export default function WithdrawalRequests() {
  interface requestType {
    id: string;
    price: number;
  }

  const requests: requestType[] = [
    {
      id: "129",
      price: 75000,
    },
    {
      id: "602",
      price: 399900,
    },
    {
      id: "441",
      price: 45000,
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">درخواست های برداشت</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {requests.map((request) => {
          return (
            <LinkCard
              withText
              key={request.id}
              title={`برداشت
                ${request.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                از کاربر ${request.id}`}
              link="/"
            />
          );
        })}
      </div>
    </div>
  );
}
