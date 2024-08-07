import LinkCard from "@/components/globals/LinkCard";

export default function OutgoingDeposits() {
  interface depositType {
    id: string;
    price: number;
  }

  const deposits: depositType[] = [
    {
      id: "129",
      price: 100000,
    },
    {
      id: "602",
      price: 100000,
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">واریزی های خروجی</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {deposits.map((request) => {
          return (
            <LinkCard
              withText
              key={request.id}
              title={`                واریز
                ${request.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                به کاربر ${request.id}`}
              link="/"
            />
          );
        })}
      </div>
    </div>
  );
}
