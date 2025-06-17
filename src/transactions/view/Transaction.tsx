import { Link, useParams } from "react-router-dom";
import { useTransaction } from "./useTransaction";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../../common/Loader";
import { formatDate } from "../../utils/formatDate";

export default function Transaction() {
  const { id } = useParams<{ id: string }>();
  const { transaction, loading } = useTransaction(id);

  if (loading) return <Loader />;

  return (
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header as="h4">
            Detalle de la Transacción (<strong>ID:</strong> {transaction.id})
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>Nombre:</strong> {transaction.name}
            </Card.Text>
            <Card.Text>
              <strong>Monto:</strong> ${transaction.amount}
            </Card.Text>
            <Card.Text>
              <strong>Tipo:</strong>{" "}
              <span
                className={`badge ${
                  transaction.type === "income" ? "bg-success" : "bg-danger"
                }`}
              >
                {transaction.type === "income" ? "Ingreso" : "Egreso"}
              </span>
            </Card.Text>
            <Card.Text>
              <strong>Fecha:</strong> {formatDate(transaction.date)}
            </Card.Text>
            <div className="text-end mt-4">
              <Link to="/transactions" className="text-decoration-none">
                Volver al listado
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
