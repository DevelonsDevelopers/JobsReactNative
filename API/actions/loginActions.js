import * as api from '../../API/index'
import {ERROR, LOADING, SUCCESS} from "../../Utils/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CheckCV} from "./cvActions";
import {CheckSeeker} from "./seekerActions";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const LoginAuthentication = (navigation, email, password) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const response = await api.login(email, password)
        const { data: { responseCode } } = response
        const { data: { message } } = response
        const { data: { data } } = response
        console.log(responseCode)
        var ID = (data.id).toString()
        console.log(ID)
        dispatch(CheckCV(ID))
        dispatch(CheckSeeker(ID))
        await AsyncStorage.setItem("LOGIN", 'true')
        await AsyncStorage.setItem("ID", ID)
        await AsyncStorage.setItem("USER", "SEEKER")
        await AsyncStorage.setItem("NAME", data.name)
        await AsyncStorage.setItem("EMAIL", data.email)
        await AsyncStorage.setItem("USERNAME", data.username)
        if (responseCode === 200){
            sleep(2000).then( async () => {
                navigation.replace('Onboarding')
                dispatch({type: SUCCESS})
            })
        } else {
            dispatch ({ type: ERROR })
        }
    } catch (e){
        dispatch({ type: ERROR })
    }
}

export const ProviderLoginAuthentication = (navigation, email, password) => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const response = await api.loginProvider(email, password)
        const { data: { responseCode } } = response
        const { data: { message } } = response
        const { data: { data } } = response
        console.log(responseCode)
        var ID = (data.id).toString()
        await AsyncStorage.setItem("LOGIN", 'true')
        await AsyncStorage.setItem("ID", ID)
        await AsyncStorage.setItem("USER", "PROVIDER")
        await AsyncStorage.setItem("NAME", data.name)
        await AsyncStorage.setItem("EMAIL", data.email)
        console.log("Provider")
        if (responseCode === 200){
            navigation.replace('ProviderProfile')
            dispatch ({ type: SUCCESS })
        } else {
            dispatch ({ type: ERROR })
        }
    } catch (e){
        console.log("error")
        dispatch({ type: ERROR })
    }
}
