import React from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'

const ApplyModal = ({visible,toggleVisible}) => {
  return (
    <Modal visible={visible} animationType={"fade"} transparent={true} >
    <GestureHandlerRootView style={{ flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)'}}>
        <View style={{ margin: 35, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, padding: 20, justifyContent: 'center', alignItems: 'center',height:500 }}>
               <Text style={{ fontSize: 16, fontFamily: 'poppins_bold',marginBottom:'auto',marginTop:'auto' }}>Why Me ?</Text>
            <TextInput multiline numberOfLines={17}  placeholder={'About Me'} style={{ width: '100%', marginTop: 20, borderColor: '#adadad', borderRadius: 20, borderWidth: 0.5,textAlign: 'center',fontSize:13,fontFamily:'poppins_medium',padding:20,marginBottom:'auto' }}></TextInput>
               <Pressable  onPress={() => toggleVisible() } style={{ paddingHorizontal: 60, paddingVertical: 13, backgroundColor: '#13A3E1', borderRadius: 25, marginTop: 10 }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Send</Text></Pressable>
        </View>
    </GestureHandlerRootView>
</Modal>
  )
}

export default ApplyModal
