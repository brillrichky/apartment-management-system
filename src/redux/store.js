import {apartSlice} from "./apartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { transactionSlice } from "./transactionSlice";

export const apartStore = configureStore({
  reducer: {
    store: apartSlice.reducer,
    transaction: transactionSlice.reducer,
  },
});