import { Button, Table } from "react-bootstrap";
import { useExpenses } from "./useExpenses";
import Loader from "../common/Loader";

export default function Expenses() {
  const { expenses, loading } = useExpenses();

  if (loading) <Loader />;

  return (
    <>
      <h2 className="mb-4">Gastos</h2>
      <Button variant="success" className="mb-4">
        Crear
      </Button>
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>${amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
