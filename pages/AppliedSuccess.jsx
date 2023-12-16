import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const AppliedSuccess = ({ navigation }) => {


    const handleNavigate = () => {
        navigation.popToTop('Home')
        // navigation.replace('Home')
    }


    return (
        <View>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 150
            }}>
                <Image source={require('../assets/tick.png')} style={{ marginTop: 20, width: 220, height: 240, tintColor: '#13A3E1' }} />
                <Text style={{ textAlign: 'center', fontSize: 16, fontFamily: 'poppins_medium', marginTop: 20 }}>Job Applied Successfully</Text>
                <Pressable onPress={() => handleNavigate()}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontFamily: 'poppins_medium',
                            backgroundColor: '#13A3E1',
                            color: 'white',
                            marginTop: 100,
                            borderRadius: 20,
                            paddingVertical: 10,

                        }}>Done</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AppliedSuccess
