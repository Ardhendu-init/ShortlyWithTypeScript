import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { ApiRes } from "../model";

interface infoProps {
  info: ApiRes[];
  setInfo: Dispatch<SetStateAction<ApiRes[]>>;
}
const ShortContainer = ({ info, setInfo }: infoProps) => {
  const [copyText, setCopyText] = useState<string>("");
  const shortItems = info;
  const handleClick = (id: string) => {
    setCopyText("");
    shortItems.forEach((item) => {
      if (item.id === id) {
        item.status = true;
        setInfo([...shortItems]);
        setCopyText(item.shortLink);
      }
    });
  };
  useEffect(() => {
    async function copyPageUrl() {
      try {
        await navigator.clipboard.writeText(copyText);
        console.log("Page URL copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
    copyPageUrl();
  }, [copyText]);

  return (
    <>
      {info.map((item) => {
        return (
          <Box
            bgColor="brand.800"
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
                <Text m={5} color="brand.200">
                  {item.shortLink}
                </Text>
                {item.status == true ? (
                  <Button
                    mr={5}
                    py={5}
                    px={8}
                    bgColor="brand.500"
                    _hover={{
                      bgColor: "brand.500",
                    }}
                    color="white"
                    type="submit"
                    fontSize="md"
                    fontWeight="semibold"
                    onClick={() => handleClick(item.id)}
                  >
                    Copied !{" "}
                  </Button>
                ) : (
                  <Button
                    mr={5}
                    py={5}
                    px={8}
                    bgColor="brand.200"
                    _hover={{
                      bgColor: "brand.300",
                    }}
                    color="brand.800"
                    type="submit"
                    fontSize="md"
                    fontWeight="semibold"
                    onClick={() => handleClick(item.id)}
                  >
                    Copy
                  </Button>
                )}
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

export default ShortContainer;
