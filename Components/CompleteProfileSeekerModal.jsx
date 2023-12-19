import React from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'

const CompleteProfileSeekerModal = ({ visible, toggleCompleteVisible, isComplete, plan, cover, cv, navigation }) => {
	return (

		<Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleCompleteVisible}>
			<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
				<View style={{ marginHorizontal: 20, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, height: 450, }}>

					<Pressable style={{ marginRight: 20, marginLeft: 'auto', marginTop: 20, padding: 10 }} onPress={() => toggleCompleteVisible()}>
						<Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: 'gray' }} source={require('../assets/close.png')} />
					</Pressable>
					{/* <Text style={{ textAlign: 'center', fontFamily: 'poppins_medium', fontSize: 26 }}>Welcome</Text> */}
					<Image source={require('../assets/welcome.png')} style={{ width: 240, height: 180, marginLeft: 'auto', marginRight: 'auto' }} />
					<Text style={{ textAlign: 'center', fontFamily: 'poppins_semibold', fontSize: 16, marginLeft: 10, }}>Please complete your profile.</Text>
					<Text style={{ fontFamily: 'poppins_medium', fontSize: 11, color: 'gray', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', letterSpacing: 1, width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>Companies prefer to look at profiles that are complete.A complete profile help us make accurate company recommendations for you</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 40 }}>
						<Text onPress={() => toggleCompleteVisible()} style={{ fontSize: 14, fontFamily: 'poppins_medium', marginLeft: 20, color: '#1877F2', paddingTop: 6 }}>I'll do it later</Text>
						<Text onPress={() => {
							toggleCompleteVisible()
							navigation.push('VerificationProfile')
						}} style={{ fontSize: 14, fontFamily: 'poppins_medium', backgroundColor: '#3CB043', color: 'white', marginRight: 20, paddingHorizontal: 20, paddingVertical: 6, borderRadius: 20 }}>Let's do it</Text>
					</View>
				</View>
			</View>
		</Modal>

	)
}

export default CompleteProfileSeekerModal
