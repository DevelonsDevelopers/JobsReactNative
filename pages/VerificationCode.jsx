import { Button, Image, Pressable, ScrollView, Text, TextInput, View, StyleSheet } from "react-native";
import { CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor } from "react-native-confirmation-code-field";
import { useEffect, useState } from "react";
import { firebase } from "@react-native-firebase/auth";
import { changePassword, verifySeeker } from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const styles = StyleSheet.create({
	root: { flex: 1, padding: 20 },
	title: { textAlign: 'center', fontSize: 30 },
	codeFieldRoot: { marginTop: 20 },
	cell: {
		width: 40,
		height: 47,
		lineHeight: 38,
		fontSize: 24,
		borderWidth: 1,
		borderColor: '#00000030',
		borderRadius: 5,
		textAlign: 'center',
		marginHorizontal: 5
	},
	focusCell: {
		borderColor: '#000',
	},
});

const CELL_COUNT = 6;

function VerificationCode({ route, navigation }) {

	const { phone } = route.params
	const { password } = route.params

	const [confirm, setConfirm] = useState()
	const [code, setCode] = useState('');
	const [ID, setID] = useState()

	function onAuthStateChanged(user) {
		if (user) {
			console.log(user)
		}
	}

	useEffect(() => {
		GetData()
	}, []);
	const GetData = async () => {
		const value = await AsyncStorage.getItem('ID')
		setID(value);
	}

	useEffect(() => {
		const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	async function signInWithPhoneNumber(phoneNumber) {
		const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
		setConfirm(confirmation)
	}

	async function confirmCode() {
		try {
			await confirm.confirm(value).then(res => {
				verifySeeker("true", phone, ID).then(res => {
					const { data: { data } } = res;
					const { data: { responseCode } } = res;
					const { data: { message } } = res;
					if (responseCode === 200) {
						if (password) {
							changePassword(password, ID).then(res => {
								navigation.push('Home')
							})
						} else {
							navigation.push('Home')
						}
					} else {
						Toast.show({ type: 'error', position: 'top', text1: 'Error', text2: 'Unknown error occurred' })
					}
				})
			})
		} catch (error) {
			Toast.show({ type: 'error', position: 'top', text1: 'Error', text2: 'The code you entered is not valid' })
		}
	}

	useEffect(() => {
		signInWithPhoneNumber(phone);
	}, [phone]);

	const [value, setValue] = useState('');
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
			<Pressable onPress={() => navigation.goBack()}><Image style={{ width: 22, height: 20, marginTop: 70, marginLeft: 30, tintColor: 'gray', }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>

			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Image style={{ height: 200, width: 200, }} source={require('../assets/verification_code.png')} />
				<Text style={{ color: '#000', fontFamily: 'poppins_semibold', fontSize: 18, width: '85%', textAlign: 'center', marginTop: 20, alignSelf: 'center' }}>Verification</Text>
				<Text style={{ color: '#000', fontFamily: 'poppins_regular', fontSize: 12, width: '85%', textAlign: 'center', marginTop: 5, alignSelf: 'center' }}>Enter your OTP code number</Text>
				<CodeField
					ref={ref}
					{...props}
					value={value}
					onChangeText={setValue}
					cellCount={CELL_COUNT}
					rootStyle={styles.codeFieldRoot}
					keyboardType="number-pad"
					textContentType="oneTimeCode"
					renderCell={({ index, symbol, isFocused }) => (
						<Text
							key={index}
							style={[styles.cell, isFocused && styles.focusCell]}
							onLayout={getCellOnLayoutHandler(index)}>
							{symbol || (isFocused ? <Cursor /> : null)}
						</Text>
					)}
				/>
				<Pressable onPress={() => confirmCode()} style={{ width: '75%', backgroundColor: '#13A3E1', alignItems: 'center', borderRadius: 15, marginTop: 40, paddingVertical: 15, }}>
					<Text style={{ color: '#fff', fontFamily: 'poppins_semibold', fontSize: 15 }}>Verify</Text>
				</Pressable>
				<Text style={{ marginTop: 40, fontFamily: 'poppins_medium', fontSize: 13, color: 'gray' }}>Didn't recieve any code ?</Text>
				<Pressable onPress={() => { }} style={{
					width: '85%',
					alignItems: 'center',
					borderRadius: 25,
					marginTop: 5
				}}><Text style={{ color: '#13A3E1', fontFamily: 'poppins_semibold', fontSize: 15 }}>Resend New Code</Text></Pressable>
			</View>
			<Toast position='top' bottomOffset={20} />
		</ScrollView>
	);
}

export default VerificationCode
