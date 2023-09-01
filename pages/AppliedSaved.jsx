import * as React from 'react';
import {Image, Pressable, Text, View, useWindowDimensions} from 'react-native';
import {FlatList, GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AllBookmarks} from "../API/actions/bookmarkActions";
import moment from "moment";
import {AllApplied} from "../API/actions/appliedActions";

const data1 = [
    {"name": "Facebook"},
    {"name": "Google"},
    {"name": "Netflix"},
    {"name": "Youtube"}
]
const data = [
    {"name": "Facebook"},
    {"name": "Google"},
    {"name": "Netflix"},
    {"name": "Youtube"}
]

const FirstRoute = () => {

    const dispatch = useDispatch();
    const bookmarks = useSelector(state => state.bookmark.bookmarks);
    const loading = useSelector(state => state.bookmark.isLoading)
    const error = useSelector(state => state.bookmark.error)
    const data = useSelector(state => state.bookmark.nodata)
    const [ID, setID] = useState()

    useEffect(() => {
        if (ID) {
                dispatch(AllBookmarks(ID))
        }
    }, [dispatch, ID]);

    useEffect(() => {
        console.log(bookmarks)
    }, [bookmarks]);

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
        setID(id);
    }

    return (
        <GestureHandlerRootView>
            <FlatList nestedScrollEnabled={true} scrollEnabled={true}
                      style={{marginHorizontal: 0, marginTop: 20}} data={bookmarks} renderItem={({item}) => (
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
                    <View style={{flexDirection: 'row', flex: 1}}>

                        <Text style={{
                            marginLeft: 'auto',
                            textAlign: 'right',
                            fontFamily: 'poppins_medium',
                            fontSize: 13
                        }}>{moment(item.created).fromNow()}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 0.8}}>
                            <Text numberOfLines={1} style={{fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15}}>{item.title}</Text>
                            <Text style={{fontFamily: 'poppins_regular', marginTop: 0, fontSize: 12}}>{item.company_name}</Text>
                        </View>
                        <Image style={{width: 20, height: 20, marginLeft: 'auto', marginTop: 10}}
                               source={require('../assets/bookmarkIcon.png')}/>
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


                </View>
            )}/>
        </GestureHandlerRootView>
    )
};

const SecondRoute = () => {

    const dispatch = useDispatch();
    const applied = useSelector(state => state.applied.appliedJobs);
    const loading = useSelector(state => state.applied.isLoading)
    const error = useSelector(state => state.applied.error)
    const data = useSelector(state => state.applied.nodata)
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
        <FlatList nestedScrollEnabled={true} scrollEnabled={true}
                  style={{marginHorizontal: 0, marginTop: 20}} data={applied} renderItem={({item}) => (
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
                <View style={{flexDirection: 'row', flex: 1}}>
                    <Text style={{
                        marginLeft: 'auto',
                        textAlign: 'right',
                        fontFamily: 'poppins_medium',
                        fontSize: 13
                    }}>{moment(item.created).fromNow()}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: 'poppins_regular', width: '100%', marginTop: 0, fontSize: 12, textAlign: 'center'}}>{item.company_name}</Text>
                        <Text numberOfLines={1} style={{fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15}}>{item.title}</Text>
                    </View>
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

                <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1, marginTop: 15,}}>
                    <Text style={{
                        color: 'white',
                        backgroundColor: '#003c7a',
                        width: '60%',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        fontSize: 15,
                        fontFamily: 'poppins_medium',
                        borderRadius: 25,
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>View Response</Text>
                </View>


            </View>
        )}/>
    </GestureHandlerRootView>
)};

const renderScene = SceneMap({
    'Saved Job': FirstRoute,
    'Applied job': SecondRoute,
});

export default function AppliedSaved({navigation}) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'Saved Job', title: 'Saved Job'},
        {key: 'Applied job', title: 'Applied job'},
    ]);

    return (
        <>
            <View style={{flexDirection: 'column', height: 170, backgroundColor: '#EAEAEA', zIndex: 999}}>
                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={() => navigation.goBack()}><Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={'Okay'}/></Pressable>
                    <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                        <Image
                            style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                            source={require('../assets/logo.png')} alt={'Okay'}/>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 35,
                    marginVertical: 10
                }}>
                    <Pressable onPress={() => setIndex(0)}>
                        <Text style={index === 0 ? {fontSize: 17, fontFamily: 'poppins_bold', borderBottomWidth: 3} : {fontSize: 17, fontFamily: 'poppins_medium'}}>Saved jobs</Text>
                    </Pressable>

                    <Pressable onPress={() => setIndex(1)}>
                        <Text style={index === 1 ? {fontSize: 17, fontFamily: 'poppins_bold', borderBottomWidth: 3} : {fontSize: 17, fontFamily: 'poppins_medium'}}> Applied
                            Jobs</Text>
                    </Pressable>

                </View>
            </View>
            <TabView
                style={{marginTop: -50, backgroundColor: '#EAEAEA'}}
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
            />
        </>
    );
}