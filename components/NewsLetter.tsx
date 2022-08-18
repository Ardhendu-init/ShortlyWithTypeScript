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
        bgColor="#2acfcf"
        _hover={{
          bgColor: "#9be3e2",
        }}
        color="white"
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default NewsLetter;
