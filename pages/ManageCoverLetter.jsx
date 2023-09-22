import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const ManageCoverLetter = () => {
    return (
        <View>
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
                        }} >Cover Letter</Text>
                    </View>
                </View>
            </View>

            <View>
                <Image source={require('../assets/coverletter2.png')} style={{ marginLeft: 'auto', marginRight: 'auto', width: 250, height: 150, marginTop: 50 }} />
            </View>


        </View>
    )
}

export default ManageCoverLetter
