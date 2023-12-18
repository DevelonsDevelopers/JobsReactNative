import { FlatList, Image, Modal, Pressable, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";

const CitySelectModal = ({ visible, click, list, toggleVisibility }) => {

    const [nodata, setnodata] = useState();

    useEffect(() => {
        if (list) {
            if (list?.length === 0) {
                setnodata(true)
            } else {
                setnodata(false)
            }
        } else (
            setnodata(true)
        )
    }, [list])
    console.log("list", list)

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleVisibility}>
            <TouchableWithoutFeedback onPress={toggleVisibility}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <SafeAreaView style={{
                        backgroundColor: '#fff',
                        borderRadius: 40,
                        padding: 23,
                        margin: 20
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                width: '100%',
                                fontFamily: 'poppins_semibold',
                                textAlign: 'center',
                                color: '#13A3E1'
                            }}>Select</Text>
                            <Pressable onPress={() => toggleVisibility()} style={{ marginLeft: 'auto', padding: 5 }}><Image
                                style={{ width: 12, height: 12, marginLeft: 'auto' }}
                                source={require('../assets/close.png')} /></Pressable>
                        </View>
                        <View style={{
                            backgroundColor: '#000',
                            height: 4,
                            width: '30%',
                            alignSelf: 'center',
                            borderRadius: 3
                        }}></View>

                        {nodata ?
                            <Text style={{ textAlign: 'center', color: 'gray', marginTop: '100%' }}>
                                No city available / No country Selected
                            </Text>
                            :
                            ''
                        }


                        <FlatList scrollEnabled={true} nestedScrollEnabled={false}
                            style={{ marginHorizontal: 0, marginTop: 20, height: 500 }} data={list}
                            renderItem={({ item }) => (
                                <Pressable onPress={() => click(item)}><View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 600,
                                            fontFamily: 'poppins_semibold'
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
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default CitySelectModal
