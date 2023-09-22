import React from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'

const CompleteProfileSeekerModal = ({ visible, toggleCompleteVisible, isComplete, plan, cover, cv }) => {
	return (

		<Modal visible={visible} animationType={"fade"} transparent={true}>
			<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
				<View style={{ marginHorizontal: 20, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, height: 450, }}>

					<Pressable style={{ marginRight: 20, marginLeft: 'auto', marginTop: 20, padding: 10 }} onPress={() => toggleCompleteVisible()}>
						<Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: 'gray' }} source={require('../assets/close.png')} />
					</Pressable>
					{/* <Text style={{ textAlign: 'center', fontFamily: 'poppins_medium', fontSize: 26 }}>Welcome</Text> */}
					<Image source={require('../assets/welcome.png')} style={{ width: 240, height: 180, marginLeft: '17%' }} />

					<Text style={{ textAlign: 'center', fontFamily: 'poppins_semibold', fontSize: 16, marginLeft: 10, }}>Please complete your profile.</Text>
					<Text style={{  fontFamily: 'poppins_medium', fontSize: 11, color: 'gray',textAlign:'center' }}>Companies prefer to look at profiles that are complete.A complete profile help us make accurate company recommendations for you</Text>
					<View style={{ flexDirection:'row',justifyContent:'space-between' }}>
						<Text style={{ fontSize:14,fontFamily:'poppins_medium',marginLeft:20,color:'#1877F2' }}>I'll do it later</Text>
						<Text style={{ fontSize:14,fontFamily:'poppins_medium', }}>Let's do it</Text>
					</View>
				</View>
			</View>
		</Modal>

	)
}

export default CompleteProfileSeekerModal
