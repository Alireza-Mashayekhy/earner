import React from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { ArrowLeft2 } from "iconsax-react";
const SupportModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="border-primary-2 flex h-[60px] w-full items-center justify-between rounded-[12px] border bg-primary-1 px-[20px]"
      >
        <span>تیکت</span>
        <ArrowLeft2 className="text-gray-500" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" borderRadius="16px" bgColor="#252a34">
          <ModalBody>
            <div className="flex flex-col items-center gap-4 py-4">
              <h1 className="mt-4 text-2xl font-bold">تیکت</h1>
              <p className="text-lg text-gray-400">
                چه سوالی دارید؟ به پشتیبانی تیکت بزنید و منتظر پاسخ باشید
              </p>
              <Textarea
                placeholder="متن شما..."
                bgColor="#445167"
                height="200px"
                borderRadius="16px"
                border="0"
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              width="100%"
              textColor="#fff"
              borderRadius="16px"
              backgroundColor="#2788ff"
              _hover={{ backgroundColor: "#267ce6" }}
              height="60px"
            >
              ادامه
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SupportModal;
