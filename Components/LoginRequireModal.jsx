import React from 'react'
import { Image, Modal, Pressable, Text, View } from "react-native";

function LoginRequireModal({ toggleRequireVisible, visible, navigation }) {
    return (
        <Modal visible={visible} animationType={"fade"} transparent={true}>
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
                <View style={{ margin: 35, elevation: 24, borderRadius: 15, backgroundColor: '#fff', opacity: 1, padding: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30 }}>
                    <Image style={{ width: 160, height: 150 }} source={require('../assets/login.png')} />
                    <Text style={{ paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', marginTop: 10 }}>Would you like to login now or later ?</Text>
                    <View style={{ flexDirection: 'row', paddingBottom: 20, paddingTop: 10, gap: 30 }}>
                        <Pressable onPress={() => {
                            toggleRequireVisible()
                            navigation.push('UserType')
                        }}>
                            <Text style={{ backgroundColor: '#13A3E1', color: 'white', paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', width: 130, textAlign: 'center', borderRadius: 20 }}>Login </Text>
                        </Pressable>
                        <Text onPress={() => toggleRequireVisible()} style={{ backgroundColor: 'white', color: 'black', paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', width: 130, textAlign: 'center', borderRadius: 20, borderWidth: 1 }}>Later</Text>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default LoginRequireModal
