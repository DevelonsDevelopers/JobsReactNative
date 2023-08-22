import {Button, FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
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

    const [educationVisible, setEducationVisible] = useState(false)
    const [careerVisible, setCareerVisible] = useState(false)
    const [courseVisible, setCourseVisible] = useState(false)
    const [skillVisible, setSkillVisible] = useState(false)
    const [interestVisible , setInterestVisible] = useState(false)
    const [languageVisible, setLanguageVisible] = useState(false)
    const [resumeVisible, setResumeVisible] = useState(false)

    const toggleEducationVisibility = () => setEducationVisible(!educationVisible);
    const toggleCareerVisibility = () => setCareerVisible(!careerVisible);
    const toggleCourseVisibility = () => setCourseVisible(!courseVisible);
    const toggleSkillVisibility = () => setSkillVisible(!skillVisible)
    const toggleInterestVisibility = () => setInterestVisible(!interestVisible)
    const toggleLanguageVisibility = () => setLanguageVisible(!languageVisible)
    const toggleResumeVisibility = () => setResumeVisible(!resumeVisible)

    return (
        <View style={{flex: 1}}>
            <Modal visible={educationVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleEducationVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Education</Text>
                        <TextInput placeholder={'Degree'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'University'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Time Period'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={careerVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleCareerVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Career</Text>
                        <TextInput placeholder={'Company'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Job'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Time Period'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Address'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Phone'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={courseVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleCourseVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Courses</Text>
                        <TextInput placeholder={'Course'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Institute'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <TextInput placeholder={'Time Period'} style={{ width: '80%', marginTop: 8, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={skillVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleSkillVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Skills</Text>
                        <TextInput placeholder={'Skill No 1'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={interestVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleInterestVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Interests</Text>
                        <TextInput placeholder={'Interest No 1'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={languageVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleLanguageVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Languages</Text>
                        <TextInput placeholder={'Language No 1'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={resumeVisible} animationType={"fade"} transparent={true}>
                <View onTouchStart={() => toggleResumeVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin:35, elevation:24, borderRadius:25, backgroundColor:'#fff', opacity:1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Resumes</Text>
                        <TextInput placeholder={'Resume No 1'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
                        <Pressable style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
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
                        <Pressable onPress={() => toggleEducationVisibility()} style={{
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
                        <Pressable onPress={() => toggleCareerVisibility()} style={{
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
                        {career.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Career Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={career}
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
                        <Pressable onPress={() => toggleCourseVisibility()} style={{
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
                        {course.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Course Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={course}
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
                        <Pressable onPress={() => toggleSkillVisibility()} style={{
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
                        {skill.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Skills Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={skill}
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
                        <Pressable onPress={() => toggleInterestVisibility()} style={{
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
                        {interest.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Interest Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={interest}
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
                        <Pressable onPress={() => toggleLanguageVisibility()} style={{
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
                        {language.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Language Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={language}
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
                        <Pressable onPress={() => toggleResumeVisibility()} style={{
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
                        {resume.length === 0 ?
                            <Text style={{fontFamily: 'poppins_light', color: '#a6a6a6'}}>No Resume Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                      style={{marginVertical: 15, width: '100%', paddingHorizontal: 15}}
                                      data={resume}
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
