import { Image, TextInput, Text, Pressable } from "react-native";
import React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";

function Companies({navigation}){
    return ( 
        <View style={{ backgroundColor: '#EAEAEA'}}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 40, }}>
                <Image style={{ width: 40, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/back_arrow.png')} />
                <Pressable onPress={() => navigation.push('Cities')}><Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} /></Pressable>
                <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />
            </View>
            <View>
            <TextInput style={{backgroundColor: '#fff',marginHorizontal: 30, height: 50, borderRadius: 25,paddingHorizontal: 20, marginTop: 30, borderColor: 'black', fontSize: 17}} placeholder={'Search'}/>
                    <Image style={{ position: "relative", top: -35.5, left: 335, width: 25, height: 25 }} source={require('../assets/search-interface-symbol.png')}/>
                    <Text style={{ fontSize: 20, fontWeight: '800', width: '100%', textAlign: 'center', marginTop:0, padding:0 }}>Browse by Companies</Text>
            </View>
            <View style={{ marginLeft:25, marginRight:25, marginTop:14, borderWidth: 1, borderColor: '#4C4C4C', borderRadius: 12, padding: 15, display: "flex", flexDirection: "row", backgroundColor: '#fff' }}>
                <Image style={{ width: 45, height: 45, marginLeft: 10 }} source={require('../assets/fblogosquare.png')}/>
                <Text style={{ marginTop: 8, fontSize: 20, fontWeight: '700', marginLeft: 55 }}>UI/UX Designer</Text>
            </View>
            <View style={{ marginLeft:25, marginRight:25, marginTop:14, borderWidth: 1, borderColor: '#4C4C4C', borderRadius: 8, padding: 15, display: "flex", flexDirection: "row", backgroundColor: '#fff' }}>
                <Image style={{ width: 45, height: 45, marginLeft: 10 }} source={require('../assets/fblogosquare.png')}/>
                <Text style={{ marginTop: 8, fontSize: 20, fontWeight: '700', marginLeft: 55 }}>UI/UX Designer</Text>
            </View>
            <View style={{ marginLeft:25, marginRight:25, marginTop:14, borderWidth: 1, borderColor: '#4C4C4C', borderRadius: 8, padding: 15, display: "flex", flexDirection: "row", backgroundColor: '#fff' }}>
                <Image style={{ width: 45, height: 45, marginLeft: 10 }} source={require('../assets/fblogosquare.png')}/>
                <Text style={{ marginTop: 8, fontSize: 20, fontWeight: '700', marginLeft: 55 }}>UI/UX Designer</Text>
            </View>
            <View style={{ marginLeft:25, marginRight:25, marginTop:14, borderWidth: 1, borderColor: '#4C4C4C', borderRadius: 8, padding: 15, display: "flex", flexDirection: "row", backgroundColor: '#fff' }}>
                <Image style={{ width: 45, height: 45, marginLeft: 10 }} source={require('../assets/fblogosquare.png')}/>
                <Text style={{ marginTop: 8, fontSize: 20, fontWeight: '700', marginLeft: 55 }}>UI/UX Designer</Text>
            </View>
            <View style={{ marginLeft:25, marginRight:25, marginTop:14, borderWidth: 1, borderColor: '#4C4C4C', borderRadius: 8, padding: 15, display: "flex", flexDirection: "row", backgroundColor: '#fff' }}>
                <Image style={{ width: 45, height: 45, marginLeft: 10 }} source={require('../assets/fblogosquare.png')}/>
                <Text style={{ marginTop: 8, fontSize: 20, fontWeight: '700', marginLeft: 55 }}>UI/UX Designer</Text>
            </View>
            <View style={{ marginLeft:25, marginRight:25, marginTop:14, borderWidth: 1, borderColor: '#4C4C4C', borderRadius: 8, padding: 15, display: "flex", flexDirection: "row", backgroundColor: '#fff' }}>
                <Image style={{ width: 45, height: 45, marginLeft: 10 }} source={require('../assets/fblogosquare.png')}/>
                <Text style={{ marginTop: 8, fontSize: 20, fontWeight: '700', marginLeft: 55 }}>UI/UX Designer</Text>
            </View>
        </View>
    )
}

export default Companies