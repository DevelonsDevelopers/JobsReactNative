import * as api from '../../API/index'
import {
    ALL_CATEGORIES,
    ALL_JOBS,
    ERROR,
    GET_JOB,
    GET_JOBS_BY_CATEGORY, GET_JOBS_BY_CITY, GET_JOBS_BY_COMPANY, GET_RECOMMENDED_JOBS, JOB_SEARCH,
    LOADING,
    NODATA,
    RECENT_JOBS,
    SUCCESS
} from "../../Utils/Constants";

export const AllJobs = (user) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllJobs(user);
        if (data.length > 0) {
            dispatch({type: ALL_JOBS, payload: {jobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const RecentJobs = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchRecentJobs();
        if (data.length > 0) {
            dispatch({type: RECENT_JOBS, payload: {recentJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: RECENT_JOBS, payload: {recentJobs: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const SearchJobs = (search, country, category, city, company, salaryStart, salaryEnd, type, isCountry, isCategory, isCity, isCompany, isSalary, isType) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchSearchJob(search, country, category, city, company, salaryStart, salaryEnd, type, isCountry, isCategory, isCity, isCompany, isSalary, isType);
        if (data.length > 0) {
            dispatch({type: JOB_SEARCH, payload: {searchJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: JOB_SEARCH, payload: {searchJobs: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const RecommendedJobs = (user, tag) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchRecommendedJobs(user, tag);
        if (data.length > 0) {
            dispatch({type: GET_RECOMMENDED_JOBS, payload: {recommendedJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_RECOMMENDED_JOBS, payload: {recommendedJobs: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const JobByID = (user, id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchJobByID(user, id);
        dispatch ({ type: GET_JOB, payload: { job: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}

export const CityJobs = (user, id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchJobByCity(user, id);
        if (data.length > 0) {
            dispatch({type: GET_JOBS_BY_CITY, payload: {cityJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_JOBS_BY_CITY, payload: {cityJobs: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const CompanyJobs = (id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchJobByCompany(id)
        if (data.length > 0) {
            dispatch({type: GET_JOBS_BY_COMPANY, payload: {companyJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_JOBS_BY_COMPANY, payload: {companyJobs: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const CategoryJobs = (user, id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchJobByCategory(user, id);
        if (data.length > 0) {
            dispatch({type: GET_JOBS_BY_CATEGORY, payload: {categoryJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_JOBS_BY_CATEGORY, payload: {categoryJobs: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}
