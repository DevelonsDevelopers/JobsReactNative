import { Button, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { firebase } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from "react-native-phone-number-input";

function ForgotPassword({ route, navigation }) {
    const [email, setEmail] = useState('')

    // const { verifyPhone } = route.params;
    // const { type } = route.params;
    // const { password } = route.params;

    // const [phone, setPhone] = useState(verifyPhone)

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Pressable onPress={() => navigation.goBack()}><Image style={{ width: 22, height: 20, marginTop: 70, marginLeft: 30, tintColor: 'gray', }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 150, width: 150, marginTop: 70, borderRadius: 500, padding: 120 }} source={require('../assets/verify.png')} />
                <Text style={{ color: '#000', fontFamily: 'poppins_semibold', fontSize: 18, width: '85%', textAlign: 'center', marginTop: 20, alignSelf: 'center' }}>Forgot Password?</Text>
                <Text style={{ color: 'gray', marginHorizontal: 40, textAlign: 'center', marginTop: 20 }}>Add your Phone number we'll Send You a verification code</Text>
                <Text style={{ color: 'gray' }}>so we know you are real</Text>
                {/* <TextInput value={phone} onChangeText={text => setPhone(text)} style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 10,
                    marginTop: 30,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Phone Number'} inputMode={'text'} /> */}
                <TextInput 
                onChangeText={(text) => setEmail(text)} 
                style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 25,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your Email'} inputMode={'text'} />

                <View style={{ paddingVertical: 5 }}>
                    <PhoneInput
                        layout='first'
                        defaultCode='PK'
                        containerStyle={{
                            height: 50,
                            backgroundColor: '#fff',
                            width: '85%',
                            borderRadius: 10,
                            marginTop: 30,
                            paddingHorizontal: 20,
                            color: '#626262',
                            elevation: 10
                        }}
                        placeholder='Enter Your Number'
                    // onChangeText={text => setPhone(text)}
                    />
                </View>


                {/*<Text style={{color: '#000', fontFamily: 'poppins_regular', fontSize: 15, width: '85%', textAlign: 'center', marginTop: 20, alignSelf: 'center'}}>OR</Text>*/}
                {/*<TextInput style={{*/}
                {/*    height: 50,*/}
                {/*    backgroundColor: '#fff',*/}
                {/*    width: '85%',*/}
                {/*    borderRadius: 25,*/}
                {/*    marginTop: 15,*/}
                {/*    paddingHorizontal: 20,*/}
                {/*    color: '#626262',*/}
                {/*    elevation: 10*/}
                {/*}} placeholder={'Email'} secureTextEntry={true}/>*/}

                <Pressable style={{
                    width: '50%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 15,
                    marginTop: 40,
                    paddingVertical: 7,
                }}><Text style={{ color: '#fff', fontFamily: 'poppins_semibold', fontSize: 15 }}>Send </Text></Pressable>
            </View>
        </ScrollView>
    );
}

export default ForgotPassword
