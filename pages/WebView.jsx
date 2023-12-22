import React from 'react'
import { Text, View } from 'react-native'
import WebView from 'react-native-webview'

const Test = ({ route }) => {

    const { url } = route.params;



    return (
        <WebView
            source={{ uri: url }}
            style={{ marginTop: 50,marginHorizontal:10 }} />
    )
}

export default Test
