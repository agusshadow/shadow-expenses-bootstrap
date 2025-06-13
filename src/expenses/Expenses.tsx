import { Button, Table } from "react-bootstrap";
import { useExpenses } from "./useExpenses";
import Loader from "../common/Loader";
import { Link, useNavigate } from "react-router-dom";

export default function Expenses() {
  const { expenses, loading } = useExpenses();
  const navigate = useNavigate();

  if (loading) return <Loader />;

  return (
    <>
      <h2 className="mb-4">Gastos</h2>
      <div className="text-end mb-4">
        <Button variant="success" onClick={() => navigate("create")}>
          Crear
        </Button>
      </div>
      <Table
        striped
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
            <th>Fecha de creación</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount, created_at }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <Link
                  to={`/expenses/${id}`}
                  className="text-decoration-none text-success fw-semibold"
                >
                  {name}
                </Link>
              </td>
              <td>${amount}</td>
              <td>
                {new Date(created_at).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
