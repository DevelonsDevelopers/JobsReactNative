import { Image, TextInput, Text, Pressable } from 'react-native'
import React from 'react'
import { View } from 'react-native'
import Termsandconditions from './Termsandconditions'

function Categories({ navigation }) {
    return (
        <View style={{ backgroundColor: '#EAEAEA', height: 1200 }}>
            <View style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
                <Image style={{ width: 40, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/back_arrow.png')} />
                <Pressable onPress={() => navigation.push('Termsandconditions') } >
                <Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} />
                </Pressable>
                <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />
            </View>
            <View>
                <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 30, height: 50, borderRadius: 25, paddingHorizontal: 20, marginTop: 30 }} placeholder={'Search'} />
                <Image style={{ position: "relative", top: -35.5, left: 335, width: 25, height: 25 }} source={require('../assets/search-interface-symbol.png')} />
                <Text style={{ fontFamily: 'poppins_medium', fontSize: 20, fontWeight: '800', width: '100%', textAlign: 'center', marginTop: 0, paddingBottom: 10 }}>Category</Text>
            </View>
            <View style={{ display:'flex', flexDirection: 'row' }}>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 27}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/marketing.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Marketing</Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 15}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/healthcare.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Health & Beauty</Text>
              </View>
            </View>
            <View style={{ display:'flex', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', borderRadius: 15, marginLeft: 27}}>
                <Image style={{ width: 65, height: 65, marginTop: 5, padding: 15 }} source={require('../assets/infrastructure.png')} />
                <Text style={{ fontSize: 12, fontWeight: 600, marginTop: 12 }}>IT & Communications</Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 15}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/accounting.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Accounting</Text>
              </View>
            </View>
            <View style={{ display:'flex', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', borderRadius: 15, marginLeft: 27}}>
                <Image style={{ width: 65, height: 65, marginTop: 5, padding: 15 }} source={require('../assets/engineering.png')} />
                <Text style={{ fontSize: 12, fontWeight: 600, marginTop: 12 }}>Engineering</Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 15}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/science.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Science</Text>
              </View>
            </View>
            <View style={{ display:'flex', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', borderRadius: 15, marginLeft: 27}}>
                <Image style={{ width: 65, height: 65, marginTop: 5, padding: 15 }} source={require('../assets/medical.png')} />
                <Text style={{ fontSize: 12, fontWeight: 600, marginTop: 12 }}>Engineering</Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 15}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/security.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Security</Text>
              </View>
            </View>
            <View style={{ display:'flex', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', borderRadius: 15, marginLeft: 27}}>
                <Image style={{ width: 65, height: 65, marginTop: 5, padding: 15 }} source={require('../assets/teaching.png')} />
                <Text style={{ fontSize: 12, fontWeight: 600, marginTop: 12 }}>Teaching</Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 15}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/manufacturing.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Manufacturing</Text>
              </View>
            </View>
            <View style={{ display:'flex', flexDirection: 'row', marginTop: 10 }}>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', borderRadius: 15, marginLeft: 27}}>
                <Image style={{ width: 65, height: 65, marginTop: 5, padding: 15 }} source={require('../assets/driving.png')} />
                <Text style={{ fontSize: 12, fontWeight: 600, marginTop: 12 }}>Driving</Text>
              </View>
              <View style={{ backgroundColor: '#fff', width: 170, height: 120, alignItems: 'center', padding: 15, borderRadius: 15, marginLeft: 15}}>
                <Image style={{ width: 50, height: 50, marginTop: 5 }} source={require('../assets/services.png')} />
                <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 12 }}>Services</Text>
              </View>
            </View>
        </View>
    )
}

export default Categories
