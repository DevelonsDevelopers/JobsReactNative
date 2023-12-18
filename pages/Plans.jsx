import React, { useEffect } from 'react'
import { useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'
import { useDispatch, useSelector } from "react-redux";
import { getPlans } from "../API/actions/plansActions";


const Plans = ({ navigation }) => {

    const dispatch = useDispatch()

    const plans = useSelector(state => state.plans.typePlans)

    const [plan, setPlan] = useState()
    const [price, setPrice] = useState()

    useEffect(() => {
        dispatch(getPlans('Provider'))
    }, [dispatch]);

    useEffect(() => {
        console.log(plans)
    }, [plans]);

    return (
        <ScrollView>

            <View style={{
                flexDirection: 'column',
                width: '100%',
                height: 90,
                marginBottom: 20
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
                        <Text style={{
                            marginTop: 67,
                            alignSelf: 'center',
                            fontSize: 16, fontFamily: 'poppins_medium', color: 'gray'
                        }} >Choose Plan</Text>
                    </View>
                </View>
            </View>
            <SafeAreaView >
                <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    style={{ marginHorizontal: 20 }} data={plans}
                    renderItem={({ item }) => (
                        <Ripple onPress={() => navigation.push('Payment', { plan: item.id, price: item.amount, type: 'Provider' })} rippleColor='gray'
                            style={{ backgroundColor: 'white', padding: 20, marginTop: 20, paddingVertical: 20, marginHorizontal: 10, borderRadius: 20, marginBottom: 20, flexDirection: 'column', borderWidth: 1, elevation: 10, borderColor: 'gray' }}>
                            <Text style={{ color: '#002E81', textAlign: 'center', fontSize: 29, fontFamily: 'poppins_medium' }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20, marginTop: -10 }}>
                                <Text style={{ color: 'green', textAlign: 'center', fontSize: 14, }}>$</Text>
                                <Text style={{ fontSize: 40, marginTop: -5, color: 'green' }}>{item.amount}</Text>
                            </View>
                            <Text style={{ color: 'black',opacity:0.6, fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center' }}>{item.purpose}</Text>
                            {/* <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  up to 200 jobs</Text> */}
                        </Ripple>
                    )}
                />
            </SafeAreaView>

        </ScrollView>
    )
}

export default Plans
