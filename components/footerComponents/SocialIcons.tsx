import { Box } from "@chakra-ui/react";
import Image from "next/image";
interface imgProps {
  img: string;
  name: string;
}
const SocialIcons = ({ img, name }: imgProps) => {
  return (
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
      <Image alt={name} src={img} />
    </Box>
  );
};

export default SocialIcons;
