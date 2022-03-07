import Authentication from "./pages/Authentication"
import { Box, Container } from "@chakra-ui/react"
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Authentication />
    </div>
  );
}

export default App;
