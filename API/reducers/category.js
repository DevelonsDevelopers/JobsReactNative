import {ALL_CATEGORIES, ERROR, FEATURED_CATEGORIES, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

const category = (state = {isLoading: true, success: false, error: false, nodata: false}, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, isLoading: true, success: true, error: false, nodata: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false, nodata: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true, nodata: false}
        case NODATA:
            return {...state, isLoading: false, success: false, error: false, nodata: true}
        case ALL_CATEGORIES:
            return {...state, categories: action.payload.categories}
        case FEATURED_CATEGORIES:
            return {...state, featured_categories: action.payload.featured_categories}
        default:
            return state
    }
}

export default category
