import {
	ActivityIndicator,
	Button,
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
import React, { useEffect, useState } from "react";
import EducationModal from "../Components/EducationModal";
import SkillModal from "../Components/SkillModal";
import InterestModal from "../Components/InterestModal";
import LanguageModal from "../Components/LanguageModal";
import ResumeModal from "../Components/ResumeModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
	CVByUser,
	CVCareer,
	CVCourse,
	CVEducation,
	CVInterest,
	CVLanguage,
	CVResume,
	CVSkill
} from "../API/actions/cvActions";
import CareerModal from "../Components/CareerModal";
import CourseModal from "../Components/CourseModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
	cvStatement,
	roleUpdate,
	updateCVCareer,
	updateCVCourse,
	updateCVEducation,
	updateCVInterest,
	updateCVLanguage, updateCVResume, updateCVSkill
} from "../API";
import PersonalStatementModal from "../Components/PersonalStatementModal";
import RoleModal from "../Components/RoleModal";

function AccountInfo({ route, navigation }) {

	const { role } = route.params

	const dispatch = useDispatch()

	const [roleData, setRoleData] = useState(role)

	const [educationVisible, setEducationVisible] = useState(false)
	const [careerVisible, setCareerVisible] = useState(false)
	const [courseVisible, setCourseVisible] = useState(false)
	const [skillVisible, setSkillVisible] = useState(false)
	const [interestVisible, setInterestVisible] = useState(false)
	const [languageVisible, setLanguageVisible] = useState(false)
	const [resumeVisible, setResumeVisible] = useState(false)

	const [edData, setEdData] = useState(null)
	const [carData, setCarData] = useState(null)
	const [couData, setCouData] = useState(null)
	const [inData, setInData] = useState(null)
	const [lanData, setLanData] = useState(null)
	const [resData, setResData] = useState(null)
	const [skData, setSkData] = useState(null)

	const [trigger, setTrigger] = useState(false)

	const [isloading, setIsLoading] = useState(true)

	const [ID, setID] = useState()
	const cv = useSelector(state => state.cv.cv);

	const data = useSelector(state => state.cv.nodata);
	const error = useSelector(state => state.cv.error);
	const success = useSelector(state => state.cv.success);

	useEffect(() => {
		GetData()
	}, []);
	const GetData = async () => {
		const value = await AsyncStorage.getItem('ID')
		setID(value);
	}

	useEffect(() => {
		if (ID) {
			dispatch(CVByUser(ID))
			setIsLoading(true)
		}
	}, [ID, trigger])

	useEffect(() => {
		console.log(cv)
	}, [cv]);

	const editEducation = (d) => {
		// setEdEdit(true)
		setEdData(d)
		toggleEducationVisibility()
	}

	const editCareer = (d) => {
		setCarData(d)
		toggleCareerVisibility()
	}

	const editCourse = (d) => {
		setCouData(d)
		toggleCourseVisibility()
	}

	const editInterest = (d) => {
		setInData(d)
		toggleInterestVisibility()
	}

	const editLanguage = (d) => {
		setLanData(d)
		toggleLanguageVisibility()
	}

	const editResume = (d) => {
		setResData(d)
		toggleResumeVisibility()
	}

	const editSkill = (d) => {
		setSkData(d)
		toggleSkillVisibility()
	}

	const addRole = async (role) => {
		console.log(role)
		await roleUpdate(role, ID).then(res => {
			setRoleData(role)
		}).catch(err => {
			console.log(err)
		})
	}

	const addPersonalInfo = async (statement) => {
		await cvStatement(cv.id, statement).then(res => {
			setTrigger(!trigger)
		})
	}

	const addEducation = (qualification, timeperiod, institute) => {
		dispatch(CVEducation(cv.id, qualification, timeperiod, institute))
		setTrigger(!trigger)
	}

	const updateEducation = async (qualification, timeperiod, institute, id) => {
		await updateCVEducation(cv.id, qualification, timeperiod, institute, id).then(res => {
			setTrigger(!trigger)
			setEdData(null)
		})
	}

	const addCareer = (company, job, timeperiod, address, phone) => {
		dispatch(CVCareer(cv.id, company, job, timeperiod, address, phone))
		setTrigger(!trigger)
	}

	const updateCareer = async (company, job, timeperiod, address, phone, id) => {
		await updateCVCareer(cv.id, company, job, timeperiod, address, phone, id).then(res => {
			setTrigger(!trigger)
			setCarData(null)
		})
	}

	const addCourse = (course, timeperiod, institute) => {
		dispatch(CVCourse(cv.id, course, timeperiod, institute))
		setTrigger(!trigger)
	}

	const updateCourse = async (course, timeperiod, institute, id) => {
		await updateCVCourse(cv.id, course, timeperiod, institute, id).then(res => {
			setTrigger(!trigger)
			setCouData(null)
		})
	}

	const addInterest = (interest) => {
		dispatch(CVInterest(cv.id, interest))
		setTrigger(!trigger)
	}

	const updateInterest = async (interest, id) => {
		await updateCVInterest(cv.id, interest, id).then(res => {
			setTrigger(!trigger)
			setInData(null)
		})
	}

	const addLanguage = (language) => {
		dispatch(CVLanguage(cv.id, language))
		setTrigger(!trigger)
	}

	const updateLanguage = async (language, id) => {
		await updateCVLanguage(cv.id, language, id).then(res => {
			setTrigger(!trigger)
			setLanData(null)
		})
	}

	const addResume = (resume) => {
		dispatch(CVResume(cv.id, resume))
		setTrigger(!trigger)
	}

	const updateResume = async (resume, id) => {
		updateCVResume(cv.id, resume, id).then(res => {
			setTrigger(!trigger)
			setResData(null)
		})
	}

	const addSkill = (skill) => {
		dispatch(CVSkill(cv.id, skill))
		setTrigger(!trigger)
	}

	const updateSkill = (skill, id) => {
		updateCVSkill(cv.id, skill, id).then(res => {
			setTrigger(!trigger)
			setSkData(null)
		})
	}

	const toggleEducationVisibility = () => setEducationVisible(!educationVisible);
	const toggleCareerVisibility = () => setCareerVisible(!careerVisible);
	const toggleCourseVisibility = () => setCourseVisible(!courseVisible);
	const toggleSkillVisibility = () => setSkillVisible(!skillVisible)
	const toggleInterestVisibility = () => setInterestVisible(!interestVisible)
	const toggleLanguageVisibility = () => setLanguageVisible(!languageVisible)
	const toggleResumeVisibility = () => setResumeVisible(!resumeVisible)


	useEffect(() => {
		console.log("SUCCESSISHERE")
		console.log(success)
		if (success) {
			setIsLoading(false)
		}
	}, [success])

	// personalInfo Modal==============
	const [infoVisible, setInfoVisible] = useState(false)
	const toggleInfoVisibility = () => setInfoVisible(!infoVisible)


	// Role Modal ===========

	const [roleVisible, setRoleVisible] = useState(false)
	const toggleRoleVisibility = () => setRoleVisible(!roleVisible)
	return (
		<View style={{ flex: 1 }}>
			{isloading ?
				<View style={{ marginTop: 400 }}>
					<ActivityIndicator size={60} color="#13A3E1" />
				</View>
				:
				<>
					{data ? <View style={{ marginTop: 200 }}>
						<Image source={require('../assets/nodata.png')}
							style={{ width: 260, height: 260, marginLeft: 80, marginBottom: -20, marginTop: 40 }} />
						<Text style={{ textAlign: 'center', fontFamily: 'poppins_medium' }}>No Data Found</Text>
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


									<EducationModal visible={educationVisible}
										toggleEducationVisibility={toggleEducationVisibility}
										add={addEducation} edit={updateEducation} data={edData}/>
									<CareerModal visible={careerVisible} toggleCareerVisibility={toggleCareerVisibility}
										add={addCareer} edit={updateCareer} data={carData}/>
									<CourseModal visible={courseVisible} toggleCourseVisibility={toggleCourseVisibility}
										add={addCourse} edit={updateCourse} data={couData}/>
									<SkillModal visible={skillVisible} toggleSkillVisibility={toggleSkillVisibility}
										add={addSkill} edit={updateSkill} data={skData}/>
									<InterestModal visible={interestVisible}
										toggleInterestVisibility={toggleInterestVisibility}
										add={addInterest} edit={updateInterest} data={inData}/>
									<LanguageModal visible={languageVisible}
										toggleLanguageVisibility={toggleLanguageVisibility}
										add={addLanguage} edit={updateLanguage} data={lanData}/>
									<ResumeModal visible={resumeVisible} toggleResumeVisibility={toggleResumeVisibility}
										add={addResume} edit={updateResume} data={resData}/>
									<PersonalStatementModal visible={infoVisible}
										toggleInfoVisibility={toggleInfoVisibility}
										add={addPersonalInfo} />
									<RoleModal visible={roleVisible}
										toggleRoleVisibility={toggleRoleVisibility} add={addRole}
									/>

									<ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
										<View style={{
											flexDirection: 'column',
											width: '100%',
											height: 240,
											backgroundColor: '#13A3E1'
										}}>
											<View style={{ flexDirection: 'row', height: 130 }}>
												<Pressable onPress={() => navigation.goBack()}
													style={{ paddingRight: 5 }}><Image style={{
														width: 22,
														height: 20,
														marginTop: 70,
														marginLeft: 30,
														marginBottom: 250,
														tintColor: '#fff'
													}} source={require('../assets/back_arrow.png')}
														alt={'Okay'} /></Pressable>
												<View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
													<Image style={{
														width: 150,
														height: 40,
														marginTop: 60,
														alignSelf: 'center'
													}}
														source={require('../assets/logo.png')} alt={'Okay'} />
												</View>
											</View>
											<Text style={{
												color: '#fff',
												fontSize: 18,
												fontFamily: 'poppins_regular',
												width: '100%',
												textAlign: 'center'
											}}>Account Info</Text>
											<Pressable onPress={() => navigation.push('Resume')} style={{
												backgroundColor: '#fff',
												borderRadius: 25,
												alignItems: 'center',
												padding: 15,
												marginTop: 15,
												marginHorizontal: 100
											}}><Text style={{ color: '#000', fontWeight: '800', fontSize: 15 }}>Build
												CV</Text></Pressable>
										</View>
										{isloading ?
											<View style={{ marginTop: 200 }}>
												<ActivityIndicator size={60} color="#13A3E1" />
											</View>
											:
											<>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Role</Text>
														<Pressable onPress={() => toggleRoleVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}>
															<View><Text
																style={{
																	color: '#000',
																	fontFamily: 'poppins_medium',
																	fontSize: 12
																}}>Update</Text>
															</View></Pressable>
													</View>
													<Text style={{ flex: 1, textAlign: 'center', color: '#757575', fontFamily: 'poppins_light', margin: 15 }}>{roleData}</Text>

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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Personal Info</Text>
														<Pressable onPress={() => toggleInfoVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}>
															<View><Text
																style={{
																	color: '#000',
																	fontFamily: 'poppins_medium',
																	fontSize: 12
																}}>Update</Text>
															</View></Pressable>
													</View>
													<Text style={{ flex: 1, textAlign: 'center', color: '#757575', fontFamily: 'poppins_light', margin: 15 }}>{cv?.statement}</Text>

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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Education</Text>
														<Pressable onPress={() => toggleEducationVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.educations.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Education Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.educations}
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
																			fontSize: 12,
																		}}>{item.qualification}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editEducation({ id: item.id, degree: item.qualification, institute: item.institute, timeperiod: item.timeperiod })}><Image style={{
																			width: 15,
																			height: 15
																		}}
																			source={require('../assets/editIcon.png')} />
																		</Pressable>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Career</Text>
														<Pressable onPress={() => toggleCareerVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.careers.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Career Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.careers}
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
																			padding: 10,

																		}}>
																		<Text style={{
																			fontFamily: 'poppins_light',
																			fontSize: 12,

																		}}>{item.company}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editCareer({ company: item.company, job: item.job, timeperiod: item.timeperiod, address: item.address, phone: item.phone, id: item.id })}><Image style={{
																			width: 15,
																			height: 15,
																		}}
																			source={require('../assets/editIcon.png')} /></Pressable>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Courses</Text>
														<Pressable onPress={() => toggleCourseVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.courses.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Course Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.courses}
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
																			fontSize: 12,
																		}}>{item.course}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editCourse({ course: item.course, timeperiod: item.timeperiod, institute: item.institute, id: item.id })}><Image style={{
																			width: 15,
																			height: 15,
																		}}
																			source={require('../assets/editIcon.png')} /></Pressable>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Skills</Text>
														<Pressable onPress={() => toggleSkillVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.skills.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Skills Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.skills}
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
																			fontSize: 12,
																		}}>{item.skill}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editSkill({ skill: item.skill, id: item.id })}><Image style={{
																			width: 15,
																			height: 15,
																		}}
																			source={require('../assets/editIcon.png')} /></Pressable>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Interests</Text>
														<Pressable onPress={() => toggleInterestVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.interests.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Interest Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.interests}
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
																			fontSize: 12,
																		}}>{item.interest}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editInterest({ interest: item.interest, id: item.id })}><Image style={{
																			width: 15,
																			height: 15,
																		}}
																			source={require('../assets/editIcon.png')} /></Pressable>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Languages</Text>
														<Pressable onPress={() => toggleLanguageVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.languages.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Language Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.languages}
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
																			fontSize: 12,
																		}}>{item.language}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editLanguage({ language: item.language, id: item.id })}><Image style={{
																			width: 15,
																			height: 15,
																		}}
																			source={require('../assets/editIcon.png')} /></Pressable>
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
														<Text style={{
															fontFamily: 'poppins_bold',
															fontSize: 16
														}}>Resumes</Text>
														<Pressable onPress={() => toggleResumeVisibility()} style={{
															backgroundColor: '#e7e7e7',
															borderRadius: 25,
															alignItems: 'center',
															paddingVertical: 5,
															paddingHorizontal: 15,
															marginLeft: 'auto'
														}}><Text
															style={{
																color: '#000',
																fontFamily: 'poppins_medium',
																fontSize: 12
															}}>Add</Text></Pressable>
													</View>
													<SafeAreaView style={{
														flex: 1,
														minHeight: 90,
														justifyContent: 'center',
														alignItems: 'center'
													}}>
														{cv?.resumes.length === 0 ?
															<Text
																style={{ fontFamily: 'poppins_light', color: '#a6a6a6' }}>No
																Resume Added</Text>
															:
															<FlatList scrollEnabled={false} nestedScrollEnabled={true}
																style={{
																	marginVertical: 15,
																	width: '100%',
																	paddingHorizontal: 15
																}}
																data={cv?.resumes}
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
																			fontSize: 12,
																		}}>{item.resume}</Text>
																		<Pressable style={{ marginLeft: 'auto' }} onPress={() => editResume({ resume: item.resume, id: item.id })}><Image style={{
																			width: 15,
																			height: 15,
																		}}
																			source={require('../assets/editIcon.png')} /></Pressable>
																	</View>
																)}
															/>
														}
													</SafeAreaView>
												</View>
											</>}
									</ScrollView>

								</>
							}
						</>}
				</>}
		</View>
	)
}

export default AccountInfo
