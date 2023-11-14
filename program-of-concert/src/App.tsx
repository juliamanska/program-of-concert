// import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./Components/Header";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                      "aside main"
                      "aside footer"`}
      gridTemplateColumns={" 80px 1fr"}
      gridTemplateRows={"40px 1fr 40px"}
      h="500px"
      gap="1"
    >
      <GridItem color="white" area={"header"}>
        <Header />
      </GridItem>
      <GridItem color="black" bg="yellow" area={"main"}>
        Main
      </GridItem>
      <GridItem color="black" bg="white" area={"footer"}>
        Footer
      </GridItem>
      <GridItem color="black" bg="pink" area={"aside"}>
        Aside
      </GridItem>
    </Grid>
  );
}

export default App;
