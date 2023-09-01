import {ALL_APPLIED, ALL_BOOKMARKS, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";
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
