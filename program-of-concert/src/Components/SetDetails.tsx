import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import MyDocument from "./CreatePDF";

interface Props {
  onSubmit: (input: string) => void;
}

const SetDetails = ({ onSubmit }: Props) => {
  const [formDetails, setFormDetails] = useState({
    type: "",
    name: "",
    date: "",
    class: "",
    teacher: "",
    accompanist: "",
    program: "",
    location: "",
  });
  const [newSong, setNewSong] = useState<string>("");
  const [songs, setSongs] = useState<string[]>([]);

  const handleSongsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSong(event.target.value);
  };

  const enterSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addSong();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dynamicContent = {
    type: `${formDetails.type}`,
    name: `${formDetails.name}`,
    class: `${formDetails.class}`,
    date: `${formDetails.date}`,
    teacher: `${formDetails.teacher}`,
    accompanist: `${formDetails.accompanist}`,
    program: songs.map((song, index) => `${index + 1}. ${song}`).join("\n"),
    location: `${formDetails.location}`,
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(JSON.stringify(formDetails, null, 2));
  };

  const addSong = () => {
    if (newSong.trim() !== "") {
      setSongs((prevSongs) => [...prevSongs, newSong]);
      setNewSong(""); // Czyszczenie wartości po dodaniu elementu
    }
  };

  const removeSong = (songToRemove: string) => {
    const newSongsList = songs.filter((song) => {
      return song !== songToRemove;
    });
    setSongs(newSongsList);
  };
  return (
    <>
      <HStack>
        <div className="input-container">
          <Heading fontFamily="Times New Roman" size="xl">
            Set Details
          </Heading>
          <br />
          <FormControl onSubmit={handleSubmit}>
            <FormLabel mt="15px">Rodzaj przesłuchania</FormLabel>
            <Input
              variant="filled"
              placeholder="półroczne"
              name="type"
              value={formDetails.type}
              onChange={handleChange}
            />
            <FormLabel mt="15px">Imię i nazwisko</FormLabel>
            <Input
              variant="filled"
              placeholder="Anna Nowak"
              name="name"
              value={formDetails.name}
              onChange={handleChange}
            />
            <FormLabel mt="15px">Klasa</FormLabel>
            <Input
              variant="filled"
              placeholder="IV śpiewu solowego"
              name="class"
              value={formDetails.class}
              onChange={handleChange}
            />
            <FormLabel mt="15px">
              <span>Nauczyciel prowadzący</span>
            </FormLabel>
            <Input
              variant="filled"
              placeholder="Anna Nowak"
              name="teacher"
              value={formDetails.teacher}
              onChange={handleChange}
            />
            <FormLabel mt="15px">Akompaniator</FormLabel>
            <Input
              variant="filled"
              placeholder="Anna Nowak"
              name="accompanist"
              value={formDetails.accompanist}
              onChange={handleChange}
            />

            <FormLabel mt="15px">Program</FormLabel>
            <HStack>
              <Input
                type="text"
                variant="filled"
                name="item"
                placeholder='J.Offenbach "Barcarolle"'
                value={newSong}
                onChange={handleSongsChange}
                onKeyDown={enterSubmit}
              />
              <Button onClick={addSong}>Add song</Button>
            </HStack>
          </FormControl>
          <OrderedList margin="20px">
            {songs.map((item, index) => (
              <ListItem
                key={index}
                display="flex"
                justifyContent="space-between"
                listStyleType="decimal"
              >
                {item}
                <Button
                  variant="ghost"
                  margin="2px"
                  height="30px"
                  onClick={() => removeSong(item)}
                >
                  X
                </Button>
              </ListItem>
            ))}
          </OrderedList>
          <FormLabel>
            <span>Miejsce przesłuchania</span>
          </FormLabel>
          <Input
            variant="filled"
            placeholder="ZSM Gdańsk"
            name="location"
            value={formDetails.location}
            onChange={handleChange}
          />
          <FormLabel mt="15px">Termin przesłuchania</FormLabel>
          <Input
            variant="filled"
            placeholder="12.12.2023r. o godz.18:00"
            name="date"
            value={formDetails.date}
            onChange={handleChange}
          />
        </div>
        <PDFViewer
          style={{ width: "440px", height: "650px", marginLeft: "30px" }}
        >
          <MyDocument dynamicContent={dynamicContent} />
        </PDFViewer>
      </HStack>
    </>
  );
};

export default SetDetails;
