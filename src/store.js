import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./redux/slices/bucketSlice";

export const store = configureStore({
  reducer: { bucket: bucketSlice },
});
