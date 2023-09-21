import * as api from '../../API/index'
import {
    CHECK_SEEKER,
    ERROR,
    GET_SEEKER,
    LOADING,
    NODATA,
    RECOMMENDED_SEEKER,
    SUCCESS,
    UPDATE_SEEKER
} from "../../Utils/Constants";

export const RecommendedSeekers = (job) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchRecommendedUsers(job);
        if (data.length !== 0) {
            dispatch({type: RECOMMENDED_SEEKER, payload: {data: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: RECOMMENDED_SEEKER, payload: {data: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}

export const fetchSeeker = (ID) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchSeeker(ID);
        dispatch ({ type: GET_SEEKER, payload: { data: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}

export const CheckSeeker = (ID) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.checkSeeker(ID);
        dispatch ({ type: CHECK_SEEKER, payload: { data: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}

export const updateSeeker = (name, city, country, username, phone, address, dob, gender, id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.updateSeeker(name, city, country, username, phone, address, dob, gender, id);
        dispatch ({ type: UPDATE_SEEKER, payload: { data: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}
