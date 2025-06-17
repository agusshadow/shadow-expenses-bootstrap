import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-3">Página no encontrada</h2>
          <p className="text-muted mb-4">
            La página que estás buscando no existe o fue movida.
          </p>
          <Button variant="success" onClick={() => navigate("/")}>
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
