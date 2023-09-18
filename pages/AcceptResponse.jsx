import React, { useEffect } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { FetchOffers } from '../API/actions/offersActions'
import { useDispatch, useSelector } from 'react-redux'

const AfterResponse = ({ route, navigation }) => {

    const { ID } = route.params

    useEffect(() => {
        console.log(ID)
    }, [ID])


    const dispatch = useDispatch();

    const offers = useSelector(state => state.offers.offers)


    useEffect(() => {
        if (ID) {
            dispatch(FetchOffers(ID))
        }
    }, [dispatch, ID]);

    useEffect(() => {

        console.log(offers)

    }, [offers]);




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
                <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'poppins_medium', marginTop: 60 }}>Thanks Giving</Text>
                <TextInput multiline={true} style={{ marginTop: 20, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, marginTop: 60 }}>Thank you for offering me an opportunity to work at <Text style={{ color: 'green', fontSize: 17 }}> {offers[0]?.company} </Text>. I very much appreciate the time and effort your team has spent to review my application and interview me for the position of <Text style={{ color: 'green', fontSize: 17 }}> {offers[0]?.role} </Text> </TextInput>
                <TextInput multiline={true} style={{ marginTop: 20, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>I'm happy to inform you that i accept the offer and can't wait to start the journy with the team. </TextInput>
                <TextInput multiline={true} style={{ marginTop: 10, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>Once again, thank you for the great opportunity.</TextInput>
                <Text style={{ marginTop: 20, fontSize: 15, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>Sincerely</Text>
                <TextInput style={{ marginTop: 5, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, textAlign: 'right' }} >{offers[0]?.seeker_name}</TextInput>
                <TextInput style={{ marginTop: 5, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, textAlign: 'right' }} >{offers[0]?.email}</TextInput>
                <TextInput style={{ marginTop: 5, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, textAlign: 'right' }} >{offers[0]?.phone}</TextInput>
            </View>

            <Text style={{ marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#13A3E1', color: 'white', fontSize: 15, fontFamily: 'poppins_medium', paddingHorizontal: 50, paddingVertical: 4, borderRadius: 20, marginTop: 90 }}>Accept Job</Text>

        </ScrollView>

    )
}

export default AfterResponse
