import { ReactNode } from "react";

import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";

export interface RadioItemCardGeneratorProps extends UseRadioProps {
  children: ReactNode;
}

export const RadioItemCardGeneratorFuncation = (
  props: RadioItemCardGeneratorProps,
) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="12px"
        boxShadow="md"
        display={"flex"}
        alignItems={"center"}
        backgroundColor={"#252a34"}
        border={"1px"}
        height={"60px"}
        borderColor={"#445167"}
        justifyContent={"space-between"}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        <span>{props.children}</span>

        <Box
          border={"1px"}
          padding={"2px"}
          borderColor={"#445167"}
          borderRadius={"100%"}
        >
          <Box
            width={"15px"}
            height={"15px"}
            borderRadius={"100%"}
            {...checkbox}
            _checked={{
              bg: "#2788ff",
              color: "white",
              borderColor: "#2788ff",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
