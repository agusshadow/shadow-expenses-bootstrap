import { useParams } from "react-router-dom";

export default function Transaction() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <h2 className="mb-4">Editar Transaccion</h2>
      <span>ID: {id}</span>
    </>
  );
}
