import {ALL_CATEGORIES, ALL_INTERACTIONS, ERROR, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";
import * as api from "../index";

export const AllInteractions = (user) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchInteractionsByUser(user);
        if (data.length > 0) {
            dispatch({type: ALL_INTERACTIONS, payload: {interactions: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: ALL_INTERACTIONS, payload: {interactions: data}})
            dispatch({type: SUCCESS})
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}
