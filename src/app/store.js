import { configureStore } from "@reduxjs/toolkit";
import customCounterReducer from "../features/customCounter/customCounterSlice";

export const store = configureStore({
  reducer: {
    customCounter: customCounterReducer,
  },
});
