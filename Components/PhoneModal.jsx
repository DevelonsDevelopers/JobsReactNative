import React from 'react'
import { FlatList, Image, Modal, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import { PhoneData } from '../Utils/Constants';

const PhoneModal = ({ visible,  togglePhoneVisible }) => {
    return (
        <Modal visible={visible} animationType={"fade"} transparent={true}>
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)'
            }}>
                <SafeAreaView style={{
                    backgroundColor: '#fff',
                    borderRadius: 40,
                    padding: 23,
                    margin: 20
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: 'lightgray',
								marginRight: 50,
								marginLeft: 10,
								height: 50,
								borderRadius: 25,
								paddingHorizontal: 20,
								marginVertical: 10,
                                

							}}>
								<TextInput onChangeText={text => setSearch(text)} style={{
									height: 50, width: '90%'
								}} placeholder={'Start your Job Search'} />
								<Pressable onPress={() => navigation.push('Search', { query: search })} style={{ marginLeft: 'auto', }}>
									<Image style={{ width: 25, height: 25 }} source={require('../assets/search-interface-symbol.png')} />
								</Pressable>
							</View>
                        <Pressable onPress={() => togglePhoneVisible()} style={{ marginLeft: 'auto', padding: 5 }}><Image
                            style={{ width: 15, height: 15, marginLeft: 'auto' }}
                            source={require('../assets/close.png')} /></Pressable>
                    </View>
                    <View style={{
                        backgroundColor: '#000',
                        height: 3,
                        width: '91%',
                        alignSelf: 'center',
                        borderRadius: 3
                    }}></View>
                    <FlatList scrollEnabled={true} nestedScrollEnabled={false}
                        style={{ marginHorizontal: 0, marginTop: 20, height: 500 }} data={PhoneData}
                        renderItem={({ item }) => (
                            <Pressable><View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 500,
                                        fontFamily: 'poppins_semibold',
                                        marginHorizontal: 20,
                                        borderRightWidth: 1,
                                        width: 70,
                                    }}>{item.dial_code}</Text>
                                    {/* <Text style={{
                                        height: 30,
                                    }} >|</Text> */}
                                    <Text style={{
                                        fontSize: 12,
                                        fontWeight: 400,
                                        fontFamily: 'poppins_semibold',
                                        marginLeft: 5,
                                        color: 'gray'
                                    }}>{item.name}</Text>
                                </View>
                                <View style={{
                                    backgroundColor: '#777777',
                                    height: 0.5,
                                    marginHorizontal: 10,
                                    marginVertical: 5
                                }}></View>
                            </View></Pressable>
                        )} />
                </SafeAreaView>
            </View>
        </Modal>
    )
}

export default PhoneModal
