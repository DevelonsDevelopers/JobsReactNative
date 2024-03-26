import { configureStore } from "@reduxjs/toolkit";
import category from "../../API/reducers/category";
import job from "../reducers/jobs"

const store = configureStore({
    reducer: {
        category: category,
        job : job,
    }
})

export default store;