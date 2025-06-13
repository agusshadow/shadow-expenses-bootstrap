import { useParams } from "react-router-dom";

export default function Expense() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <h2 className="mb-4">Editar Gasto</h2>
      <span>ID: {id}</span>
    </>
  );
}
