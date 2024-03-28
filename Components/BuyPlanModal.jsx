import React, { useEffect, useState } from 'react'
import { Image, Modal, Pressable, Text, TouchableWithoutFeedback, View, TextInput, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'

const BuyPlanModal = ({ visible, toggleVisible ,navigation}) => {


    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleVisible}>
            <TouchableWithoutFeedback onPress={toggleVisible}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <View style={{
                        margin: 35,
                        elevation: 24,
                        borderRadius: 25,
                        backgroundColor: '#fff',
                        opacity: 1,
                        padding: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '90%'
                    }}>
                        <Pressable style={{ width: 15, height: 15, marginLeft: 'auto' }}
                            onPress={() => toggleVisible()}><Image
                                style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                source={require('../assets/close.png')} /></Pressable>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_medium' }}>Please Purchase a plan </Text>
                        <Text style={{ fontSize: 14, fontFamily: 'poppins_medium' , marginVertical:8 }}>Unlock premium features! Buy a plan to enjoy uninterrupted distribution and elevate your experience with us.</Text>
                        <View style={{ flexDirection: 'row', paddingBottom: 20, paddingTop: 10, gap: 20 }}>
                                <Text onPress={() => toggleVisible()} style={{ backgroundColor: 'white', color: 'black', paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', width: 130, textAlign: 'center', borderRadius: 10, borderWidth: 1 }}>Later</Text>
                                <TouchableOpacity rippleColor='white' onPress={() => {
                                    navigation.push('SeekerPlans') ,
                                    toggleVisible()
                                   
                                }} style={{ backgroundColor: '#13A3E1', paddingVertical: 7, width: 130, borderRadius: 10 }}>
                                    <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', }}>View Plans </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Toast position='top' bottomOffset={20} />

        </Modal>
    )
}

export default BuyPlanModal
