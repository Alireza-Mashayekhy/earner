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

import {
  signUpUserFormFourData,
  signUpUserFormThreeData,
} from "@/constants/data";
const AdvanceFilterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        width="100%"
        textColor="#fff"
        borderRadius="16px"
        backgroundColor="#484d57"
        _hover={{ backgroundColor: "#484d57" }}
        height="60px"
      >
        فیلتر پیشرفته
      </Button>
      <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="90%" borderRadius="16px" bgColor="#252a34">
          <ModalBody>
            <div className="flex w-full flex-col justify-center gap-4 py-5">
              <h1 className="text-xl text-white">فیلتر پیشرفته</h1>
              <div className="flex w-full flex-col items-center gap-4">
                {/* {signUpUserFormTwoData.map((item, index) => (
                  <Input
                    key={index}
                    placeholder={item.title}
                    type={item.type}
                    width={"100%"}
                    borderRadius={"12px"}
                    backgroundColor={"#445167"}
                    height={"60px"}
                    border={"1px"}
                    borderColor={"#445167"}
                  />
                ))} */}
                {signUpUserFormThreeData.map((item, index) => (
                  <Input
                    key={index}
                    placeholder={item.title}
                    type={item.type}
                    width={"100%"}
                    borderRadius={"12px"}
                    backgroundColor={"#445167"}
                    height={"60px"}
                    border={"1px"}
                    borderColor={"#445167"}
                  />
                ))}
                {signUpUserFormFourData.map((item, index) => (
                  <Input
                    key={index}
                    placeholder={item.title}
                    type={item.type}
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
              <Button
                width="100%"
                textColor="#fff"
                borderRadius="16px"
                backgroundColor="#484d57"
                _hover={{ backgroundColor: "#484d57" }}
                height="60px"
              >
                فیلتر پیشرفته
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdvanceFilterModal;
