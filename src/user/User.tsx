import { useUser } from "../contexts/UserContext";
export default function User() {
  const { user } = useUser();

  return (
    <div>
      <h2 className="mb-4">Detalle del Usuario</h2>
      {user && (
        <div>
          <p>
            <strong>Nombre:</strong> {user.user_metadata?.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}
    </div>
  );
}
