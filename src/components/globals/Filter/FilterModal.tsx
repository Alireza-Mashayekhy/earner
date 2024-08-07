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
import { ArrowLeft2 } from "iconsax-react";

import AdvanceFilterModal from "./AdvanceFilterModal";
const FilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = [
    { title: "استان" },
    { title: "شهر" },
    { title: "جنسیت" },
    { title: "محدوده سنی" },
    { title: "وضعیت اشتغال" },
    { title: "وضعیت تاهل" },
  ];
  return (
    <>
      <button
        onClick={onOpen}
        className="border-primary-2 flex h-[60px] w-full items-center justify-between rounded-[12px] border bg-primary-1 px-[20px]"
      >
        <span>فیلتر ها</span>
        <ArrowLeft2 className="text-gray-500" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" borderRadius="16px" bgColor="#252a34">
          <ModalBody>
            <div className="flex w-full flex-col items-center justify-center gap-4 py-5">
              <h1 className="text-xl text-white">فیلتر ها</h1>
              <div className="flex w-full flex-col items-center gap-4">
                {data.map((item, index) => (
                  <Input
                    key={index}
                    placeholder={item.title}
                    width={"100%"}
                    borderRadius={"12px"}
                    backgroundColor={"#445167"}
                    height={"60px"}
                    border={"1px"}
                    borderColor={"#445167"}
                  />
                ))}
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex w-full flex-col gap-4">
              <Button
                width="100%"
                textColor="#fff"
                borderRadius="16px"
                backgroundColor="#2788ff"
                _hover={{ backgroundColor: "#267ce6" }}
                height="60px"
              >
                فیلتر
              </Button>
              <AdvanceFilterModal />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
