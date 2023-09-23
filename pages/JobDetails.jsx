import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { JobByID } from "../API/actions/jobActions";
import moment from "moment";
import { BOOKMARK_JOB, RESET } from "../Utils/Constants";
import { applyJob, bookmarkJob, removeBookmark } from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApplyModal from "../Components/ApplyModal";
import WebView from "react-native-webview";
import { fetchSeeker } from "../API/actions/seekerActions";
import LoginRequireModal from "../Components/LoginRequireModal";

const JobDetails = ({ route, navigation }) => {

    const { ID } = route.params

    const job = useSelector(state => state.job.job)
    const loading = useSelector(state => state.job.isLoading)
    const success = useSelector(state => state.job.success)
    const dispatch = useDispatch()
    const [isloading, setIsLoading] = useState(true)
    const [USERID, setUSERID] = useState()
    const [applied, setApplied] = useState(0)
    const [bookmark, setBookmark] = useState(0)
    const [webHeight, setWebHeight] = useState(0)
    const [login, setLogin] = useState()
    const [plan, setPlan] = useState()

    const seeker = useSelector(state => state.seeker.seeker)

    const onWebHeight = (e) => {
        setWebHeight(Number(e.nativeEvent.data))
    }

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const value = await AsyncStorage.getItem('ID')
        const loginval = await AsyncStorage.getItem('LOGIN')
        setUSERID(value);
        setLogin(loginval)
    }

    useEffect(() => {
        if (USERID) {
            if (!seeker) {
                dispatch(fetchSeeker(USERID))
            } else if ((seeker.id).toString() !== USERID) {
                dispatch(fetchSeeker(USERID))
            }
        }
    }, [dispatch, seeker, USERID, navigation]);

    useEffect(() => {
        if (seeker?.plan !== "0") {
            setPlan(true)
        } else {
            setPlan(false)
        }
    }, [seeker]);

    useEffect(() => {
        if (USERID) {
            dispatch(JobByID(USERID, ID))
        }
    }, [dispatch, USERID]);

    useEffect(() => {
        if (success) {
            setIsLoading(false)
            dispatch({ type: RESET })
        }
    }, [success]);

    useEffect(() => {
        if (job) {
            setApplied(job.applied)
            setBookmark(job.bookmark)
        }
    }, [job]);

    const ApplyJob = (intro, body) => {
        const date = moment().format("YYYY-MM-DD")
        navigation.push('CoverLetter', { job: job.id, role: job?.role, intro: intro, body: body })
        // applyJob(job.id, USERID, date, body).then(res => {
        //     const {data: {data}} = res;
        //     if (data.affectedRows === 1) {
        //         setApplied(data.insertId)
        //     }
        // })
    }

    const BookmarkJob = () => {
        bookmarkJob(job.id, USERID).then(res => {
            const { data: { data } } = res;
            if (data.affectedRows === 1) {
                setBookmark(data.insertId)
                dispatch({ type: BOOKMARK_JOB, payload: { job: job.id, bookmark: data.insertId } })
            }
        })
    }

    const RemoveBookmark = () => {
        removeBookmark(bookmark).then(res => {
            const { data: { data } } = res;
            if (data.affectedRows === 1) {
                setBookmark(0)
                dispatch({ type: BOOKMARK_JOB, payload: { job: job.id, bookmark: 0 } })
            }
        })
    }

    // Apply Modal ============
    const [applyVisible, setApplyVisible] = useState(false)
    const toggleApplyVisibility = () => setApplyVisible(!applyVisible)


    const [loginVisible, setLoginVisible] = useState(false)
    const toggleLoginVisible = () => setLoginVisible(!loginVisible)

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ backgroundColor: '#F1F1F1' }}>
                <LoginRequireModal visible={loginVisible} toggleLoginVisible={toggleLoginVisible} navigation={navigation} />
                <ApplyModal visible={applyVisible} toggleVisible={toggleApplyVisibility} apply={ApplyJob} />
                <View style={{ backgroundColor: '#EAEAEA' }}>
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
                    <View>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'poppins_bold',
                            width: '100%',
                            paddingHorizontal: 30,
                            textAlign: 'center',
                            marginTop: 30,
                            padding: 0
                        }}>{job?.title}</Text>
                    </View>
                    {isloading ?
                        <View style={{ marginTop: 300 }}>
                            <ActivityIndicator size={60} color="#13A3E1" /></View>
                        : <>
                            <SafeAreaView style={{ marginTop: 30 }}>


                                <View style={{
                                    marginBottom: 8,
                                    borderColor: '#4C4C4C',
                                    borderTopLeftRadius: 50,
                                    borderTopRightRadius: 50,
                                    paddingVertical: 15,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: '#fff'
                                }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <Text style={{

                                            paddingHorizontal: 10,
                                            paddingTop: 4,
                                            fontSize: 14,
                                            fontFamily: 'poppins_bold',
                                            borderRadius: 5,
                                            marginLeft: 25,
                                        }}>{job?.company_name}</Text>
                                        <Text style={{
                                            marginLeft: 'auto',
                                            textAlign: 'right',
                                            fontFamily: 'poppins_medium',
                                            fontSize: 13,
                                            marginRight: 25
                                        }}>{moment(job?.date).fromNow()}</Text>
                                    </View>
                                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                        <Text style={{
                                            fontFamily: 'poppins_medium',
                                            fontSize: 15,
                                            textAlign: 'center',
                                            marginTop: 19,
                                            backgroundColor: '#00A224',
                                            color: "white",
                                            borderRadius: 20,
                                            margin: 'auto',
                                            paddingTop: 5,
                                            paddingBottom: 2,
                                            paddingHorizontal: 20
                                        }}>
                                            Salary {job?.salary}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text numberOfLines={1} style={{
                                                fontFamily: 'poppins_bold',
                                                marginTop: 15,
                                                fontSize: 17,
                                                textAlign: "center",
                                            }}>{job?.category_name}</Text>
                                            <Text style={{
                                                fontFamily: 'poppins_medium',
                                                marginTop: 0,
                                                fontSize: 13,
                                                textAlign: "center"
                                            }}>{job?.city_name}</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        marginTop: 20,
                                        backgroundColor: 'white',
                                        gap: 10
                                    }}>
                                        <View style={{
                                            flex: 0.4,
                                            backgroundColor: 'rgba(19, 163, 225, 0.20)',
                                            paddingHorizontal: 30,
                                            width: '50%',
                                            paddingVertical: 25,
                                            borderTopRightRadius: 40,
                                            borderBottomRightRadius: 40
                                        }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ paddingHorizontal: 10 }}>
                                                    <Text style={{
                                                        color: 'white',
                                                        backgroundColor: '#13a3e1',
                                                        paddingHorizontal: 6,
                                                        paddingVertical: 8,
                                                        fontSize: 14,
                                                        fontFamily: 'poppins_medium',
                                                        borderRadius: 14,
                                                        textAlign: "center",
                                                    }}>{job?.type}</Text>
                                                </View>
                                                <Text style={{
                                                    fontSize: 16,
                                                    fontFamily: 'poppins_medium',
                                                    textAlign: "center"
                                                }}>{job?.workdays}</Text>
                                                <Text style={{
                                                    fontSize: 13,
                                                    fontFamily: 'poppins_medium',
                                                    textAlign: "center"
                                                }}>{job?.worktime}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.6 }}>
                                            <View style={{ flexDirection: 'column', paddingVertical: 25, }}>
                                                <Text style={{
                                                    textAlign: "center",
                                                    fontSize: 15,
                                                    fontFamily: 'poppins_medium'
                                                }}>{job?.experience}</Text>
                                                <Text style={{
                                                    textAlign: "center",
                                                    fontSize: 20,
                                                    fontFamily: 'poppins_medium'
                                                }}>{job?.qualification}</Text>
                                                <Text style={{
                                                    textAlign: "center",
                                                    fontSize: 12,
                                                    fontFamily: 'poppins_medium'
                                                }}>{job?.skills}</Text>

                                            </View>
                                        </View>
                                    </View>
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: 'poppins_medium',
                                        marginLeft: 15,
                                        marginTop: 10
                                    }}>Description: </Text>

                                    <WebView source={{ html: job?.description }} style={{
                                        height: webHeight,
                                        marginHorizontal: 25,
                                        fontFamily: 'poppins_medium',
                                    }}
                                        scalesPageToFit={false}
                                        onMessage={e => onWebHeight(e)}
                                        injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
                                    />

                                </View>

                            </SafeAreaView>
                        </>}
                </View>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: "center",
                gap: 20,
                fontFamily: 'poppins_medium',
                paddingVertical: 10,
                backgroundColor: '#e8e8e8'
            }}>
                {bookmark === 0 ?
                    <Pressable onPress={() => BookmarkJob()}><Text style={{
                        justifyContent: 'center',
                        height: 50,
                        fontSize: 15,
                        fontFamily: 'poppins_bold',
                        backgroundColor: '#143D59',
                        color: 'white',
                        width: 150,
                        textAlign: "center",
                        paddingVertical: 10,
                        borderRadius: 25,
                        paddingTop: 13,
                    }}>SAVE</Text></Pressable>
                    :
                    <Pressable onPress={() => RemoveBookmark()}><Text style={{
                        justifyContent: 'center',
                        height: 50,
                        fontSize: 15,
                        fontFamily: 'poppins_bold',
                        backgroundColor: '#143D59',
                        color: 'white',
                        width: 150,
                        textAlign: "center",
                        paddingVertical: 10,
                        borderRadius: 25,

                    }}>SAVED</Text></Pressable>
                }
                {applied === 0 ?
                    <Pressable onPress={() => { if (login) { if (plan) { navigation.push('ManageCoverLetter') } else { navigation.push('VerificationProfile') } } else { toggleLoginVisible() } }}>
                        <Text style={{
                            justifyContent: 'center',
                            height: 50,
                            fontSize: 15,
                            fontFamily: 'poppins_bold',
                            backgroundColor: '#13A3E1',
                            color: 'white',
                            width: 150,
                            textAlign: "center",
                            paddingVertical: 10,
                            borderRadius: 25,
                            paddingTop: 13,
                        }}>APPLY NOW</Text>
                    </Pressable>
                    : <Text style={{
                        justifyContent: 'center',
                        height: 50,
                        fontSize: 15,
                        fontFamily: 'poppins_bold',
                        backgroundColor: '#13A3E1',
                        color: 'white',
                        width: 150,
                        textAlign: "center",
                        paddingVertical: 10,
                        borderRadius: 25,
                    }}>APPLIED</Text>}

            </View>
        </View>
    )
}

export default JobDetails
