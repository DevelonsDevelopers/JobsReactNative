import * as api from '../../API/index'
import {ALL_COMPANIES, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

export const AllCompanies = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCompanies();
        if (data.length > 0) {
            dispatch({type: ALL_COMPANIES, payload: {companies: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}
