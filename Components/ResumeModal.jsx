import React from 'react'
import { Text } from 'react-native'
import { Image } from 'react-native'
import { Pressable } from 'react-native'
import { View } from 'react-native'
import { Modal } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'

const ResumeModal = ({visible,toggleResumeVisibility}) => {
  return (
    <Modal visible={visible} animationType={"fade"} transparent={true}>
    <GestureHandlerRootView  style={{ flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
        <View style={{ margin: 35, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable style={{ width:15,height:15,marginLeft:'auto' }} onPress={() => toggleResumeVisibility()}><Image style={{ width:15,height:15,marginLeft:'auto' }} source={require('../assets/close.png')} /></Pressable>
            <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Resumes</Text>
            <TextInput placeholder={'Resume No 1'} style={{ width: '80%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5, height: 50, textAlign: 'center' }}></TextInput>
            <Pressable  onPress={() => toggleResumeVisibility()} style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>ADD</Text></Pressable>
        </View>
    </GestureHandlerRootView>
</Modal>
  )
}

export default ResumeModal
