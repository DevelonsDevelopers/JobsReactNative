import {ALL_JOBS, ERROR, GET_JOB, LOADING, NODATA, RECENT_JOBS, SUCCESS} from "../../Utils/Constants";

const job = (state = {isLoading: true, jobLoading: true, success: false, error: false, nodata: false}, action) => {
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
            return {...state, jobLoading: false, job: action.payload.job}
        default:
            return state
    }
}

export default job
