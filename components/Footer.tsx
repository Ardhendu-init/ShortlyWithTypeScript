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
              bgColor: "#2acfcf",
            }}
            cursor="pointer"
          >
            <Image alt="Facebook" src={fb} />
          </Box>
          <Box
            borderRadius="50%"
            _hover={{
              bgColor: "#2acfcf",
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
              bgColor: "#2acfcf",
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
              bgColor: "#2acfcf",
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
          <ListItem fontSize="md" fontWeight="bold" color="white" mb={5}>
            Features
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Link Shortening
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Branded Links
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Analytics
          </ListItem>
        </List>
        <List spacing={2} ml="80px">
          <ListItem fontSize="md" fontWeight="bold" color="white" mb={5}>
            Resources
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Blog
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Developers
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Support
          </ListItem>
        </List>
        <List spacing={2} ml="100px">
          <ListItem fontSize="md" fontWeight="bold" color="white" mb={5}>
            Company
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            About
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Our Team
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
            }}
            cursor="pointer"
          >
            Careers
          </ListItem>
          <ListItem
            color="#a3a3ad"
            _hover={{
              color: "#2acfcf",
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
