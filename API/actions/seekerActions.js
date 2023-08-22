import * as api from '../../API/index'
import {ERROR, GET_SEEKER, LOADING, SUCCESS, UPDATE_SEEKER} from "../../Utils/Constants";

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
