import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    FlatList,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";

import {AllCompanies, CompanyData} from '../API/actions/companyActions';

import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProviderProfileInfo = ({ navigation }) => {

    const dispatch = useDispatch();

    const [ID, setID] = useState()

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const value = await AsyncStorage.getItem('ID')
        setID(value);
    }

    const company = useSelector(state => state.company.company)

    useEffect(() => {
        if (ID) {
            dispatch(CompanyData(ID))
        }
    }, [dispatch, ID]);


    useEffect(() => {
        console.log(company)
    }, [company])




    return (
        <View style={{ flex: 1 }}>


            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
                <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    height: 240,
                    backgroundColor: '#13A3E1'
                }}>
                    <View style={{ flexDirection: 'row', height: 130 }}>
                        <Pressable onPress={() => navigation.goBack()}><Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Image style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                source={require('../assets/logo.png')} alt={'Okay'} />
                        </View>
                    </View>
                    <Text ellipsizeMode={"tail"} style={{
                        color: '#fff',
                        fontSize: 30,
                        fontFamily: 'poppins_bold',
                        textAlign: 'center',
                        marginTop: 10,
                        marginHorizontal: 20,
                        paddingBottom: 20
                    }}>{company?.company_name}</Text>
                </View>
                <View style={{
                    backgroundColor: '#fff',
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: -20
                }}>
                    <Text style={{
                        color: '#000',
                        fontSize: 16,
                        fontFamily: 'poppins_medium',
                        width: '100%',
                        textAlign: 'center'
                    }}>{company?.type}</Text>
                    <Text style={{
                        color: '#000',
                        fontSize: 15,
                        fontFamily: 'poppins_semibold',
                        width: '100%',
                        textAlign: 'center'
                    }}>develonsdeveloper@gmail.com</Text>
                    <Text style={{
                        color: '#000',
                        fontSize: 14,
                        fontFamily: 'poppins_light',
                        width: '100%',
                        textAlign: 'center'
                    }}>Lahore,pakistan</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#13A3E1',
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 30
                }}>
                    <Pressable onPress={() => navigation.push('AppliedSaved', { screen: 0 })} style={{ flex: 1, paddingVertical: 20 }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 14,
                            fontFamily: 'poppins_medium',
                            width: '100%',
                            textAlign: 'center'
                        }}>Applied Users</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 35,
                            fontFamily: 'poppins_semibold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: 20
                        }}>5</Text>
                    </Pressable>
                    <View style={{ backgroundColor: '#fff', width: 3 }} />
                    <Pressable onPress={() => navigation.push('AppliedSaved', { screen: 1 })} style={{ flex: 1, paddingVertical: 20 }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 14,
                            fontFamily: 'poppins_medium',
                            width: '100%',
                            textAlign: 'center'
                        }}>Offer Send</Text>
                        <Text style={{
                            color: '#fff',
                            fontSize: 35,
                            fontFamily: 'poppins_semibold',
                            width: '100%',
                            textAlign: 'center',
                            marginTop: 20
                        }}>0</Text>
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    paddingHorizontal: 30,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 90,
                }}>
                    <Pressable onPress={() => navigation.push('ProviderAccountManage')}><View
                        style={{ flexDirection: 'row', flex: 1, marginTop: 20, alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 20 }}
                            source={require('../assets/manageaccounticon.png')} />
                        <Text style={{
                            color: '#000',
                            fontSize: 16,
                            fontFamily: 'poppins_regular',
                            width: '100%',
                            textAlign: 'left',
                            marginLeft: 20
                        }}>Manage Your Account</Text>
                    </View></Pressable>

                    <Pressable ><View style={{
                        flexDirection: 'row',
                        flex: 1,
                        marginBottom: 20,
                        alignItems: 'center',
                        marginTop: 5
                    }}>
                        <Image style={{ width: 20, height: 20 }}
                            source={require('../assets/logouticon.png')} />
                        <Text style={{
                            color: '#000',
                            fontSize: 16,
                            fontFamily: 'poppins_regular',
                            width: '100%',
                            textAlign: 'left',
                            marginLeft: 20
                        }}>Log out</Text>
                    </View></Pressable>
                </View>
            </ScrollView>


        </View>
    )
}

export default ProviderProfileInfo
