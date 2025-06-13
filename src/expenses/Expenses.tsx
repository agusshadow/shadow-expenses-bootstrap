import { Button, Table } from "react-bootstrap";

const expensesData = [
  { id: 1, nombre: "Alquiler", monto: 500 },
  { id: 2, nombre: "Supermercado", monto: 150 },
  { id: 3, nombre: "Transporte", monto: 60 },
];

export default function Expenses() {
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
          {expensesData.map(({ id, nombre, monto }) => (
            <tr key={id}>
              <td>{nombre}</td>
              <td>${monto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
