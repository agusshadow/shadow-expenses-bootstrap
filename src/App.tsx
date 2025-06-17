import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./auth/login/Login";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Register from "./auth/register/Register";
import Create from "./transactions/create/Create";
import User from "./user/User";
import ChangePassword from "./user/changePassword/ChangePassword";
import Transaction from "./transactions/view/Transaction";
import Transactions from "./transactions/Transactions";
import Delete from "./transactions/delete/Delete";
import Navbar from "@common/Navbar";
import NotFound from "@common/NotFound";

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
              path="/transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/transactions/create"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/transactions/:id"
              element={
                <ProtectedRoute>
                  <Transaction />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/transactions/:id/delete"
              element={
                <ProtectedRoute>
                  <Delete />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile/change-password"
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
