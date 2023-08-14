import {FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AllCategories} from "../API/actions/categoryActions";

function Home({navigation}) {

    const dispatch = useDispatch();
    const [login, isLogin] = useState(false);
    const categories = useSelector(state => state.category.categories)

    useEffect(() => {
        dispatch(AllCategories())
    }, [dispatch, navigation]);

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75}}>
                <View style={{flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1'}}>
                    <View style={{flexDirection: 'row', height: 130}}>
                        <Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/menu.png')} alt={'Okay'}/>
                        <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                        <Pressable onPress={() => navigation.push('Companies')}><Image style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                                   source={require('../assets/logo.png')} alt={'Okay'}/></Pressable>
                        </View>
                    </View>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '500', width: '100%', textAlign: 'center'}}>Good
                        Morning!</Text>
                    <TextInput style={{
                        backgroundColor: '#fff',
                        marginHorizontal: 30,
                        height: 50,
                        borderRadius: 25,
                        paddingHorizontal: 20,
                        marginTop: 10
                    }} placeholder={'Start your Job Search'}/>
                </View>
                {login ?
                    <Pressable aria-hidden={true} style={{
                        backgroundColor: '#F0A51E',
                        borderRadius: 25,
                        height: 100,
                        padding: 15,
                        marginTop: 15,
                        marginHorizontal: 25,
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}><Text style={{
                        color: '#000',
                        fontFamily: 'poppins_medium',
                        fontSize: 18,
                        width: 170,
                        textAlign: 'center'
                    }}>Recommended Jobs</Text>
                        <Image style={{
                            width: 70,
                            height: 70,
                            marginLeft: 'auto'
                        }} source={require('../assets/recommended_jobs_icon.png')} alt={'Okay'}/>
                    </Pressable>
                    : <Pressable onPress={() => navigation.push('Profile')} style={{
                        backgroundColor: '#13A3E1',
                        borderRadius: 25,
                        alignItems: 'center',
                        padding: 15,
                        marginTop: 15,
                        marginHorizontal: 25
                    }}><Text style={{color: '#fff', fontWeight: '800', fontSize: 15}}>Log In</Text></Pressable>
                }
                <SafeAreaView style={{flex: 1}}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                              style={{marginHorizontal: 30, marginTop: 10}} data={categories} renderItem={({item}) => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                margin: 7,
                                backgroundColor: '#fff',
                                height: 90,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20,
                                elevation: 5
                            }}>
                            <Image style={{
                                width: 25,
                                height: 25,
                                tintColor: '#000'
                            }} source={require('../assets/provider.png')} alt={'Okay'}/>
                            <Text style={{fontFamily: 'poppins_bold', fontSize: 12, marginTop: 10}}>{item.name}</Text>
                        </View>
                    )}
                              numColumns={2}/>
                </SafeAreaView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: 20,
                        borderRadius: 25,
                        alignItems: 'center',
                        paddingHorizontal: 30
                    }}>
                    <Text ellipsizeMode={'tail'} numberOfLines={1}
                          style={{width: '60%', fontFamily: 'poppins_bold', fontSize: 15}}>Recent Jobs</Text>
                    <Text numberOfLines={1} style={{
                        fontFamily: 'poppins_light',
                        fontSize: 12,
                        marginLeft: 'auto',
                        backgroundColor: '#d7d7d7',
                        paddingHorizontal: 10,
                        paddingVertical: 1,
                        borderRadius: 10
                    }}>Show All</Text>
                </View>
                <SafeAreaView style={{flex: 1}}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                              style={{marginHorizontal: 30, marginTop: 10}} data={categories} renderItem={({item}) => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                margin: 5,
                                backgroundColor: '#fff',
                                borderColor: '#c2c2c2',
                                borderWidth: 1,
                                height: 50,
                                borderRadius: 25,
                                elevation: 5,
                                alignItems: 'center',
                                paddingHorizontal: 20
                            }}>
                            <Text ellipsizeMode={'tail'} numberOfLines={1}
                                  style={{width: '60%', fontFamily: 'poppins_bold', fontSize: 12}}>{item.name}</Text>
                            <Text numberOfLines={1} style={{
                                fontFamily: 'poppins_light',
                                fontSize: 9,
                                marginLeft: 'auto',
                                width: 110
                            }}>{item.name}</Text>
                        </View>
                    )}
                    />
                </SafeAreaView>
                <View style={{height: 90}}/>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#13A3E1',
                height: 60,
                borderRadius: 30,
                marginHorizontal: 20,
                marginBottom: 15,
                alignItems: 'center',
                paddingHorizontal: 20
            }}>
                <View style={{
                    height: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff'
                    }} source={require('../assets/saveIcon.png')} alt={'Okay'}/>
                    <Text numberOfLines={1}
                          style={{fontFamily: 'poppins_medium', fontSize: 9, color: '#fff', marginTop: 2}}>Saved
                        Jobs</Text>
                </View>
                <View style={{
                    height: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff'
                    }} source={require('../assets/cvBuilderIcon.png')} alt={'Okay'}/>
                    <Text numberOfLines={1}
                          style={{fontFamily: 'poppins_medium', fontSize: 9, color: '#fff', marginTop: 2}}>CV
                        Builder</Text>
                </View>
                <View style={{
                    height: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff'
                    }} source={require('../assets/homeIcon.png')} alt={'Okay'}/>
                    <Text numberOfLines={1}
                          style={{fontFamily: 'poppins_medium', fontSize: 9, color: '#fff', marginTop: 2}}>Home</Text>
                    <View style={{height: 4, width: 35, borderRadius: 2, backgroundColor: '#F0A51E'}}/>
                </View>
                <View style={{
                    height: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff'
                    }} source={require('../assets/searchIcon.png')} alt={'Okay'}/>
                    <Text numberOfLines={1} style={{
                        fontFamily: 'poppins_medium',
                        fontSize: 9,
                        color: '#fff',
                        marginTop: 2
                    }}>Advance</Text>
                </View>
                <View style={{
                    height: '100%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        tintColor: '#fff'
                    }} source={require('../assets/profileIcon.png')} alt={'Okay'}/>
                    <Text numberOfLines={1} style={{
                        fontFamily: 'poppins_medium',
                        fontSize: 9,
                        color: '#fff',
                        marginTop: 2
                    }}>Profile</Text>
                </View>
                {/*<View style={{ height: '100%', flex: 1 }}>*/}

                {/*</View>*/}
                {/*<View style={{ height: '100%', flex: 1 }}>*/}

                {/*</View>*/}
                {/*<View style={{ height: '100%', flex: 1 }}>*/}

                {/*</View>*/}
                {/*<View style={{ height: '100%', flex: 1 }}>*/}

                {/*</View>*/}
            </View>
        </View>
    )
}

export default Home
