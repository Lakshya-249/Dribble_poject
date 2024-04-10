import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action.payload);
      for (const i in action.payload) {
        state.users[i] = action.payload[i];
      }
      // console.log(state.users.interests);
    },
  },
});

export const { addUser } = appSlice.actions;

export default appSlice.reducer;
