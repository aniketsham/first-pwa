import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  email: string | null;
  password: string | null;
}

const initialState: CounterState = {
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
