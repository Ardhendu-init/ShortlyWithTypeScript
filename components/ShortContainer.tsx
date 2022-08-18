import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { ApiRes } from "../model";

interface infoProps {
  info: ApiRes[];
}
const ShortContainer = ({ info }: infoProps) => {
  const handleClick = (id: string) => {};

  return (
    <>
      {info.map((item) => {
        return (
          <Box
            bgColor="White"
            width="78%"
            position="relative"
            bottom="40px"
            mb="20px"
            key={item.id}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Text ml={5} my={5} fontSize="large">
                {item.originalLink}
              </Text>

              <Flex alignItems="center" justifyContent="space-between">
                <Text m={5} color="#2acfcf">
                  {item.shortLink}
                </Text>

                <Button
                  mr={5}
                  py={5}
                  px={8}
                  bgColor="#2acfcf"
                  _hover={{
                    bgColor: "#9be3e2",
                  }}
                  color="white"
                  type="submit"
                  fontSize="md"
                  fontWeight="semibold"
                  onClick={() => handleClick(item.id)}
                >
                  Copy
                </Button>
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

export default ShortContainer;
