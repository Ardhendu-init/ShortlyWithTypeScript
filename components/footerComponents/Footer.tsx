import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react";
import Image from "next/image";
import fb from "../../public/icon-facebook.svg";
import insta from "../../public/icon-instagram.svg";
import pinterest from "../../public/icon-pinterest.svg";
import twitter from "../../public/icon-twitter.svg";
import logo from "../../public/logo.svg";
import SocialIcons from "./SocialIcons";
import FooterList from "./FooterList";
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
          <SocialIcons name="Facebook" img={fb} />
          <SocialIcons name="Twitter" img={twitter} />
          <SocialIcons name="Pinterest" img={pinterest} />
          <SocialIcons name="instagram" img={insta} />
        </Flex>
      </Flex>
      <Flex mt="60px" ml="200px">
        <List spacing={2}>
          <ListItem fontSize="md" fontWeight="bold" color="brand.800" mb={5}>
            Features
          </ListItem>
          <FooterList
            items={["Link Shortening", "Branded Links", "Analytics"]}
          />
        </List>
        <List spacing={2} ml="80px">
          <ListItem fontSize="md" fontWeight="bold" color="brand.800" mb={5}>
            Resources
          </ListItem>
          <FooterList items={["Blog", "Developers", "Support"]} />
        </List>
        <List spacing={2} ml="100px">
          <ListItem fontSize="md" fontWeight="bold" color="brand.800" mb={5}>
            Company
          </ListItem>
          <FooterList items={["About", "Our Team", "Careers", "Contact"]} />
        </List>
      </Flex>
    </Flex>
  );
};

export default Footer;
