import React from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const GoogleRegister = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#F0A51E' }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{
                    color: 'white',
                    fontFamily: 'poppins_bold',
                    fontSize: 17,
                    width: 250,
                    textAlign: 'center',
                    marginBottom: 10,

                }}>
                    Please Complete Your Profile !!!
                </Text>
                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10,
                    marginTop: 90
                }} placeholder={'Enter your Company name'} />

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    backgroundColor: '#fff',
                    elevation: 10,
                    borderRadius: 25,
                    width: '85%',
                    paddingRight: 20
                }}>
                    <TextInput style={{
                        height: 50,
                        paddingHorizontal: 20,
                        color: '#626262',
                        flex: 1
                    }} placeholder={'Enter your Company size'} />

                </View>


                <Pressable style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 50,
                    paddingVertical: 15
                }}><Text style={{ color: '#fff', fontWeight: '900', fontSize: 15 }}>Continue</Text></Pressable>

            </View>
        </View>
    )
}

export default GoogleRegister
