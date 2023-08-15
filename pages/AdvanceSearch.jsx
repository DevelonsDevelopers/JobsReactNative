import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Resume from "./Resume";

const AdvanceSearch = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: '#F1F1F1' }}>
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
            <Pressable onPress={() => navigation.push('PostJob')}><Image
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
            textAlign: 'center',
            marginTop: 50,
            padding: 0
          }}>Advance search</Text>
        </View>
       
      </View>
    </ScrollView>
  )
}

export default AdvanceSearch
