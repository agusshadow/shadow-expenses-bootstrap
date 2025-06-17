import { Button, Table } from "react-bootstrap";
import { useTransactions } from "./useTransactions";
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import Loader from "@common/Loader";

export default function Transactions() {
  const { transactions, loading } = useTransactions();
  const navigate = useNavigate();

  if (loading) return <Loader />;

  return (
    <>
      <h2 className="mb-4">Transacciones</h2>
      <div className="text-end mb-4">
        <Button variant="success" onClick={() => navigate("create")}>
          Crear
        </Button>
      </div>
      <Table
        bordered
        hover
        variant="light"
        responsive
        size="md"
        className="align-middle"
      >
        <thead className="table-success">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, name, amount, type, date }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <Link
                  to={`/transactions/${id}`}
                  className="text-decoration-none fw-semibold"
                >
                  {name}
                </Link>
              </td>
              <td
                className={
                  type === "income"
                    ? "text-success fw-semibold"
                    : "text-danger fw-semibold"
                }
              >
                {type === "income" ? "+" : "-"}${amount.toFixed(2)}
              </td>
              <td>{formatDate(date)}</td>
              <td className="d-flex gap-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => navigate(`/transactions/${id}/edit`)}
                >
                  Editar
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => navigate(`/transactions/${id}/delete`)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
