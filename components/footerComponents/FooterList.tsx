import { List, ListItem } from "@chakra-ui/react";
interface listProps {
  items: string[];
}
const FooterList = ({ items }: listProps) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <ListItem
              color="brand.400"
              _hover={{
                color: "brand.200",
              }}
              cursor="pointer"
            >
              {item}
            </ListItem>
          </div>
        );
      })}
    </>
  );
};

export default FooterList;
