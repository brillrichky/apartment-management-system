import {apartSlice} from "./apartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const apartStore = configureStore({
  reducer: {
    store: apartSlice.reducer,
  },
});
