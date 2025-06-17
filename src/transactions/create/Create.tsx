import { useForm } from "react-hook-form";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";
import { useCreateTransaction } from "./useCreateTransaction";

type FormData = {
  name: string;
  amount: number;
  type: "income" | "expense";
  date: string;
};

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { createTransaction, error, loading } = useCreateTransaction();

  const onSubmit = (data: FormData) => {
    createTransaction(data);
  };

  return (
    <>
      <h2 className="mb-4">Crear Transacción</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Alquiler"
                {...register("name", { required: "Este campo es obligatorio" })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                placeholder="500"
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

            <Form.Group className="mb-3">
              <Form.Label>Tipo de transacción</Form.Label>
              <Form.Select
                {...register("type", { required: "Selecciona un tipo" })}
                isInvalid={!!errors.type}
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="income">Ingreso</option>
                <option value="expense">Egreso</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.type?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                lang="es-ES"
                {...register("date", {
                  required: "Selecciona una fecha y hora",
                })}
                isInvalid={!!errors.date}
              />
              <Form.Control.Feedback type="invalid">
                {errors.date?.message}
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
