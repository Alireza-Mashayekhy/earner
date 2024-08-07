import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { IconCheckCircle } from "@/components/Icons";
import { signUpUserFormOneData } from "@/constants/data";

const SignUpModalFormOne = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showModalState, setShowModalState] = useState(false);
  const onCloseHandler = () => {
    onClose();
    setShowModalState(true);
  };
  return (
    <>
      <Button
        width={"100%"}
        textColor={"#fff"}
        borderRadius={"16px"}
        onClick={() => (showModalState ? null : onOpen())}
        display={"flex"}
        border={"1px"}
        borderColor={"#445167"}
        justifyContent={"space-between"}
        backgroundColor={"#252a34"}
        cursor={showModalState ? "not-allowed" : "pointer"}
        _hover={{
          backgroundColor: showModalState ? "#252a34" : "#267ce6",
        }}
        height={"60px"}
      >
        <span>اطلاعات اولیه</span>
        <span className={`${showModalState ? "" : "hidden"}`}>
          <IconCheckCircle />
        </span>
      </Button>

      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"#252a34"}>
          <ModalHeader>فرم اول</ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-col items-center gap-6">
              {signUpUserFormOneData.map((item, index) => (
                <div key={index} className="flex w-full flex-col gap-2">
                  <h2 className="pr-2 text-lg font-semibold">{item.title}</h2>
                  <Input
                    placeholder={item.placeholder}
                    width={"100%"}
                    borderRadius={"12px"}
                    backgroundColor={"#252a34"}
                    height={"60px"}
                    border={"1px"}
                    borderColor={"#445167"}
                    type={item.type}
                  />
                </div>
              ))}
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex w-full items-center justify-center">
              <Button
                width={"100%"}
                textColor={"#fff"}
                borderRadius={"16px"}
                backgroundColor={"#2788ff"}
                onClick={onCloseHandler}
                _hover={{
                  backgroundColor: "#267ce6",
                }}
                height={"60px"}
              >
                ثبت
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpModalFormOne;
