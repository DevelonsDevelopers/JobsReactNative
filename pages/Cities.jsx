import { Image, TextInput, Text, Pressable } from 'react-native'
import { View } from 'react-native'
import React from 'react'
import Categories from './Categories'

function Cities({ navigation }) {
    return (
        <View style={{ backgroundColor: '#EAEAEA' }}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                <Image style={{ width: 41, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/back_arrow.png')} />
                <Pressable onPress={() => navigation.push('Categories')}>
                <Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} />
                </Pressable>
                <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />
            </View>
            <View>
                <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 30, height: 50, borderRadius: 25, paddingHorizontal: 20, marginTop: 30 }} placeholder={'Search'} />
                <Image style={{ position: "relative", top: -35.5, left: 335, width: 25, height: 25 }} source={require('../assets/search-interface-symbol.png')} />
                <Text style={{ fontFamily: 'poppins_medium', fontSize: 20, fontWeight: '800', width: '100%', textAlign: 'center', marginTop: 0, padding: 0 }}>Browse By Cities</Text>
            </View>
            <View style={{ backgroundColor: '#fff', borderRadius: 5, padding: 23, borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 9 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>Hong Kong</Text>
                    <Text style={{ marginTop: 4, fontSize: 15, fontWeight: 200, marginLeft: 30, fontFamily: 'poppins_light' }}>Country</Text>
                </View>
                <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 17, marginLeft: 6 }}>
                </View>
            </View>
        </View>
    )
}

export default Cities