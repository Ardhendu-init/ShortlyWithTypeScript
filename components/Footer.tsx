import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import fb from "../public/icon-facebook.svg";
import insta from "../public/icon-instagram.svg";
import pinterest from "../public/icon-pinterest.svg";
import twitter from "../public/icon-twitter.svg";
import logo from "../public/logo.svg";
const Footer = () => {
  return (
    <Flex bgColor="black">
      <Flex ml="150px" flexDir="column" mt="60px" pb="150px">
        {/* Company Icons */}
        <Box pb={6}>
          <Image alt="Logo" src={logo} />
        </Box>
        {/* Social Icons */}
        <Flex alignItems="center">
          <Box
            borderRadius="50%"
            display="flex"
            w="32px"
            h="32px"
            justifyContent="center"
            alignItems="center"
            mr={5}
            _hover={{
              bgColor: "brand.200",
            }}
            cursor="pointer"
          >
            <Image alt="Facebook" src={fb} />
          </Box>
          <Box
            borderRadius="50%"
            _hover={{
              bgColor: "brand.200",
            }}
            display="flex"
            w="32px"
            h="32px"
            justifyContent="center"
            alignItems="center"
            mr={5}
            cursor="pointer"
          >
            <Image alt="Twitter" src={twitter} />
          </Box>
          <Box
            borderRadius="50%"
            _hover={{
              bgColor: "brand.200",
            }}
            display="flex"
            w="32px"
            h="32px"
            justifyContent="center"
            alignItems="center"
            mr={5}
            cursor="pointer"
          >
            <Image alt="Pinterest" src={pinterest} />
          </Box>
          <Box
            borderRadius="50%"
            _hover={{
              bgColor: "brand.200",
            }}
            display="flex"
            w="32px"
            h="32px"
            justifyContent="center"
            alignItems="center"
            mr={5}
            cursor="pointer"
          >
            <Image alt="Instagram" src={insta} />
          </Box>
        </Flex>
      </Flex>
      <Flex mt="60px" ml="200px">
        <List spacing={2}>
          <ListItem fontSize="md" fontWeight="bold" color="brand.800" mb={5}>
            Features
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Link Shortening
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Branded Links
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Analytics
          </ListItem>
        </List>
        <List spacing={2} ml="80px">
          <ListItem fontSize="md" fontWeight="bold" color="brand.800" mb={5}>
            Resources
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Blog
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Developers
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Support
          </ListItem>
        </List>
        <List spacing={2} ml="100px">
          <ListItem fontSize="md" fontWeight="bold" color="brand.800" mb={5}>
            Company
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            About
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Our Team
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Careers
          </ListItem>
          <ListItem
            color="brand.400"
            _hover={{
              color: "brand.200",
            }}
            cursor="pointer"
          >
            Contact
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default Footer;
