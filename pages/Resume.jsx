import { Image, Text, ScrollView, FlatList, Pressable, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CVByUser } from "../API/actions/cvActions"


const data = [
  { "address": "Lahore", "company": "Technomentor", "job": "Android", "phone": "0333", "timeperiod": "2022-2023" },
  { "address": "Sindh", "company": "Devsinc", "job": "Full Stack ", "phone": "111-222-333-444", "timeperiod": "2020-2022" },
]
const education = [
  { "institute": "2022 - 2023 ", "qualification": "BS Hons ", "period": "Lahore " },
  { "institute": "2022 - 2023 ", "qualification": "BS Hons ", "period": "Lahore " },
  { "institute": "2022 - 2023 ", "qualification": "BS Hons ", "period": "Lahore " },

]
const course = [
  { "timeperiod": "2022 - 2023 ", "course": "BS Hons ", "institute": "Lahore " },
  { "timeperiod": "2022 - 2023 ", "course": "BS Hons ", "institute": "Lahore " },
  { "timeperiod": "2022 - 2023 ", "course": "BS Hons ", "institute": "Lahore " },
]
const skills = [
  { 'skill': 'Learning' },
  { 'skill': 'Teaching' },
  { 'skill': 'Good Listner' },

]
const languages = [
  { 'language': 'Learning' },
  { 'language': 'Teaching' },
  { 'language': 'Teaching' },

]
const Interests = [
  { 'interest': 'Learning' },
  { 'interest': 'Teaching' },
  { 'interest': 'Good Listner' },

]
function Resume({ navigation }) {

  const dispatch = useDispatch();

  const [ID, setID] = useState()
  const cv = useSelector(state => state.cv.cv);

  useEffect(() => {
    GetData()
  }, []);
  const GetData = async () => {
    const value = await AsyncStorage.getItem('ID')
    setID(value);
  }

  useEffect(() => {
    if (ID) {
      dispatch(CVByUser(ID))
    }
  }, [dispatch, ID])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
      <View style={{ backgroundColor: '#EAEAEA' }}>
        <View style={{ flexDirection: 'row', height: 90 }}>
          <Image style={{
            width: 22,
            height: 20,
            marginTop: 70,
            marginLeft: 30,
            tintColor: '#000'
          }} source={require('../assets/back_arrow.png')} alt={'Okay'} />
          <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
            <Pressable onPress={() => navigation.push('OfferAccepted')}><Image
              style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontFamily: 'poppins_bold', width: '100%', paddingHorizontal: 0, textAlign: 'center', marginVertical: 20, padding: 0, marginBottom: 0 }}>
            Resume
          </Text>
        </View>
        <View style={{ padding: 15, marginTop: 0 }}>
          <View style={{ backgroundColor: '#fff', padding: 13, }}>
            <Text style={{ fontSize: 19, fontWeight: 800, fontFamily: 'poppins_bold', textAlign: 'center' }}>
              Jack Donaldson
            </Text>
            <Text style={{ fontSize: 12, fontWeight: 400, fontFamily: 'poppins_light', textAlign: 'center' }}>
              App Developer
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontSize: 13, fontFamily: 'poppins_medium', }}> Address :</Text>
                <Text style={{ fontSize: 13, fontFamily: 'poppins_light' }}> 15th Street NewYork, United States </Text>
                <Text style={{ fontSize: 13, fontFamily: 'poppins_medium', }}> About :</Text>
                <Text style={{ fontSize: 11, fontFamily: 'poppins_regular', marginTop: 3, padding: 0 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus ea quod esse eius illum!
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'column', paddingTop: 6, flex: 0.5 }}>
                <Text style={{ fontSize: 13, fontFamily: 'poppins_medium', }}>
                  Phone :
                </Text>
                <Text>656-923-0000 </Text>
                <Text style={{ fontSize: 13, fontFamily: 'poppins_medium', }}>
                  Email :
                </Text>
                <Text> jackdon368@gmail.com</Text>
              </View>
            </View>
            <View style={{ width: 335, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, height: 2.5, elevation: 2, backgroundColor: '#BDBDBD', borderColor: 'black' }}>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontFamily: 'poppins_semibold', marginTop: 2, textAlign: 'center', paddingVertical: 20 }}>
                Experience
              </Text>
              <ScrollView>
                <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                  data={data} renderItem={({ item }) => (
                    <View>
                      <View >
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginTop: 3, fontSize: 12 }}>
                          {item.timeperiod}
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold', marginRight: 6 }}>
                          {item.job}
                        </Text>
                      </View>
                      <Text style={{ fontSize: 11, fontFamily: 'poppins_medium' }}>
                        Company : {item.company}
                      </Text>
                      <View style={{ flexDirection: 'row', marginTop: 4 }}>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginTop: 0, marginBottom: 0, padding: 0 }}>
                          Address : {item.address}
                        </Text>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                          Phone : {item.phone}
                        </Text>
                      </View>
                      <Text style={{ backgroundColor: '#BDBDBD', height: 1 }} >-</Text>
                    </View>
                  )} />
              </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <View style={{ width: 190 }}>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_semibold', marginTop: 12, textAlign: 'center', paddingVertical: 20 }}>
                  Education
                </Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={education} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_regular', paddingTop: 2.5 }}>
                          {item.period}
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold', }}>
                          {item.qualification}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 0, paddingBottom: 0, }}>
                          <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', margin: 0, padding: 0 }}>
                            {item.institute}
                          </Text>
                        </View>
                        <Text style={{ backgroundColor: '#BDBDBD', height: 1 }} >-</Text>
                      </View>
                    )} keyExtractor={item => item.toString()} />
                </SafeAreaView>
              </View>
              <Text style={{ backgroundColor: 'black', width: 1, marginTop: 80 }}> |</Text>
              <View style={{ width: 200 }}>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_semibold', marginTop: 12, textAlign: 'center', paddingVertical: 20 }}>
                  Courses
                </Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={course} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>

                        <Text style={{ fontSize: 11, fontFamily: 'poppins_regular', paddingTop: 2.5, textAlign: 'right' }}>
                          {item.timeperiod}
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold', textAlign: 'right' }}>
                          {item.course}
                        </Text>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', textAlign: 'right' }}>
                          {item.institute}
                        </Text>
                        <Text style={{ backgroundColor: '#BDBDBD', height: 1 }} >-</Text>
                      </View>
                    )}  />
                </SafeAreaView>
              </View>
            </View>

            <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'space-evenly' }}>
              <View >
                <Text style={{ fontSize: 16, fontFamily: 'poppins_semibold', marginTop: 2, paddingVertical: 20, textAlign: 'center' }}>
                  Skils
                </Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={skills} renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'left' }}>
                        {item.skill}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <Text style={{ backgroundColor: 'black', width: 1, marginTop: 93 }}> |</Text>
              <View style={{}}>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_semibold', marginTop: 2, textAlign: 'center', paddingVertical: 20 }}>
                  Langauges
                </Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={languages} renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'center' }}>
                        {item.language}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <Text style={{ backgroundColor: 'black', width: 1, marginTop: 93 }}> |</Text>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_semibold', marginTop: 2, textAlign: 'center', paddingVertical: 20 }}>
                  Interests
                </Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={Interests} renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'right' }}>
                        {item.interest}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Resume
