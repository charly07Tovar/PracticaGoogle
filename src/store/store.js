import { configureStore } from "@reduxjs/toolkit";
import autenticacionReducer  from "./autenticacionSlice";

export const store = configureStore({
  reducer: {
    auth: autenticacionReducer,
  },
});
