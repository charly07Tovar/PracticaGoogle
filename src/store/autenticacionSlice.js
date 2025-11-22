import { createSlice } from "@reduxjs/toolkit";

const initialUser = JSON.parse(localStorage.getItem("user")) || null;

const autenticacionSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUser,
    loading: true,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
      state.loading = false;
    },
    finishLoading(state) {
      state.loading = false;
    }
  }
});


export const { login, logout, finishLoading } = autenticacionSlice.actions;
export default autenticacionSlice.reducer;
