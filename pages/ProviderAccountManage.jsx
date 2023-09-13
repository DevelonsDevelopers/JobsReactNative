import React from 'react'
import {
    ActivityIndicator,
    BackHandler,
    FlatList,
    Image,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
const ProviderAccountManage = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>


            {/* <Modal visible={loadingVisible} animationType={"fade"} transparent={true}>
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(66, 66, 66, 0.4)'
        }}>
            <View style={{
                margin: 35,
                elevation: 24,
                borderRadius: 25,
                backgroundColor: '#fff',
                opacity: 1,
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 100
            }}>
                <Text style={{paddingBottom: 16, fontSize: 14, fontFamily: 'poppins_medium'}}>Please Wait
                    ...</Text>
                <ActivityIndicator size={60} color="#13A3E1"/>
            </View>
        </View>
    </Modal> */}

            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', }}>
                <View style={{ flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1' }}>
                    <View style={{ flexDirection: 'row', height: 130 }}>
                        <Pressable onPress={() => navigation.goBack()} style={{ padiingRight: 5 }}><Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Image style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                source={require('../assets/logo.png')} alt={'Okay'} />
                        </View>
                    </View>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        fontFamily: 'poppins_bold',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: 10
                    }}>Company Details</Text>

                    <Text style={{
                        color: '#fff',
                        fontSize: 12,
                        fontFamily: 'poppins_semibold',
                        width: '60%',
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginTop: 5,
                        backgroundColor: '#ff0000',
                        borderRadius: 10,
                        paddingTop: 1
                    }}>Complete Your Profile</Text>

                </View>

                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderTopLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Name</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderTopRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Email</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput 
                               
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderBottomLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Address</Text>
                        </View>
                        <Pressable 
                            style={{
                                flex: 1.3,
                                borderBottomRightRadius: 30,
                                borderColor: '#b2b2b2',
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 5
                            }}>
                            <View>
                                <TextInput

                                    placeholder={'Missing!!!'} style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}></TextInput>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderTopLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Type</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderTopRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput editable={false} placeholder={'Missing!!!'} style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_medium',
                                width: '100%',
                                textAlign: 'left'
                            }}></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Phone</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                   
                                    placeholder={'Missing!!!'} style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        textAlign: 'left'
                                    }}></TextInput>
                             
                                    <Image style={{ width: 14, height: 14, marginLeft: 'auto' }}
                                        source={require('../assets/verified.png')} />
{/*                                   
                                    <Image style={{ width: 14, height: 14, marginLeft: 'auto' }}
                                        source={require('../assets/unverified.png')} /> */}
                                
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderBottomLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Size</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderBottomRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput 
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}></TextInput>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderTopLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>City</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderTopRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Pressable ><TextInput editable={false}
                               
                                placeholder={'Missing!!!'}
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}></TextInput></Pressable>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>HeadQuater Address</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput 
                               
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}></TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderBottomLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Country</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderBottomRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Pressable ><TextInput editable={false}
                               
                                placeholder={'Missing!!!'}
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}></TextInput></Pressable>
                        </View>
                    </View>
                </View>

                <Pressable style={{
                    backgroundColor: '#13A3E1',
                    borderRadius: 25,
                    alignItems: 'center',
                    padding: 15,
                    marginTop: 15,
                    marginHorizontal: 25
                }}>
                    <Text style={{ color: '#fff', fontWeight: '800', fontSize: 15 }}
                    >Update
                    </Text>
                </Pressable>

            

               


                <Pressable onPress={() => navigation.push('Verify', { verifyPhone: seeker?.phone })}
                    style={{
                        borderColor: '#000',
                        backgroundColor: '#000',
                        borderWidth: 1,
                        borderRadius: 25,
                        alignItems: 'center',
                        padding: 15,
                        marginTop: 15,
                        marginHorizontal: 25
                    }}><Text style={{ color: '#fff', fontWeight: '800', fontSize: 15 }}>Verify
                        Phone</Text></Pressable>


            </ScrollView>
        </View>
    )
}

export default ProviderAccountManage
