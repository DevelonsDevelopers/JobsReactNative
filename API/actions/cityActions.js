import {ALL_CATEGORIES, ALL_CITIES, LOADING, SUCCESS} from "../../Utils/Constants";
import * as api from "../index";

export const AllCities = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCities();
        dispatch ({ type: ALL_CITIES, payload: { cities: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}
