import {
  Navbar as NavbarBootstrap,
  Nav,
  Container,
  Button,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { PersonCircle } from "react-bootstrap-icons";
import { supabaseClient } from "@supabase-client/client";

export default function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <NavbarBootstrap bg="success" className="text-white" expand="lg">
        <Container>
          <NavbarBootstrap.Brand
            as={NavLink}
            to="/"
            className="fw-bold text-white"
          >
            Shadow transactions
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="main-navbar" />
          <NavbarBootstrap.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center gap-2">
              {user ? (
                <>
                  <Button
                    as={NavLink}
                    to="/profile"
                    variant="outline-light"
                    size="sm"
                    className="d-flex align-items-center gap-2"
                  >
                    <PersonCircle size={18} />
                    {user.user_metadata?.username || "Usuario"}
                  </Button>

                  <Button variant="danger" size="sm" onClick={handleLogout}>
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <Button as={NavLink} to="/login" variant="light" size="sm">
                  Iniciar sesión
                </Button>
              )}
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>

      {user && (
        <NavbarBootstrap bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-success fw-bold"
                    : "nav-link text-dark"
                }
              >
                Transacciones
              </NavLink>
            </Nav>
          </Container>
        </NavbarBootstrap>
      )}
    </>
  );
}
