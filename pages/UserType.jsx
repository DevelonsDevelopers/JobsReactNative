import {Image, ImageBackground, Pressable, Text, TextInput, View} from "react-native";

function UserType({navigation}) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ImageBackground
                style={{width: 270, height: 282, paddingLeft: 20, paddingRight: 40, justifyContent: 'center'}}
                source={require('../assets/circle_blue.png')}>
                <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'poppins_bold', color: '#fff'}}>Are you a
                    hiring agency, recruiter, or job bank? Click here to log in</Text>
            </ImageBackground>
            <Pressable onPress={() => navigation.navigate('Login', { USER: 'PROVIDER' })} style={{
                alignItems: 'center',
                backgroundColor: '#13A3E1',
                paddingHorizontal: 90,
                paddingVertical: 25,
                borderRadius: 25,
                marginTop: 10,
                elevation: 10,
                marginHorizontal: 60,
                zIndex: 1
            }}>
                <Image style={{width: 70, height: 70}} source={require('../assets/provider.png')}/>
                <Text style={{fontSize: 15, color: '#fff', marginTop: 15, fontFamily: 'poppins_black'}}>Job
                    Provider</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login', { USER: 'SEEKER' })} style={{
                alignItems: 'center',
                backgroundColor: '#13A3E1',
                paddingHorizontal: 90,
                paddingVertical: 25,
                borderRadius: 25,
                marginTop: 20,
                elevation: 10,
                marginHorizontal: 60,
                zIndex: 1
            }}>
                <Image style={{width: 70, height: 70}} source={require('../assets/seeker.png')}/>
                <Text style={{fontSize: 15, color: '#fff', marginTop: 15, fontFamily: 'poppins_black'}}>Job
                    Seeker</Text>
            </Pressable>
            <ImageBackground style={{width: 270, height: 287, marginTop: 'auto', marginLeft: 'auto', paddingTop: 40}}
                             source={require('../assets/circle_yellow.png')}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: '#fff',
                    fontFamily: 'poppins_bold',
                    alignSelf: 'center',
                    marginTop: 'auto',
                    marginRight: 20,
                    marginLeft: 40
                }}>Are you looking for a job? Click here to log in</Text>
                <Text style={{
                    textAlign: 'right',
                    fontSize: 10,
                    color: '#fff',
                    fontFamily: 'poppins_regular',
                    marginTop: 'auto',
                    marginLeft: 40,
                    marginRight: 10
                }}>The largest resume distribution Service in Australia and New Zealand</Text>
            </ImageBackground>
        </View>
    );
}

export default UserType
