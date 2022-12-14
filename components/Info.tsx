import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

import InfoDesc from "./InfoDesc";
const Info = () => {
  return (
    <Flex
      flexDir="column"
      bgColor="brand.100"
      alignItems="center"
      pb="100px"
      pt="50px"
    >
      <Heading fontSize="5xl" fontWeight="800">
        Advanced Statistics
      </Heading>
      <Text
        pt={5}
        width="680px"
        fontSize="2xl"
        textAlign="center"
        lineHeight="1.8"
        color="	brand.400"
      >
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Text>
      <Flex mt="100px" justifyContent="space-between">
        <InfoDesc mar="100px" />
        <InfoDesc mar="100px" />
        <InfoDesc mar="0px" />
      </Flex>
      <Divider
        width="70%"
        bgColor="brand.200"
        height="12px"
        pos="relative"
        bottom="210"
      />
    </Flex>
  );
};

export default Info;
