// import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./Components/Header";
import SetDetails from "./Components/SetDetails";

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                      "aside main"
                      "aside footer"`}
      gridTemplateColumns={"1.5fr 3fr"}
      gridTemplateRows={"45px 1fr 40px"}
      h="800px"
      gap="5"
      margin="10px"
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
      <GridItem color="white" area={"aside"}>
        <SetDetails />
      </GridItem>
    </Grid>
  );
}

export default App;
