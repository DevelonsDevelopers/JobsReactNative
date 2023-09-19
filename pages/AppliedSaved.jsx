import * as React from 'react';
import { ActivityIndicator, Image, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AllBookmarks } from "../API/actions/bookmarkActions";
import moment from "moment";
import { AllApplied } from "../API/actions/appliedActions";
import { useNavigation } from "@react-navigation/native";

const data1 = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
]
const data = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
]
const FirstRoute = ({ navigation }) => {

    const dispatch = useDispatch();
    const bookmarks = useSelector(state => state.bookmark.bookmarks);
    const loading = useSelector(state => state.bookmark.bookmarkIsLoading)
    const error = useSelector(state => state.bookmark.bookmarkError)
    const noData = useSelector(state => state.bookmark.bookmarkNoData)
    const [ID, setID] = useState()

    useEffect(() => {
        if (ID) {
            dispatch(AllBookmarks(ID))
        }
    }, [dispatch, ID]);

    useEffect(() => {
        console.log(bookmarks)
        console.log(loading)
        console.log(error)
        console.log(noData)
    }, [bookmarks, loading, error, noData]);

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
        setID(id);
    }

    return (
        <GestureHandlerRootView>
            {loading ?
                <View style={{ marginTop: 200 }}>
                    <ActivityIndicator size={60} color="#13A3E1" />
                </View>
                :
                <>
                    {noData ? <View style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                        <Image source={require('../assets/nodata.png')}
                            style={{
                                width: 260,
                                height: 260,
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                marginBottom: -20,
                                marginTop: 40
                            }} />
                        <Text style={{ textAlign: 'center', fontFamily: 'poppins_medium' }}>No Saved Found</Text>
                    </View> :
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
                                    <FlatList nestedScrollEnabled={true} scrollEnabled={true}
                                        style={{ marginHorizontal: 0, marginTop: 20 }} data={bookmarks}
                                        renderItem={({ item }) => (
                                            <Pressable onPress={() => { }} style={{
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
                                                <View style={{ flexDirection: 'row', flex: 1 }}>

                                                    <Text style={{
                                                        marginLeft: 'auto',
                                                        textAlign: 'right',
                                                        fontFamily: 'poppins_medium',
                                                        fontSize: 13
                                                    }}>{moment(item.created).fromNow()}</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <View style={{ flex: 0.8 }}>
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
                                                    <Image style={{
                                                        width: 20,
                                                        height: 20,
                                                        marginLeft: 'auto',
                                                        marginTop: 10
                                                    }}
                                                        source={require('../assets/bookmarkIcon.png')} />
                                                </View>
                                                <View style={{ flexDirection: 'row', flex: 1 }}>
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
                                                <View style={{ marginLeft:'auto',marginRight:'auto' }}>
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

                                                <View style={{ flexDirection: 'row', flex: 1, marginTop: 7, }}>
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


                                            </Pressable>
                                        )} />
                                </>
                            }
                        </>}
                </>}
        </GestureHandlerRootView>
    )
};

const SecondRoute = ({ navigation }) => {

    const dispatch = useDispatch();
    const applied = useSelector(state => state.applied.appliedJobs);
    const loading = useSelector(state => state.applied.isLoading)
    const error = useSelector(state => state.applied.error)
    const noData = useSelector(state => state.applied.nodata)
    const [ID, setID] = useState()

    useEffect(() => {
        if (ID) {
            dispatch(AllApplied(ID))
        }
    }, [dispatch, ID]);

    useEffect(() => {
        console.log(applied)
    }, [applied]);

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
        setID(id);
    }

    return (
        <GestureHandlerRootView>
            {loading ?
                <View style={{ marginTop: 200 }}>
                    <ActivityIndicator size={60} color="#13A3E1" />
                </View>
                :
                <>
                    {noData ? <View style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                        <Image source={require('../assets/nodata.png')}
                            style={{
                                width: 260,
                                height: 260,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginBottom: -20,
                            }} />
                        <Text style={{ textAlign: 'center', fontFamily: 'poppins_medium' }}>No Applied Found</Text>
                    </View> :
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
                                    <FlatList nestedScrollEnabled={true} scrollEnabled={true}
                                        style={{ marginHorizontal: 0, marginTop: 20 }} data={applied}
                                        renderItem={({ item }) => (
                                            <Pressable onPress={() => navigation.push('JobResponse', { response: item.response, ID: item.job })} style={{
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
                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <Text style={{
                                                        marginLeft: 'auto',
                                                        textAlign: 'right',
                                                        fontFamily: 'poppins_medium',
                                                        fontSize: 13
                                                    }}>{moment(item.created).fromNow()}</Text>
                                                </View>
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
                                                    <Text style={{
                                                        color: 'white',
                                                        backgroundColor: '#003c7a',
                                                        paddingVertical: 5,
                                                        paddingHorizontal: 20,
                                                        fontSize: 15,
                                                        fontFamily: 'poppins_medium',
                                                        borderRadius: 25,
                                                        textAlign: 'center',
                                                        alignItems: 'center'
                                                    }}>View Response</Text>
                                                </View>


                                            </Pressable>
                                        )} />
                                </>
                            }
                        </>}
                </>}
        </GestureHandlerRootView>
    )
};

export default function AppliedSaved({ route, navigation }) {
    const layout = useWindowDimensions();

    const { screen } = route.params

    const appliedClick = () => {

    }

    const renderScene = SceneMap({
        'Saved Job': () => <FirstRoute navigation={navigation} />,
        'Applied job': () => <SecondRoute navigation={navigation} />
    });

    const [index, setIndex] = React.useState(screen);
    const [routes] = React.useState([
        { key: 'Saved Job', title: 'Saved Job' },
        { key: 'Applied job', title: 'Applied job' },
    ]);

    return (
        <>
            <View style={{ flexDirection: 'column', height: 170, backgroundColor: '#EAEAEA', zIndex: 999 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => navigation.goBack()}><Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                    <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                        <Image
                            style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                            source={require('../assets/logo.png')} alt={'Okay'} />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 35,
                    marginVertical: 10
                }}>
                    <Pressable onPress={() => setIndex(0)}>
                        <Text style={index === 0 ? {
                            fontSize: 17,
                            fontFamily: 'poppins_bold',
                            borderBottomWidth: 3
                        } : { fontSize: 17, fontFamily: 'poppins_medium' }}>Saved jobs</Text>
                    </Pressable>

                    <Pressable onPress={() => setIndex(1)}>
                        <Text style={index === 1 ? {
                            fontSize: 17,
                            fontFamily: 'poppins_bold',
                            borderBottomWidth: 3
                        } : { fontSize: 17, fontFamily: 'poppins_medium' }}> Applied
                            Jobs</Text>
                    </Pressable>

                </View>
            </View>
            <TabView
                style={{ marginTop: -50, backgroundColor: '#EAEAEA' }}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </>
    );
}
