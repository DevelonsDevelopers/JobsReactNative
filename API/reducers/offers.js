import {SENT_OFFERS, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

const offers = (state = {isLoading: true, success: false, error: false, nodata: false}, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, isLoading: true, success: true, error: false, nodata: false}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false, nodata: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true, nodata: false}
        case NODATA:
            return {...state, isLoading: false, success: false, error: false, nodata: true}
        case SENT_OFFERS:
            return {...state, sentOffers: action.payload.sentOffers}
        default:
            return state
    }
}

export default offers
