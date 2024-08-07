import LinkCard from "@/components/globals/LinkCard";

export default function Requests() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">درخواست ها</h1>
      <div className="flex w-full flex-col items-center gap-4">
        <LinkCard title="درخواست برداشت" link="/" />
      </div>
    </div>
  );
}
