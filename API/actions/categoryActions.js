import * as api from '../../API/index'
import {ALL_CATEGORIES, ERROR, FEATURED_CATEGORIES, LOADING, NODATA, SUCCESS} from "../../Utils/Constants";

export const AllCategories = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCategories();
        if (data.length > 0) {
            dispatch({type: ALL_CATEGORIES, payload: {categories: data}})
            dispatch({type: SUCCESS})
        } else {
            dispatch({type: NODATA})
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}

export const FeaturedCategories = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchFeaturedCategories();
        if (data.length > 0){
            dispatch ({ type: FEATURED_CATEGORIES, payload: { featured_categories: data } })
            dispatch ({ type: SUCCESS })
        } else {
            dispatch ({ type: NODATA })
        }
    } catch (error) {
        console.log(error)
        dispatch ({ type: ERROR })
    }
}
