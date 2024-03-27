import { Image, Text, Pressable, FlatList, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TopTags } from "../API/actions/tagActions";
import { RecommendedJobs } from "../API/actions/jobActions";
import moment from "moment/moment";
import { recordInteraction } from "../API";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import NoData from "../Components/NoData";
import tagService from "../server/services/tagService";



function Recommendedjobs({ navigation }) {

	const dispatch = useDispatch()

	const [ID, setID] = useState()
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])
	const [noData, setnoData] = useState();

	// const topTags = useSelector(state => state.tag.topTags)
	const recommendedJobs = useSelector(state => state.job.recommendedJobs)

	const [topTags, setTopTags] = useState();

	const success = useSelector(state => state.success.recommendedJobSuccess)
	const error = useSelector(state => state.error.recommendedJobError)


	useEffect(() => {
		GetData()
	}, []);
	const GetData = async () => {
		const value = await AsyncStorage.getItem('ID')
		setID(value);
	}

	useEffect(() => {
		if (ID) {
			// dispatch(TopTags(ID))
			tagService.fetchtopTags({user : ID}).then((response) => {
				setTopTags(response.data)
			}).catch(error => {
				console.log(error);
			})

		}
	}, []);

	useEffect(() => {
		if (ID) {
			if (topTags) {
				if (topTags.length !== 0) {
					if (loading) {
						dispatch(RecommendedJobs(ID, topTags[0].name))
					}
				} else {
					setLoading(false)
				}
			}
		}
	}, [dispatch, topTags, navigation, ID]);


	useEffect(() => {
		if (recommendedJobs) {
			setData(recommendedJobs)
		}
	}, [recommendedJobs]);


	useEffect(() => {
		if (success || error) {
			setData(recommendedJobs)
			setLoading(false)
		}
	}, [success, error]);

	useEffect(() => {
		if (data?.length === 0) {
			setnoData(true)
		} else {
			setnoData(false)
		}
	}, [data])

	const JobClick = (id) => {
		recordInteraction(id, ID, '', '', 'JOB').then(res => console.log(res))
		navigation.push('JobDetails', { ID: id })
	}


	return (
		<View style={{ flex: 1 }}>

			<ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
				{loading ?
					<View style={{ marginTop: 400 }}>
						<ActivityIndicator size={60} color="#13A3E1" />
					</View>
					:
					<>
						{noData ?
							<NoData text={"No Recommended Found"} /> :
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


										<View style={{ backgroundColor: '#EAEAEA' }}>
											<View style={{ flexDirection: 'row', height: 90 }}>
												<Pressable onPress={() => navigation.goBack()} ><Image style={{
													width: 22,
													height: 20,
													marginTop: 70,
													marginLeft: 30,
													tintColor: '#000',

												}} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
												<View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
													<Pressable

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
													textAlign: 'left',
													marginVertical: 20,
													padding: 0
												}}>Recommended Jobs</Text>
											</View>
											<SafeAreaView>
												<FlatList nestedScrollEnabled={false} scrollEnabled={false}
													style={{ marginHorizontal: 0, marginTop: 10 }}
													data={data} renderItem={({ item }) => (
														<Pressable onPress={() => JobClick(item.id)}><View style={{
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
															<View style={{ flexDirection: 'row', flex: 1 }}>
																<Text style={{
																	marginLeft: 'auto',
																	textAlign: 'right',
																	fontFamily: 'poppins_medium',
																	fontSize: 13
																}}>{moment(item.created).format("MMM Do YY")}</Text>
															</View>
															<View style={{ flex: 1, flexDirection: 'row' }}>
																<View style={{ flex: 0.8 }}>
																	<Text numberOfLines={1} style={{
																		fontFamily: 'poppins_bold',
																		marginTop: 5,
																		fontSize: 15
																	}}>{item.title}</Text>
																	<Text style={{
																		fontFamily: 'poppins_regular',
																		marginTop: 0,
																		fontSize: 12
																	}}>{item.company_name}</Text>
																</View>
															</View>
															<View style={{ flex: 1 }}>
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
															<View style={{
																marginTop: 4,
																backgroundColor: '#d9d9d9',
																borderRadius: 10,
																marginLeft: 'auto',
																marginRight: 'auto',
															}} >
																<Text style={{ paddingHorizontal: 10, paddingVertical: 2, fontSize: 13, fontFamily: 'poppins_medium', }}>
																	Salary {item.salary}
																</Text>
															</View>

															<View style={{ flexDirection: 'row', flex: 1, marginTop: 7, }}>
																<View style={{
																	backgroundColor: '#13a3e1',
																	paddingHorizontal: 10,
																	paddingTop: 5,
																	borderRadius: 14
																}}>
																	<Text style={{ color: 'white', fontSize: 15, fontFamily: 'poppins_medium', }}>{item.type}</Text>
																</View>
																<Text style={{
																	marginLeft: 'auto',
																	textAlign: 'right',
																	fontFamily: 'poppins_medium',
																	fontSize: 13,
																	paddingTop: 6,
																}}>{item.city_name}</Text>
															</View>


														</View></Pressable>
													)} />
											</SafeAreaView>
										</View>
									</>
								}
							</>}
					</>}
			</ScrollView>

			<BannerAd
				unitId="ca-app-pub-3940256099942544/6300978111"
				size={BannerAdSize.FULL_BANNER}
				requestOptions={{
					requestNonPersonalizedAdsOnly: true,
				}}
			/>
		</View>
	)
}

export default Recommendedjobs
