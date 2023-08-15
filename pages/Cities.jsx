import {Image, TextInput, Text, Pressable, FlatList, ScrollView, SafeAreaView} from 'react-native'
import {View} from 'react-native'
import React from 'react'
import Categories from './Categories'

const data = [
    {"city": "Lahore", "country": 'Pakistan'},
    {"city": "Sydney", "country": 'Australia'},
    {"city": "Delhi", "country": 'India'},
    {"city": "Beijing", "country": 'China'},
    {"city": "Al Ain", "country": 'UAE'},
    {"city": "London", "country": 'UK'},
    {"city": "New York", "country": 'USA'},
    {"city": "Lahore", "country": 'Pakistan'},
    {"city": "Sydney", "country": 'Australia'},
    {"city": "Delhi", "country": 'India'},
    {"city": "Beijing", "country": 'China'},
    {"city": "Al Ain", "country": 'UAE'},
    {"city": "London", "country": 'UK'},
    {"city": "New York", "country": 'USA'}
]

function Cities({navigation}) {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        <View style={{backgroundColor: '#F1F1F1'}}>
            <View style={{flexDirection: 'row', height: 90}}>
                <Pressable onPress={() => toggleVisibility()}><Image style={{
                    width: 22,
                    height: 20,
                    marginTop: 70,
                    marginLeft: 30,
                    tintColor: '#000'
                }} source={require('../assets/back_arrow.png')} alt={'Okay'}/></Pressable>
                <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                    <Pressable onPress={() => navigation.push('Jobs')}><Image
                        style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                        source={require('../assets/logo.png')} alt={'Okay'}/></Pressable>
                </View>
            </View>
            {/*<View style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>*/}
            {/*    <Image style={{ width: 40, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/back_arrow.png')} />*/}
            {/*    <Pressable onPress={() => navigation.push('Categories')}>*/}
            {/*    <Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} />*/}
            {/*    </Pressable>*/}
            {/*    <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />*/}
            {/*</View>*/}
            <View>
                <TextInput style={{
                    backgroundColor: '#fff',
                    marginHorizontal: 30,
                    height: 50,
                    borderRadius: 25,
                    paddingHorizontal: 20,
                    marginTop: 30,
                    borderColor: 'black',
                    fontSize: 17,
                    elevation: 10
                }} placeholder={'Search'}/>
                <Text style={{
                    fontSize: 18,
                    fontFamily: 'poppins_bold',
                    width: '100%',
                    textAlign: 'center',
                    marginVertical: 20,
                    padding: 0
                }}>Browse by Cities</Text>
            </View>
            <SafeAreaView style={{
                backgroundColor: '#fff',
                borderRadius: 5,
                padding: 23,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                marginTop: 9
            }}>
                <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    style={{marginHorizontal: 0, marginTop: 10}} data={data} renderItem={({item}) => (
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 15, fontWeight: 600, fontFamily: 'poppins_semibold'}}>{item.city}</Text>
                            <Text style={{
                                marginTop: 4,
                                fontSize: 15,
                                fontFamily: 'poppins_light',
                                marginHorizontal: 15
                            }}>-</Text>
                            <Text style={{fontSize: 12, fontWeight: 200, fontFamily: 'poppins_light'}}>{item.country}</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#777777',
                            height: 0.5,
                            marginHorizontal: 10,
                            marginVertical: 5
                        }}></View>
                    </View>
                )}/>
            </SafeAreaView>
        </View>
        </ScrollView>
    )
}

export default Cities
