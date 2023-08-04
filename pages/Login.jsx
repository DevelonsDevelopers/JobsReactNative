import {Image, Text, TextInput, View} from "react-native";

function Login() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffbf00' }}>
            <Text>Login</Text>
            <TextInput style={{ height: 40, backgroundColor: '#fff', width: '70%', borderRadius: 20, shadowColor: '#b9b9b9', shadowOffset: { width: 200, height: 30 } }}/>
        </View>
    );
}

export default Login
