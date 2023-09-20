import React from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'

const data = [
	{ 'data': 'Enhanced domestic helicopter transfer sales by 60% in 2018/2019 via business-to-business concept ' },
	{ 'data': 'Implemented first helicopter medical evacuation service in Sri Lanka (2018) ' },
	{ 'data': 'Introduced media booth helicopter filming project for local television hostess (2018)   ' },
]


const ViewCoverLetter = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', height: 90 }}>
                <Pressable onPress={() => navigation.goBack()}
                    style={{ paddingRight: 5 }}><Image style={{
                        width: 22,
                        height: 20,
                        marginTop: 70,
                        marginLeft: 30,
                        tintColor: '#000'
                    }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                    <Pressable onPress={() => navigation.push('Home')}><Image
                        style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                        source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                </View>
            </View>


            <View style={{ marginTop: 40, paddingVertical: 10, borderRadius: 20 }}>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}> name</Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}> address</Text>
                <View style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black' }}> phone</Text>
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', color: 'black' }}> email</Text>
                </View>
            </View>
            <Text style={{ backgroundColor: 'gray', height: 1, marginTop: 10, marginHorizontal: 20 }}>-</Text>
            <View>
                <Text style={{ color: 'red', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>date</Text>
            </View>
            <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 15, marginHorizontal: 20 }}>Expression of interest: role</Text>
            <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>intro</Text>
            <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 15, marginHorizontal: 30 }}>body</Text>

            <SafeAreaView style={{ backgroundColor: '#D3D3D3', marginHorizontal: 40, marginVertical: 10, paddingBottom: 20, }}>
                <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={data} renderItem={({ item }) => (
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
                            {`\u2022 I was working as a  in  from `}
                        </Text>
                    )} />
            </SafeAreaView>


            <SafeAreaView style={{ paddingBottom: 20, }}>
                <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={data} renderItem={({ item }) => (
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 3, marginHorizontal: 30 }}>I hold a   degree completed in  at </Text>
                    )} />
            </SafeAreaView>

            <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: -3, marginHorizontal: 30 }}>I am available at short notice to attend an interview, and I look forward to hearing further on my application. </Text>
            <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', marginTop: 11, marginHorizontal: 30 }}>Your's Sincerly</Text>
            <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', marginTop: 10, marginHorizontal: 30, marginLeft: 'auto' }}> name</Text>
            <View style={{ flexDirection: "row", justifyContent: 'center',marginHorizontal:40 }}>
                <Ripple onPress={() => navigation.push('OfferSend')} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 6, }}>
                    <Text style={{ backgroundColor: 'green', color: 'white', fontSize: 16, fontFamily: 'poppins_bold', paddingTop: 9, paddingBottom: 9, borderRadius: 20, textAlign: 'center', paddingHorizontal: 20 }}>Send Offer</Text>
                </Ripple>
                <Ripple onPress={() => navigation.push('AppliedUsers')} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 6, }}>
                    <Text style={{ backgroundColor: 'red', color: 'white', fontSize: 16, fontFamily: 'poppins_bold', paddingTop: 9, paddingBottom: 9, borderRadius: 20, textAlign: 'center', paddingHorizontal: 40 }}>Ignore</Text>
                </Ripple>
            </View>
        </ScrollView>
    )
}

export default ViewCoverLetter
