import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ArrowLeft2,
  HambergerMenu,
  LogoutCurve,
  Notification,
} from "iconsax-react";

import { DRAWER_ITEMS } from "@/constants/data";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNotificationOpen, setNotification] = useState(false);
  const [isShowingUser, setUser] = useState(false);

  useEffect(() => {
    if (isNotificationOpen) {
      setUser(false);
    }
  }, [isNotificationOpen]);

  useEffect(() => {
    if (isShowingUser) {
      setNotification(false);
    }
  }, [isShowingUser]);

  const navigator = useNavigate();

  const logoutHandler = () => {};

  const handleNavItemClick = (path: string) => {
    onClose();
    navigator(path);
  };

  return (
    <div className="container mx-auto flex h-16 items-center justify-between bg-primary-1 px-6 lg:rounded-b-md">
      <button onClick={onOpen}>
        <HambergerMenu />
      </button>
      <div>جیب تو جیب</div>
      <div className="flex items-center gap-2">
        <button
          className="z-50"
          onClick={() => setNotification(!isNotificationOpen)}
        >
          <Notification color="#267ce6" />
        </button>
        {isNotificationOpen && (
          <div className="fixed left-10 top-20 z-50 flex w-3/5 max-w-64 flex-col gap-3 rounded-3xl bg-primary-1 p-3">
            <h3 className="text-center">اعلان ها</h3>
            {[...new Array(4)].map((el, index) => {
              return (
                <div className="flex items-center justify-between rounded-2xl bg-[#3d4452] p-3">
                  <div>اعلان #{index + 1}</div>
                  <div className="text-secondary-1">مشاهده</div>
                </div>
              );
            })}
          </div>
        )}
        {isNotificationOpen && (
          <span
            onClick={() => setNotification(false)}
            className="fixed left-0 top-0 z-40 h-screen w-screen backdrop-blur-sm"
          />
        )}
        <button className="z-50" onClick={() => setUser(!isShowingUser)}>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="sm"
          />
        </button>
        {isShowingUser && (
          <div className="fixed left-10 top-20 z-50 flex w-3/5 max-w-64 flex-col gap-3 rounded-3xl bg-primary-1 p-3">
            <h3 className="text-center">اطلاعات کاربر</h3>
            <div className="flex items-center justify-between rounded-2xl bg-[#3d4452] p-3">
              مهرداد انصاری فرد
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#3d4452] p-3">
              <div>نام کاربری</div>
              <div>TheUser</div>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#3d4452] p-3">
              <div>اعلانات</div>
              <div>+9</div>
            </div>
            <button className="flex items-center justify-between rounded-2xl bg-[#3d4452] p-3 text-red-600">
              خروج از حساب
            </button>
          </div>
        )}
        {isShowingUser && (
          <span
            onClick={() => setUser(false)}
            className="fixed left-0 top-0 z-40 h-screen w-screen backdrop-blur-sm"
          />
        )}
      </div>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent className="!bg-primary-1">
          <DrawerHeader className="mb-5 flex items-center justify-between">
            <div>لوگو</div>
            <p className="text-sm text-gray-300">ورژن ۱.۰</p>{" "}
          </DrawerHeader>

          <DrawerBody className="flex flex-col gap-4">
            {DRAWER_ITEMS.map((item) =>
              item.path ? (
                <Button
                  key={item.id}
                  onClick={() => handleNavItemClick(item.path)}
                  variant="outline"
                  className="flex w-full !items-center !justify-between !rounded-xl border !border-[#2b323e] bg-primary-1 py-6 hover:!bg-primary-1 hover:!text-white"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                  <ArrowLeft2 className="text-gray-500" />
                </Button>
              ) : (
                <Button
                  key={item.id}
                  onClick={logoutHandler}
                  variant="outline"
                  className="flex w-full !items-center !justify-start gap-2 !rounded-xl border !border-[#2b323e] bg-primary-1 !text-white hover:!bg-primary-1 hover:!text-white"
                >
                  {item.icon}
                  {item.label}
                </Button>
              ),
            )}
            <Button
              onClick={logoutHandler}
              variant="outline"
              className="flex w-full !items-center !justify-start gap-2 !rounded-xl border !border-[#2b323e] bg-primary-1 !text-white hover:!bg-primary-1 hover:!text-white"
            >
              <LogoutCurve color="red" />
              خروج
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
