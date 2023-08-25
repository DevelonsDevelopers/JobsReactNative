import * as api from '../../API/index'
import {ALL_CATEGORIES, ALL_JOBS, LOADING, RECENT_JOBS, SUCCESS} from "../../Utils/Constants";

export const AllJobs = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllJobs();
        dispatch ({ type: ALL_JOBS, payload: { jobs: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}

export const RecentJobs = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchRecentJobs();
        dispatch ({ type: RECENT_JOBS, payload: { recentJobs: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}


