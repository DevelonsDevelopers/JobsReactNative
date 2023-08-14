import {Button, Image, Pressable, ScrollView, Text, TextInput, View} from "react-native";

function Login({ navigation }) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#F0A51E'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30}}>
                <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/>
                <Pressable style={{
                    marginLeft: 'auto',
                    marginRight: 30,
                    paddingHorizontal: 50,
                    paddingVertical: 15,
                    backgroundColor: '#13A3E1',
                    borderRadius: 30
                }}><Text style={{color: '#fff', fontWeight: '600'}}>Skip</Text></Pressable>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
                <Text style={{color: '#000', fontWeight: 700, fontSize: 18}}>Welcome Back!</Text>
                <Text style={{color: '#000', fontWeight: 200, width: 130, textAlign: 'center', marginBottom: 20}}>Let's
                    help you meet up
                    your task</Text>
                <Image style={{ height: 150, width: 150 }} source={require('../assets/login_icon.png')}/>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 25,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your Email'} inputMode={'text'}/>
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
                <Text style={{color: '#000', fontWeight: 400, width: '85%', textAlign: 'right', marginTop: 20}}>Forgot
                    Password?</Text>
                <Pressable onPress={() => navigation.navigate('Onboarding')} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 20,
                    paddingVertical: 15
                }}><Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Log In</Text></Pressable>
                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={() => navigation.push('ChangePassword')} style={{
                        width: '41%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        borderRadius: 25,
                        marginTop: 15,
                        paddingVertical: 15,
                        marginRight: 5,
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}><Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../assets/google.png')}/><Text style={{color: '#000', fontWeight: '900', fontSize: 15}}>Google</Text></Pressable>
                    <Pressable style={{
                        width: '41%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        borderRadius: 25,
                        marginTop: 15,
                        paddingVertical: 15,
                        marginLeft: 5,
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}><Image style={{ width: 25, height: 25, marginRight: 10 }} source={require('../assets/facebook.png')}/><Text style={{color: '#000', fontWeight: '900', fontSize: 15}}>Facebook</Text></Pressable>
                </View>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                    <Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Don't have an account?</Text>
                    <Pressable onPress={() => navigation.replace('Register')} ><Text style={{color: '#000', fontWeight: '900', fontSize: 15}}> Register</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default Login
