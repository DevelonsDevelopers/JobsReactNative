import {Button, Image, Pressable, ScrollView, Text, TextInput, View} from "react-native";

function ChangePassword({ navigation }) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30}}>
                <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{ height: 200, width: 200, marginTop: 100 }} source={require('../assets/change_password.png')}/>
                <Text style={{color: '#000', fontFamily: 'poppins_semibold', fontSize: 18, width: '85%', textAlign: 'center', marginTop: 20, alignSelf: 'center'}}>Change Password</Text>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 25,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'New Password'} inputMode={'text'}/>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Confirm Your Password'} secureTextEntry={true}/>
                <Pressable onPress={() => navigation.navigate('Verify')} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 80,
                    paddingVertical: 15,
                }}><Text style={{color: '#fff', fontFamily: 'poppins_semibold', fontSize: 15}}>Change Password</Text></Pressable>
            </View>
        </ScrollView>
    );
}

export default ChangePassword
