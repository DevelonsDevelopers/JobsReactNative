import { Image, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import cvService from "../server/services/cvService";
import seekerService from "../server/services/seekerService";

function Splash({ navigation }) {

    const [checkCV, setCheckCV] = useState();
    const [check, setCheck] = useState()
    const [user, setUser] = useState()
    const [ID, setID] = useState()

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


    useEffect(() => {
        GetData()
    }, []);

    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
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
        if (ID && ID !== "0") {
            if (user === "SEEKER") {
                cvService.check({user: ID}).then((response) => {
                    if (response){
                        setCheckCV(response.status)
                    }
                }).catch((error) => {
                    console.log(error);
                })
                // dispatch(CheckSeeker(ID))
                seekerService.checkSeeker({id: ID}).then(response => {
                    if (response) {
                        setCheck(response.status)
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }, [ID]);

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
    }, [check]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff',marginTop:'auto',marginBottom:'auto' }}>
            <Image style={{ width: 250, height: 150, marginTop: 'auto', alignSelf: 'center' }}
                source={require('../assets/splash_icon.png')} alt={'Okay'} />
            <Image style={{ width: 250, height: 50, marginTop: 10, alignSelf: 'center', padding: 10, zIndex: 1,marginBottom:'auto' }}
                source={require('../assets/logo.png')} alt={'Okay'} />

        </View>
    );
}

export default Splash
