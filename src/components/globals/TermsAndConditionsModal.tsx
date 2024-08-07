import React from "react";

import { Checkbox } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
const TermsAndConditionsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Checkbox className="mb-4">
        <span onClick={onOpen} className="text-emerald-700 underline">
          قوانین و مقررات
        </span>{" "}
        را خوانده و تایید میکنم.
      </Checkbox>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width="90%"
          borderRadius="16px"
          bgColor="#252a34"
          className="py-8"
        >
          <ModalBody>
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">قوانین و مقررات</h1>
              <p className="text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
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
              onClick={onClose}
            >
              بستن
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TermsAndConditionsModal;
