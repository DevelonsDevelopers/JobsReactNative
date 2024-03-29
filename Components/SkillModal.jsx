import React, { useEffect, useState } from 'react'
import { Image, Modal, Pressable, Text, TouchableWithoutFeedback, View, TextInput } from 'react-native'
import Toast from 'react-native-toast-message';

const SkillModal = ({ visible, toggleSkillVisibility, add, edit, data }) => {

    const [skill, setSkill] = useState('');

    useEffect(() => {
        if (data !== null) {
            setSkill(data.skill)
        }
    }, [data]);

    const Add = () => {
        if (skill.length >= 2) {
            if (data?.status === 0) {
                edit(skill, data.id)
            } else {
                add(skill)
            }
            toggleSkillVisibility()
        } else {
            Toast.show({ type: 'error', position: 'top', text1: 'Please Enter Your Skill' })
        }
    }
    console.log(data?.status)

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleSkillVisibility}>
            <TouchableWithoutFeedback onPress={toggleSkillVisibility}>
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
                        <Pressable style={{ width: 15, height: 15, marginLeft: 'auto', padding: 20 }}
                            onPress={() => toggleSkillVisibility()}><Image
                                style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                source={require('../assets/close.png')} /></Pressable>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Skills</Text>
                        <TextInput onChangeText={text => setSkill(text)} placeholder={'Enter Your Skills'} style={{
                            width: '80%',
                            marginTop: 20,
                            borderColor: '#adadad',
                            borderRadius: 20,
                            borderWidth: 0.5,
                            height: 50,
                            textAlign: 'center'
                        }}>{data?.skill}</TextInput>

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

export default SkillModal
