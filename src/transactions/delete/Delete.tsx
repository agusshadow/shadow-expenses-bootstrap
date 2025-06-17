import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDeleteTransaction } from "./useDeleteTransaction";

export default function Delete() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { deleteTransaction, deleting } = useDeleteTransaction();

  const handleDelete = async () => {
    if (!id) return;
    await deleteTransaction(id);
  };

  return (
    <Row>
      <Col md={6}>
        <Card className="shadow">
          <Card.Header as="h4" className="bg-danger text-white">
            Eliminar transacción
          </Card.Header>
          <Card.Body>
            <p className="mb-4">
              ¿Estás seguro de que querés eliminar la transacción con ID:
              <strong className="text-danger"> {id}</strong>?
            </p>
            <div className="d-flex justify-content-between">
              <Button
                variant="secondary"
                onClick={() => navigate("/transactions")}
              >
                Cancelar
              </Button>
              <Button
                variant="danger"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? "Eliminando..." : "Eliminar"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
