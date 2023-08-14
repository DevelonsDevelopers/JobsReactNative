import { Image, Text } from 'react-native'
import React from 'react'
import { View } from 'react-native'

function Contactus({navigation}){
  return (
    <View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 40, }}>
                <Image style={{ width: 25, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/menu.png')} />
                <Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} />
                <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />
            </View>
            <Text style={{ fontSize: 23, fontWeight: 500, alignSelf: 'center' }}>Contact Us</Text>
            <Image style={{ alignSelf: 'center', marginTop:35, width: 115, height: 115 }} source={require('../assets/mail.png')} />
            <Text style={{ fontSize: 17, fontWeight: 500, alignSelf: 'center' }}>developer@gmail.com</Text>
            <Image style={{ alignSelf: 'center', marginTop:55, width: 120, height: 120 }} source={require('../assets/call.png')} />
            <Text style={{ fontSize: 17, fontWeight: 500, alignSelf: 'center', marginTop: 25 }}>+83 - 37483893932</Text>
            <Image style={{ alignSelf: 'center', marginTop:55, width: 120, height: 120 }} source={require('../assets/iicon.png')} />
            <Text style={{ fontSize: 17, fontWeight: 500, alignSelf: 'center', marginTop: 22 }}>267 -  D Newyork USA</Text>
    </View>
  )
}

export default Contactus