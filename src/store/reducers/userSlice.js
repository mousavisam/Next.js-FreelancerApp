import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  username: "",
  email: "",
  access_token: "",
  refresh_token: "",
  user_type: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
