import React from 'react'
import {Image, Modal, Pressable, Text, TouchableWithoutFeedback, View} from 'react-native'

const GenderModal = ({visible, toggleVisibility, set}) => {

    const selectGender = (gender) => {
        set(gender)
        toggleVisibility()
    }

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleVisibility}>
             <TouchableWithoutFeedback onPress={toggleVisibility}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
                    <Text style={{paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', marginTop: 10}}>Select
                        Your Gender </Text>
                    <Pressable onPress={() => selectGender('Male')}>
                        <View>
                            <Text style={{
                                marginTop: 10,
                                marginBottom: 10,
                                fontSize: 14,
                                fontFamily: 'poppins_medium'
                            }}>Male</Text>
                        </View>
                    </Pressable>
                    <Text style={{backgroundColor: "black", width: 200, height: 1}}>-</Text>
                    <Pressable onPress={() => selectGender('Female')}>
                        <View>
                            <Text style={{
                                marginTop: 10,
                                marginBottom: 10,
                                fontSize: 14,
                                fontFamily: 'poppins_medium'
                            }}>Female</Text>
                        </View>
                    </Pressable>
                    <Text style={{backgroundColor: "black", width: 200, height: 1}}>-</Text>
                    <Pressable onPress={() => selectGender('Rather not to say')}>
                        <View>
                            <Text style={{marginTop: 10, marginBottom: 10, fontSize: 14, fontFamily: 'poppins_medium'}}>Rather
                                Not To Say</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default GenderModal
