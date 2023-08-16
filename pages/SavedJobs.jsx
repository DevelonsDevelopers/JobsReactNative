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

function SavedJobs ({ navigation }) {
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
          }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
          <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
            <Pressable onPress={() => navigation.push('Offers')}><Image
              style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
        <View style={{ flexDirection:'row',justifyContent:'space-between',paddingHorizontal:35,marginVertical:30 }}>
        
          <Text style={{ fontSize:17,fontFamily:'poppins_bold',borderBottomWidth:3  }}>Saved jobs</Text>
          <Pressable onPress={() => navigation.push('AppliedJobs')}>
          <Text style={{ fontSize:17,fontFamily:'poppins_medium',}}> Applied Jobs</Text>
          </Pressable>
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
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  
                  <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 13 }}>Today</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 0.8 }}>
                    <Text numberOfLines={1} style={{ fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15 }}>Need Android Developer</Text>
                    <Text style={{ fontFamily: 'poppins_regular', marginTop: 0, fontSize: 12 }}>Facebook</Text>
                  </View>
                  <Image style={{ width: 20, height: 20, marginLeft: 'auto', marginTop: 10 }} source={require('../assets/bookmarkIcon.png')} />
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{
                    fontFamily: 'poppins_bold',
                    
                    fontSize: 16,
                  }}>IT & Communications</Text>
                  <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 13 }}>Bachelors</Text>
                </View>
                <View style={{ paddingHorizontal:64, }}>
                <Text style={{  fontFamily:'poppins_medium',fontSize:13, textAlign: 'center',marginTop: 4, backgroundColor: '#d9d9d9', paddingHorizontal:10,paddingVertical:2,borderRadius:10, margin:'auto', }} >
                Salary $5000/month 
                </Text>
                </View>

                <View style={{ flexDirection: 'row', flex: 1, marginTop:7, }}>
                  <Text style={{
                    color: 'white',
                    backgroundColor: '#13a3e1',
                    paddingHorizontal: 10,
                    paddingTop: 5,
                    fontSize: 15,
                    fontFamily: 'poppins_medium',
                    borderRadius: 14
                  }}>Full time</Text>
                  <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 13,  paddingTop: 6, }}>Lahore</Text>
                </View>


              </View>
            )} />
        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

export default SavedJobs
