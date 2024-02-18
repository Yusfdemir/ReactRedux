import { configureStore } from "@reduxjs/toolkit";
import textAppSlice from "./textAppSlice";


export const store=configureStore({
    reducer:{
        textApp:textAppSlice,
    }
})