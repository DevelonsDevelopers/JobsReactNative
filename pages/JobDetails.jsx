import {Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView, ActivityIndicator} from "react-native";
import React, {useEffect} from 'react'
import {View} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {JobByID} from "../API/actions/jobActions";
import moment from "moment";

const JobDetails = ({route, navigation}) => {

    const {ID} = route.params

    const job = useSelector(state => state.job.job)
    const loading = useSelector(state => state.job.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(JobByID(ID))
    }, [dispatch]);

    useEffect(() => {
        console.log(job)
    }, [job]);

    return (
        <ScrollView style={{backgroundColor: '#F1F1F1'}}>
            <View style={{backgroundColor: '#EAEAEA'}}>
                <View style={{flexDirection: 'row', height: 90}}>
                    <Pressable onPress={() => toggleVisibility()}><Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={''}/></Pressable>
                    <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                        <Pressable onPress={() => navigation.push('Search')}><Image
                            style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                            source={require('../assets/logo.png')} alt={'Okay'}/></Pressable>
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
                {loading ?
                    <View style={{marginTop: 300}}>
                        <ActivityIndicator size={60} color="#13A3E1"/></View>
                    : <>
                        <SafeAreaView style={{marginTop: 30}}>


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
                                <View style={{flexDirection: 'row', flex: 1}}>
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
                                <View style={{paddingHorizontal: 100,}}>
                                    <Text style={{
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13,
                                        textAlign: 'center',
                                        marginTop: 4,
                                        backgroundColor: '#00A224',
                                        color: "white",
                                        paddingHorizontal: 10,
                                        paddingVertical: 2,
                                        borderRadius: 20,
                                        margin: 'auto',
                                    }}>
                                        Salary {job?.salary}
                                    </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 1}}>
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
                                        <View style={{flexDirection: 'column'}}>
                                            <View style={{paddingHorizontal: 10}}>
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
                                                fontFamily: 'poppins_bold',
                                                textAlign: "center"
                                            }}>{job?.workdays}</Text>
                                            <Text style={{
                                                fontSize: 13,
                                                fontFamily: 'poppins_medium',
                                                textAlign: "center"
                                            }}>{job?.worktime}</Text>
                                        </View>
                                    </View>
                                    <View style={{flex: 0.6}}>
                                        <View style={{flexDirection: 'column', paddingVertical: 25,}}>
                                            <Text style={{
                                                textAlign: "center",
                                                fontSize: 15,
                                                fontFamily: 'poppins_medium'
                                            }}>{job?.experience}</Text>
                                            <Text style={{
                                                textAlign: "center",
                                                fontSize: 20,
                                                fontFamily: 'poppins_bold'
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
                                <Text style={{
                                    marginHorizontal: 25,
                                    fontSize: 12,
                                    fontFamily: 'poppins_medium',
                                    minHeight: 250
                                }}>{job?.description}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "center",
                                    gap: 20,
                                    marginTop: 10,
                                    fontFamily: 'poppins_medium'
                                }}>
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        backgroundColor: '#143D59',
                                        color: 'white',
                                        width: 150,
                                        textAlign: "center",
                                        paddingVertical: 6,
                                        borderRadius: 20,
                                    }}>SAVE</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        backgroundColor: '#13A3E1',
                                        color: 'white',
                                        width: 150,
                                        textAlign: "center",
                                        paddingVertical: 6,
                                        borderRadius: 20,
                                    }}>APPLY NOW</Text>

                                </View>

                            </View>

                        </SafeAreaView>
                    </>}
            </View>
        </ScrollView>
    )
}

export default JobDetails
