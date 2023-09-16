import {
    ALL_APPLIED,
    ALL_BOOKMARKS,
    ERROR,
    GET_APPLIED_BY_COMPANY, GET_APPLIED_BY_JOB,
    LOADING,
    NODATA,
    SUCCESS
} from "../../Utils/Constants";
import * as api from "../index";

export const AllApplied = (user) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.appliedJobs(user);
        if (data.length > 0) {
            dispatch({type: ALL_APPLIED, payload: {appliedJobs: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: ALL_APPLIED, payload: {appliedJobs: data}})
            dispatch({type: SUCCESS})
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const AppliedByCompany = (company) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.appliedByCompany(company);
        if (data.length > 0) {
            dispatch({type: GET_APPLIED_BY_COMPANY, payload: {companyApplied: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_APPLIED_BY_COMPANY, payload: {companyApplied: data}})
            dispatch({type: SUCCESS})
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

export const FetchAppliedByJob = (job) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.appliedByJob(job);
        if (data.length > 0) {
            dispatch({type: GET_APPLIED_BY_JOB, payload: {appliedUsers: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_APPLIED_BY_JOB, payload: {appliedUsers: data}})
            dispatch({type: SUCCESS})
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}
