import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import type { JSX } from "react";
import Loader from "../common/Loader";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user, loading } = useUser();

  if (loading) return <Loader></Loader>;

  return user ? children : <Navigate to="/login" replace />;
}
