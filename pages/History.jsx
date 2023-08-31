import {Image, TextInput, Text, Pressable, FlatList, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native'
import {View} from 'react-native'
import React, {useEffect, useState} from 'react'
import Categories from './Categories'
import Resume from './Resume'
import {useDispatch, useSelector} from "react-redux";
import {AllCities} from "../API/actions/cityActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AllInteractions} from "../API/actions/interactionsActions";
import moment from "moment";

const data = [
    {"city": "Lahore", "country": 'Pakistan'},
    {"city": "Sydney", "country": 'Australia'},
    {"city": "Delhi", "country": 'India'},
    {"city": "Beijing", "country": 'China'},
    {"city": "Al Ain", "country": 'UAE'},
    {"city": "London", "country": 'UK'},
    {"city": "New York", "country": 'USA'},
    {"city": "Lahore", "country": 'Pakistan'},
    {"city": "Sydney", "country": 'Australia'},
    {"city": "Delhi", "country": 'India'},
    {"city": "Beijing", "country": 'China'},
    {"city": "Al Ain", "country": 'UAE'},
    {"city": "London", "country": 'UK'},
    {"city": "New York", "country": 'USA'}
]

const History = ({navigation}) => {

    const dispatch = useDispatch();
    const interactions = useSelector(state => state.interactions.interactions)
    const loading = useSelector(state => state.interactions.isLoading)

    const [ID, setID] = useState()

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const value = await AsyncStorage.getItem('ID')
        setID(value);
    }

    useEffect(() => {
        console.log()
        if (ID){
            dispatch(AllInteractions(ID))
        }
    }, [ID])

    useEffect(() => {
        console.log(interactions)
    }, [interactions]);

    return (

        <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
            <View style={{backgroundColor: '#F1F1F1'}}>
                <View style={{flexDirection: 'row', height: 90}}>
                    <Pressable onPress={() => navigation.goBack()}><Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={'Okay'}/></Pressable>
                    <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                        <Image
                            style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                            source={require('../assets/logo.png')} alt={'Okay'}/>
                    </View>
                </View>
                <View>
                    <TextInput style={{
                        backgroundColor: '#fff',
                        marginHorizontal: 30,
                        height: 50,
                        borderRadius: 25,
                        paddingHorizontal: 20,
                        marginTop: 30,
                        borderColor: 'black',
                        fontSize: 17,
                        elevation: 10
                    }} placeholder={'Search'}/>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'poppins_bold',
                        width: '100%',
                        textAlign: 'center',
                        marginVertical: 20,
                        padding: 0
                    }}>Browse by History</Text>
                </View>
                {loading ?
               <View style={{ marginTop:200 }}>
               <ActivityIndicator size={60} color="#13A3E1" />
               </View>
                    :
                    <> 
                <SafeAreaView style={{
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    padding: 23,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    marginTop: 9
                }}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                              style={{marginHorizontal: 0, marginTop: 10}} data={interactions} renderItem={({item}) => (
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                    fontFamily: 'poppins_semibold'
                                }}>{item.title}</Text>

                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 200,
                                    fontFamily: 'poppins_light',
                                    marginLeft: 'auto',
                                    marginRight: 10
                                }}>{moment(item.createddate).format("MMM Do YY")}</Text>
                            </View>
                            <View style={{
                                backgroundColor: '#777777',
                                height: 0.5,
                                marginHorizontal: 10,
                                marginVertical: 5
                            }}></View>
                        </View>
                    )}/>
                </SafeAreaView>
                </> }
            </View>
        </ScrollView>
    )
}

export default History
