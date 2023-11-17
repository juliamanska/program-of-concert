import { HStack, Heading, Icon } from "@chakra-ui/react";
import { Print } from "./Print";
import { BsMusicNoteBeamed } from "react-icons/bs";

export const Header = () => {
  function printPage() {
    window.print();
  }
  return (
    <div>
      <HStack p="25px" justifyContent="space-between">
        <Icon as={BsMusicNoteBeamed} boxSize={6} />
        <Heading as="h1" fontSize="29px" fontFamily="Times New Roman">
          Program of audition
        </Heading>
        <Print printPage={printPage} />
      </HStack>
    </div>
  );
};
