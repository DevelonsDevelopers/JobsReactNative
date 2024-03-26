import { configureStore } from "@reduxjs/toolkit";
import category from "../../API/reducers/category";

const store = configureStore({
    reducer: {
        category: category,
    }
})

export default store;