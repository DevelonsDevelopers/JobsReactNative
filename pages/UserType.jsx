import { Image, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import Ripple from "react-native-material-ripple";

function UserType({ navigation }) {
    
    return (
        <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Ripple rippleColor="white" onPress={() => navigation.navigate('Login', { USER: 'PROVIDER' })} style={{
                alignItems: 'center',
                backgroundColor: '#13A3E1',
                paddingVertical: 10,
                borderRadius: 25,
                marginTop: 5,
                elevation: 10,
                marginHorizontal: 80,
                zIndex: 1
            }}>
                <Image style={{ width: 70, height: 70 }} source={require('../assets/provider.png')} />
                <Text style={{ fontSize: 15, color: '#fff', marginTop: 10, fontFamily: 'poppins_black' }}> Login as</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginTop: 1, fontFamily: 'poppins_black' }}>Job
                    Provider</Text>
            </Ripple>
            <Ripple rippleColor="white" onPress={() => navigation.navigate('Login', { USER: 'SEEKER' })} style={{
                alignItems: 'center',
                backgroundColor: '#13A3E1',
                paddingVertical: 10,
                borderRadius: 25,
                marginTop: 20,
                elevation: 10,
                marginHorizontal: 80,
                zIndex: 1
            }}>
                <Image style={{ width: 70, height: 70 }} source={require('../assets/seeker.png')} />
                <Text style={{ fontSize: 15, color: '#fff', marginTop: 10, fontFamily: 'poppins_black' }}> Login as</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginTop: 1, fontFamily: 'poppins_black', textAlign: 'center' }}>Job
                    Seeker</Text>
            </Ripple>

        </View>
    );
}

export default UserType
