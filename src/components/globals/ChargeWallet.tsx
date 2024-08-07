import React from "react";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import TermsAndConditionsModal from "./TermsAndConditionsModal";
const ChargeWallet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="flex flex-col items-center gap-2">
        icon
        <span>شارژ</span>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" borderRadius="16px" bgColor="#252a34" className="py-8">
          <ModalBody>
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-2xl font-bold">شارژ کیف پول</h1>
              <Input
                borderRadius="16px"
                type="text"
                bgColor="#445167"
                placeholder="مبلغ(حداقل50،000و حداکثر1میلیارد تومان)"
                border="0"
                height="60px"
              />
              <p className="text-gray-400">
                به مبلغ 10 درصد مالیات اضافه میشود.
              </p>
            </div>
          </ModalBody>

          <ModalFooter className="flex flex-col">
            <TermsAndConditionsModal />

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

export default ChargeWallet;
