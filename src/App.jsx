import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./../firebaseConfig";
import { login, logout, finishLoading } from "./store/autenticacionSlice";
import Router from "./Router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }

      dispatch(finishLoading());
    });

    return () => unsubscribe();
  }, []);

  return <Router />;
}

export default App;
