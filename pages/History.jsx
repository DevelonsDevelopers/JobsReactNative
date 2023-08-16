import { Image, Text, TextInput } from 'react-native'
import React from 'react'
import { Pressable, View } from 'react-native'
import Contactus from './Contactus'

const History = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#EAEAEA' }}>
    <View style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
        <Image style={{ width: 40, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/back_arrow.png')} />
        <Pressable onPress={() => navigation.push('PostJob')}>
        <Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} />
        </Pressable>
        <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />
    </View>
    <View>
        <TextInput style={{ backgroundColor: '#fff', marginHorizontal: 30, height: 50, borderRadius: 25, paddingHorizontal: 20, marginTop: 30 }} placeholder={'Search'} />
        <Image style={{ position: "relative", top: -35.5, left: 335, width: 25, height: 25 }} source={require('../assets/search-interface-symbol.png')} />
        <Text style={{ fontFamily: 'poppins_medium', fontSize: 20, fontWeight: '800', width: '100%', textAlign: 'center', marginTop: 0, padding: 0 }}>History</Text>
    </View>
    <View style={{ backgroundColor: '#fff', borderRadius: 5, padding: 23, borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: 9 }}>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 0 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>Android</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 200, fontFamily: 'poppins_light' }}>1 Day Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 9, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>React</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 218, fontFamily: 'poppins_light' }}>2 Day Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>React Native</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 152, fontFamily: 'poppins_light' }}>2 Day Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 19, fontWeight: 600, fontFamily: 'poppins_medium' }}>React.Js</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 182, fontFamily: 'poppins_light' }}>3 Day Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>Web</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 229, fontFamily: 'poppins_light' }}>5 Day Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>React API</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 183, fontFamily: 'poppins_light' }}>A Week Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>API</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 243, fontFamily: 'poppins_light' }}>2 Week Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>Node</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 222, fontFamily: 'poppins_light' }}>3 Week Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>Node.Js</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 198, fontFamily: 'poppins_light' }}>1 Month Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ fontSize: 17, fontWeight: 600, fontFamily: 'poppins_medium' }}>Developer</Text>
            <Text style={{ marginTop: 4, fontSize: 13, fontWeight: 200, marginLeft: 176, fontFamily: 'poppins_light' }}>2 Month Ago</Text>
        </View>
        <View style={{ backgroundColor: '#CCCCCC', width: 358, height: 2, marginTop: 10, marginLeft: 6 }}>
        </View>
        
        
    </View>
</View>
  )
}

export default History