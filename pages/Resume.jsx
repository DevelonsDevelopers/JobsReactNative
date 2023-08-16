import { Image, Text, ScrollView, FlatList, Pressable } from 'react-native'
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
                    <Pressable onPress={() => navigation.push('OfferAccepted')}><Image
              style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
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
                            fontFamily: 'poppins_medium',
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
                            paddingTop: 6,
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
                            >Address : 15th Street NewYork, United States
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 4,
                            padding: 0
                        }}>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'poppins_regular',
                                marginTop: 3,
                                padding: 0
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus ea quod esse eius illum!
                            </Text>
                        </View>
                        <View style={{
                            width: 335,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            height: 2.5,
                            elevation: 2,
                            backgroundColor: '#BDBDBD',
                            borderColor: 'black'
                        }}>
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
                                    marginTop: 3
                                }}>
                                    2016-06 - present
                                </Text>
                                <Text style={{
                                    marginLeft: 55,
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
                                    marginLeft: 61,
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
                                flexDirection: 'row',
                                marginTop: 7
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    2014-08 - 2016-06
                                </Text>
                                <Text style={{
                                    marginLeft: 53,
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
                                >Company : Shopify
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 103,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    padding: 0
                                }}
                                >Address : Ottawa, Ontario
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
                                >Phone : 656-923-2222
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 7
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    2012-02 - 2014-08
                                </Text>
                                <Text style={{
                                    marginLeft: 55.7,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    FrontEnd App Developer
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
                                >Company : YouTube
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 97,
                                    marginTop: 0,
                                    marginBottom: 0,
                                    padding: 0
                                }}
                                >Address : Florida, US
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
                                >Phone : 656-923-4444
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            width: 335,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            height: 2.5,
                            elevation: 2,
                            backgroundColor: '#BDBDBD',
                            borderColor: 'black'
                        }}>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'poppins_semibold',
                                marginTop: 2
                            }}>
                                Education
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
                                    2010 - 2012
                                </Text>
                                <Text style={{
                                    marginLeft: 105,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    Software Engineering
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
                                    fontFamily: 'poppins_regular',
                                    margin: 0,
                                    padding: 0
                                }}
                                >University of Harward
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 77
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 7
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    2008 - 2010
                                </Text>
                                <Text style={{
                                    marginLeft: 101,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    FSC-Pre Engineering
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
                                    fontFamily: 'poppins_regular',
                                    margin: 0,
                                    padding: 0
                                }}
                                >College of Mango
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 97.7
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 7
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    2006 - 2008
                                </Text>
                                <Text style={{
                                    marginLeft: 97,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    Metric
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
                                    fontFamily: 'poppins_regular',
                                    margin: 0,
                                    padding: 0
                                }}
                                >School of Harward
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 95
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            width: 335,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            height: 2.5,
                            elevation: 2,
                            backgroundColor: '#BDBDBD',
                            borderColor: 'black'
                        }}>
                        </View>



                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'poppins_semibold',
                                marginTop: 2
                            }}>
                                Courses
                            </Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginTop: 3
                                }}>
                                    6 Months - 2012
                                </Text>
                                <Text style={{
                                    marginLeft: 77,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    Software Developing
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
                                    fontFamily: 'poppins_regular',
                                    margin: 0,
                                    padding: 0
                                }}
                                >University of Harward
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 77
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 7
                            }}>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    paddingTop: 2.5
                                }}>
                                    1 Year - 2013
                                </Text>
                                <Text style={{
                                    marginLeft: 98,
                                    fontSize: 13,
                                    fontFamily: 'poppins_semibold',
                                }}>
                                    Android Developing
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
                                    fontFamily: 'poppins_regular',
                                    margin: 0,
                                    padding: 0
                                }}
                                >University of Harward
                                </Text>
                                <Text style={{
                                    fontSize: 11,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 77
                                }}
                                >Phone : 656-923-0000
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            width: 335,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            height: 2.5,
                            elevation: 2,
                            backgroundColor: '#BDBDBD',
                            borderColor: 'black'
                        }}>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'poppins_semibold',
                                marginTop: 2
                            }}>
                                Skils
                            </Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}>Java Script
                                </Text>
                                <Text style={{
                                    marginLeft: 173,
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}
                                >React Native
                                </Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 7
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}
                                >HTML
                                </Text>
                                <Text style={{
                                    marginLeft: 219,
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}
                                >CSS
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            width: 335,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            height: 2.5,
                            elevation: 2,
                            backgroundColor: '#BDBDBD',
                            borderColor: 'black'
                        }}>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'poppins_semibold',
                                marginTop: 2
                            }}>Languages
                            </Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}>French
                                </Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 105,
                                    marginRight: 68
                                }}
                                >English
                                </Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}
                                >Japanese
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            width: 335,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            height: 2.5,
                            elevation: 2,
                            backgroundColor: '#BDBDBD',
                            borderColor: 'black'
                        }}>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'poppins_semibold',
                                marginTop: 2
                            }}>Interests
                            </Text>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}>Exercise
                                </Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular',
                                    marginLeft: 96,
                                    marginRight: 74
                                }}
                                >Sports
                                </Text>
                                <Text style={{
                                    fontSize: 13,
                                    fontFamily: 'poppins_regular'
                                }}
                                >Shows
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