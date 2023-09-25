import { FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ripple from "react-native-material-ripple";
import { AppliedByCompany, FetchAppliedByJob } from "../API/actions/appliedActions";
import moment from "moment/moment";

function AppliedByJob({ route, navigation }) {

    const { job } = route.params



    const dispatch = useDispatch();
    const [login, isLogin] = useState(false);

    const appliedUsers = useSelector(state => state.applied.appliedUsers)

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(!visible)

    useEffect(() => {
        if (job) {
            dispatch(FetchAppliedByJob(job))
        }
    }, [dispatch, navigation, job]);

    useEffect(() => {
        console.log(appliedUsers)
    }, [appliedUsers]);


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
                            }} source={require('../assets/back_arrow.png')} alt={'Okay'} />
                        </Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Image style={{
                                width: 150,
                                height: 40,
                                marginTop: 60,
                                alignSelf: 'center'
                            }}
                                source={require('../assets/logo.png')} alt={'Okay'} />
                        </View>
                    </View>
                </View>

                <SafeAreaView style={{ flex: 1 }}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                        style={{ marginHorizontal: 26, marginTop: 10 }} data={appliedUsers} renderItem={({ item }) => (
                            <View
                                style={{
                                    margin: 5,
                                    backgroundColor: '#fff',
                                    borderColor: '#c2c2c2',
                                    borderWidth: 1,
                                    borderRadius: 25,
                                    paddingVertical: 20,
                                    paddingHorizontal: 20
                                }}>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Text style={{
                                        color: '#207A00',
                                        backgroundColor: 'rgba(0,180,18,0.2)',
                                        paddingHorizontal: 15,
                                        paddingTop: 4,
                                        fontSize: 13,
                                        fontFamily: 'poppins_medium',
                                        borderRadius: 5
                                    }}>Verified</Text>
                                    <Text style={{
                                        marginLeft: 'auto',
                                        textAlign: 'right',
                                        fontFamily: 'poppins_medium',
                                        fontSize: 12
                                    }}>{moment(item.date).startOf('day').fromNow()}</Text>
                                </View>
                                <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', marginTop: 10 }}>{item.name}</Text>
                                <Text>{item.address}</Text>
                                <Text
                                    style={{ fontSize: 17, fontFamily: 'poppins_medium', marginBottom: 10 }}>Bachelors</Text>
                                {/* <View style={{paddingHorizontal: 50}}><Text style={{
                                backgroundColor: '#D9D9D9',
                                textAlign: "center",
                                paddingVertical: 6,
                                borderRadius: 20,
                                fontSize: 12,
                                fontFamily: 'poppins_medium'
                            }}>Demand 5000/month</Text></View> */}
                                <View style={{ paddingHorizontal: 36, marginTop: 4 }}>
                                    <Ripple rippleColor="white" rippleOpacity={0.3} rippleDuration={600} rippleSize={800}
                                        onPress={() => navigation.push('ViewResume', { ID: item.user, job: item.job })}>
                                        <Text style={{
                                            backgroundColor: '#143D59',
                                            textAlign: "center",
                                            borderRadius: 20,
                                            fontSize: 16,
                                            fontFamily: 'poppins_bold',
                                            color: 'white',
                                            marginVertical: 4,
                                            paddingVertical: 7
                                        }}>View Resume</Text>
                                    </Ripple>
                                </View>
                            </View>

                        )}
                    />
                </SafeAreaView>


                <View style={{ height: 90 }} />
            </ScrollView>

        </View>
    )
}

export default AppliedByJob
