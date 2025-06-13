import { useForm } from "react-hook-form";
import { Form, Button, Card, Alert, Spinner, Container } from "react-bootstrap";
import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login, error, loading } = useLogin();

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Card.Title className="mb-4 text-center">Iniciar sesión</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="tu@email.com"
              {...register("email", { required: true })}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
              disabled={loading}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? (
              <Spinner size="sm" animation="border" />
            ) : (
              "Iniciar sesión"
            )}
          </Button>
        </Form>

        <Container className="text-center mt-3">
          <small className="text-muted">
            No tienes una cuenta?{" "}
            <Link to="/register" className="text-decoration-none">
              Crea una
            </Link>
          </small>
        </Container>
      </Card.Body>
    </Card>
  );
}
