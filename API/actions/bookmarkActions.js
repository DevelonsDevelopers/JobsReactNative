import {
    ALL_BOOKMARKS,
    ALL_JOBS,
    BOOKMARK_JOB, BOOKMARKERROR, BOOKMARKLOADING, BOOKMARKNODATA,
    BOOKMARKSUCCESS,
    ERROR,
    LOADING,
    NODATA,
    SUCCESS
} from "../../Utils/Constants";
import * as api from "../index";

export const AllBookmarks = (user) => async (dispatch) => {
    try {
        dispatch ({ type: BOOKMARKLOADING })
        const { data: { data } } = await api.fetchBookmarks(user);
        if (data.length > 0) {
            dispatch({type: ALL_BOOKMARKS, payload: {bookmarks: data}})
            dispatch({type: BOOKMARKSUCCESS})
        } else {
            dispatch({type: ALL_BOOKMARKS, payload: {bookmarks: data}})
            dispatch({type: BOOKMARKSUCCESS})
            dispatch({type: BOOKMARKNODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: BOOKMARKERROR})
    }
}

