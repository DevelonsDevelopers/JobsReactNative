import { Text, Image, Pressable  } from 'react-native'
import React from 'react'
import { View } from 'react-native'
import Privacypolicy from './Privacypolicy'

function Termsandconditions({ navigation }) {
  return (
    <View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 40, }}>
                <Image style={{ width: 25, height: 25, marginLeft: 25, marginTop: 15, alignSelf: 'flex-start' }} source={require('../assets/menu.png')} />
                <Pressable onPress={() => navigation.push('Privacypolicy')}>
                <Image style={{ width: 160, height: 50, marginLeft: 60 }} source={require('../assets/logo.png')} />
                </Pressable>
                <Image style={{ width: 30, height: 30, marginLeft: 65, marginTop: 12 }} source={require('../assets/home.png')} />
            </View>
        <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 23, marginTop: 9 }}>Terms And Conditions</Text>
        <Text style={{ fontSize: 18, fontWeight: 400, marginLeft: 23, marginRight: 23, marginTop: 6, height: 660}}>Our Website is not intended for children under 16 years of age. No one under age 16 may provide any information to or on the Website. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or provide any information on this Website or on or through any of its features. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us at: customerservice@gmicompanies.com or 1-800-543-0550.
        California residents under 16 years of age may have additional rights regarding the collection and sale of their personal information. Please see Your California Privacy Rights for more information. California residents under 16 years of age may have additional rights regarding the collection and sale of their personal information. Please see Your California Privacy Rights for more information.</Text>
    </View>
  )
}

export default Termsandconditions