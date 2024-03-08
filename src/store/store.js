import { configureStore } from "@reduxjs/toolkit";
import { Details } from "../features/Details";

const myStore = configureStore({
  reducer: {
    Details
  },
}); // store is created

export default myStore; // store is exported
