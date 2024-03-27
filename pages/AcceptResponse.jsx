import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import Toast from "react-native-toast-message";
import moment from "moment";
import { offerResponse } from "../API";
import offerService from '../server/services/offerService';

const AcceptResponse = ({ route, navigation }) => {

    const { ID } = route.params

    const [offer, setOffer] = useState()
    const [thank, setThank] = useState()
    const [issue, setIssue] = useState()
    const [great, setGreat] = useState()

    useEffect(() => {
        if (ID) {
            offerService.offerById(ID).then(response => {
                setOffer(response.data)
            }).catch(err => {
                console.error(err);
            })
        }
    }, [ID])

    useEffect(() => {
        if (offer) {
            setThank(`Thank you for offering me an opportunity to work at ${offer?.company_name}  I very much appreciate the time and effort your team has spent to review my application and interview me for the position of  ${offer?.role} `)
            setIssue(`I'm happy to inform you that I accept the offer and can't wait to start the journy with the team`)
            setGreat(`Once again, thank you for the great opportunity.`)
        }
    }, [offer]);

    const sendNow = () => {
        const postDate = moment().format("YYYY-MM-DD")
        if (thank.length >= 20) {
            if (issue.length >= 20) {
                if (great.length >= 20) {
                    const jsonString = `{ "text1": "${thank}", "text2": "${issue}", "text3": "${great}" }`;
                    offerResponse("Accept", jsonString, postDate, offer.id).then((res) => {
                        navigation.push('Home')
                    })
                } else {
                    Toast.show({ type: 'error', position: 'top', text1: 'Please Enter thanksgiving' })
                }
            } else {
                Toast.show({ type: 'error', position: 'top', text1: 'Please Enter your issues' })
            }
        } else {
            Toast.show({ type: 'error', position: 'top', text1: 'Please Enter some info' })
        }
    }


    return (
        <View style={{ flex: 1 }}>

            <ScrollView>
                <View style={{ flexDirection: 'row', height: 90 }}>
                    <Pressable onPress={() => navigation.goBack()} style={{ padiingRight: 5 }}>
                        <Image style={{ width: 22, height: 20, marginTop: 70, marginLeft: 30, tintColor: '#000' }}
                            source={require('../assets/back_arrow.png')} alt={''} /></Pressable>
                    <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                        <Pressable onPress={() => navigation.push('AcceptResponse')}><Image
                            style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                            source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                    </View>
                </View>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'poppins_medium',
                        marginTop: 60
                    }}>Accept Response</Text>

                    <TextInput onChangeText={(text) => setThank(text)} multiline={true}
                        style={{ fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20, marginTop: 60 }}>Thank
                        you for offering me an opportunity to work at <Text
                            style={{ color: 'green', fontSize: 17 }}> {offer?.company_name} </Text>. I very much
                        appreciate the time and effort your team has spent to review my application and interview me for the
                        position of <Text style={{ color: 'green', fontSize: 17 }}> {offer?.role} </Text> </TextInput>
                    <Text style={{ marginTop: 10, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>I'm
                        happy to inform you that I accept the offer and can't wait to start the journy with the team</Text>

                    <TextInput onChangeText={(text) => setGreat(text)} multiline={true}
                        style={{ marginTop: 10, fontSize: 14, fontFamily: 'poppins_medium', marginHorizontal: 20 }}>Once
                        again, thank you for the great opportunity.</TextInput>
                    <Text style={{
                        marginTop: 20,
                        fontSize: 15,
                        fontFamily: 'poppins_medium',
                        marginHorizontal: 20
                    }}>Sincerely</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        fontFamily: 'poppins_medium',
                        marginHorizontal: 20,
                        textAlign: 'right'
                    }}>{offer?.seeker_name}</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        fontFamily: 'poppins_medium',
                        marginHorizontal: 20,
                        textAlign: 'right'
                    }}>{offer?.email}</Text>
                    <Text style={{
                        marginTop: 5,
                        fontSize: 14,
                        fontFamily: 'poppins_medium',
                        marginHorizontal: 20,
                        textAlign: 'right'
                    }}> {offer?.code}{offer?.phone}</Text>
                </View>

                <Toast
                    position='top'
                    bottomOffset={20}
                />
            </ScrollView>

            <View style={{ paddingBottom: 20, paddingTop: 10 }}>
                <Text onPress={() => sendNow()} style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: '#13A3E1',
                    color: 'white',
                    fontSize: 15,
                    fontFamily: 'poppins_medium',
                    paddingHorizontal: 50,
                    paddingVertical: 4,
                    borderRadius: 20,

                }}>Send Proposal</Text>
            </View>

        </View>

    )
}

export default AcceptResponse
