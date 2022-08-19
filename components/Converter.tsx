import { Flex, FormControl, Input, Button, Text } from "@chakra-ui/react";
import ShortContainer from "./ShortContainer";
import { useState } from "react";
import { ApiRes } from "../model";
import axios from "axios";
const API_Base: string = "https://api.shrtco.de/v2/";

const Converter = () => {
  const [url, setUrl] = useState<string>("");
  const [info, setInfo] = useState<ApiRes[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLink = async () => {
    setUrl("");
    try {
      setLoading(true);
      const response = await axios.get(`${API_Base}shorten?url=${url}`);

      const newData: ApiRes = await {
        id: response.data.result.code,
        originalLink: response.data.result.original_link,
        shortLink: response.data.result.full_short_link2,
        status: false,
      };
      setLoading(false);
      setInfo([...info, newData]);
    } catch (error) {
      alert("Invalid URL: " + url);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetchLink();
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgColor="brand.100"
    >
      <Flex
        bgImage="url('Meteor.png')"
        width="80%"
        position="relative"
        zIndex="10"
        bottom="80px"
      >
        <form style={{ width: "90%" }} onSubmit={handleSubmit}>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml="75px"
            my="30px"
          >
            <Input
              type="text"
              p={7}
              m={4}
              placeholder="Shorten a link here..."
              _placeholder={{ color: "#efbcc0" }}
              bgColor="white"
              size="lg"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button
              isLoading={loading}
              loadingText="Loading"
              py={8}
              px={12}
              ml={3}
              mr={6}
              fontSize="larger"
              bgColor="brand.200"
              _hover={{
                bgColor: "brand.300",
              }}
              color="brand.800"
              type="submit"
            >
              Shorten it!
            </Button>
          </FormControl>
        </form>
      </Flex>
      <ShortContainer info={info} setInfo={setInfo} />
    </Flex>
  );
};

export default Converter;
