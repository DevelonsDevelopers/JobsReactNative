import {Image, ImageBackground, Pressable, Text, View} from "react-native";

function OnBoarding({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ImageBackground
                style={{width: 270, height: 282, paddingLeft: 20, paddingRight: 40, justifyContent: 'center'}}
                source={require('../assets/circle_blue.png')}>
                <Text style={{textAlign: 'center', fontSize: 14, fontFamily: 'poppins_bold', color: '#fff'}}>We will work for you to expose your skills to find the most reliable job opportunity in Australia and New Zealand.</Text>
            </ImageBackground>
            <Text style={{color: 'black', fontWeight: '600', fontSize:20, alignSelf: 'center', marginTop: 50}}>Welcome to</Text>
            <Image style={{ width: 300, height: 40, marginBottom: 130, alignSelf: 'center' }} source={require('../assets/logo.png')} alt={'Okay'} />
            <Pressable onPress={() => navigation.replace('Home')} style={{
                width: '85%',
                backgroundColor: '#13A3E1',
                alignItems: 'center',
                borderRadius: 25,
                paddingVertical: 15,
                alignSelf: 'center',
                elevation:10,
                zIndex: 1
            }}><Text style={{color: '#fff', fontWeight: '900', fontSize: 20}}>Continue</Text></Pressable>
        </View>
    )
}

export default OnBoarding
