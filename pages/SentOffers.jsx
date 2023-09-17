import { FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FetchSentOffers } from "../API/actions/offersActions";

function SentOffers({ navigation }) {

    const dispatch = useDispatch();
    const [login, isLogin] = useState(false);
    const offers = useSelector(state => state.offers.sentOffers)

    const [ID, setID] = useState()



    useEffect(() => {
        console.log(ID)
    }, [ID])


    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const value = await AsyncStorage.getItem('ID')
        setID(value);
    }

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(!visible)

    useEffect(() => {
        if (ID) {
            dispatch(FetchSentOffers(ID))
        }
    }, [dispatch, ID]);

    useEffect(() => {
        console.log(offers)
    }, [offers]);


    return (
        <View style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75 }}>
                <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    height: 90,
                    marginBottom: 40
                }}>
                    <View style={{ flexDirection: 'row', height: 130 }}>
                        <Pressable onPress={() => navigation.goBack()}
                            style={{ paddingRight: 5 }}><Image style={{
                                width: 22,
                                height: 20,
                                marginTop: 70,
                                marginLeft: 30,
                                marginBottom: 20,
                                tintColor: 'gray'
                            }} source={require('../assets/back_arrow.png')}
                                alt={'Okay'} />
                        </Pressable>
                        <Pressable  onPress={() => navigation.push('PaymentSuccesful') }  style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Image 
                           
                            style={{
                                width: 150,
                                height: 40,
                                marginTop: 60,
                                alignSelf: 'center'
                            }}
                                source={require('../assets/logo.png')} alt={'Okay'} />
                        </Pressable>
                    </View>
                </View>
                <Text style={{ textAlign: 'center', fontSize: 19, fontFamily: 'poppins_semibold', marginBottom: 10 }}>Sent Offers</Text>


                <SafeAreaView>
                    <FlatList nestedScrollEnabled={false} scrollEnabled={false}
                        style={{ marginHorizontal: 0, marginTop: 10 }} data={offers} renderItem={({ item }) => (
                            <View style={{
                                marginLeft: 25,
                                marginRight: 25,
                                marginBottom: 8,
                                borderColor: '#4C4C4C',
                                borderRadius: 15,
                                paddingHorizontal: 25,
                                paddingVertical: 15,
                                display: "flex",
                                flexDirection: "column",
                                backgroundColor: '#fff'
                            }}>
                                <View style={{ flex: 1 }}>

                                    <Text style={{
                                        marginLeft: 'auto',
                                        textAlign: 'right',
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13
                                    }}>Today</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text numberOfLines={1} style={{
                                            fontFamily: 'poppins_bold',
                                            marginTop: 5,
                                            fontSize: 15,
                                            textAlign: "center",
                                            color: '#0044a9',
                                        }}>{item.offerType}</Text>
                                        <Text style={{
                                            fontFamily: 'poppins_medium',
                                            marginTop: 0,
                                            fontSize: 14,
                                            textAlign: "center"
                                        }}>{item.seeker_name}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{
                                        fontFamily: 'poppins_bold',
                                        fontSize: 16,
                                    }}>{item.title}</Text>
                                </View>
                                <View style={{ paddingHorizontal: 64, }}>
                                    <Text style={{
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13,
                                        textAlign: 'center',
                                        marginTop: 4,
                                        backgroundColor: '#d9d9d9',
                                        paddingHorizontal: 10,
                                        paddingVertical: 2,
                                        borderRadius: 10,
                                        margin: 'auto',
                                    }}>
                                        Salary ${item.salary}
                                    </Text>
                                </View>
                                <View style={{ paddingHorizontal: 36, marginTop: 4 }}>
                                    <Text
                                        onPress={() => navigation.push('OfferAccepted', { ID: item.job })}
                                        style={{
                                            backgroundColor: '#143D59',
                                            textAlign: "center",
                                            borderRadius: 20,
                                            fontSize: 16,
                                            fontFamily: 'poppins_bold',
                                            color: 'white',
                                            marginVertical: 4,
                                            paddingVertical: 7
                                        }}>View Response</Text>
                                </View>
                            </View>
                        )} />
                </SafeAreaView>


                <View style={{ height: 90 }} />
            </ScrollView>

        </View>
    )
}

export default SentOffers
