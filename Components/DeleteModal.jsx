import React from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'

const DeleteModal = ({ visible, toggleVisibility }) => {
    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleVisibility}>
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(66, 66, 66, 0.4)'
            }}>
                <View style={{
                    margin: 35,
                    elevation: 24,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    opacity: 1,
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 30
                }}>
                    <Image source={require('../assets/alert.png')} style={{ width: 45, height: 45 }} />
                    <Text style={{ fontSize: 19, fontFamily: 'poppins_medium', color: 'gray', marginVertical: 20 }} >Are you sure ?</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'gray', marginTop: 10 }}>Do you really want to delete these records?This</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'gray', marginBottom: 30 }}>process cannot be undone.</Text>
                    <View style={{ flexDirection: 'row', gap: 40 }}>
                        <Text onPress={() => toggleVisibility()} style={{ backgroundColor: '#C1C1C1', color: 'white', fontFamily: 'poppins_medium', fontSize: 17, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 6 }}>Cancel</Text>
                        <Text onPress={() => toggleVisibility()} style={{ backgroundColor: '#F15E5E', color: 'white', fontFamily: 'poppins_medium', fontSize: 17, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 6 }}>Delete</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteModal
