import moment from 'moment'
import React from 'react'
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'

const ApiDescription = ({ navigation }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', height: 90 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ padiingRight: 5 }}><Image style={{
                    width: 22,
                    height: 20,
                    marginTop: 70,
                    marginLeft: 30,
                    tintColor: '#000'
                }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                    <Pressable
                        onPress={() => navigation.push('ApiDescription')}
                    ><Image
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
                }}>title</Text>
            </View>
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
                        }}>company_name</Text>
                        <Text style={{
                            marginLeft: 'auto',
                            textAlign: 'right',
                            fontFamily: 'poppins_medium',
                            fontSize: 13,
                            marginRight: 25
                        }}>11-22-2023</Text>
                    </View>
                    <View style={{
                        marginTop: 19,
                        backgroundColor: '#00A224',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingTop: 5,
                        paddingBottom: 2,
                        paddingHorizontal: 20,
                        borderRadius: 20
                    }}>
                        <Text style={{ textAlign: 'center', color: "white", fontSize: 15, fontFamily: 'poppins_medium', }}>
                            Salary 
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={{
                                fontFamily: 'poppins_bold',
                                marginTop: 15,
                                fontSize: 17,
                                textAlign: "center",
                            }}>category_name</Text>
                            <Text style={{
                                fontFamily: 'poppins_medium',
                                marginTop: 0,
                                fontSize: 13,
                                textAlign: "center"
                            }}>city_name</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        marginTop: 20,
                        backgroundColor: 'white',
                        gap: 10,

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
                                <View style={{
                                    backgroundColor: '#13a3e1',
                                    paddingHorizontal: 6,
                                    paddingVertical: 8,
                                    borderRadius: 14
                                }}>
                                    <Text style={{ textAlign: "center", fontFamily: 'poppins_medium', fontSize: 14, color: 'white', }}>type</Text>
                                </View>
                                <Text style={{
                                    fontSize: 16,
                                    fontFamily: 'poppins_medium',
                                    textAlign: "center"
                                }}>workdays</Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_medium',
                                    textAlign: "center"
                                }}>worktime</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.6 }}>
                            <View style={{ flexDirection: 'column', paddingVertical: 25, }}>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 15,
                                    fontFamily: 'poppins_medium'
                                }}>experienc</Text>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontFamily: 'poppins_medium'
                                }}>qualification</Text>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 12,
                                    fontFamily: 'poppins_medium'
                                }}>skills</Text>

                            </View>
                        </View>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'poppins_medium',
                        marginLeft: 15,
                        marginTop: 60
                    }}>Description: </Text>
{/* 
                    <WebView source={{ html: job?.description }} style={{
                        height: webHeight,
                        marginHorizontal: 25,
                        fontFamily: 'poppins_medium',
                    }}
                        scalesPageToFit={false}
                        onMessage={e => onWebHeight(e)}
                        injectedJavaScript='window.ReactNativeWebView.postMessage(document.body.scrollHeight)'
                    /> */}

                </View>

            </SafeAreaView>

        </View>
    )
}

export default ApiDescription
