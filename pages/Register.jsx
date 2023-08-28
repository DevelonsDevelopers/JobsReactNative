import {ActivityIndicator, Image, Modal, Pressable, ScrollView, Text, TextInput, View} from "react-native";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Registeration} from "../API/actions/registerActions";

function Register({navigation}) {

    const [show, setShow] = useState(true)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch();

    const toggleVisibility = () => setShow(!show);

    const RegisterUser = () => {
        dispatch(Registeration(navigation, name, username, email, '', '', '', '', password));
        toggleLoadingVisibility()
    }
    // loading===============
    const [loadingVisible, setLoadingVisible] = useState(false)
    const toggleLoadingVisibility = () => setLoadingVisible(!loadingVisible);

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#F0A51E'}}>
               <Modal visible={loadingVisible} animationType={"fade"} transparent={true}>
                <View  style={{ flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                    <View style={{ margin: 35, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, padding: 20, justifyContent: 'center', alignItems: 'center',marginHorizontal:100 }}>
                       <Text style={{ paddingBottom:16,fontSize:14,fontFamily:'poppins_medium' }}>Please Wait ...</Text>
                       <ActivityIndicator size={60} color="#13A3E1" />
                    </View>
                </View>
            </Modal>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30}}>
                <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#000', fontWeight: 700, fontSize: 18, marginTop: 90}}>Welcome</Text>
                <Text style={{color: '#000', fontFamily: 'poppins_light', width: 250, textAlign: 'center', marginBottom: 20}}>Let's
                    help you meet up
                    your task</Text>
                <TextInput onChangeText={(text) => setName(text)} style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 50,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your full Name'} inputMode={'text'}/>
                <TextInput onChangeText={(text) => setUsername(text)} style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your username'}/>
                <TextInput onChangeText={(text) => setEmail(text)} style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your email'}/>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    backgroundColor: '#fff',
                    elevation: 10,
                    borderRadius: 25,
                    width: '85%',
                    paddingRight: 20
                }}>
                    <TextInput onChangeText={(text) => setPassword(text)} style={{
                        height: 50,
                        paddingHorizontal: 20,
                        color: '#626262',
                        flex: 1
                    }} placeholder={'Enter your Password'} secureTextEntry={show}/>
                    {show === true ? <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto' }}><Image style={{width: 25, height: 25}} source={require('../assets/show.png')}/></Pressable>
                        : <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto' }}><Image style={{width: 25, height: 25}} source={require('../assets/hide.png')}/></Pressable>}

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    backgroundColor: '#fff',
                    elevation: 10,
                    borderRadius: 25,
                    width: '85%',
                    paddingRight: 20
                }}>
                <TextInput onChangeText={(text) => setConfirmPassword(text)} style={{
                    height: 50,
                    paddingHorizontal: 20,
                    color: '#626262',
                    flex: 1
                }} placeholder={'Confirm Password'} secureTextEntry={show}/>
                    {show === true ? <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto' }}><Image style={{width: 25, height: 25}} source={require('../assets/show.png')}/></Pressable>
                        : <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto' }}><Image style={{width: 25, height: 25}} source={require('../assets/hide.png')}/></Pressable>}
                </View>

                <Pressable onPress={() => RegisterUser()} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 50,
                    paddingVertical: 15
                }}><Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Register</Text></Pressable>
                <View style={{flexDirection: 'row', marginTop: 25}}>
                    <Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.replace('Login')}><Text
                        style={{color: '#000', fontWeight: '900', fontSize: 15}}> Sign In</Text></Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

export default Register
