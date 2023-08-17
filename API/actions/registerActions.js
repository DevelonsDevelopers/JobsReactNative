import * as api from '../../API/index'
import {ERROR, LOADING, SUCCESS} from "../../Utils/Constants";

export const Registeration = (navigation, name, username, email, phone, address, dob, gender, password) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { responseCode } } = await api.register(name, username, email, phone, address, dob, gender, password)
        console.log(responseCode)
        if (responseCode === 200){
            navigation.replace('Login')
            dispatch ({ type: SUCCESS })
        } else {
            dispatch ({ type: ERROR })
        }
    } catch (e){
        dispatch({ type: ERROR })
    }

}
