import { Button, FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import EducationModal from "../Components/EducationModal";
import CareerVisible from "../Components/CareerVisible";
import CourseVisible from "../Components/CourseVisible";
import SkillModal from "../Components/SkillModal";
import InterestModal from "../Components/InterestModal";
import LanguageModal from "../Components/LanguageModal";
import ResumeModal from "../Components/ResumeModal";

function AccountInfo({ navigation }) {

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
    const [interestVisible, setInterestVisible] = useState(false)
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
        <View style={{ flex: 1 }}>

           <EducationModal  visible={educationVisible} toggleEducationVisibility={toggleEducationVisibility}   />
<CareerVisible visible={careerVisible} toggleCareerVisibility={toggleCareerVisibility} />
         <CourseVisible  visible={courseVisible} toggleCourseVisibility={toggleCourseVisibility}  />

<SkillModal visible={skillVisible} toggleSkillVisibility={toggleSkillVisibility} />

    <InterestModal visible={interestVisible} toggleInterestVisibility={toggleInterestVisibility} />

          <LanguageModal visible={languageVisible} toggleLanguageVisibility={toggleLanguageVisibility} />

          <ResumeModal visible={resumeVisible} toggleResumeVisibility={toggleResumeVisibility} />
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
                <View style={{ flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1' }}>
                    <View style={{ flexDirection: 'row', height: 130 }}>
                        <Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'}/>
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
                    }}><Text style={{ color: '#000', fontWeight: '800', fontSize: 15 }}>Build CV</Text></Pressable>
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Education</Text>
                        <Pressable onPress={() => toggleEducationVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {education.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Education Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={education}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Career</Text>
                        <Pressable onPress={() => toggleCareerVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {career.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Career Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={career}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Courses</Text>
                        <Pressable onPress={() => toggleCourseVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {course.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Course Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={course}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Skills</Text>
                        <Pressable onPress={() => toggleSkillVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {skill.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Skills Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={skill}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Interests</Text>
                        <Pressable onPress={() => toggleInterestVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {interest.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Interest Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={interest}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Languages</Text>
                        <Pressable onPress={() => toggleLanguageVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {language.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Language Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={language}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'poppins_bold', fontSize: 16 }}>Resumes</Text>
                        <Pressable onPress={() => toggleResumeVisibility()} style={{
                            backgroundColor: '#e7e7e7',
                            borderRadius: 25,
                            alignItems: 'center',
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            marginLeft: 'auto'
                        }}><Text
                            style={{ color: '#000', fontFamily: 'poppins_medium', fontSize: 12 }}>Add</Text></Pressable>
                    </View>
                    <SafeAreaView style={{ flex: 1, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                        {resume.length === 0 ?
                            <Text style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No Resume Added</Text>
                            :
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginVertical: 15, width: '100%', paddingHorizontal: 15 }}
                                data={resume}
                                renderItem={({ item }) => (
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
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                            source={require('../assets/editIcon.png')} />
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
