import * as api from '../../API/index'
import {ALL_COMPANIES, ERROR, GET_COMPANY, LOADING, NO_COMPANY, NODATA, SUCCESS} from "../../Utils/Constants";

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

export const CompanyData = (id) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchCompany(id);
        console.log(data)
        if (data !== undefined) {
            dispatch({type: GET_COMPANY, payload: {company: data}})
            dispatch({type: NO_COMPANY, payload: {noCompany: "NO"}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NO_COMPANY, payload: {noCompany: 'YES'}})
        }
    } catch (error) {
        console.log(error)
        dispatch({type: ERROR})
    }
}
