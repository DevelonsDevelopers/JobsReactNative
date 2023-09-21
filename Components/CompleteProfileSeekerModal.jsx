import React from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'

const CompleteProfileSeekerModal = ({ visible, toggleCompleteVisible, isComplete,plan,cover,cv }) => {
	return (

		<Modal visible={visible} animationType={"fade"} transparent={true}>
			<View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
				<View style={{ marginHorizontal: 20, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, height: 600, }}>

					<Pressable style={{ marginRight: 20, marginLeft: 'auto', marginTop: 20, padding: 10 }} onPress={() => toggleCompleteVisible()}>
						<Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: 'gray' }} source={require('../assets/close.png')} />
					</Pressable>
					{/* <Text style={{ textAlign: 'center', fontFamily: 'poppins_medium', fontSize: 26 }}>Welcome</Text> */}
					<Image source={require('../assets/welcome.png')} style={{ width: 240, height: 180, marginLeft: '17%' }} />

					<Text style={{ textAlign: 'left', fontFamily: 'poppins_semibold', fontSize: 16, marginLeft: 10, }}>Few steps more to find your dream job</Text>
					<View style={{ marginHorizontal: 10 }}>
						<View style={{ flexDirection: 'row', gap: 4, paddingLeft: 10, marginTop: 20, padding: 2 }}>
							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>1)</Text>
							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>Complete your profile</Text>
						</View>
						{isComplete ?
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/verified.png')} />
								<Text style={{ color: 'green', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>Completed</Text>
							</View>
							:
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/unverified.png')} />
								<Text onPress={() => navigation.push('ProviderProfile')} style={{ color: 'gray', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>(Complete Now)</Text>

							</View>
						}

						<View style={{ flexDirection: 'row', gap: 4, paddingLeft: 10, marginTop: 10, padding: 2 }}>
							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>2)</Text>

							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>Create Your CV</Text>
						</View>

						{cv ?
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/verified.png')} />
								<Text style={{ color: 'green', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>Created</Text>
							</View>
							:
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/unverified.png')} />
								<Text onPress={() => navigation.push('ProviderProfile')} style={{ color: 'gray', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>(Create cv)</Text>

							</View>
						}

						<View style={{ flexDirection: 'row', gap: 4, paddingLeft: 10, marginTop: 10, padding: 2 }}>
							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>3)</Text>

							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>Create Your Cover Letter</Text>
						</View>
						{cover ?
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/verified.png')} />
								<Text style={{ color: 'green', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>Created</Text>
							</View>
							:
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/unverified.png')} />
								<Text onPress={() => navigation.push('ProviderProfile')} style={{ color: 'gray', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>(Create cover letter)</Text>

							</View>
						}


						<View style={{ flexDirection: 'row', gap: 4, paddingLeft: 10, marginTop: 10, padding: 2 }}>
							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>4)</Text>

							<Text style={{
								textAlign: 'center',
								color: 'black',
								fontSize: 14,
								fontFamily: 'poppins_bold',
							}}>Choose a plan </Text>
						</View>
						{plan ?
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/verified.png')} />
								<Text style={{ color: 'green', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>Purchased</Text>
							</View>
							:
							<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/unverified.png')} />
								<Text onPress={() => navigation.push('ProviderProfile')} style={{ color: 'gray', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>(Choose Plan)</Text>

							</View>
						}

					</View>
				</View>
			</View>
		</Modal>

	)
}

export default CompleteProfileSeekerModal
