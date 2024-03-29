import React, { useEffect, useState } from 'react'
import { Image, Modal, Pressable, Text, TouchableWithoutFeedback, View, TextInput } from 'react-native'
import Toast from 'react-native-toast-message';

const LanguageModal = ({ visible, toggleLanguageVisibility, add, edit, data }) => {

    const [language, setLanguage] = useState('');

    useEffect(() => {
        if (data !== null) {
            setLanguage(data.language)
        }
    }, [data]);

    const Add = () => {

        if (language.length >= 2) {
            if (data?.status === 0) {
                edit(language, data.id)
            } else {
                add(language)
            }
            toggleLanguageVisibility()
        } else {
            Toast.show({ position: 'top', type: 'error', text1: 'Please Enter Your Language' })
        }



    }

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleLanguageVisibility}>
            <TouchableWithoutFeedback onPress={toggleLanguageVisibility}>
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
                        <Pressable style={{ width: 15, height: 15, marginLeft: 'auto', padding: 10 }}
                            onPress={() => toggleLanguageVisibility()}><Image
                                style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                source={require('../assets/close.png')} /></Pressable>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Languages</Text>
                        <TextInput onChangeText={text => setLanguage(text)} placeholder={'Enter Your Language'} style={{
                            width: '80%',
                            marginTop: 20,
                            borderColor: '#adadad',
                            borderRadius: 20,
                            borderWidth: 0.5,
                            height: 50,
                            textAlign: 'center'
                        }}>{data?.language}</TextInput>

                        {data?.status === 0 ?
                            <Pressable onPress={() => Add()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 10
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Update</Text></Pressable>
                            :
                            <Pressable onPress={() => Add()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 10
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Add</Text></Pressable>
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Toast position='top' bottomOffset={20} />
        </Modal>
    )
}

export default LanguageModal
