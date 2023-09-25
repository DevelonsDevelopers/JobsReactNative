import React from 'react'
import { useEffect } from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { useDispatch, useSelector } from 'react-redux'
import { CoverLetterByUser } from '../API/actions/coverLetterActions'
import { CVByUser } from '../API/actions/cvActions'
import moment from 'moment'
import { useState } from 'react'

const data = [
    { 'data': 'Enhanced domestic helicopter transfer sales by 60% in 2018/2019 via business-to-business concept ' },
    { 'data': 'Implemented first helicopter medical evacuation service in Sri Lanka (2018) ' },
    { 'data': 'Introduced media booth helicopter filming project for local television hostess (2018)   ' },
]


const ViewCoverLetter = ({ navigation, route }) => {

    const { ID } = route.params
    const { job } = route.params
    const { offer } = route.params

    const dispatch = useDispatch();

    // const[isLoading,setIsLoading] = useState(true)

    const coverLetter = useSelector(state => state.coverLetter.coverLetter)
    const isloading = useSelector(state => state.coverLetter.isLoading)
    useEffect(() => {
        dispatch(CoverLetterByUser(ID, job))
    }, [dispatch, ID, job])

    const cv = useSelector(state => state.cv.cv);
    const cvLoading = useSelector(state => state.cv.isLoading);

    const [cLoading, setCLoading] = useState(true)

    useEffect(() => {
        if (isloading && cvLoading) {
            setCLoading(true)
        } else {
            setCLoading(false)
        }


    }, [isloading, cvLoading])





    // useEffect(() => {
    //     console.log(cv)
    // }, [cv])

    useEffect(() => {
        dispatch(CVByUser(ID));
    }, [dispatch, ID]);


    return (
        <ScrollView>
            {cLoading ?
                <View style={{ marginTop: 400 }}>
                    <ActivityIndicator size={60} color="#13A3E1" />
                </View>
                :
                <>
                    <View style={{ flexDirection: 'row', height: 90 }}>
                        <Pressable onPress={() => navigation.goBack()}
                            style={{ paddingRight: 5 }}><Image style={{
                                width: 22,
                                height: 20,
                                marginTop: 70,
                                marginLeft: 30,
                                tintColor: '#000'
                            }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Pressable onPress={() => navigation.push('Home')}><Image
                                style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                        </View>
                    </View>


                    <View style={{ marginTop: 40, paddingVertical: 10, borderRadius: 20 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}> {cv?.name}</Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}> {cv?.address}</Text>
                        <View style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5 }}>
                            <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black' }}> {cv?.phone}</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black' }}> {cv?.email}</Text>
                        </View>
                    </View>
                    <Text style={{ backgroundColor: 'gray', height: 1, marginTop: 10, marginHorizontal: 20 }}>-</Text>
                    <View>
                        <Text style={{ color: 'red', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>{moment(coverLetter?.date).format("DD MMM YYYY")}</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>Expression of interest: {coverLetter?.role}</Text>
                    {/* <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>intro</Text> */}
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>{coverLetter?.intro}</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>{coverLetter?.body}</Text>

                    <SafeAreaView style={{ backgroundColor: '#D3D3D3', marginHorizontal: 40, marginVertical: 10, paddingBottom: 20, }}>
                        <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                            data={cv?.careers} renderItem={({ item }) => (
                                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
                                    {`\u2022 I was working as a ${item.job} in ${item.company} from ${item.timeperiod},  `}
                                </Text>
                            )} />
                    </SafeAreaView>


                    <SafeAreaView style={{ paddingBottom: 20, }}>
                        <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                            data={cv?.educations} renderItem={({ item }) => (
                                <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 3, marginHorizontal: 30 }}>I hold a {item.qualification}  degree completed in {item.timeperiod} at {item.institute}</Text>
                            )} />
                    </SafeAreaView>

                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: -3, marginHorizontal: 30 }}>{cv?.statement}</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', marginTop: 11, marginHorizontal: 30 }}>Your's Sincerly</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', marginTop: 10, marginHorizontal: 30, marginLeft: 'auto' }}>  {cv?.name}</Text>
                    <View style={{ flexDirection: "row", justifyContent: 'center', marginHorizontal: 40 }}>
                        {cv?.offer === 0 ?
                        <Ripple onPress={() => navigation.push('OfferSend',{  job: job, user: ID })} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 6, }}>
                            <Text style={{ backgroundColor: 'green', color: 'white', fontSize: 16, fontFamily: 'poppins_bold', paddingTop: 9, paddingBottom: 9, borderRadius: 20, textAlign: 'center', paddingHorizontal: 20 }}>Already sent </Text>
                        </Ripple>
                            :
                            <Ripple onPress={() => navigation.push('OfferSend',{  job: job, user: ID })} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 6, }}>
                                <Text style={{ backgroundColor: 'green', color: 'white', fontSize: 16, fontFamily: 'poppins_bold', paddingTop: 9, paddingBottom: 9, borderRadius: 20, textAlign: 'center', paddingHorizontal: 20 }}>Send Offer</Text>
                            </Ripple>
                        }
                        <Ripple onPress={() => navigation.push('AppliedUsers')} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 6, }}>
                            <Text style={{ backgroundColor: 'red', color: 'white', fontSize: 16, fontFamily: 'poppins_bold', paddingTop: 9, paddingBottom: 9, borderRadius: 20, textAlign: 'center', paddingHorizontal: 40 }}>Ignore</Text>
                        </Ripple>
                    </View>
                </>}
        </ScrollView>
    )
}

export default ViewCoverLetter
