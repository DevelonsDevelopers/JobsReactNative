import {Button, Image, Pressable, ScrollView, Text, TextInput, View} from "react-native";
import { firebase } from "@react-native-firebase/auth";
import {useEffect, useState} from "react";

function ChangePassword({ route, navigation }) {

    const { verifyPhone } = route.params
    const { password } = route.params;

    const [phone, setPhone] = useState(verifyPhone)

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30}}>
                <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{ height: 200, width: 200, marginTop: 100 }} source={require('../assets/verify.png')}/>
                <Text style={{color: '#000', fontFamily: 'poppins_semibold', fontSize: 18, width: '85%', textAlign: 'center', marginTop: 20, alignSelf: 'center'}}>Verify</Text>
                <TextInput value={phone} onChangeText={text => setPhone(text)} style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 70,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Phone Number'} inputMode={'text'}/>
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
                <Pressable onPress={() => navigation.push('VerificationCode', { phone: phone, password: password })} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 120,
                    paddingVertical: 15,
                }}><Text style={{color: '#fff', fontFamily: 'poppins_semibold', fontSize: 15}}>Send Code</Text></Pressable>
            </View>
        </ScrollView>
    );
}

export default ChangePassword
