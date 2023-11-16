import { FormControl, FormLabel, HStack, Input, Text } from "@chakra-ui/react";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import MyDocument from "./CreatePDF";

interface Props {
  onSubmit: (input: string) => void;
}

const SetDetails = ({ onSubmit }: Props) => {
  const [formDetails, setFormDetails] = useState({
    type: "",
    date: "",
    teacher: "",
    accompanist: "",
    program: "",
    location: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(JSON.stringify(formDetails, null, 2));
  };

  return (
    <>
      <HStack>
        <div className="input-container">
          <h2>Set Details</h2>
          <br />
          <FormControl onSubmit={handleSubmit}>
            <FormLabel>Rodzaj przesłuchania</FormLabel>
            <Input
              variant="flushed"
              placeholder="Przesłuchanie półroczne"
              name="type"
              value={formDetails.type}
              onChange={handleChange}
            />
            <FormLabel>Termin przesłuchania</FormLabel>
            <Input
              variant="flushed"
              placeholder="12.12.2023r. o godz.18:00"
              name="date"
              value={formDetails.date}
              onChange={handleChange}
            />
            <FormLabel>
              <span>Nauczyciel prowadzący</span>
            </FormLabel>
            <Input
              variant="flushed"
              placeholder="Anna Nowak"
              name="teacher"
              value={formDetails.teacher}
              onChange={handleChange}
            />
            <FormLabel>Akompaniator</FormLabel>
            <Input
              variant="flushed"
              placeholder="Jan Kowalski"
              name="accompanist"
              value={formDetails.accompanist}
              onChange={handleChange}
            />
            <FormLabel>
              <span>Program</span>
            </FormLabel>
            <Input
              variant="flushed"
              placeholder="J.Zarębski 'Te rozkwitłe świeżo drzewa' "
              name="program"
              value={formDetails.program}
              onChange={handleChange}
            />
            <FormLabel>
              <span>Miejsce przesłuchania</span>
            </FormLabel>
            <Input
              variant="flushed"
              placeholder="ZSM Gdańsk"
              name="location"
              value={formDetails.location}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <PDFViewer>
          <MyDocument segmentContent={"lalala"} />
        </PDFViewer>
        <div className="details-container">
          <Text> Przesłuchanie {formDetails.type}</Text>
          <Text> Data {formDetails.date}</Text>
          <Text> Nauczyciel prowadzący {formDetails.teacher}</Text>
          <Text> Akompaniator {formDetails.accompanist}</Text>
          <Text> Program {formDetails.program}</Text>
          <Text> Miejsce {formDetails.location}</Text>
        </div>
      </HStack>
    </>
  );
};

export default SetDetails;
