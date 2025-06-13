import { Button, Table } from "react-bootstrap";
import { useExpenses } from "./useExpenses";
import Loader from "../common/Loader";
import { useNavigate } from "react-router-dom";

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
      <Table striped bordered hover variant="light" responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>${amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
