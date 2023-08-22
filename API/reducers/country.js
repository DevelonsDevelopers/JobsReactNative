import {ALL_COUNTRIES, ERROR, LOADING, SUCCESS} from "../../Utils/Constants";

const country = (state = {isLoading: true, success: false, error: false, countries: []}, action) => {
    switch (action.type){
        case LOADING:
            return {...state, isLoading: true, success: false, error: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_COUNTRIES:
            return {...state, countries: action.payload.countries}
        default:
            return state
    }
}

export default country
