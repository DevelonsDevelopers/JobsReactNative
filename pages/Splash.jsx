import {Button, Image, ImageBackground, Text, View} from "react-native";
import {useEffect} from "react";

function Splash({navigation}) {

    const sleep = ms =>
        new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {

        sleep(5000).then(() => {
            navigation.replace('UserType')
        });
    });

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <ImageBackground
                style={{width: 270, height: 282, paddingLeft: 20, paddingRight: 40, justifyContent: 'center'}}
                source={require('../assets/circle_blue.png')}>
                <Text style={{textAlign: 'center', fontSize: 18, fontFamily: 'poppins_semibold', color: '#fff'}}>We will
                    connect with hiring agencies, job banks and recruiters to place your CV</Text>
            </ImageBackground>
            <Image style={{width: 250, height: 150, marginTop: 0, alignSelf: 'center'}}
                   source={require('../assets/splash_icon.png')} alt={'Okay'}/>
            <Image style={{width: 250, height: 50, marginTop: 30, alignSelf: 'center', padding: 10}}
                   source={require('../assets/logo.png')} alt={'Okay'}/>
            <ImageBackground style={{width: 270, height: 287, marginTop: 'auto', marginLeft: 'auto', paddingTop: 30}}
                             source={require('../assets/circle_yellow.png')}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 22,
                    color: '#fff',
                    fontFamily: 'poppins_black',
                    alignSelf: 'center',
                    marginTop: 'auto',
                    marginRight: 20,
                    marginLeft: 40
                }}>Supercharge Your Job Search</Text>
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

export default Splash
