import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modal, Pressable, Text, TextInput, View, Image, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";

const RoleModal = ({ visible, toggleRoleVisibility, add, data }) => {

    const [role, setRole] = useState()

    const AddRole = () => {
        if (role?.length >= 3) {
            add(role)
            toggleRoleVisibility()
        } else {
            Toast.show({ position: 'top', type: 'error', text1: 'Please Enter Role' })
        }
    }

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleRoleVisibility}>
            {/* <TouchableWithoutFeedback onPress={toggleRoleVisibility}> */}
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

                    }}>
                        <View style={{ flexDirection: 'row', width: '60%', marginLeft: 120, }}>
                            <Text style={{ fontSize: 16, fontFamily: 'poppins_bold', textAlign: 'center', margin: 'auto' }}>Role</Text>
                            <Pressable onPress={() => toggleRoleVisibility()}
                                style={{ padding: 10, marginLeft: 'auto', marginTop: -5 }}>
                                <Image style={{ width: 15, height: 15, }}
                                    source={require('../assets/close.png')} />
                            </Pressable>
                        </View>
                        <TextInput onChangeText={text => setRole(text)} numberOfLines={1}
                            placeholder={'Your Role Here'} style={{
                                width: 240,
                                marginTop: 40,
                                borderColor: '#adadad',
                                borderRadius: 20,
                                borderWidth: 0.5,
                                textAlign: 'left',
                                fontSize: 13,
                                fontFamily: 'poppins_medium',
                                padding: 20,

                            }}>{data}</TextInput>
                        {data?.length > 0 ?
                            <Pressable onPress={() => AddRole()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 45
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Update</Text></Pressable>
                            :
                            <Pressable onPress={() => AddRole()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 45
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Add</Text></Pressable>
                        }

                    </View>
                </View>
                <Toast position='top' bottomOffset={20} />
            {/* </TouchableWithoutFeedback> */}
        </Modal>
    )
}

export default RoleModal
