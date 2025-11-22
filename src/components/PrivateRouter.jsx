import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return <div>Cargando...</div>;

  return user ? children : <Navigate to="/login" replace />;
}
