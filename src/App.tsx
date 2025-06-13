import { Container } from "react-bootstrap";
import "./App.css";
import Navbar from "./common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Expenses from "./expenses/Expenses";
import Login from "./auth/login/Login";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Register from "./auth/register/Register";
import Create from "./expenses/Create";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Container className="mt-4 rounded p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/expenses"
              element={
                <ProtectedRoute>
                  <Expenses />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/expenses/create"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
