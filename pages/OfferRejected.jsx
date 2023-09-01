import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Resume from "./Resume";

const OfferRejected = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: '#F1F1F1' }}>
      <View style={{ backgroundColor: '#EAEAEA' }}>
        <View style={{ flexDirection: 'row', height: 90 }}>
          <Pressable onPress={() => navigation.goBack()} style={{ padiingRight:5 }}><Image style={{
            width: 22,
            height: 20,
            marginTop: 70,
            marginLeft: 30,
            tintColor: '#000'
          }} source={require('../assets/back_arrow.png')} alt={''} /></Pressable>
          <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
            <Pressable onPress={() => navigation.push('Termsandconditions')}><Image
              style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
        <Text style={{ fontSize: 22, fontFamily: 'poppins_bold', textAlign: "center", marginTop: 40 }}>Social Media Marketing</Text>
        <View style={{ paddingHorizontal: 106, marginTop: 4 }}>
          <Text style={{ backgroundColor: '#FF3131', textAlign: "center", borderRadius: 20, fontSize: 16, fontFamily: 'poppins_bold', color: 'white', marginVertical: 4, paddingVertical: 7 }}>OFFER REJECTED</Text>
        </View>
        <SafeAreaView style={{ marginTop: 10 }}>


          <View style={{

            marginBottom: 8,
            borderColor: '#4C4C4C',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            paddingVertical: 15,
            display: "flex",
            flexDirection: "column",
            backgroundColor: '#fff'
          }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text style={{

                paddingHorizontal: 10,
                paddingTop: 4,
                fontSize: 14,
                fontFamily: 'poppins_bold',
                borderRadius: 5,
                marginLeft: 25,
              }}>Facebook</Text>
              <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 13, marginRight: 25 }}>Today</Text>
            </View>
            <View style={{ paddingHorizontal: 110, }}>
              <Text style={{ fontFamily: 'poppins_medium', fontSize: 15, textAlign: 'center', marginTop: 4, backgroundColor: '#00A224', color: "white", paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20, margin: 'auto', }} >
                Salary $5000/month
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={{ fontFamily: 'poppins_bold', marginTop: 15, fontSize: 20, textAlign: "center", }}>IT & Communications</Text>
                <Text style={{ fontFamily: 'poppins_medium', marginTop: 0, fontSize: 14, textAlign: "center" }}>Lahore</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, backgroundColor: '#F6F6F6', }}>
              <View style={{ backgroundColor: 'rgba(19, 163, 225, 0.20)', paddingHorizontal: 30, width: '50%', paddingVertical: 25, borderTopRightRadius: 40, borderBottomRightRadius: 40 }}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{
                    color: 'white',
                    backgroundColor: '#13a3e1',
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    fontSize: 15,
                    fontFamily: 'poppins_bold',
                    borderRadius: 14, textAlign: "center"
                  }}>Full time</Text>
                  <Text style={{ fontSize: 18, fontFamily: 'poppins_medium', textAlign: "center" }}>  Mon - Sat </Text>
                  <Text style={{ fontSize: 13, fontFamily: 'poppins_medium', textAlign: "center" }}>  9AM - 5PM </Text>
                </View>
              </View>
              <View>
                <View style={{ flexDirection: 'column', paddingVertical: 25, }}>
                  <Text style={{ textAlign: "center", fontSize: 19, fontFamily: 'poppins_medium' }}>5 years</Text>
                  <Text style={{ textAlign: "center", fontSize: 25, fontFamily: 'poppins_medium' }}>Bachelors</Text>
                  <Text style={{ textAlign: "center", width: '80%', marginLeft: 15, fontSize: 12, fontFamily: 'poppins_medium' }}>Java, JavaScript, Android, IOS, WEB</Text>

                </View>
              </View>
            </View>
            <Text style={{ fontSize: 18, fontFamily: 'poppins_bold', marginTop: 10, textAlign: 'center' }}> Conserns</Text>
            <Text style={{ fontSize: 15, fontFamily: 'poppins_medium', marginTop: 10, textAlign: 'center', paddingHorizontal: 20 }}> Dear Mangager, i want to express my sincere appreciation for offering me the positon of job title at company name, I have decided to respectfully decline the offer </Text>
            <Text style={{ fontSize: 18, fontFamily: 'poppins_bold', marginLeft: 15, marginTop: 10 }}>About Me: </Text>
            <Text style={{ marginHorizontal: 25, fontSize: 15, fontFamily: 'poppins_medium' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <View style={{ paddingHorizontal: 46, marginTop: 4 }}>
              <Text style={{ backgroundColor: '#13A3E1', textAlign: "center", borderRadius: 20, fontSize: 16, fontFamily: 'poppins_bold', color: 'white', marginVertical: 4, paddingVertical: 10 }}>Resend Hire Offer</Text>
            </View>

          </View>

        </SafeAreaView>
      </View>
    </ScrollView>
  )
}

export default OfferRejected
