import React, {useEffect, useState} from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import moment from "moment/moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {CVByUser} from "../API/actions/cvActions";

const data = [
	{ 'data': 'Enhanced domestic helicopter transfer sales by 60% in 2018/2019 via business-to-business concept ' },
	{ 'data': 'Implemented first helicopter medical evacuation service in Sri Lanka (2018) ' },
	{ 'data': 'Introduced media booth helicopter filming project for local television hostess (2018)   ' },
]


const CoverLetter = ({ route, navigation}) => {

	const { role } = route.params;
	const { intro } = route.params;
	const { body } = route.params;

	const dispatch = useDispatch();

	const cv = useSelector((state) => state.cv.cv);
	const date = moment().format("DD MMM YYYY")

	const [ID, setID] = useState()

	useEffect(() => {
		GetData();
	}, []);

	const GetData = async () => {
		const value = await AsyncStorage.getItem('ID');
		setID(value);
	};

	useEffect(() => {
		if (ID) {
			dispatch(CVByUser(ID));
		}
	}, [dispatch, ID]);

	return (
		<GestureHandlerRootView style={{ paddingBottom: 40 }}>
			<ScrollView>
				<View style={{ flexDirection: 'row', height: 90 }}>
					<Pressable onPress={() => navigation.goBack()}
						style={{ paddingRight: 5 }}><Image style={{
							width: 22,
							height: 20,
							marginTop: 70,
							marginLeft: 30,
							tintColor: '#000'
						}} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
					<View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
						<Pressable onPress={() => navigation.push('Home')}><Image
							style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
							source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
					</View>
				</View>


				<View style={{ backgroundColor: '#D3D3D3', marginTop: 40, paddingVertical: 10, marginHorizontal: 40, borderRadius: 20 }}>
					<Text style={{ fontSize: 16, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}>{cv?.name}</Text>
					<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}>{cv?.address}</Text>
					<View style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5 }}>
						<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black' }}>{cv?.phone}</Text>
						<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black' }}>{cv?.email}</Text>
					</View>
				</View>
				<Text style={{ backgroundColor: 'gray', height: 1, marginTop: 10, marginHorizontal: 20 }}>-</Text>
				<View>
					<Text style={{ color: 'red', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>{date}</Text>
					<Text style={{ color: 'red', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>{cv?.name}</Text>
				</View>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>Expression of interest: {role}</Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>{intro}</Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>{body}</Text>
				<GestureHandlerRootView style={{ backgroundColor: '#D3D3D3', marginHorizontal: 40, marginVertical: 10, paddingBottom: 20, }}>
					<SafeAreaView>
						<FlatList scrollEnabled={false} nestedScrollEnabled={true}
							data={cv?.careers} renderItem={({ item }) => (
								<Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
									{`\u2022 I was working as a ${item.job} in ${item.company} from ${item.timeperiod}`}
								</Text>
							)} />
					</SafeAreaView>
				</GestureHandlerRootView>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 3, marginHorizontal: 30 }}>I hold a Bachelor of Business Administration (Marketing and Social Science) degree completed at the University of Aldersgate in
					the United Kingdom in March 2016</Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>I am available at short notice to attend an interview, and I look forward to hearing further on my application. </Text>
				<Text style={{ fontSize: 12, fontFamily: 'poppins_medium', marginTop: 11, marginHorizontal: 30 }}>Sincerly</Text>
				<Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', marginTop: 10, marginHorizontal: 30, marginLeft: 'auto' }}>Shankar Doe</Text>
			</ScrollView>
		</GestureHandlerRootView>
	)
}

export default CoverLetter
