import { Image, Text, ScrollView, } from 'react-native'
import React from 'react'
import { View } from 'react-native'

function Resume({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
            <View style={{ backgroundColor: '#EAEAEA' }}>
                <View style={{ flexDirection: 'row', height: 90 }}>
                    <Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={'Okay'} />
                    <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                        <Image
                            style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                            source={require('../assets/logo.png')} alt={'Okay'} />
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'poppins_bold',
                        width: '100%',
                        paddingHorizontal: 0,
                        textAlign: 'center',
                        marginVertical: 20,
                        padding: 0,
                        marginBottom: 0
                    }}>Resume</Text>
                </View>
                <View style={{
                    padding: 15,
                    marginTop: 0
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        padding: 13,
                    }}>
                        <Text style={{
                            fontSize: 19,
                            fontWeight: 800,
                            fontFamily: 'poppins_medium'
                        }}>Jack Donaldson
                        </Text>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 400,
                            fontFamily: 'poppins_light',
                            paddingTop: 0,
                            marginTop: 0
                        }}>App Developer
                        </Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingTop: 3.5,
                            paddingBottom: 0,
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontWeight: 400
                            }}
                            >Phone : 656-923-0000
                            </Text>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'poppins_regular',
                                marginLeft: 43,
                                marginTop: 0,
                                marginBottom: 0,
                                padding: 0
                            }}
                            >Email : jackdon368@gmail.com
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 0,
                            padding: 0
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'poppins_regular',
                            }}
                            >Address : 15th Street NewYork, US
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 4,
                            padding: 0
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'poppins_regular',
                                marginTop: 1,
                                padding: 0
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus ea quod esse eius illum!
                            </Text>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'poppins_semibold',
                                marginTop: 2
                            }}>
                                Experience
                            </Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    2016-06 - present
                                </Text>
                                <Text style={{
                                    marginLeft: 25,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    Full Stack App Developer
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                paddingTop: 0,
                                paddingBottom: 0,
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: 400
                                }}
                                >Company : Octagon Digital
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 43,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    padding: 0
                                }}
                                >Address : Los Angeles
                                </Text>
                            </View>
                            
                            <View style={{
                                marginTop: 0,
                                padding: 0
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    2014-08 - 2016-06
                                </Text>
                                <Text style={{
                                    marginLeft: 25,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    BackEnd App Developer
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                paddingTop: 0,
                                paddingBottom: 0,
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontWeight: 400
                                }}
                                >Company : Octagon Digital
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 43,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    padding: 0
                                }}
                                >Address : NewYork
                                </Text>
                            </View>
                            <View style={{
                                marginTop: 0,
                                padding: 0
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>


                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Resume