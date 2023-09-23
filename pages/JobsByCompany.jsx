import {Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView, ActivityIndicator} from "react-native";
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import Resume from "./Resume";
import {useDispatch, useSelector} from "react-redux";
import {AllCities} from "../API/actions/cityActions";
import {AllJobs, CityJobs, CompanyJobs} from "../API/actions/jobActions";
import moment from "moment";
import {recordInteraction} from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {RESET} from "../Utils/Constants";
import Ripple from "react-native-material-ripple";

const data = [
    {"name": "Facebook"},
    {"name": "Google"},
    {"name": "Netflix"},
    {"name": "Youtube"}
]

function JobsByCompany({route, navigation}) {

    const {COMID} = route.params

    const jobs = useSelector(state => state.job.companyJobs)
    const isLoading = useSelector(state => state.job.isLoading)
    const success = useSelector(state => state.job.success)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const [ID, setID] = useState()

    useEffect(() => {
        if (ID) {
            if (loading) {
                if (!jobs) {
                    dispatch(CompanyJobs(ID, COMID))
                } else if (jobs.length === 0 || jobs[0].company !== COMID) {
                    dispatch(CompanyJobs(ID, COMID))
                } else {
                    setLoading(false)
                    setData(jobs)
                }
            }
        }
    }, [dispatch, jobs, ID]);

    useEffect(() => {
        if (success) {
            setData(jobs)
            setLoading(false)
            dispatch({ type: RESET })
        }
    }, [success]);

    useEffect(() => {
        if (jobs){
            setData(jobs)
        }
    }, [jobs]);

    const JobClick = (id) => {
        recordInteraction(id, ID, '', '', 'JOB').then(res => console.log(res))
        navigation.push('JobDetails', {ID: id})
    }

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
        setID(id);
    }

    // useEffect(()=>{
    //     console.log(jobs)
    // },[jobs])

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
            <View style={{backgroundColor: '#EAEAEA'}}>
                <View style={{flexDirection: 'row', height: 90}}>
                    <Pressable onPress={() => navigation.goBack()} style={{ padiingRight:5 }}><Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={'Okay'}/></Pressable>
                    <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                        <Pressable 
                        // onPress={() => navigation.push('Recommendedjobs')}
                        ><Image
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
                        textAlign: 'left',
                        marginVertical: 20,
                        padding: 0
                    }}>Jobs</Text>
                </View>
                {loading ?
                    <View style={{marginTop: 200}}>
                        <ActivityIndicator size={60} color="#13A3E1"/>
                    </View>
                    :
                <SafeAreaView>
                    <FlatList nestedScrollEnabled={false} scrollEnabled={false}
                              style={{marginHorizontal: 0, marginTop: 10}} data={data} renderItem={({item}) => (
                        <Ripple rippleColor="#13A3E1" rippleOpacity={0.2} onPress={() => JobClick(item.id)}><View style={{
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
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={{
                                    color: '#207A00',
                                    backgroundColor: 'rgba(0,180,18,0.2)',
                                    paddingHorizontal: 10,
                                    paddingTop: 4,
                                    fontSize: 10,
                                    fontFamily: 'poppins_medium',
                                    borderRadius: 5
                                }}>NEW</Text>
                                <Text style={{
                                    marginLeft: 'auto',
                                    textAlign: 'right',
                                    fontFamily: 'poppins_medium',
                                    fontSize: 13
                                }}>{moment(item.created).format("MMM Do YY")}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 0.8}}>
                                    <Text numberOfLines={1} style={{
                                        fontFamily: 'poppins_bold',
                                        marginTop: 5,
                                        fontSize: 15
                                    }}>{item.title}</Text>
                                    <Text style={{
                                        fontFamily: 'poppins_regular',
                                        marginTop: 0,
                                        fontSize: 12
                                    }}>{item.company_name}</Text>
                                </View>
                                {/* {item.bookmark === 0 ?
                                    <Image style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft: 'auto',
                                        marginTop: 10
                                    }} source={require('../assets/bookmarked.png')}/>
                                    :
                                    <Image style={{
                                        width: 20,
                                        height: 20,
                                        marginLeft: 'auto',
                                        marginTop: 10
                                    }} source={require('../assets/bookmark.png')}/>
                                } */}
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={{
                                    fontFamily: 'poppins_bold',

                                    fontSize: 16,
                                }}>{item.category_name}</Text>
                                <Text style={{
                                    marginLeft: 'auto',
                                    textAlign: 'right',
                                    fontFamily: 'poppins_medium',
                                    fontSize: 13
                                }}>{item.qualification}</Text>
                            </View>
                            <View style={{paddingHorizontal: 64,}}>
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
                                    Salary {item.salary}
                                </Text>
                            </View>

                            <View style={{flexDirection: 'row', flex: 1, marginTop: 7,}}>
                                <Text style={{
                                    color: 'white',
                                    backgroundColor: '#13a3e1',
                                    paddingHorizontal: 10,
                                    paddingTop: 5,
                                    fontSize: 15,
                                    fontFamily: 'poppins_medium',
                                    borderRadius: 14
                                }}>{item.type}</Text>
                                <Text style={{
                                    marginLeft: 'auto',
                                    textAlign: 'right',
                                    fontFamily: 'poppins_medium',
                                    fontSize: 13,
                                    paddingTop: 6,
                                }}>{item.city_name}</Text>
                            </View>


                        </View></Ripple>
                    )}/>
                </SafeAreaView>
                }
            </View>
        </ScrollView>
    )
}

export default JobsByCompany
