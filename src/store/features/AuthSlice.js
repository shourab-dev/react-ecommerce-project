import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
  user: {},
};

const AuthSlice = createSlice({
  name: "auth slice",
  initialState,
  reducers: {
    saveAuthUser: (state, actions) => {
      const token = actions.payload.token;
      const data = actions.payload.user;
      const user = JSON.parse(data);

      state.token = token;
      state.user = user;
    },
    logoutAuthUser: (state, actions) => {
      state.token = null;
      state.user = {};
    },
  },
});

export const { saveAuthUser, logoutAuthUser } = AuthSlice.actions;

export default AuthSlice.reducer;
