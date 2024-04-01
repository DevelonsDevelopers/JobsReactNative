import { Button, Image, ImageBackground, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { CheckSeeker } from "../API/actions/seekerActions";
import { CheckCV } from "../API/actions/cvActions";

function Splash({ navigation }) {

    const dispatch = useDispatch()

    const check = useSelector(state => state.seeker.check)
    const checkCV = useSelector(state => state.cv.check)

    const [user, setUser] = useState()
    const [ID, setID] = useState()

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


    useEffect(() => {
        GetData()
    }, []);


    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID');
        const value = await AsyncStorage.getItem('USER')
        console.log(id)
        console.log(value)
        if (value === "PROVIDER" && id) {
            sleep(1000).then(async () => {
                navigation.replace('PostJob')
            })
        } else if (id && id !== "0") {
            setUser(value)
            setID(id)
        } else {
            sleep(1000).then(async () => {
                navigation.replace('Home')
                await AsyncStorage.setItem("ID", "0")
                await AsyncStorage.setItem("LOGIN", 'false')
            })
        }
    }


    useEffect(() => {
        console.log(check)
        if (check) {
            console.log("CHECK")
            sleep(1000).then(async () => {
                if (user === "PROVIDER") {
                    navigation.replace('PostJob')
                } else if (user === "SEEKER") {
                    navigation.replace('Home')
                } else {
                    navigation.replace('Home')
                    await AsyncStorage.setItem("ID", "0")
                    await AsyncStorage.setItem("LOGIN", 'false')
                }
            })
        }
    }, [check , user]);


    return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 250, height: 150 }} source={require('../assets/splash_icon.png')} alt="Splash Icon" />
            <Image style={{ width: 250, height: 50, marginTop: 10 }} source={require('../assets/logo.png')} alt="Logo" />
        </View>
    );
}

export default Splash;
