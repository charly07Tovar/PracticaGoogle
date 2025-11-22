import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../../store/autenticacionSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);

    const user = {
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
      uid: result.user.uid,
    };

    dispatch(login(user));
    navigate("/", { replace: true });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        
        <h2 className="title-style">Acceso Restringido</h2>
        <p className="descript-style">Debes iniciar sesión para continuar.</p>
        
        <button className="login-btn" onClick={handleLogin}>
          <svg className="google-icon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Iniciar con Google
        </button>
      </div>
    </div>
  );
}