import { useForm } from "react-hook-form";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useCreateExpense } from "./useCreateExpense";

type FormData = {
  name: string;
  amount: number;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { createExpense, error, loading } = useCreateExpense();

  const onSubmit = (data: FormData) => {
    createExpense(data);
  };

  return (
    <>
      <h2 className="mb-4">Crear Gasto</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Alquiler"
                {...register("name", { required: "Este campo es obligatorio" })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="Ej: 500"
                {...register("amount", {
                  required: "Este campo es obligatorio",
                  min: { value: 0.01, message: "Debe ser mayor a cero" },
                })}
                isInvalid={!!errors.amount}
              />
              <Form.Control.Feedback type="invalid">
                {errors.amount?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="success" type="submit" disabled={loading}>
              {loading ? "Guardando..." : "Guardar"}
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
