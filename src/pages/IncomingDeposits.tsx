import LinkCard from "@/components/globals/LinkCard";

export default function IncomingDeposits() {
  interface depositType {
    id: string;
    price: number;
  }

  const deposits: depositType[] = [
    {
      id: "1",
      price: 399900,
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">واریزی های ورودی</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {deposits.map((request) => {
          return (
            <LinkCard
              withText
              key={request.id}
              title={` واریز
                ${request.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
              link="/"
            />
          );
        })}
      </div>
    </div>
  );
}
