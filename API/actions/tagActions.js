import {ERROR, GET_TOP_TAGS, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";
import * as api from "../index";

export const TopTags = (user) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchtopTags(user);
        if (data.length > 0) {
            dispatch({type: GET_TOP_TAGS, payload: {topTags: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: GET_TOP_TAGS, payload: {topTags: data}})
            dispatch({type: NODATA})
            dispatch({type: SUCCESS})
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}
