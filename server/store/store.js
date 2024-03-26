import { configureStore } from "@reduxjs/toolkit";
import category from "../../API/reducers/category";
import jobs from "../reducers/jobs"
import cv from "../reducers/cv";
import apiJobs from '../reducers/apijobs';

const store = configureStore({
    reducer: {
        category: category,
        job : jobs,
        cv : cv,
        apijobs : apiJobs,
        
    }
})

export default store;