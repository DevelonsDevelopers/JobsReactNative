import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const data = [
	{ 'data': 'Enhanced domestic helicopter transfer sales by 60% in 2018/2019 via business-to-business concept ' },
	{ 'data': 'Implemented first helicopter medical evacuation service in Sri Lanka (2018) ' },
	{ 'data': 'Introduced media booth helicopter filming project for local television hostess (2018)   ' },
]


const CoverLetter = ({navigation}) => {
	const cv = useSelector((state) => state.cv.cv);
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
					<Text style={{ color: 'red', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>5 May 2019</Text>
					<Text style={{ color: 'red', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>Name of employer or advertiser</Text>
				</View>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>Expression of interest: SALES AND MARKETING COORDINATOR / ACCOUNT MANAGER roles</Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>I wish to express interest in sales and marketing coordinator or account manager roles with your organisation</Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>My resume/CV is supplied.</Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>I have more than ten years’ experience in sales, marketing, strategy development and customer care. </Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>My most recent roles include business development executive, customer and key accounts manager, and head of sales. I have
					considerable experience in the telecommunication, FMCG, banking and finance, IT and aviation sectors. I have demonstrated
					to employers that I am a strong team player with good personal skills. I am enthusiastic and have a positive attitude towards
					challenges in business.  </Text>
				<Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>I bring exceptional ability in customer care, and have the ability to deliver sales strategies and marketing training including sales
					planning & implementations. For example, in the role </Text>
				<GestureHandlerRootView style={{ backgroundColor: '#D3D3D3', marginHorizontal: 40, marginVertical: 10, paddingBottom: 20, }}>
					<SafeAreaView>
						<FlatList scrollEnabled={false} nestedScrollEnabled={true}
							data={data} renderItem={({ item }) => (
								<Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
									{`\u2022 ${item.data}`}
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
