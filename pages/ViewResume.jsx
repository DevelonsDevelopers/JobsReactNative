import React from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Resume from './Resume'

const skills = [
    { 'skill': 'react' },
    { 'skill': 'react' },
    { 'skill': 'react' },
    { 'skill': 'react' },
    { 'skill': 'react' },
    { 'skill': 'react' },
]
const careers = [
    { "job": "react", 'timeperiod': '2021-2022', 'company': 'technomentor', 'address': 'lahore' },
    { "job": "react", 'timeperiod': '2021-2022', 'company': 'technomentor', 'address': 'lahore' },
    { "job": "react", 'timeperiod': '2021-2022', 'company': 'technomentor', 'address': 'lahore' },
    { "job": "react", 'timeperiod': '2021-2022', 'company': 'technomentor', 'address': 'lahore' },
]
const educations = [
    { 'qualification': 'Matric', 'institute': 'LGS', 'timeperiod': '2021-2022', 'course': 'Fron-end' },
    { 'qualification': 'Inter', 'institute': 'LGS', 'timeperiod': '2021-2022', 'course': 'Back-end' },
    { 'qualification': 'Matric', 'institute': 'LGS', 'timeperiod': '2021-2022', 'course': 'Fron-end' },

]


const ViewResume = () => {
    return (
        <ScrollView>
            <View style={{
                flexDirection: 'column',
                width: '100%',
                height: 90,
                marginBottom: 40
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
            <Text style={{ textAlign: 'center', fontSize: 19, fontFamily: 'poppins_semibold' }}>Resume</Text>
            <View style={{ marginTop: 10, paddingVertical: 10, marginHorizontal: 0, backgroundColor: 'white', width: '87%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}>Developer</Text>
                <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}>Lahore,Pakistan</Text>
                <View style={{ flexDirection: "row", justifyContent: 'center', gap: 20, marginTop: 5 }}>
                    <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'black' }}>111-222-333-444</Text>
                    <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'black' }}>developer@gmail.com</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 20, backgroundColor: 'white', width: '87%', marginLeft: 'auto', marginRight: 'auto',  }}>
                <Text style={{ backgroundColor: 'black', height: 1, marginTop: 10, paddingHorizontal: 20 }}>-</Text>
                <Text style={{ textAlign: 'center', fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 10 }}>SALES AND MARKETING COORDINATOR / ACCOUNT MANAGER</Text>
                <Text style={{ backgroundColor: 'black', height: 1, marginTop: 10, paddingHorizontal: 20 }}>-</Text>

                <Text style={{ fontSize: 11, fontFamily: 'poppins_semibold', marginVertical: 10 }}>statement</Text>
                <Text style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}>-</Text>
                <Text style={{ fontSize: 14, fontFamily: 'poppins_semibold', marginVertical: 10, textAlign: 'center' }}>Key Skills</Text>
                <Text style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}>-</Text>

                <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                        data={skills} numColumns={3} renderItem={({ item }) => (
                            <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
                                {`\u2022 ${item.skill}`}
                            </Text>
                        )} />
                </SafeAreaView>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', textAlign: 'center' }}>EMPLOYMENT HISTORY</Text>
                <Text style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}>-</Text>
                <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                        data={careers} renderItem={({ item }) => (
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                                        {item.job}
                                    </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', }}>
                                        {item.timeperiod}
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 10, fontFamily: 'poppins_medium' }}>
                                    Company : {item.company}
                                </Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 0, marginBottom: 0, padding: 0 }}>
                                        Address : {item.address}
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto', marginTop: 6, marginBottom: 6 }}>
                                    Phone : {item.phone}
                                </Text>
                                <Text style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}>-</Text>
                            </View>
                        )} />

                </ScrollView>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', textAlign: 'center' }}>QUALIFICATIONS</Text>
                <Text style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}>-</Text>
                <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                        data={educations} renderItem={({ item }) => (
                            <View >
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', }}>
                                        {item.qualification}
                                    </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                                        {item.institute}
                                    </Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                                        {item.timeperiod}
                                    </Text>
                                </View>

                            </View>
                        )} />
                </SafeAreaView>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', textAlign: 'center' }}>TRAINING COURSES</Text>
                <Text style={{ backgroundColor: 'black', height: 1, paddingHorizontal: 20 }}>-</Text>
                <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                        data={educations} renderItem={({ item }) => (
                            <View >
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', }}>
                                        {item.timeperiod}
                                    </Text>
                                    <Text>|</Text>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                                        {item.course}
                                    </Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                                        {item.institute}
                                    </Text>
                                </View>

                            </View>
                        )} />
                </SafeAreaView>
            </View>
            <View style={{ width:'50%',marginLeft:'auto',marginRight:'auto',marginTop:20,marginBottom:6 }}>
                <Text style={{ backgroundColor: '#13A3E1', color: 'white', fontSize: 16, fontFamily: 'poppins_bold', paddingTop: 9, paddingBottom: 9, borderRadius: 20,textAlign:'center' }}>Send Hire Offer</Text>
            </View>


        </ScrollView>
    )
}

export default ViewResume
