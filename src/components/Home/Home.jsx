import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/autenticacionSlice";
import { auth } from "../../../firebaseConfig";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="nav-brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="title-style">Inicio</span>
        </div>
        
        <div className="nav-user">
          <img 
            src={user.photo} 
            alt={user.name}
            className="user-avatar"
          />
          <button className="logout-btn" onClick={handleLogout} >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <main className="home-main">
        <div className="welcome-section">
          <img 
            src={user.photo} 
            alt={user.name}
            className="welcome-avatar"
          />
          <h1 className="title-style">Bienvenido, {user.name}</h1>
          <p className="descript-style">{user.email}</p>
        </div>
      </main>
    </div>
  );
}