import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Resume from "./Resume";
const data = [
  { "name": "Facebook" },
  { "name": "Google" },
  { "name": "Netflix" },
  { "name": "Youtube" }
]
const Offers = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
      <View style={{ backgroundColor: '#EAEAEA' }}>
        <View style={{ flexDirection: 'row', height: 90 }}>
          <Pressable onPress={() => toggleVisibility()}><Image style={{
            width: 22,
            height: 20,
            marginTop: 70,
            marginLeft: 30,
            tintColor: '#000'
          }} source={require('../assets/back_arrow.png')} alt={''} /></Pressable>
          <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
            <Pressable onPress={() => navigation.push('SocialMarketing')}><Image
              style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
        <View>
          <Text style={{
            fontSize: 18,
            fontFamily: 'poppins_bold',
            width: '100%',
            paddingHorizontal: 30,
            textAlign: 'left',
            marginVertical: 20,
            padding: 0
          }}>Offers</Text>
        </View>
        <SafeAreaView>
          <FlatList nestedScrollEnabled={false} scrollEnabled={false}
            style={{ marginHorizontal: 0, marginTop: 10 }} data={data} renderItem={({ item }) => (
              <View style={{
                marginLeft: 25,
                marginRight: 25,
                marginBottom: 8,
                borderColor: '#4C4C4C',
                borderRadius: 15,
                paddingHorizontal: 25,
                paddingVertical: 15,
                display: "flex",
                flexDirection: "column",
                backgroundColor: '#fff'
              }}>
                <View style={{ flex: 1 }}>

                  <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 13 }}>Today</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={{ fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15, textAlign: "center", color: '#0044a9', }}>Invitation for Interview</Text>
                    <Text style={{ fontFamily: 'poppins_medium', marginTop: 0, fontSize: 14, textAlign: "center" }}>Facebook</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{
                    fontFamily: 'poppins_bold',
                    fontSize: 16,
                  }}>React Native Developer</Text>
                </View>
                <View style={{ paddingHorizontal: 64, }}>
                  <Text style={{ fontFamily: 'poppins_medium', fontSize: 13, textAlign: 'center', marginTop: 4, backgroundColor: '#d9d9d9', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10, margin: 'auto', }} >
                    Salary $5000/month
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginTop: 15, justifyContent: "center", gap: 10 }}>
                  <Text style={{
                    color: 'white',
                    backgroundColor: '#ff3131',                  
                    padding: 10,
                     paddingHorizontal: 25,
                    fontSize: 15,
                    fontFamily: 'poppins_bold',
                    borderRadius: 30
                  }}>REJECT</Text>
                  <Text style={{
                    textAlign: 'right', fontFamily: 'poppins_bold', fontSize: 15, padding: 10, color: 'white',
                    backgroundColor: '#0eb000',
                    paddingHorizontal: 25, borderRadius: 30,
                  }}>ACCEPT</Text>
                </View>
              </View>
            )} />
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

export default Offers
