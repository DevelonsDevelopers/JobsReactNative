import {Button, Image, View} from "react-native";
import {useEffect} from "react";

function Splash({ navigation }) {

    const sleep = ms =>
        new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {

        sleep(5000).then(() => {
            navigation.replace('Login')
        });
    });

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffbf00' }}>
            <Image style={{ width: 300, height: 40 }} source={require('../assets/logo.png')} alt={'Okay'} />
        </View>
    );
}

export default Splash
