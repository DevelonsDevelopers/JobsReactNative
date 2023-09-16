import * as api from '../../API/index'
import {ERROR, LOADING, NODATA, SENT_OFFERS, SUCCESS} from "../../Utils/Constants";
import {sentOffersByJob} from "../../API/index";

export const FetchSentOffers = (company) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.sentOffers(company);
        if (data.length > 0) {
            dispatch({type: SENT_OFFERS, payload: {sentOffers: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}

export const FetchSentOffersByJob = (job) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.sentOffersByJob(job);
        if (data.length > 0) {
            dispatch({type: sentOffersByJob(), payload: {jobOffers: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}
