import {
  AlignBottom,
  EmptyWallet,
  Home,
  MoneyArchive,
  Receipt1,
  ReceiptSearch,
  User,
} from "iconsax-react";

const signUpUserFormOneData = [
  {
    title: "نام کاربری",
    placeholder: "نام کاربری خود را وارد کنید",
    type: "text",
  },
  {
    title: "رمز عبور",
    placeholder: "رمز عبور خود را وارد کنید",
    type: "password",
  },
  { title: "شماره موبایل", placeholder: "0912 345 6789", type: "tel" },
  { title: "ایمیل", placeholder: "ایمیل خود را وارد کنید", type: "gmail" },
  {
    title: "نام و نام خانوادگی",
    placeholder: "نام و نام خانوادگی خود را وارد کنید",
    type: "text",
  },
  { title: "نام پدر", placeholder: "نام پدر خود را وارد کنید", type: "text" },
  { title: "جنسیت", placeholder: "جنسیت خود را را وارد کنید", type: "text" },
  {
    title: "شهر سکونت",
    placeholder: "شهر سکونت خود را وارد کنید",
    type: "text",
  },
  {
    title: "منطقه زندگی",
    placeholder: "منطقه زندگی خود را وارد کنید",
    type: "text",
  },
  {
    title: "تاریخ تولد",
    placeholder: "تاریخ تولد خود را وارد کنید",
    type: "date",
  },
  {
    title: "مدرک تحصیلی",
    placeholder: "مدرک تحصیلی خود را خود را وارد کنید",
    type: "text",
  },
];

const signUpUserFormTwoData = [
  {
    title: "دین و مذهب",
    placeholder: "دین و مذهب خود را وارد کنید",
    type: "text",
  },
  { title: "شغل", placeholder: "شغل خود را وارد کنید", type: "text" },
  { title: "وزن", placeholder: "وزن خود را وارد کنید", type: "number" },
  { title: "قد", placeholder: "قد خود را وارد کنید", type: "number" },
  {
    title: "رنگ پوست",
    placeholder: "رنگ پوست خود را وارد کنید",
    type: "text",
  },
  {
    title: "میزارن سرمایه",
    placeholder: "میزارن سرمایه خود را وارد کنید",
    type: "number",
  },
  {
    title: "وضعیت سکونت",
    placeholder: "وضعیت سکونت خود را را وارد کنید",
    type: "text",
  },
  {
    title: "سیگار و دخانیات",
    placeholder: "سیگار و دخانیات خود را وارد کنید",
    type: "text",
  },
  {
    title: "ورزش مورد علاقه",
    placeholder: "ورزش مورد علاقه خود را وارد کنید",
    type: "text",
  },
  {
    title: "وضعیت تاهل",
    placeholder: "وضعیت تاهل خود را وارد کنید",
    type: "text",
  },
  {
    title: "تعداد فرزندان",
    placeholder: "تعداد فرزندان خود را خود را وارد کنید",
    type: "number",
  },
];

const signUpUserFormThreeData = [
  {
    title: "سلامت جسمانی",
    placeholder: "سلامت جسمانی خود را وارد کنید",
    type: "text",
  },
  {
    title: "وقت روزانه",
    placeholder: "چند ساعت در روز وقت دارید ؟",
    type: "text",
  },
  {
    title: "سبک هنر مورد علاقه",
    placeholder: "سبک هنر مورد علاقه",
    type: "text",
  },
  {
    title: "سبک موسیقی مورد علاقه",
    placeholder: "سبک موسیقی مورد علاقه",
    type: "text",
  },
  {
    title: "سبک کتاب مورد علاقه",
    placeholder: "سبک کتاب مورد علاقه",
    type: "text",
  },
  {
    title: "سبک فیلم مورد علاقه",
    placeholder: "سبک فیلم مورد علاقه",
    type: "text",
  },
  {
    title: "نوشیدنی مورد علاقه",
    placeholder: "نوشیدنی مورد علاقه",
    type: "text",
  },
  { title: "زبان مورد علاقه", placeholder: "زبان مورد علاقه", type: "text" },
  { title: "کشور مورد علاقه", placeholder: "کشور مورد علاقه", type: "text" },
  { title: "رنگ مورد علاقه", placeholder: "رنگ مورد علاقه", type: "text" },
  { title: "تفریح مورد علاقه", placeholder: "تفریح مورد علاقه", type: "text" },
];

const signUpUserFormFourData = [
  {
    title: "مسافرت",
    placeholder: "برای مسافرت کدام را انتخاب میکنید؟",
    type: "text",
  },
  {
    title: "سفر با وسیله نقلیه",
    placeholder: "سفر با چه وسیله ای را ترجیح میدهید؟",
    type: "text",
  },
  {
    title: "فصل سفر",
    placeholder: "چه فصلی را برای سفر مناسب میدانید",
    type: "text",
  },
  { title: "سفر", placeholder: "برای سفر کدام را انتخاب میکنید", type: "text" },
  {
    title: "پیرایش",
    placeholder: "ماهانه چند مرتبه آرایشگاه میروید؟",
    type: "text",
  },
  {
    title: "ابزار",
    placeholder: "از کدام ابزار استفاده میکنید؟",
    type: "text",
  },
  { title: "لباس", placeholder: "چه سبک لباسی را دوست دارید؟", type: "text" },
  { title: "کفش", placeholder: "چه سبک کفشی را دوست دارید؟", type: "text" },
  { title: "احراز هویت", placeholder: "عکس کارت ملی(رو)", type: "file" },
];

export const DRAWER_ITEMS = [
  { id: 1, path: "/", label: "پیشخوان", icon: <Home color="#267ce6" /> },
  {
    id: 2,
    path: "/earn",
    label: "کسب درآمد",
    icon: <Receipt1 color="#267ce6" />,
  },
  {
    id: 3,
    path: "/upgrade",
    label: "ارتقاء کاربری",
    icon: <MoneyArchive color="#267ce6" />,
  },
  {
    id: 4,
    path: "/wallet",
    label: "کیف پول",
    icon: <EmptyWallet color="#267ce6" />,
  },
  {
    id: 5,
    path: "/financial-report",
    label: "گزارش مالی",
    icon: <ReceiptSearch color="#267ce6" />,
  },
  {
    id: 6,
    path: "/activity-report",
    label: "گزارش فعالیت",
    icon: <AlignBottom color="#267ce6" />,
  },
  {
    id: 7,
    path: "/profile",
    label: "پروفایل",
    icon: <User color="#267ce6" />,
  },
];

export {
  signUpUserFormOneData,
  signUpUserFormTwoData,
  signUpUserFormThreeData,
  signUpUserFormFourData,
};
