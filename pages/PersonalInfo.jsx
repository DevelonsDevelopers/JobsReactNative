import {FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import React, {useState} from "react";

function PersonalInfo({ navigation }) {

    const [login, isLogin] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75 }}>
                <View style={{flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1'}}>
                    <View style={{flexDirection: 'row', height: 130}}>
                        <Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/menu.png')} alt={'Okay'}/>
                        <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                            <Image style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                                   source={require('../assets/logo.png')} alt={'Okay'}/>
                        </View>
                    </View>
                    <Text style={{color: '#fff', fontSize: 18, fontFamily: 'poppins_regular', width: '100%', textAlign: 'center', marginTop: 10}}>Personal Info</Text>
                </View>
                <View style={{ flexDirection: 'column', borderColor: '#b2b2b2', backgroundColor: '#fff', marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderTopLeftRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Name</Text>
                        </View>
                        <View style={{ flex: 1.3, borderTopRightRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Tayyab Mazhar</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Birthday</Text>
                        </View>
                        <View style={{ flex: 1.3, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Sep 05</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderBottomLeftRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Gender</Text>
                        </View>
                        <View style={{ flex: 1.3, borderBottomRightRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Male</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', borderColor: '#b2b2b2', backgroundColor: '#fff', marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderTopLeftRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Email</Text>
                        </View>
                        <View style={{ flex: 1.3, borderTopRightRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Asim@email.com</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Phone</Text>
                        </View>
                        <View style={{ flex: 1.3, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>+923001234567</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderBottomLeftRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Address</Text>
                        </View>
                        <View style={{ flex: 1.3, borderBottomRightRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Lahore</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', borderColor: '#b2b2b2', backgroundColor: '#fff', marginHorizontal: 10, marginRight: 30, marginLeft: 30, borderRadius: 30, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderTopLeftRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>City</Text>
                        </View>
                        <View style={{ flex: 1.3, borderTopRightRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Tayyab Mazhar</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{ flex: 0.7, backgroundColor: '#E6E6E6', borderBottomLeftRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_light', width: '100%', textAlign: 'left'}}>Name</Text>
                        </View>
                        <View style={{ flex: 1.3, borderBottomRightRadius: 30, borderColor: '#b2b2b2', borderWidth: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
                            <Text style={{color: '#000', fontSize: 14, fontFamily: 'poppins_medium', width: '100%', textAlign: 'left'}}>Tayyab Mazhar</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default PersonalInfo
