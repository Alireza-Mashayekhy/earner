import { ReactEventHandler, ReactNode } from "react";

interface PropsType {
  status: boolean;
  children: ReactNode;
  close: ReactEventHandler;
}

const Modal = (props: PropsType) => {
  return (
    <>
      {props.status && (
        <div className="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center">
          <div
            onClick={(e) => {
              props.close(e);
            }}
            className="fixed left-0 top-0 h-screen w-screen backdrop-blur"
          ></div>
          <div className="relative w-4/5">
            <div className="w-full rounded-3xl bg-primary-1">
              {props.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
