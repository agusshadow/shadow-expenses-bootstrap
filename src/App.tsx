import { Container } from "react-bootstrap";
import "./App.css";
import Navbar from "./common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Expenses from "./expenses/Expenses";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mt-4 rounded p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gastos" element={<Expenses />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
