import { useState } from "react";

import { ArrowDown2, ArrowUp2 } from "iconsax-react";

export default function Support() {
  const types: string[] = ["پشتیبانی فنی", "مالی و حسابداری", "مدیریت"];
  const [selectedType, setType] = useState(types[0]);
  const [isShowingTypes, setShowTypes] = useState(false);

  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-bold">تیکت پشتیبانی</h1>
      <div>
        {isShowingTypes ? (
          <div className="bg-primary-2 relative flex w-full flex-col gap-2 rounded-xl p-3">
            {types.map((type, index) => {
              return (
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    onClick={() => {
                      setType(type);
                      setShowTypes(false);
                    }}
                    checked={type === selectedType}
                    className="accent-secondary-1"
                    id={`radio-${index}`}
                  />
                  <label htmlFor={`radio-${index}`}>{type}</label>
                </div>
              );
            })}
            <div className="absolute left-3 top-3">
              <ArrowUp2 />
            </div>
          </div>
        ) : (
          <div
            onClick={() => setShowTypes(true)}
            className="bg-primary-2 flex w-full items-center justify-between rounded-xl p-3"
          >
            <div>{selectedType}</div>
            <div>
              <ArrowDown2 />
            </div>
          </div>
        )}
      </div>
      <textarea
        placeholder="متن تیکت..."
        className="border-primary-2 resize-none rounded-xl border bg-primary-1 p-3 outline-none"
        rows={10}
      />
      <button className="rounded-xl bg-secondary-1 p-3">ارسال تیکت</button>
    </div>
  );
}
