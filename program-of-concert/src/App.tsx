// import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./Components/Header";
import SetDetails from "./Components/SetDetails";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer"`}
      gridTemplateRows={"80px 1fr 40px"}
      minHeight="100vh"
      gap="5"
      background="white"
    >
      <GridItem
        color="#406163"
        background="#CAE8E9"
        area={"header"}
        boxShadow="0 7px 10px 0px #BBC6C7"
      >
        <Header />
      </GridItem>
      <GridItem
        color="white"
        area={"main"}
        m=" 20px auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        background="#255052"
        p="20px"
        borderRadius="10px"
      >
        <SetDetails />
      </GridItem>
      <GridItem
        color="black"
        bg="#CAE8E9"
        area={"footer"}
        boxShadow="0 -8px 10px 0px #BBC6C7"
      ></GridItem>
    </Grid>
  );
}

export default App;
