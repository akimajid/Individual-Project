import Register from "./pages/Register"
import { Box, Container } from "@chakra-ui/react"
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
