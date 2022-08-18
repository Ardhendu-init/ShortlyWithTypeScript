import { Box, Heading } from "@chakra-ui/react";
import people from "../public/people working.png";
import NextImage from "next/image";
const Slider = () => {
  return (
    <Box
      mt="30px"
      textAlign="center"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Heading fontSize="100px" fontWeight="bold" letterSpacing={2}>
        MORE THAN JUST
      </Heading>
      <Heading fontSize="100px" fontWeight="bold" letterSpacing={2}>
        SHORTER LINKS
      </Heading>
      <Box width="400px">
        <NextImage src={people} />
      </Box>
    </Box>
  );
};

export default Slider;
