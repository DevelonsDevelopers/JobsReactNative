import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from "./pages/Splash";
import Login from "./pages/Login";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Splash} options={{title: "Splash", headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{title: "Login", headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
