import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const guardarDato = async (dato) => {
  try {
    await addDoc(collection(db, "items"), dato);
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
  }
};
