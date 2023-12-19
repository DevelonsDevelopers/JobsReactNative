import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

const NoData = ({ text }) => {

    const height = Dimensions.get("window").height;

    return (
        <View>
            <View style={{height:height }}>
            <View style={{ marginTop:'auto',marginBottom:'auto' }}>

                <Image source={require('../assets/nodata.png')}
                    style={{
                        width: 260,
                        height: 260,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        marginBottom: -20,
                        marginTop: 40
                    }} />
                <Text style={{ textAlign: 'center', fontFamily: 'poppins_medium' }}>{text}</Text>
                    </View>
            </View>
        </View>
    )
}

export default NoData
