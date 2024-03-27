import * as React from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
 import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AllApplied } from "../API/actions/appliedActions";
import Ripple from 'react-native-material-ripple';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import NoData from '../Components/NoData';
import appliedService from '../server/services/appliedService';
 

const Applied = ({ navigation }) => {


    const dispatch = useDispatch();
    const applied = useSelector(state => state.applied.appliedJobs);

    const [data, setData] = useState()
    console.log("applied compiled")

    const error = useSelector(state => state.error.allAppliedError)
    // const noData = useSelector(state => state.nodata.allAppliedNoData)
    const [noData, setnoData] = useState();
    const success = useSelector(state => state.success.allAppliedSuccess)

    // const [succeess, setSuccess] = useState()

    const [isLoading, setIsLoading] = useState(false)

    console.log()

    // useEffect(() => {
    //     if (success || noData || error) {
    //         setIsLoading(false)
    //     }
    // }, [success, noData, error])

    useEffect(() => {
        if (applied) {
            setIsLoading(false)
            setData(applied)
        }
    }, [applied])

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         setData();
    //     });
    //     return unsubscribe;
    // }, [navigation]);

    useEffect(() => {
        if (applied) {
            setIsLoading(false)
        } else {
            setIsLoading(true)
        }
    }, [applied])

    console.log("applied", applied)
    console.log("data", data)

    useEffect(() => {
        if (applied?.length === 0) {
            setnoData(true)
        } else {
            setnoData(false)
        }
    }, [applied])

    const [ID, setID] = useState()

    useEffect(() => {
        if (ID && !applied) {
            // dispatch(AllApplied(ID))
            appliedService.applyByUser({user : ID}).then((res) => {
                setData(res.data)
            }).catch(err => {
                console.error(err);
            })
        }
    }, [ID]);

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
        setID(id);
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {isLoading ?
                    <View style={{ marginTop: 200 }}>
                        <ActivityIndicator size={60} color="#13A3E1" />
                    </View>
                    :
                    <>
                        {noData ?  <NoData text={"No Applied Found"} /> :
                            <>
                                {error ?
                                    <View style={{ marginTop: 360 }}>
                                        <Image source={require('../assets/delete.png')} style={{
                                            width: 30,
                                            height: 30,
                                            marginLeft: 190,
                                            marginBottom: -20,
                                            marginTop: 40
                                        }} />
                                        <Text
                                            style={{ textAlign: 'center', marginVertical: 20, fontFamily: 'poppins_medium' }}>Network
                                            Error...!</Text>
                                    </View> : <>
                                        <View style={{ flexDirection: 'row', height: 90 }}>
                                            <Pressable onPress={() => navigation.goBack()} style={{ padiingRight: 5 }}><Image style={{
                                                width: 22,
                                                height: 20,
                                                marginTop: 70,
                                                marginLeft: 30,
                                                tintColor: '#000'
                                            }} source={require('../assets/back_arrow.png')} alt={''} /></Pressable>
                                            <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                                                <Pressable onPress={() => null}><Image
                                                    style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                                    source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                                            </View>
                                        </View>
                                        <Text style={{ marginTop: 20, fontFamily: 'poppins_medium', marginLeft: 14, fontSize: 16 }}> Applied Jobs </Text>
                                        <FlatList nestedScrollEnabled={true} scrollEnabled={true}
                                            style={{ marginHorizontal: 0, marginTop: 20 }} data={applied}
                                            renderItem={({ item }) => (
                                                <Pressable
                                                    style={{
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
                                                    {/* <View style={{flexDirection: 'row', flex: 1}}>
                                                  <Text style={{
                                                      marginLeft: 'auto',
                                                      textAlign: 'right',
                                                      fontFamily: 'poppins_medium',
                                                      fontSize: 13
                                                  }}>{moment(item.date).fromNow()}</Text>
                                              </View> */}
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <View style={{ flex: 1 }}>
                                                            <Text style={{
                                                                fontFamily: 'poppins_regular',
                                                                width: '100%',
                                                                marginTop: 0,
                                                                fontSize: 12,
                                                                textAlign: 'center'
                                                            }}>{item.company_name}</Text>
                                                            <Text style={{
                                                                fontFamily: 'poppins_bold',
                                                                marginTop: 5,
                                                                fontSize: 15,
                                                                textAlign: 'center'
                                                            }}>{item.title}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                                        <Text style={{
                                                            fontFamily: 'poppins_medium',
                                                            fontSize: 13,
                                                            textAlign: 'center',
                                                            marginTop: 4,
                                                            backgroundColor: '#d9d9d9',
                                                            paddingHorizontal: 20,
                                                            paddingVertical: 2,
                                                            borderRadius: 10,
                                                            margin: 'auto',
                                                        }}>
                                                            Salary {item.salary}
                                                        </Text>
                                                    </View>

                                                    <View style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        flex: 1,
                                                        marginTop: 15,
                                                    }}>
                                                        {item?.offer_id === 0 ?

                                                            <Text style={{
                                                                color: '#003c7a',
                                                                paddingVertical: 5,
                                                                paddingHorizontal: 20,
                                                                fontSize: 15,
                                                                fontFamily: 'poppins_medium',
                                                                borderRadius: 25,
                                                                textAlign: 'center',
                                                                alignItems: 'center'
                                                            }}>
                                                                No Offer Yet</Text>
                                                            :
                                                            <Ripple onPress={() => navigation.push('JobResponse', { response: item?.offer_id, IDs: item?.job, })} >
                                                                <Text style={{
                                                                    color: 'white',
                                                                    backgroundColor: 'green',
                                                                    paddingVertical: 5,
                                                                    paddingHorizontal: 20,
                                                                    fontSize: 15,
                                                                    fontFamily: 'poppins_medium',
                                                                    borderRadius: 25,
                                                                    textAlign: 'center',
                                                                    alignItems: 'center'
                                                                }}>View Offer</Text>
                                                            </Ripple>
                                                        }

                                                    </View>


                                                </Pressable>
                                            )} />
                                    </>
                                }
                            </>}
                    </>}
            </ScrollView >
            <BannerAd
                unitId="ca-app-pub-3940256099942544/6300978111"
                size={BannerAdSize.FULL_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    )
}

export default Applied
