import { configureStore } from "@reduxjs/toolkit";
import { transactionListSlice } from "./transactionListSlice";

export const store = configureStore({
  reducer: { transactionlist: transactionListSlice.reducer },
});
