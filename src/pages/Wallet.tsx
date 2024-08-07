import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowDown,
  ArrowDown2,
  ArrowUp,
  ArrowUp2,
  Warning2,
} from "iconsax-react";

import Modal from "@/components/globals/Modal";

export default function Wallet() {
  const [wallet, setWallet] = useState(1690550);

  const types: string[] = ["شماره شبا", "شماره حساب", "شماره کارت"];
  const [selectedType, setType] = useState(types[0]);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [isShowingTypes, setShowTypes] = useState(false);
  const [warningModal, setWarningModal] = useState(false);

  const [DepositModal, setDepositModal] = useState(false);

  const withdrawalList = [120000, 180000];
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <div className="text-4xl font-bold text-secondary-1">
          {wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div className="mt-2 flex justify-between gap-10">
          <div>تومان</div>
          <div className="text-gray-400">درآمد</div>
        </div>
      </div>
      <div className="flex gap-10">
        <button
          onClick={() => setWithdrawModal(true)}
          className="flex flex-col items-center gap-3"
        >
          <div className="rounded-full border border-[#26e6b2] bg-primary-1 p-2">
            <ArrowUp color="#26e6b2" />
          </div>
          <div className="text-gray-400">برداشت</div>
        </button>
        <button
          onClick={() => setDepositModal(true)}
          className="flex flex-col items-center gap-3"
        >
          <div className="rounded-full border border-[#26e6b2] bg-primary-1 p-2">
            <ArrowDown color="#26e6b2" />
          </div>
          <div className="text-gray-400">شارژ</div>
        </button>
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full border border-[#26e6b2] bg-primary-1 p-2">
            <Warning2 color="#26e6b2" />
          </div>
          <div className="text-gray-400">راهنما</div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h3>سوابق برداشت</h3>
        {withdrawalList.map((withdraw) => {
          return (
            <div
              key={withdraw}
              className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
            >
              {withdraw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
            </div>
          );
        })}
        <div className="text-center">به نظر میرسد به آخر لیست رسیده اید.</div>
        <Link
          to="/"
          className="flex h-[60px] w-full items-center justify-between rounded-[12px] border border-primary-2 bg-primary-1 px-[20px]"
        >
          <div className="w-full text-center text-secondary-1">
            تبلیغات دلخواه - Ads
          </div>
        </Link>
      </div>
      <Modal status={withdrawModal} close={() => setWithdrawModal(false)}>
        <div className="flex flex-col gap-3 p-5">
          <h2 className="mb-3 text-center text-2xl">برداشت از کیف پول</h2>
          {isShowingTypes ? (
            <div className="relative flex w-full flex-col gap-2 rounded-xl bg-primary-2 p-3">
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
              className="flex w-full items-center justify-between rounded-xl bg-primary-2 p-3 pr-5"
            >
              <div className="text-xs">پرداخت با {selectedType}</div>
              <div>
                <ArrowDown2 />
              </div>
            </div>
          )}
          <input
            type="text"
            className="rounded-xl bg-primary-2 px-5 py-4 text-xs outline-none"
            placeholder={selectedType}
          />
          <input
            type="text"
            className="rounded-xl bg-primary-2 px-5 py-4 text-xs outline-none"
            placeholder="مبلغ (حداقل 50,000 و حداکثر 1 ملیارد)"
          />
          <div className="text-center text-sm">
            اطلاعات باید به نام صاحب اکانت باشد.
          </div>
          <div className="my-3 flex items-center gap-3">
            <input type="checkbox" className="accent-secondary-1" />
            <div className="text-sm">
              <Link to="/" className="text-secondary-1 underline">
                قوانین و مقررات
              </Link>{" "}
              را خوانده و تایید میکنم.
            </div>
          </div>
          <button
            onClick={() => {
              setWarningModal(true);
            }}
            className="rounded-2xl bg-secondary-1 p-3"
          >
            برداشت
          </button>
        </div>
      </Modal>
      <Modal status={DepositModal} close={() => setDepositModal(false)}>
        <div className="flex flex-col gap-3 p-5">
          <h2 className="mb-3 text-center text-2xl">شارژ کیف پول</h2>
          <input
            type="text"
            className="rounded-xl bg-primary-2 px-5 py-4 text-xs outline-none"
            placeholder="مبلغ (حداقل 50,000 و حداکثر 1 ملیارد)"
          />
          <div className="text-center text-sm">
            به ملبغ 10 درصد مالیات اضافه میشود.
          </div>
          <div className="my-3 flex items-center gap-3">
            <input type="checkbox" className="accent-secondary-1" />
            <div className="text-sm">
              <Link to="/" className="text-secondary-1 underline">
                قوانین و مقررات
              </Link>{" "}
              را خوانده و تایید میکنم.
            </div>
          </div>
          <button
            onClick={() => {
              setWallet(wallet + 1000);
              setDepositModal(false);
            }}
            className="rounded-2xl bg-secondary-1 p-3"
          >
            ادامه
          </button>
        </div>
      </Modal>
      <Modal status={warningModal} close={() => setWarningModal(false)}>
        <div className="flex flex-col gap-3 p-5">
          <h2 className="mb-3 text-center text-2xl">هشدار</h2>
          <p>
            آیا از صحت اطلاعات خود اطمینان دارید؟ در صورت اشتباه بودن حساب شما
            بلوکه شده و به هیچ عنوان باز نمیگردد .
          </p>
          <button
            onClick={() => {
              setWallet(wallet - 1000);
              setWithdrawModal(false);
              setWarningModal(false);
            }}
            className="rounded-2xl bg-secondary-1 p-3"
          >
            برداشت
          </button>
        </div>
      </Modal>
    </div>
  );
}
