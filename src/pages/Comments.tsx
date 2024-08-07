import LinkCard from "@/components/globals/LinkCard";

export default function Comments() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">نظرات</h1>
      <div className="flex w-full flex-col items-center gap-4">
        <LinkCard title="تبلیغات جدید" link="/" />
        <LinkCard title="تبلیغات تائید شده" link="/" />
        <LinkCard title="تبلیغات تائید نشده" link="/" />
      </div>
    </div>
  );
}
