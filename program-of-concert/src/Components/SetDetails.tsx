import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const SetDetails = () => {
  return (
    <>
      <h2>Set Details</h2>
      <br />
      <FormControl>
        <FormLabel>Rodzaj przesłuchania</FormLabel>
        <Input variant="flushed" placeholder="Przesłuchanie półroczne" />

        <FormLabel>Termin przesłuchania</FormLabel>
        <Input variant="flushed" placeholder="12.12.2023r. o godz.18:00" />

        <FormLabel>
          <span>Nauczyciel prowadzący</span>
        </FormLabel>
        <Input variant="flushed" placeholder="Anna Nowak" />

        <FormLabel>Akompaniator</FormLabel>
        <Input variant="flushed" placeholder="Jan Kowalski" />

        <FormLabel>
          <span>Program</span>
        </FormLabel>
        <Input
          variant="flushed"
          placeholder="J.Zarębski 'Te rozkwitłe świeżo drzewa' "
        />
        <FormLabel>
          <span>Miejsce przesłuchania</span>
        </FormLabel>
        <Input variant="flushed" placeholder="ZSM Gdańsk" />
        <Button mt="20px" colorScheme="teal">
          Submit
        </Button>
        <ol> Lista utworów</ol>
      </FormControl>
    </>
  );
};

export default SetDetails;
