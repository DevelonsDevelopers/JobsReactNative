import { ActivityIndicator, Button, Image, Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAuthentication, ProviderLoginAuthentication } from "../API/actions/loginActions";
import Toast from "react-native-toast-message";
import { RESET_SEEKER } from "../Utils/Constants";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { google } from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";


function Login({ route, navigation }) {

    const { USER } = route.params

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const toggleVisibility = () => setShow(!show)

    const error = useSelector(state => state.login.error)

    const LoginUser = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            Toast.show({ type: 'error', position: 'top', text1: 'Please Enter a Valid Email Address' })
        } else {
            if (USER === "SEEKER") {
                dispatch(LoginAuthentication(navigation, email, password))
                toggleLoadingVisibility()
            } else {
                dispatch(ProviderLoginAuthentication(navigation, email, password))
                toggleLoadingVisibility()
            }
        }
    }

    useEffect(() => {
        if (error) {
            toggleLoadingVisibility()
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Failed to Login',
                text2: 'Invalid Username or Password'
            })
        }
    }, [error]);

    // loadingModal================
    const [loading, setLoading] = useState([]);
    const [loadingVisible, setLoadingVisible] = useState(false)
    const toggleLoadingVisibility = () => setLoadingVisible(!loadingVisible);

    GoogleSignin.configure({
        webClientId: '404623696003-doe1cpjrlljj8om770ha3ri9s9vatoc8.apps.googleusercontent.com', // Replace with your actual Web Client ID
    });


    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const { idToken } = userInfo;
            const { user } = userInfo;
            await google(user.name, user.givenName + (user.id).substring((user.id).length - 6), user.email, '', '', '', '', user.id).then(async res => {
                const { data: { data } } = res;
                const { data: { responseCode } } = res;
                const { data: { message } } = res;
                console.log(message)
                if (responseCode === 200) {
                    var ID = (data.id).toString()
                    await AsyncStorage.setItem("LOGIN", 'true')
                    await AsyncStorage.setItem("ID", ID)
                    await AsyncStorage.setItem("USER", "SEEKER")
                    await AsyncStorage.setItem("NAME", data.name)
                    await AsyncStorage.setItem("EMAIL", data.email)
                    await AsyncStorage.setItem("USERNAME", data.username)
                    navigation.popToTop()
                    navigation.replace('Home')
                } else {

                }
            })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // User canceled the sign-in process
                console.log('Google sign-in canceled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // Another sign-in process is already in progress
                console.log('Google sign-in in progress');
            } else {
                console.error('Google sign-in error:', error);
            }
        }
    };


    // const isUserEqual = (googleUser, firebaseUser) => {
    //     if (firebaseUser) {
    //         var providerData = firebaseUser.providerData;
    //         for (var i = 0; i < providerData.length; i++) {
    //             if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
    //                 providerData[i].uid === googleUser.getBasicProfile().getId()) {
    //                 // We don't need to reauth the Firebase connection.
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    //
    // const onSignIn = (googleUser)  => {
    //     console.log('Google Auth Response', googleUser);
    //     // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    //     var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    //         unsubscribe();
    //         // Check if we are already signed-in Firebase with the correct user.
    //         if (!isUserEqual(googleUser, firebaseUser)) {
    //             // Build Firebase credential with the Google ID token.
    //             var credential = firebase.auth.GoogleAuthProvider.credential(
    //                 googleUser.idToken,
    //                 googleUser.accessToken);
    //             // Sign in with credential from the Google user.
    //             firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function(result){
    //
    //                 console.log("user sign in");
    //                 firebase
    //                     .database()
    //                     .ref('/users'+result.user.uid)
    //                     .set({
    //                         gmail:result.user.email,
    //                         profile_picture:result.additionalUserInfo.profile.profile_picture,
    //                         locale:result.additionalUserInfo.profile_picture.locale,
    //                         first_name:result.additionalUserInfo.given_name,
    //                         last_name:result.additionalUserInfo.first_name
    //                     })
    //                     .then(function(snapshot){
    //
    //                     });
    //             }).catch(function(error) {
    //                 // Handle Errors here.
    //                 var errorCode = error.code;
    //                 var errorMessage = error.message;
    //                 // The email of the user's account used.
    //                 var email = error.email;
    //                 // The firebase.auth.AuthCredential type that was used.
    //                 var credential = error.credential;
    //                 // ...
    //             });
    //         } else {
    //             console.log('User already signed-in Firebase.');
    //         }
    //     }.bind(this));
    // }
    // const signInWithGoogleAsync = async () => {
    //     try {
    //         const result = await Google.logInAsync({
    //             androidClientId: '404623696003-ige6pbsc79139f0rl6846n33df3kenfo.apps.googleusercontent.com',
    //             behavior: 'web',
    //             iosClientId: '404623696003-tsj6kofl9jsis8jro1o68l4ohp09t1i1.apps.googleusercontent.com', //enter ios client id
    //             scopes: ['profile', 'email']
    //         });
    //
    //         if (result.type === 'success') {
    //             onSignIn(result);
    //             return result.accessToken;
    //         } else {
    //             return { cancelled: true };
    //         }
    //     } catch (e) {
    //         return { error: true };
    //     }
    // };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F0A51E' }}>
            <Modal visible={loadingVisible} animationType={"fade"} transparent={true}>
                <View style={{
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(66, 66, 66, 0.4)'
                }}>
                    <View style={{
                        margin: 35,
                        elevation: 24,
                        borderRadius: 25,
                        backgroundColor: '#fff',
                        opacity: 1,
                        padding: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 100
                    }}>
                        <Text style={{ paddingBottom: 16, fontSize: 14, fontFamily: 'poppins_medium' }}>Please Wait ...</Text>
                        <ActivityIndicator size={60} color="#13A3E1" />
                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30 }}>
                {/* <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/> */}
                <Pressable onPress={() => navigation.replace('Home')} style={{
                    marginLeft: 'auto',
                    marginRight: 20,
                    paddingHorizontal: 30,
                    paddingVertical: 15,
                    backgroundColor: '#13A3E1',
                    borderRadius: 30
                }}><Text style={{ color: '#fff', fontWeight: '600' }}>Skip</Text></Pressable>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text style={{ color: '#000', fontWeight: 700, fontSize: 18 }}>Welcome Back!</Text>
                <Text style={{ color: '#000', fontWeight: 200, width: 130, textAlign: 'center', marginBottom: 20 }}>Let's
                    help you meet up
                    your task</Text>
                <Image style={{ height: 150, width: 150 }} source={require('../assets/login_icon.png')} />
                <TextInput onChangeText={(text) => setEmail(text)} style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 25,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your Email'} inputMode={'text'} />
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
                    }} placeholder={'Enter your Password'} secureTextEntry={!show} />
                    {show === true ? <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto' }}><Image
                        style={{ width: 25, height: 25 }} source={require('../assets/hide.png')} /></Pressable>
                        : <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto' }}><Image
                            style={{ width: 25, height: 25 }} source={require('../assets/show.png')} /></Pressable>}
                </View>
                <Text style={{ color: '#000', fontWeight: 400, width: '85%', textAlign: 'right', marginTop: 20 }}>Forgot
                    Password?</Text>
                <Pressable onPress={() => LoginUser()} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 20,
                    paddingVertical: 15
                }}><Text style={{ color: '#fff', fontWeight: '900', fontSize: 15 }}>Log In</Text></Pressable>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => handleGoogleSignIn()} style={{
                        width: '41%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        borderRadius: 25,
                        marginTop: 15,
                        paddingVertical: 15,
                        marginRight: 5,
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}><Image style={{ width: 25, height: 25, marginRight: 10 }}
                        source={require('../assets/google.png')} /><Text
                            style={{ color: '#000', fontWeight: '900', fontSize: 15 }}>Google</Text></Pressable>
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
                    }}><Image style={{ width: 25, height: 25, marginRight: 10 }}
                        source={require('../assets/facebook.png')} /><Text
                            style={{ color: '#000', fontWeight: '900', fontSize: 15 }}>Facebook</Text></Pressable>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <Text style={{ color: '#fff', fontWeight: '900', fontSize: 15 }}>Don't have an account?</Text>
                    <Pressable onPress={() => navigation.replace('Register', { USER: USER })}><Text
                        style={{ color: '#000', fontWeight: '900', fontSize: 15 }}> Register</Text></Pressable>
                </View>
            </View>
            <Toast
                position='top'
                bottomOffset={20}
            />
        </ScrollView>
    );
}

export default Login
