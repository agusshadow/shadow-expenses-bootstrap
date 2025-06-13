import { Navbar as NavbarBootstrap, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarBootstrap bg="dark" variant="dark" expand="lg">
      <Container>
        <NavbarBootstrap.Brand as={NavLink} to="/">
          Shadow expenses
        </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/gastos">
              Gastos
            </Nav.Link>
          </Nav>
          <p className="mb-0 ms-auto text-white">Nombre del Usuario</p>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}
