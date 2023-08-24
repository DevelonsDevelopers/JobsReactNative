import {FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSeeker} from "../API/actions/seekerActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile({ navigation }) {

    const seeker = useSelector(state => state.seeker.seeker)
    const dispatch = useDispatch();
    const [ID, setID] = useState()

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const value = await AsyncStorage.getItem('ID')
        setID(value);
    }

    useEffect(() => {
        if (ID) {
            if (!seeker) {
                dispatch(fetchSeeker(ID))
            } else if ((seeker.id).toString() !== ID){
                dispatch(fetchSeeker(ID))
            }
        }
    }, [dispatch, navigation, seeker, ID]);

    useEffect(() => {
        console.log(seeker)
    }, [seeker])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75 }}>
                <View style={{flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1'}}>
                    <View style={{flexDirection: 'row', height: 130}}>
                        <Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'}/>
                        <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                            <Image style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                                   source={require('../assets/logo.png')} alt={'Okay'}/>
                        </View>
                    </View>
                    <Text style={{color: '#fff', fontSize: 35, fontFamily: 'poppins_bold', width: '100%', textAlign: 'center', marginTop: 10}}>{seeker?.name}</Text>
                </View>
                <View style={{ backgroundColor: '#fff', paddingVertical: 20, marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: -20 }}>
                    <Text style={{color: '#000', fontSize: 16, fontFamily: 'poppins_medium', width: '100%', textAlign: 'center'}}>{seeker?.phone}</Text>
                    <Text style={{color: '#000', fontSize: 15, fontFamily: 'poppins_semibold', width: '100%', textAlign: 'center'}}>{seeker?.email}</Text>
                    <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'center'}}>{seeker?.address}</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#13A3E1', paddingVertical: 20, marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: 20 }}>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Text style={{color: '#fff', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'center'}}>Saved Jobs</Text>
                        <Text style={{color: '#fff', fontSize: 35, fontFamily: 'poppins_semibold', width: '100%', textAlign: 'center', marginTop: 20}}>15</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', width: 3 }}/>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <Text style={{color: '#fff', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'center'}}>Applied Jobs</Text>
                        <Text style={{color: '#fff', fontSize: 35, fontFamily: 'poppins_semibold', width: '100%', textAlign: 'center', marginTop: 20}}>9</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', backgroundColor: '#F0A51E', paddingHorizontal: 20, marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: 20 }}>
                    <Pressable onPress={() => navigation.push('AccountInfo')}><View style={{ flex: 1, paddingVertical: 10, marginTop: 10 }}>
                        <Text style={{color: '#000', fontSize: 15, fontFamily: 'poppins_semibold', width: '100%', textAlign: 'center'}}>Manage Your Resume</Text>
                    </View></Pressable>
                    <View style={{ backgroundColor: '#000', height: 3 }}/>
                    <Pressable onPress={() => navigation.push('History')}>
                    <View style={{ flex: 1, paddingVertical: 10, marginBottom: 10 }}>
                        <Text style={{color: '#000', fontSize: 15, fontFamily: 'poppins_semibold', width: '100%', textAlign: 'center'}}>My History</Text>
                    </View>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'column', backgroundColor: '#fff', paddingHorizontal: 30, marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: 20, }}>
                    <Pressable onPress={() => navigation.push('PersonalInfo')} ><View style={{ flexDirection: 'row', flex: 1, marginTop: 20, alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../assets/manageaccounticon.png')} />
                        <Text style={{color: '#000', fontSize: 16, fontFamily: 'poppins_regular', width: '100%', textAlign: 'left', marginLeft: 20}}>Manage Your Account</Text>
                    </View></Pressable>
                    <View style={{ flexDirection: 'row', flex: 1, marginBottom: 20, alignItems: 'center', marginTop: 5 }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../assets/logouticon.png')} />
                        <Text style={{color: '#000', fontSize: 16, fontFamily: 'poppins_regular', width: '100%', textAlign: 'left', marginLeft: 20}}>Log out</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile
