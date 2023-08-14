import {Image, Pressable, ScrollView, Text, TextInput, View} from "react-native";

function Register({navigation}) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#F0A51E'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30}}>
                <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#000', fontWeight: 700, fontSize: 18, marginTop: 100}}>Welcome</Text>
                <Text style={{color: '#000', fontWeight: 200, width: 250, textAlign: 'center', marginBottom: 20}}>Let's
                    help you meet up
                    your task</Text>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 70,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your full Name'} inputMode={'text'}/>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your email or phone number'}/>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your Password'} secureTextEntry={true}/>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Confirm Password'} secureTextEntry={true}/>

                <Pressable style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 50,
                    paddingVertical: 15
                }}><Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Register</Text></Pressable>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                    <Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.replace('Login')} ><Text
                        style={{color: '#000', fontWeight: '900', fontSize: 15}}> Sign In</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default Register
