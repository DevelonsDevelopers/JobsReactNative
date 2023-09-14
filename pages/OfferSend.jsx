import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import OfferModal from '../Components/OfferModal'
import ProposelModal from '../Components/ProposelModal'

const OfferSend = ({ navigation }) => {

    const [typeVisible, setTypeVisible] = useState(false)
    const toggleVisibility = () => setTypeVisible(!typeVisible)

    const [proposalVisible, setProposalVisible] = useState(false)
    const toggleProposelVisibility = () => setProposalVisible(!proposalVisible)

    return (

        <ScrollView>
            <OfferModal visible={typeVisible} toggleVisibility={toggleVisibility} />
            <ProposelModal visible={proposalVisible} toggleProposelVisibility={toggleProposelVisibility} />


            <View style={{
                flexDirection: 'column',
                width: '100%',
                height: 90,
                marginBottom:70
                
            }}>
                <View style={{ flexDirection: 'row', height: 130 }}>
                    <Pressable onPress={() => navigation.goBack()}
                        style={{ paddingRight: 5 }}><Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 20,
                            tintColor: 'gray'
                        }} source={require('../assets/back_arrow.png')}
                            alt={'Okay'} />
                    </Pressable>
                    <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                        <Image style={{
                            width: 150,
                            height: 40,
                            marginTop: 60,
                            alignSelf: 'center'
                        }}
                            source={require('../assets/logo.png')} alt={'Okay'} />
                    </View>
                </View>
               

               
            </View>
            <View style={{
                flexDirection: 'column',
                borderColor: '#b2b2b2',
                backgroundColor: '#fff',
                padding: 20,
                marginHorizontal: 10,
                marginRight: 30,
                marginLeft: 30,
                borderRadius: 30,
                marginTop: 20
            }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontFamily: 'poppins_bold',
                        fontSize: 16
                    }}>Offer Type</Text>
                   
                </View>
                <TextInput onTouchStart={() => toggleVisibility()} style={{ flex: 1, textAlign: 'center', color: '#757575', fontFamily: 'poppins_light', margin: 15 }}>Offer Type</TextInput>
            </View>
            <View style={{
                flexDirection: 'column',
                borderColor: '#b2b2b2',
                backgroundColor: '#fff',
                padding: 20,
                marginHorizontal: 10,
                marginRight: 30,
                marginLeft: 30,
                borderRadius: 30,
                marginTop: 20,
               
            }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        fontFamily: 'poppins_bold',
                        fontSize: 16
                    }}>Proposel</Text>

                </View>
                <View >
                <TextInput style={{ textAlign:'center',borderWidth:0.2,borderColor:'gray',borderRadius:18,marginTop:15 }} placeholder='write Your proposal' numberOfLines={17} />
                </View>

            </View>
             <Pressable onPress={() => navigation.push('Resume')} style={{
                    backgroundColor: '#13A3E1',
                    borderRadius: 25,
                    alignItems: 'center',
                    padding: 15,
                    marginTop: 65,
                    marginHorizontal: 100
                }}><Text style={{ color: '#ffff', fontSize: 15,fontFamily:'poppins_medium' }}>
                        Send Offer  </Text></Pressable>
        </ScrollView>
    )
}

export default OfferSend
