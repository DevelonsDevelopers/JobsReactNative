import React from 'react'
import { useEffect } from 'react';
import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { FetchOffers } from '../API/actions/offersActions';

const SeeekerNegotiate = ({ route, navigation }) => {

    const { ID } = route.params
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(ID)
    }, [ID])

    const offers = useSelector(state => state.offers.offers)

    useEffect(() => {
        if (ID) {
            dispatch(FetchOffers(ID))
        }
    }, [dispatch, ID])

    useEffect(() => {
        console.log(offers)
    }, [offers])

    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', height: 90 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ padiingRight: 5 }}>
                    <Image style={{ width: 22, height: 20, marginTop: 70, marginLeft: 30, tintColor: '#000' }}
                        source={require('../assets/back_arrow.png')} alt={''} /></Pressable>
                <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                    <Pressable onPress={() => navigation.push('')}><Image
                        style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                        source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                </View>
            </View>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'poppins_medium', marginTop: 60 }}>Negotiate</Text>

                <TextInput multiline={true} style={{ fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, marginTop: 60 }}>Thank you for offering me an opportunity to work at <Text style={{ color: 'green', fontSize: 17 }}> {offers[0]?.company_name} </Text>. I very much appreciate the time and effort your team has spent to review my application and interview me for the position of <Text style={{ color: 'green', fontSize: 17 }}> {offers[0]?.role} </Text> </TextInput>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_bold', marginLeft: 20, marginBottom: -20, marginTop: 10, color: 'gray' }}>ISSUES:</Text>
                <TextInput multiline={true} style={{ marginTop: 20, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20 }} >(Enter Your Issues like salary) </TextInput>
                <TextInput multiline={true} style={{ marginTop: 10, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>Once again, thank you for the great opportunity.</TextInput>
                <Text style={{ marginTop: 20, fontSize: 15, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>Sincerely</Text>
                <TextInput style={{ marginTop: 5, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, textAlign: 'right' }} >{offers[0]?.seeker_name}</TextInput>
                <TextInput style={{ marginTop: 5, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, textAlign: 'right' }} >{offers[0]?.email}</TextInput>
                <TextInput style={{ marginTop: 5, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, textAlign: 'right' }} >{offers[0]?.phone}</TextInput>
            </View>

            <Text style={{ fontSize:15,fontFamily:'poppins_medium',marginLeft:20 }}>Note:</Text>
            <Text style={{ fontSize:15,fontFamily:'poppins_medium',marginLeft:20 }}>Text is editable</Text>

            <Text style={{ marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#13A3E1', color: 'white', fontSize: 15, fontFamily: 'poppins_medium', paddingHorizontal: 50, paddingVertical: 4, borderRadius: 20, marginTop: 90 }}>Send Proposal</Text>

        </ScrollView>
    )
}

export default SeeekerNegotiate
