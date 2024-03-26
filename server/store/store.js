import { configureStore } from "@reduxjs/toolkit";
import category from "../../API/reducers/category";
import jobs from "../reducers/jobs"
import cv from "../reducers/cv";
import apiJobs from '../reducers/apijobs';
import applied from "../reducers/applied";
import category from "../reducers/category";
import city from "../reducers/city";
import company from "../reducers/company";
import country from "../reducers/country";
import coverletter from "../reducers/coverletter";
import plans from "../reducers/plans";
import seeker from "../reducers/seeker";
import tags from "../reducers/tags";
 
const store = configureStore({
    reducer: {
        category: category,
        job : jobs,
        cv : cv,
        apijobs : apiJobs,
        applied : applied,
        category : category,
        city : city,
        company : company,
        country : country,
        coverletter : coverletter,
        plans : plans,
        seeker : seeker,
        tags : tags,        
    }
})

export default store;