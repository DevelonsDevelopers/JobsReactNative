import {ALL_CATEGORIES, ERROR, LOADING, SUCCESS} from "../../Utils/Constants";

const category = (state = {isLoading: true, success: false, error: false, categories: []}, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_CATEGORIES:
            return {...state, categories: action.payload.categories}
        default:
            return state
    }
}

export default category
