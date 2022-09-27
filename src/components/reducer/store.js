import { configureStore } from "@reduxjs/toolkit";
import { unitSlice } from "./unit-slice";

export const appStore = configureStore({
    reducer: {
        unit: unitSlice.reducer
    }
})