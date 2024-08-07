import LinkCard from "@/components/globals/LinkCard";

export default function Audit() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">حسابرسی</h1>
      <div className="flex w-full flex-col items-center gap-4">
        <LinkCard title="درخواست های برداشت" link="/" />
        <LinkCard title="واریزی های جدید" link="/" />
      </div>
    </div>
  );
}
