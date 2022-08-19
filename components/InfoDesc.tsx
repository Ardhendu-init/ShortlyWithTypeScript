import { Flex, Heading, Text, Box, Divider } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../public/icon-brand-recognition.svg";
interface Title {
  mar: string;
}
const InfoDesc = ({ mar }: Title) => {
  return (
    <>
      <Flex
        flexDir="column"
        height="300px"
        width="380px"
        bgColor="white"
        mr={mar}
        my={10}
        zIndex="2"
      >
        <Box
          borderRadius="50%"
          h="95px"
          w="95px"
          position="relative"
          bottom="42px"
          left="35px"
          bgColor="#3a3053"
        >
          <Box px="25px" py="20px">
            <Image alt="Logo" width={500} height={500} src={logo} />
          </Box>
        </Box>
        <Heading fontSize="24px" ml={8}>
          Brand Recognition
        </Heading>
        <Heading
          ml={8}
          mt={5}
          fontSize="md"
          color="#a3a3ad"
          fontWeight="medium"
          lineHeight={1.6}
          mr="40px"
        >
          Boost your brand recognition with each click.Generic links don&#39;t
          mean a thing . Branded links help instil confidence in your content.
        </Heading>
      </Flex>
    </>
  );
};

export default InfoDesc;
