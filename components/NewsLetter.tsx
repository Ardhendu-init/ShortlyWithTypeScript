import { Flex, Heading, Button } from "@chakra-ui/react";

const NewsLetter = () => {
  return (
    <Flex
      flexDir="column"
      bgImg="url('Meteor.png')
    "
      alignItems="center"
    >
      <Heading fontSize="4xl" color="white" pt="60px" pb="30px">
        Boosts your links today
      </Heading>
      <Button
        width="20%"
        mb="60px"
        borderRadius="30px"
        py={7}
        fontSize="larger"
        bgColor="brand.200"
        _hover={{
          bgColor: "brand.300",
        }}
        color="brand.800"
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default NewsLetter;
