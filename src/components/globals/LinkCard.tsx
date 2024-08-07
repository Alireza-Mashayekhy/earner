import { Link } from "react-router-dom";

import { ArrowLeft2 } from "iconsax-react";

interface PropsType {
  link: string;
  title: string;
  withText?: boolean;
}
const LinkCard = (props: PropsType) => {
  return (
    <Link
      to={props.link}
      className="border-primary-2 flex h-[60px] w-full items-center justify-between rounded-[12px] border bg-primary-1 px-[20px]"
    >
      <span>{props.title}</span>
      {props.withText ? (
        <div className="text-[#267ce6]">مشاهده</div>
      ) : (
        <ArrowLeft2 className="text-gray-500" />
      )}
    </Link>
  );
};
export default LinkCard;
