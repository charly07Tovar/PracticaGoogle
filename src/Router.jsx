import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRouter";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
