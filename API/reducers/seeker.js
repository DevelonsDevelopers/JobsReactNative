import {ERROR, GET_SEEKER, LOADING, SUCCESS, UPDATE_SEEKER} from "../../Utils/Constants";
import {defaults} from "axios";

const seeker = (state = {isLoading: true, success: false, error: false, seekers: [], seeker: null}, action) => {
    switch (action.type){
        case LOADING:
            return {...state, isLoading: true, success: false, error:false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case GET_SEEKER:
            return {...state, seeker: action.payload.data}
        case UPDATE_SEEKER:
            return {...state, seeker: action.payload.data}
        default:
            return state
    }
}

export default seeker
