import React from 'react'
import {Image, Modal, Pressable, Text, View} from 'react-native'

const OfferModal = ({visible,toggleVisibility}) => {
  return (
    <Modal visible={visible} animationType={"fade"} transparent={true}>
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
            <View style={{flexDirection: 'row',width:'100%'}}>
                <Text style={{
                    paddingVertical: 7,
                    fontSize: 16,
                    fontFamily: 'poppins_medium',
                    marginTop: 10,
                    textAlign:'center',
                    width:'100%'
                }}>Offer Type </Text>
                <View style={{marginLeft:'auto'}}>
                    <Pressable onPress={() => toggleVisibility()} style={{paddingLeft: 10}}>
                        <Image style={{width: 15, height: 15,marginTop:10}}
                               source={require('../assets/close.png')}/></Pressable>
                </View>
            </View>
            <Pressable >
                <View>
                    <Text style={{
                        marginTop: 30,
                        marginBottom: 10,
                        fontSize: 14,
                        fontFamily: 'poppins_medium'
                    }}>Invitation for Interview</Text>
                </View>
            </Pressable>
            <Text style={{backgroundColor: "black", width: 200, height: 1}}>-</Text>
            <Pressable >
                <View>
                    <Text style={{
                        marginTop: 10,
                        marginBottom: 10,
                        fontSize: 14,
                        fontFamily: 'poppins_medium'
                    }}>Request for Inquiry</Text>
                </View>
            </Pressable>
            <Text style={{backgroundColor: "black", width: 200, height: 1}}>-</Text>
            <Pressable >
                <View>
                    <Text style={{
                        marginTop: 10,
                        marginBottom: 10,
                        fontSize: 14,
                        fontFamily: 'poppins_medium'
                    }}>Hiring Offer</Text>
                </View>
            </Pressable>
        </View>
    </View>
</Modal>
  )
}

export default OfferModal
