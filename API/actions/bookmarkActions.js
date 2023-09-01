import {ALL_BOOKMARKS, ALL_JOBS, BOOKMARK_JOB, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";
import * as api from "../index";

export const AllBookmarks = (user) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchBookmarks(user);
        if (data.length > 0) {
            dispatch({type: ALL_BOOKMARKS, payload: {bookmarks: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: ALL_BOOKMARKS, payload: {bookmarks: data}})
            dispatch({type: SUCCESS})
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}

