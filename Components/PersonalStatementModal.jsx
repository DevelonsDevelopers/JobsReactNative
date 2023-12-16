import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Modal, Pressable, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {useState} from "react";

const PersonalStatementModal = ({visible, toggleInfoVisibility, add ,data}) => {

    const [statement, setStatement] = useState()

    const Add = async () => {
        await add(statement)
        toggleInfoVisibility()
    }

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleInfoVisibility}>
              <TouchableWithoutFeedback onPress={toggleInfoVisibility}>
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
                   width:'90%'
                }}>
                    <Text style={{fontSize: 16, fontFamily: 'poppins_bold', marginBottom: 'auto', marginTop: 'auto'}}>Personal
                        Info</Text>
                    <TextInput onChangeText={text => setStatement(text)} multiline numberOfLines={10}
                               placeholder={'About Me'} style={{
                        width: '100%',
                        marginTop: 20,
                        borderColor: '#adadad',
                        borderRadius: 20,
                        borderWidth: 0.5,
                        textAlign: 'center',
                        fontSize: 13,
                        fontFamily: 'poppins_medium',
                        padding: 20,
                        marginBottom: 'auto'
                    }}>{data}</TextInput>

                    {data?.length > 0 ?
                            <Pressable onPress={() => Add()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 45
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Update</Text></Pressable>
                            :
                            <Pressable onPress={() => Add()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 45
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Add</Text></Pressable>
                        }
                </View>
                </View>
             </TouchableWithoutFeedback>
        </Modal>
    )
}

export default PersonalStatementModal
