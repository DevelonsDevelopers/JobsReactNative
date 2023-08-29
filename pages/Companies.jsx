import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AllCities } from "../API/actions/cityActions";
import { AllCompanies } from "../API/actions/companyActions";
import { ActivityIndicator } from "react-native";

const data = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
]

function Companies({ navigation }) {

    const companies = useSelector(state => state.company.companies)
    const loading = useSelector(state => state.company.isLoading)
    const success = useSelector(state => state.company.success)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!companies) {
            dispatch(AllCompanies())
        }
    }, [dispatch, navigation, companies]);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
            {loading ?
                <View style={{ marginTop: 400 }}>
                    <ActivityIndicator size={60} color="#13A3E1" />
                </View>
                :
                <>
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
                                <Pressable onPress={() => navigation.push('Test')}><Image
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
                                borderColor: 'black',
                                fontSize: 17,
                                elevation: 10
                            }} placeholder={'Search'} />
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'poppins_bold',
                                width: '100%',
                                textAlign: 'center',
                                marginVertical: 20,
                                padding: 0
                            }}>Browse by Companies</Text>
                        </View>
                        <SafeAreaView>
                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                style={{ marginHorizontal: 0, marginTop: 10 }} data={companies} renderItem={({ item }) => (
                                    <Pressable onPress={() => navigation.push('JobsByCompany', { COMID: item.id })} style={{
                                        marginLeft: 25,
                                        marginRight: 25,
                                        borderWidth: 0.5,
                                        marginBottom: 7,
                                        borderColor: '#4C4C4C',
                                        borderRadius: 22,
                                        padding: 15,
                                        display: "flex",
                                        flexDirection: "row",
                                        backgroundColor: '#fff'
                                    }}>
                                        <Image style={{ width: 45, height: 45, marginLeft: 10 }}
                                            source={require('../assets/fblogosquare.png')} />
                                        <Text style={{
                                            marginTop: 8,
                                            fontSize: 16,
                                            fontFamily: 'poppins_semibold',
                                            marginLeft: 20
                                        }}>{item.name}</Text>
                                    </Pressable>
                                )} />
                        </SafeAreaView>
                    </View>
                </>}
        </ScrollView>
    )
}

export default Companies
