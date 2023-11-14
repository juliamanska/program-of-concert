import { HStack } from "@chakra-ui/react";
import { IoMdPrint } from "react-icons/io";

export const Header = () => {
  return (
    <div>
      <HStack padding="10px 20px" justifyContent="space-between">
        <h1>Program of concert</h1>
        <IoMdPrint />
      </HStack>
    </div>
  );
};
