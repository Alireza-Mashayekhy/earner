import LinkCard from "@/components/globals/LinkCard";

export default function Deposits() {
  interface depositType {
    id: string;
    price: number;
    user: string;
  }

  const deposits: depositType[] = [
    {
      id: "1",
      price: 1400000,
      user: "علی احمدی",
    },
    {
      id: "1",
      price: 1600000,
      user: "حسین آبادی",
    },
    {
      id: "1",
      price: 200000,
      user: "محمد احمدی",
    },
    {
      id: "1",
      price: 1400000,
      user: "علی احمدی",
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">واریزی ها</h1>
      <div className="flex w-full flex-col items-center gap-4">
        {deposits.map((request) => {
          return (
            <LinkCard
              key={request.id}
              title={` واریز
                ${request.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} برای کاربر "${request.user}"`}
              link="/"
            />
          );
        })}
      </div>
    </div>
  );
}
