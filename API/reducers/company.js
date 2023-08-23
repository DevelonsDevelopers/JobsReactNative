import {ALL_COMPANIES, ERROR, LOADING, SUCCESS} from "../../Utils/Constants";

const company = (state = {isLoading: true, success: false, error: false}, action) => {
    switch (action.type){
        case LOADING:
            return {...state, isLoading: true, success: false, error: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_COMPANIES:
            return {...state, companies: action.payload.companies}
        default:
            return state
    }
}

export default company
