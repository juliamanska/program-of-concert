import { HStack } from "@chakra-ui/react";
import { Print } from "./Print";

export const Header = () => {
  function printPage() {
    window.print();
  }
  return (
    <div>
      <HStack padding="10px 20px" justifyContent="space-between">
        <h1>Program of concert</h1>
        <Print printPage={printPage} />
      </HStack>
    </div>
  );
};
