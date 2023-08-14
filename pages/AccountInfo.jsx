import {FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import React, {useState} from "react";

function AccountInfo({navigation}) {

    const [login, isLogin] = useState(false);
    const [education, setEducation] = useState([]);
    const [career, setCareer] = useState([]);
    const [course, setCourse] = useState([]);
    const [skill, setSkill] = useState([]);
    const [language, setLanguage] = useState([]);
    const [interest, setInterest] = useState([]);
    const [resume, setResume] = useState([]);

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(!visible);

    return (
        <View style={{flex: 1}}>
            <Modal visible={visible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ width:'100%', maxWidth:300, margin:48, elevation:24, borderRadius:2, backgroundColor:'#fff', opacity:1 }}>
                        <Text>Good</Text>
                    </View>
                </View>
            </Modal>
            <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
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
                            <Image style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                                   source={require('../assets/logo.png')} alt={'Okay'}/>
                        </View>
                    </View>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontFamily: 'poppins_regular',
                        width: '100%',
                        textAlign: 'center'
                    }}>Account Info</Text>
                    <Pressable onPress={() => navigation.push('Profile')} style={{
                        backgroundColor: '#fff',
                        borderRadius: 25,
                        alignItems: 'center',
                        padding: 15,
                        marginTop: 15,
                        marginHorizontal: 100
                    }}><Text style={{color: '#000', fontWeight: '800', fontSize: 15}}>Build CV</Text></Pressable>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Education</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Career</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Courses</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Skills</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Interests</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Languages</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    padding: 20,
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20,
                    marginBottom: 40
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontFamily: 'poppins_bold', fontSize: 16}}>Resumes</Text>
                        <Pressable onPress={() => toggleVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{color: '#000', fontFamily: 'poppins_medium', fontSize: 12}}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{flex: 1, height: 90, justifyContent: 'center', alignItems: 'center'}}>
                        {education.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={education}
                                      renderItem={({item}) => (
                                          <View
                                              style={{
                                                  flex: 1,
                                                  flexDirection: 'row',
                                                  margin: 7,
                                                  backgroundColor: '#fff',
                                                  alignItems: 'center',
                                                  borderRadius: 10,
                                                  borderColor: '#939393',
                                                  borderWidth: 0.5,
                                                  padding: 10
                                              }}>
                                              <Text style={{
                                                  fontFamily: 'poppins_light',
                                                  fontSize: 14,
                                              }}>{item.name}</Text>
                                              <Image style={{width: 15, height: 15, marginLeft: 'auto'}}
                                                     source={require('../assets/editIcon.png')}/>
                                          </View>
                                      )}
                            />
                        }
                    </SafeAreaView>
                </View>
            </ScrollView>
        </View>
    )
}

export default AccountInfo
