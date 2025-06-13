import { useForm } from "react-hook-form";
import { Form, Button, Card, Alert, Spinner, Container } from "react-bootstrap";
import { useRegister } from "./useRegister";
import { Link } from "react-router-dom";

type RegisterFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
};

export default function Register() {
  const {
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const { register, error, loading } = useRegister();

  const onSubmit = async (data: RegisterFormData) => {
    if (data.password !== data.passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    await register({
      email: data.email,
      password: data.password,
      username: data.username,
    });
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Card.Title className="mb-4 text-center">Registrarse</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de usuario"
              {...registerInput("username", {
                required: "El nombre de usuario es obligatorio",
              })}
              disabled={loading}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="tu@email.com"
              {...registerInput("email", {
                required: "El email es obligatorio",
              })}
              disabled={loading}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              {...registerInput("password", {
                required: "La contraseña es obligatoria",
              })}
              disabled={loading}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPasswordConfirm" className="mb-4">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmar contraseña"
              {...registerInput("passwordConfirm", {
                required: "Confirma tu contraseña",
              })}
              disabled={loading}
              isInvalid={!!errors.passwordConfirm}
            />
            <Form.Control.Feedback type="invalid">
              {errors.passwordConfirm?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? <Spinner size="sm" animation="border" /> : "Registrarse"}
          </Button>
        </Form>

        <Container className="text-center mt-3">
          <small className="text-muted">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-decoration-none">
              Inicia sesión
            </Link>
          </small>
        </Container>
      </Card.Body>
    </Card>
  );
}
