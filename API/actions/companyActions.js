import * as api from '../../API/index'
import {ALL_COMPANIES, LOADING, SUCCESS} from "../../Utils/Constants";

export const AllCompanies = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCompanies();
        dispatch ({ type: ALL_COMPANIES, payload: { companies: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}
