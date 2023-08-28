import * as api from '../index'
import {ALL_CITIES, ALL_COUNTRIES, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

export const AllCountries = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCountries();
        if (data.length > 0) {
            dispatch({type: ALL_COUNTRIES, payload: {countries: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}
