import React from 'react'
import { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import Ripple from 'react-native-material-ripple'


const Plans = ({ navigation }) => {

const [plan,setPlan] = useState()
const [price,setPrice] = useState()

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

            <Ripple onPress={() => navigation.push('Payment', {plan:'Basic',price:'8'})} style={{ backgroundColor: 'white', padding: 20, marginTop: 10, paddingVertical: 20, marginHorizontal: 30, borderRadius: 10 }}>
                <Text style={{ color: '#194666', textAlign: 'center', fontSize: 20, fontFamily: 'poppins_medium' }}>Basic</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}>
                    <Text style={{ color: '#194666', textAlign: 'center', fontSize: 14 }}>$ </Text>
                    <Text style={{ fontSize: 40, color: '#194666', marginTop: -5 }}>8</Text>
                </View>
                <Text style={{ color: '#194666', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  Get 3 months listing</Text>
                <Text style={{ color: '#194666', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  up to 20 jobs</Text>
            </Ripple>

            <Ripple onPress={() => navigation.push('Payment', {plan:'Essential',price:'14'})} rippleColor='white' style={{ backgroundColor: '#00C1E4', padding: 20, marginTop: 20, paddingVertical: 20, marginHorizontal: 30, borderRadius: 10 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontFamily: 'poppins_medium' }}>Essential</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>$ </Text>
                    <Text style={{ fontSize: 40, color: 'white', marginTop: -5 }}>14</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  Get all the benefits of Basic</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  up to 50 jobs</Text>
            </Ripple>

            <Ripple onPress={() => navigation.push('Payment', {plan:'Premium',price:'20'})}  rippleColor='white' style={{ backgroundColor: '#004BFF', padding: 20, marginTop: 20, paddingVertical: 20, marginHorizontal: 30, borderRadius: 10, marginBottom: 20 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontFamily: 'poppins_medium' }}>Premium</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 20 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>$ </Text>
                    <Text style={{ fontSize: 40, color: 'white', marginTop: -5 }}>20</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  Our most popular package</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'poppins_medium' }}>{`\u2022`}  up to 200 jobs</Text>
            </Ripple>

        </ScrollView>
    )
}

export default Plans
