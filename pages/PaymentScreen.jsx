import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Modal, TouchableOpacity, Text, Image, Pressable, TextInput, ScrollView, Button } from 'react-native';

import WebView from 'react-native-webview';
import queryString from 'query-string';
import { CardField } from "@stripe/stripe-react-native";
import ButtonComp from "../Components/ButtonComp";
import paypalApi from "../API/paypal"

const PaymentScreen = () => {

    const [isLoading, setLoading] = useState(false)
    const [paypalUrl, setPaypalUrl] = useState(null)
    const [accessToken, setAccessToken] = useState(null)


    const onPressPaypal = async () => {
        setLoading(true)
        try {
            const token = await paypalApi.generateToken()
            const res = await paypalApi.createOrder(token)
            setAccessToken(token)
            console.log("res++++++", res)
            setLoading(false)
            if (!!res?.links) {
                const findUrl = res.links.find(data => data?.rel == "approve")
                setPaypalUrl(findUrl.href)
            }


        } catch (error) {
            console.log("error", error)
            setLoading(false)

        }
    }


    const onUrlChange = (webviewState) => {
        console.log("webviewStatewebviewState", webviewState)
        if (webviewState.url.includes('http://192.168.1.25:5001/cancel')) {
            clearPaypalState()
            return;
        }
        if (webviewState.url.includes('http://192.168.1.25:5001/return')) {

            const urlValues = queryString.parseUrl(webviewState.url)
            console.log("my urls value", urlValues)
            const { token } = urlValues.query
            if (!!token) {
                paymentSucess(token)
            }

        }
    }

    const paymentSucess = async (id) => {
        try {
            const res = paypalApi.capturePayment(id, accessToken)
            console.log("capturePayment res++++", res)
            alert("Payment sucessfull...!!!")
            clearPaypalState()
        } catch (error) {
            console.log("error raised in payment capture", error)
        }
    }


    const clearPaypalState = () => {
        setPaypalUrl(null)
        setAccessToken(null)
    }

    return (
        <ScrollView >
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
                        }} >Payment Details</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 30, marginBottom: 40, marginTop: 40, borderWidth: 1, borderColor: 'green', padding: 10, borderRadius: 10 }}>
                <Text style={{ color: '#205397', fontSize: 13, fontFamily: 'poppins_medium', textAlign: 'left' }}>Resume Distribution plan</Text>
                <Text style={{ color: 'green', fontSize: 30, fontFamily: 'poppins_medium', textAlign: 'left' }}>$5</Text>
                <Text style={{ color: 'gray', fontSize: 15, fontFamily: 'poppins_medium', textAlign: 'left' }}>Boost your chance of getting job by 300%</Text>
            </View>

            <View>

                <View style={styles.container}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder="E-mail"
                        keyboardType="email-address"
                        onChange={value => setEmail(value.nativeEvent.text)}
                        style={{ backgroundColor: 'white', height: 47, borderWidth: 1, borderColor: 'gray', marginHorizontal: 10, borderRadius: 10, paddingLeft: 10 }}
                    />
                    <CardField
                        postalCodeEnabled={true}
                        placeholder={{
                            number: "4242 4242 4242 4242",
                        }}
                        cardStyle={{ textColor: 'gray', borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}
                        style={{ height: 47, marginTop: 20, borderWidth: 1, borderColor: 'gray', marginHorizontal: 10 }}
                        onCardChange={cardDetails => {
                            // setCardDetails(cardDetails);
                        }}
                    />

                </View>

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 70, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: 'gray' }}>Amount</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: 'green' }}>$5</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 70, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: 'gray' }}>Tax</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: 'green' }}>$0.1</Text>
                    </View>
                    <Text style={{ backgroundColor: "gray", height: 2, width: '80%', marginLeft: 'auto', marginRight: 'auto', marginVertical: 20 }}>-</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 70, width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: 'gray' }}>Total</Text>
                        <Text style={{ fontSize: 24, fontFamily: 'poppins_medium', color: 'black' }}>$5.1</Text>
                    </View>


                </View>

            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <ButtonComp
                        onPress={onPressPaypal}
                        disabled={false}
                        btnStyle={{ backgroundColor: 'green', marginVertical: 16 }}
                        text="Pay using paypal"
                        isLoading={isLoading} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
                        <Text style={{ backgroundColor: 'gray', height: 1, width: 70, marginTop: 8 }}>-</Text>
                        <Text>OR</Text>
                        <Text style={{ backgroundColor: 'gray', height: 1, width: 70, marginTop: 8 }}>-</Text>
                    </View>

                    <ButtonComp
                        onPress={onPressPaypal}
                        disabled={false}
                        btnStyle={{ backgroundColor: '#0f4fa3', marginVertical: 16, }}
                        text="Pay using Stripe"
                        isLoading={isLoading} />

                    <Modal visible={!!paypalUrl} >
                        <TouchableOpacity onPress={clearPaypalState} style={{ margin: 24 }} >
                            <Text >Closed</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <WebView source={{ uri: paypalUrl }} onNavigationStateChange={onUrlChange} />
                        </View>

                    </Modal>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 20,
    },
    input: {
        backgroundColor: "#efefefef",

        borderRadius: 8,
        fontSize: 20,
        height: 50,
        padding: 10,
    },
    card: {
        backgroundColor: "#efefefef",
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
    },
});

export default PaymentScreen;

