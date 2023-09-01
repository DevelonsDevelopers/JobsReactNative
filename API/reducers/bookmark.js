import {ALL_BOOKMARKS, BOOKMARK_JOB, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

const bookmark = (state = {isLoading: true, success: false, error: false, nodata: false}, action) => {
    switch (action.type){
        case LOADING:
            return {...state, isLoading: true, success: true, error: false, nodata: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false, nodata: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true, nodata: false}
        case NODATA:
            return {...state, isLoading: false, success: false, error: false, nodata: true}
        case ALL_BOOKMARKS:
            return {...state, bookmarks: action.payload.bookmarks}
        default:
            return state
    }
}

export default bookmark
