import {
  Button,
  FormControl,
  FormLabel,
  HStack,
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
    date: "",
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dynamicContent = {
    type: `${formDetails.type}`,
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

            <FormLabel>Program</FormLabel>
            <Input
              type="text"
              name="item"
              placeholder="Add a new song"
              value={newSong}
              onChange={handleSongsChange}
            />
            <Button onClick={addSong}>Add song</Button>
          </FormControl>
          <OrderedList>
            {songs.map((item, index) => (
              <ListItem key={index}>
                {item}
                <Button
                  fontSize="15px"
                  margin="2px"
                  height="30px"
                  onClick={() => removeSong(item)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </OrderedList>
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
        </div>
        <PDFViewer
          style={{ width: "420px", height: "594px", marginLeft: "30px" }}
        >
          <MyDocument dynamicContent={dynamicContent} />
        </PDFViewer>
      </HStack>
    </>
  );
};

export default SetDetails;
