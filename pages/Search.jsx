import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Resume from "./Resume";
import BottomSheet from "react-native-simple-bottom-sheet";

const data = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
]

function Search({ navigation }) {
    const[partTime,setPartTime] = useState ()
    const[fullTime,setfullTime] = useState ()
    const[remote,setReomote] = useState ()
  

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
                <View style={{ backgroundColor: '#EAEAEA' }}>
                    <View style={{ flexDirection: 'row', height: 90 }}>
                        <Pressable onPress={() => toggleVisibility()}><Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            tintColor: '#000'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Pressable onPress={() => navigation.push('AdvanceSearch')}><Image
                                style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                        </View>
                    </View>
                    <View>
                        <TextInput style={{
                            backgroundColor: '#fff',
                            marginHorizontal: 30,
                            height: 50,
                            borderRadius: 25,
                            paddingHorizontal: 20,
                            marginTop: 30,
                            elevation: 10
                        }} placeholder={'Search'} />
                    </View>
                    <SafeAreaView>
                        <FlatList nestedScrollEnabled={false} scrollEnabled={false}
                            style={{ marginHorizontal: 0, marginTop: 20 }} data={data} renderItem={({ item }) => (
                                <View style={{
                                    marginLeft: 25,
                                    marginRight: 25,
                                    marginBottom: 8,
                                    borderColor: '#4C4C4C',
                                    borderRadius: 15,
                                    paddingHorizontal: 25,
                                    paddingVertical: 15,
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: '#fff'
                                }}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <Text style={{
                                            color: '#207A00',
                                            backgroundColor: 'rgba(0,180,18,0.2)',
                                            paddingHorizontal: 10,
                                            paddingTop: 4,
                                            fontSize: 10,
                                            fontFamily: 'poppins_medium',
                                            borderRadius: 5
                                        }}>NEW</Text>
                                        <Text style={{
                                            marginLeft: 'auto',
                                            textAlign: 'right',
                                            fontFamily: 'poppins_medium',
                                            fontSize: 13
                                        }}>Today</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 0.8 }}>
                                            <Text numberOfLines={1}
                                                style={{ fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15 }}>Need
                                                Android Developer</Text>
                                            <Text style={{
                                                fontFamily: 'poppins_regular',
                                                marginTop: 0,
                                                fontSize: 12
                                            }}>Facebook</Text>
                                        </View>
                                        <Image style={{ width: 20, height: 20, marginLeft: 'auto', marginTop: 10 }}
                                            source={require('../assets/bookmarkIcon.png')} />
                                    </View>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <Text style={{
                                            fontFamily: 'poppins_bold',

                                            fontSize: 16,
                                        }}>IT & Communications</Text>
                                        <Text style={{
                                            marginLeft: 'auto',
                                            textAlign: 'right',
                                            fontFamily: 'poppins_medium',
                                            fontSize: 13
                                        }}>Bachelors</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: 64, }}>
                                        <Text style={{
                                            fontFamily: 'poppins_medium',
                                            fontSize: 13,
                                            textAlign: 'center',
                                            marginTop: 4,
                                            backgroundColor: '#d9d9d9',
                                            paddingHorizontal: 10,
                                            paddingVertical: 2,
                                            borderRadius: 10,
                                            margin: 'auto',
                                        }}>
                                            Salary $5000/month
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 7, }}>
                                        <Text style={{
                                            color: 'white',
                                            backgroundColor: '#13a3e1',
                                            paddingHorizontal: 10,
                                            paddingTop: 5,
                                            fontSize: 15,
                                            fontFamily: 'poppins_medium',
                                            borderRadius: 14
                                        }}>Full time</Text>
                                        <Text style={{
                                            marginLeft: 'auto',
                                            textAlign: 'right',
                                            fontFamily: 'poppins_medium',
                                            fontSize: 13,
                                            paddingTop: 6,
                                        }}>Lahore</Text>
                                    </View>


                                </View>
                            )} />
                    </SafeAreaView>
                </View>
            </ScrollView>
            <BottomSheet isOpen sliderMaxHeight={800}>
                {(onScrollEndDrag) => (
                    <ScrollView onScrollEndDrag={onScrollEndDrag}>
                        {/*{[...Array(10)].map((_, index) => (*/}
                        {/*    <View key={`${index}`}>*/}
                        {/*        <Text>{`List Item ${index + 1}`}</Text>*/}
                        {/*    </View>*/}
                        {/*))}*/}
                        <View style={{ padding: 15, alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ fontFamily: 'poppins_bold', fontSize: 20 }}>Advance Search</Text>
                            <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ fontFamily: 'poppins_semibold', marginTop: 7, fontSize: 12 }}>Category</Text>
                                <TextInput style={{
                                    backgroundColor: '#f5f5f5',
                                    marginHorizontal: 5,
                                    height: 50,
                                    borderRadius: 25,
                                    paddingHorizontal: 20,
                                    marginTop: 2,
                                    elevation: 5
                                }} placeholder={'IT'} />
                            </View>
                            <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ fontFamily: 'poppins_semibold', marginTop: 7, fontSize: 12 }}>City</Text>
                                <TextInput style={{
                                    backgroundColor: '#f5f5f5',
                                    marginHorizontal: 5,
                                    height: 50,
                                    borderRadius: 25,
                                    paddingHorizontal: 20,
                                    marginTop: 2,
                                    elevation: 5
                                }} placeholder={'Lahore'} />
                            </View>
                            <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ fontFamily: 'poppins_semibold', marginTop: 7, fontSize: 12 }}>Company</Text>
                                <TextInput style={{
                                    backgroundColor: '#f5f5f5',
                                    marginHorizontal: 5,
                                    height: 50,
                                    borderRadius: 25,
                                    paddingHorizontal: 20,
                                    marginTop: 2,
                                    elevation: 5
                                }} placeholder={'Facebook'} />
                            </View>

                            <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ fontFamily: 'poppins_semibold', marginTop: 7, fontSize: 14,marginBottom:10 }}>Salary Range</Text>     

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 45,gap:40 }}>
                                    <Text  style={{ marginRight:50,fontSize:13,fontFamily:'poppins_medium' }}>starting</Text>
                                    <Text style={{ marginRight:20,fontSize:13,fontFamily:'poppins_medium' }} >End</Text>
                                    </View><View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 45 }}>
                                    <TextInput style={{ borderWidth: 0.7, paddingHorizontal: 30, fontSize: 14, fontFamily: 'poppins_medium', paddingVertical: 5, borderRadius: 10 }}>$6940</TextInput>
                                    <Text style={{ backgroundColor: 'black', width: 7, height: 1, marginTop: 15 }}>-</Text>
                                    <TextInput style={{ borderWidth: 0.7, paddingHorizontal: 30, fontSize: 14, fontFamily: 'poppins_medium', paddingVertical: 5, borderRadius: 10 }}>$6940</TextInput>

                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'column', marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ fontFamily: 'poppins_semibold', marginTop: 7, fontSize: 14,marginBottom:10 }}>job type</Text>     
                                <View style={{ flexDirection:'row',justifyContent:'space-evenly' }}>
                                       
                                    <View style={{ backgroundColor:'#f5f5f5',paddingHorizontal:10,paddingVertical:7,borderRadius:20 }}>
                                         <Text style={{ fontSize:12,fontFamily:'poppins_medium',color:'gray', }}>Part Time</Text>
                                       </View>
                                      
                                    <View style={{ backgroundColor:'#f5f5f5',paddingHorizontal:10,paddingVertical:7,borderRadius:20 }}>
                                        <Text style={{ fontSize:12,fontFamily:'poppins_medium',color:'gray' }}>Full Time</Text>
                                    </View>
                                    <View style={{ backgroundColor:'#f5f5f5',paddingHorizontal:10,paddingVertical:7,borderRadius:20 }}>
                                        <Text style={{ fontSize:12,fontFamily:'poppins_medium',color:'gray' }}>Remote</Text>
                                    </View>
                                </View>                               
                            </View>

                            <View >
                                <Text style={{ backgroundColor:'#13A3E1',color:'white',fontSize:15,fontFamily:'poppins_bold',borderRadius:20,paddingHorizontal:30,paddingVertical:3,marginTop:20}}>Search</Text>
                            </View>



                        </View>
                    </ScrollView>
                )}
            </BottomSheet>
        </View>
    )
}

export default Search
