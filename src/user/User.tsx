import { useUser } from "../contexts/UserContext";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function User() {
  const { user } = useUser();

  return (
    <div>
      <h2 className="mb-4">Detalle del Usuario</h2>
      {user ? (
        <Card>
          <Card.Body>
            <Row>
              <Col md={3} className="fw-semibold">
                Nombre:
              </Col>
              <Col md={9}>
                {user.user_metadata?.username || "No disponible"}
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={3} className="fw-semibold">
                Email:
              </Col>
              <Col md={9}>{user.email || "No disponible"}</Col>
            </Row>
            <Row className="mt-3">
              <Col md={3} className="fw-semibold">
                <Link
                  to="/profile/change-password"
                  className="text-decoration-none"
                >
                  Cambiar Contraseña
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <p>No se encontró información del usuario.</p>
      )}
    </div>
  );
}
