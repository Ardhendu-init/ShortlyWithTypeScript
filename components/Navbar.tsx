import { Box, Button } from "@chakra-ui/react";
import logo from "../public/logo-top.svg";
import NextImage from "next/image";
const Navbar = () => {
  return (
    <Box p={4} display="flex" alignItems="center" ml="90px" mr={6} mt={6}>
      <Box pl={20}>
        <NextImage src={logo} alt="logo" />
      </Box>
      <Box>
        <Button
          size="18px"
          pr={5}
          ml={12}
          color="	#bfbfbf"
          variant="unstyled"
          _hover={{ color: "black" }}
        >
          Features
        </Button>
        <Button
          size="18px"
          color="	#bfbfbf"
          pr={5}
          _hover={{ color: "black" }}
          variant="unstyled"
        >
          Pricing
        </Button>
        <Button
          size="18px"
          color="	#bfbfbf"
          variant="unstyled"
          _hover={{ color: "black" }}
        >
          Resources
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
