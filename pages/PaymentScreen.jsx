import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Modal, TouchableOpacity, Text } from 'react-native';

import WebView from 'react-native-webview';
import queryString from 'query-string';
import {CardField} from "@stripe/stripe-react-native";
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
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 16 }}>
                    <ButtonComp
                        onPress={onPressPaypal}
                        disabled={false}
                        btnStyle={{ backgroundColor: '#0f4fa3', marginVertical: 16 }}
                        text="PayPal"
                        isLoading={isLoading}
                    />

                    <Modal
                        visible={!!paypalUrl}
                    >
                        <TouchableOpacity
                            onPress={clearPaypalState}
                            style={{ margin: 24 }}
                        >
                            <Text >Closed</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>
                            <WebView
                                source={{ uri: paypalUrl }}
                                onNavigationStateChange={onUrlChange}

                            />
                        </View>

                    </Modal>

                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default PaymentScreen;
