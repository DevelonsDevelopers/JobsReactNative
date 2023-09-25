import React from 'react'
import { Modal, Text, View } from 'react-native'

const ContactModal = ({toggleVisible,visible}) => {
    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleVisible}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
            <View style={{ marginHorizontal: 20, elevation: 24, borderRadius: 25, backgroundColor: '#fff', opacity: 1, height: 450, }}>

                <Text style={{ textAlign: 'center', fontFamily: 'poppins_semibold', fontSize: 16, marginLeft: 10, }}>Please complete your profile.</Text>

            </View>
        </View>
    </Modal>
    )
}

export default ContactModal
