import {
    ALL_JOBS,
    ERROR,
    GET_JOB,
    GET_JOBS_BY_CATEGORY,
    GET_JOBS_BY_CITY, GET_JOBS_BY_COMPANY, GET_RECOMMENDED_JOBS, JOB_SEARCH,
    LOADING,
    NODATA,
    RECENT_JOBS, RESET,
    SUCCESS
} from "../../Utils/Constants";

const job = (state = {isLoading: true, success: false, error: false, nodata: false}, action) => {
    switch (action.type){
        case LOADING:
            return {...state, isLoading: true, success: false, error: false, nodata: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false, nodata: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true, nodata: false}
        case NODATA:
            return {...state, isLoading: false, success: false, error: false, nodata: true}
        case ALL_JOBS:
            return {...state, jobs: action.payload.jobs}
        case RECENT_JOBS:
            return {...state, recentJobs: action.payload.recentJobs}
        case GET_JOB:
            return {...state, job: action.payload.job}
        case GET_JOBS_BY_CITY:
            return {...state, cityJobs: action.payload.cityJobs}
        case GET_JOBS_BY_CATEGORY:
            return {...state, categoryJobs: action.payload.categoryJobs}
        case GET_JOBS_BY_COMPANY:
            return {...state, companyJobs: action.payload.companyJobs}
        case GET_RECOMMENDED_JOBS:
            return {...state, recommendedJobs: action.payload.recommendedJobs}
        case RESET:
            return {...state, isLoading: true, success: false, error: false, nodata: false}
        default:
            return state
    }
}

export default job
