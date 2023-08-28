import {ALL_CITIES, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

const city = (state = {isLoading: true, success: false, error: false, nodata: false}, action) => {
    switch (action.type){
        case LOADING:
            return {...state, isLoading: true, success: false, error: false, nodata: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false, nodata: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true, nodata: false}
        case NODATA:
            return {...state, isLoading: false, success: false, error: true, nodata: true}
        case ALL_CITIES:
            return {...state, cities: action.payload.cities}
        default:
            return state
    }
}

export default city
