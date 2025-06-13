import { Navbar as NavbarBootstrap, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { supabaseClient } from "../supabase/client";

export default function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    // Opcional: redirigir a login después de logout
    navigate("/login");
  };

  return (
    <NavbarBootstrap bg="dark" variant="dark" expand="lg">
      <Container>
        <NavbarBootstrap.Brand as={NavLink} to="/">
          Shadow expenses
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user && (
              <Nav.Link as={NavLink} to="/expenses">
                Gastos
              </Nav.Link>
            )}
          </Nav>

          <Nav className="ms-auto align-items-center">
            {user ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/profile"
                  className="mb-0 me-3 text-white"
                >
                  {user.user_metadata?.username || "Usuario"}
                </Nav.Link>
                <Nav.Link onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Iniciar sesión
              </Nav.Link>
            )}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
