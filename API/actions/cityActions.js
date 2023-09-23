import { ALL_CITIES, CITIES_ERROR, CITIES_LOADING, CITIES_NODATA, CITIES_SUCCESS, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";
import * as api from "../index";

export const AllCities = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCities();
        if (data.length <= 0) {
            dispatch({type: ALL_CITIES, payload: {cities: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}
