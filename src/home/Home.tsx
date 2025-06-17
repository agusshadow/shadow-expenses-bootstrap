import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 text-success fw-bold">Shadow Expenses</h1>
      <p className="lead text-center mb-5 text-muted">
        Tu asistente personal para llevar el control de tus gastos y finanzas.
      </p>

      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/781/781831.png"
            alt="Control de gastos"
            className="img-fluid w-50 mx-auto d-block"
          />
        </Col>
        <Col md={6} className="mb-5 mx-auto">
          <h3 className="text-dark mb-3">¿Qué puedes hacer?</h3>
          <ul className="list-unstyled fs-5">
            <li>💸 Registrar y categorizar tus gastos.</li>
            <li>✏️ Editarlos o eliminarlos fácilmente.</li>
            <li>📊 Ver reportes mensuales.</li>
            <li>🧠 Tomar mejores decisiones financieras.</li>
          </ul>
          <Button
            variant="success"
            className="mt-4 px-4 py-2"
            onClick={() => navigate("/transactions")}
          >
            Ver mis Transacciones
          </Button>
        </Col>
      </Row>

      <h4 className="text-center text-secondary mb-4">
        Características destacadas
      </h4>
      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">
                💡 Simple e intuitiva
              </Card.Title>
              <Card.Text>
                Diseñada para que cualquier persona pueda usarla sin
                complicaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">
                🔒 Seguridad garantizada
              </Card.Title>
              <Card.Text>
                Tus datos están protegidos con autenticación segura gracias a
                Supabase.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title className="text-success">💰 100% gratuita</Card.Title>
              <Card.Text>
                Sin suscripciones ni costos ocultos. Shadow Expenses es
                completamente gratis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center">
        <p className="fs-5 text-muted">
          ¿Listo para tomar el control de tus finanzas?
        </p>
        <Button
          variant="success"
          size="lg"
          className="px-5 py-2"
          onClick={() => navigate("/transactions")}
        >
          Comenzar ahora
        </Button>
      </div>
    </Container>
  );
}
