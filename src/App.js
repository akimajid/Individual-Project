import Register from "./pages/Register"
import { Box, Container } from "@chakra-ui/react"
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
