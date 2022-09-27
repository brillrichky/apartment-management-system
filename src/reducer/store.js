// untuk setup store

import { configureStore } from "@reduxjs/toolkit";
import { apartmentSlice } from "./apartment-slice";

export const appStore = configureStore({
    reducer: {
        unit: apartmentSlice.reducer //2 yang mau di set guestnya
    }
});