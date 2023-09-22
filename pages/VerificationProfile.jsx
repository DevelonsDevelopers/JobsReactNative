import React from 'react'
import { useState } from 'react'
import { Pressable, View, Text, Image } from 'react-native'

const Verification = ({ navigation }) => {

	const [isComplete, setIsComplete] = useState(false)
	const [cv, setCv] = useState(false)
	const [cover, setCover] = useState(false)
	const [plan, setPlan] = useState(false)



	return (
		<View style={{}}>
			<View style={{}}>
				<View style={{
					flexDirection: 'column',
					width: '100%',
					height: 90,
					marginBottom: 20
				}}>
					<View style={{ flexDirection: 'row', height: 130 }}>
						<Pressable onPress={() => navigation.goBack()}
							style={{ paddingRight: 5 }}><Image style={{
								width: 22,
								height: 20,
								marginTop: 70,
								marginLeft: 30,
								marginBottom: 20,
								tintColor: 'gray'
							}} source={require('../assets/back_arrow.png')}
								alt={'Okay'} />
						</Pressable>
						<View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
							<Text style={{
								marginTop: 67,
								alignSelf: 'center',
								fontSize: 16, fontFamily: 'poppins_medium', color: 'gray'
							}} >Complete Profile</Text>
						</View>
					</View>
				</View>
				<Image source={require('../assets/job.png')} style={{ width: 250, height: 150, marginLeft: 'auto', marginRight: 'auto' }} />
				<Text style={{ textAlign: 'center', fontFamily: 'poppins_semibold', fontSize: 16, }}>Few steps more to find your dream job</Text>
				<View style={{ marginHorizontal: 20 }}>
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
							<Text style={{ color: 'red', fontSize: 14, fontFamily: 'poppins_medium', marginTop: 4 }}
							>(complet now)</Text>
						</View>
					}
					{/* <View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
								<Image style={{ width: 20, height: 20, marginTop: 5 }}
									source={require('../assets/unverified.png')} />
								<Text onPress={() => navigation.push('ProviderProfile')} style={{ color: 'gray', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
								>(Complete Now)</Text>

							</View> */}


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
							<Text style={{ color: 'red', fontSize: 14, fontFamily: 'poppins_regular', marginTop: 4 }}
							>(Create CV)</Text>
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
						}}>Verify your phone number</Text>
					</View>
					{cover ?
						<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
							<Image style={{ width: 20, height: 20, marginTop: 5 }}
								source={require('../assets/verified.png')} />
							<Text style={{ color: 'green', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
							>Verified</Text>
						</View>
						:
						<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
							<Image style={{ width: 20, height: 20, marginTop: 5 }}
								source={require('../assets/unverified.png')} />
							<Text style={{ color: 'red', fontSize: 14, fontFamily: 'poppins_medium', marginTop: 4 }}
							>(Verify now)</Text>
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
							<Text style={{ color: 'red', fontSize: 14, fontFamily: 'poppins_regular', marginTop: 4 }}
							>(Choose Plan)</Text>
						</View>
					}

				</View>
			</View>
		</View>
	)
}

export default Verification
