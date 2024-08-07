import LinkCard from "@/components/globals/LinkCard";

export default function Accounting() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">حسابداری</h1>
      <div className="flex w-full flex-col items-center gap-4">
        <LinkCard title="درخواست های برداشت" link="/" />
        <LinkCard title="لیست واریزی های ورودی" link="/" />
        <LinkCard title="لیست واریزی های خروجی" link="/" />
        <LinkCard title="گزارش گیری" link="/" />
      </div>
    </div>
  );
}
