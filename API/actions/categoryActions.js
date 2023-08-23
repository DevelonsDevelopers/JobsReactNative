import * as api from '../../API/index'
import {ALL_CATEGORIES, FEATURED_CATEGORIES, LOADING, SUCCESS} from "../../Utils/Constants";

export const AllCategories = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCategories();
        dispatch ({ type: ALL_CATEGORIES, payload: { categories: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}

export const FeaturedCategories = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchFeaturedCategories();
        dispatch ({ type: FEATURED_CATEGORIES, payload: { featured_categories: data } })
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}
