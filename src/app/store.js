import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../features/user.js";

export const store = configureStore({
  reducer: Reducer,
});
