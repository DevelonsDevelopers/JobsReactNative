import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CVByUser } from '../API/actions/cvActions';

function Resume({ navigation }) {
  const dispatch = useDispatch();
  const [ID, setID] = useState();
  const cv = useSelector((state) => state.cv.cv);
  const success = useSelector((state) => state.success.cvSuccess);
  const error = useSelector((state) => state.error.cvError);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const value = await AsyncStorage.getItem('ID');
    setID(value);
  };

  useEffect(() => {
    if (ID) {
      dispatch(CVByUser(ID));
    }
  }, [dispatch, ID]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (success || error) {
      setIsLoading(false);
    }
  }, [success,error]);



  return (
    <ScrollView style={{ backgroundColor: '#F1F1F1' }}>

      {isLoading ? 
        <View style={{ marginTop: 400 }}>
          <ActivityIndicator size={60} color="#13A3E1" />
        </View>
       : 
        <>
          <View style={{ flexDirection: 'row', height: 90 }}>
            <Pressable onPress={() => navigation.goBack()}
              style={{ paddingRight: 5 }}><Image style={{
                width: 22,
                height: 20,
                marginTop: 70,
                marginLeft: 30,
                tintColor: '#000'
              }} source={require('../assets/back_arrow.png')} alt={'Okay'} />
            </Pressable>
            <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
              <Pressable >
                <Image
                  style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                  source={require('../assets/logo.png')} alt={'Okay'} />
              </Pressable>
            </View>
          </View>
          <View style={{ marginTop: 20, paddingTop: 30, marginHorizontal: 0, paddingBottom: 10 }}>
            <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}>{cv?.name}</Text>
            <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center' }}>{cv?.address}</Text>
            <View style={{ flexDirection: 'row', gap: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }}>
              <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center', }}>{cv?.phone}</Text>
              <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'black', textAlign: 'center', }}>{cv?.email}</Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'poppins_medium', marginTop: 10 }}>{cv?.role}</Text>
            <Text style={{ backgroundColor: 'gray', height: 1, marginTop: 10, paddingHorizontal: 20 }}>-</Text>

            <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginVertical: 10, paddingHorizontal: 10, paddingVertical: 10 }}>{cv?.statement}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'poppins_semibold', marginVertical: 10, textAlign: 'center' }}>Key Skills</Text>
            <Text style={{ backgroundColor: 'gray', height: 1, paddingHorizontal: 20 }}>-</Text>

            <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                data={cv?.skills} numColumns={3} renderItem={({ item }) => (
                  <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
                    {`\u2022 ${item.skill}`}
                  </Text>
                )} />
            </SafeAreaView>
            <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', textAlign: 'center' }}>EMPLOYMENT HISTORY</Text>
            <Text style={{ backgroundColor: 'gray', height: 1, paddingHorizontal: 20 }}>-</Text>
            <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                data={cv?.careers} renderItem={({ item }) => (
                  <View>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                        {item.job}
                      </Text>
                      <Text style={{ height: 15, marginTop: -2 }} >|</Text>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', }}>
                        {item.timeperiod}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium' }}>
                      Company : {item.company}
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 0, marginBottom: 0, padding: 0 }}>
                        Address : {item.address}
                      </Text>
                    </View>
                    <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto', marginTop: 6, marginBottom: 6 }}>
                      {item.phone}
                    </Text>
                    {/* <Text style={{ backgroundColor: 'gray', height: 1, paddingHorizontal: 20 }}>-</Text> */}
                  </View>
                )} />

            </ScrollView>
            <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', textAlign: 'center' }}>QUALIFICATIONS</Text>
            <Text style={{ backgroundColor: 'gray', height: 1, paddingHorizontal: 20 }}>-</Text>
            <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                data={cv?.educations} renderItem={({ item }) => (
                  <View >
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', }}>
                        {item.qualification}
                      </Text>
                      <Text style={{ height: 15, marginTop: -2 }} >|</Text>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                        {item.institute}
                      </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                        {item.timeperiod}
                      </Text>
                    </View>

                  </View>
                )} />
            </SafeAreaView>
            <Text style={{ fontSize: 12, fontFamily: 'poppins_semibold', textAlign: 'center' }}>TRAINING COURSES</Text>
            <Text style={{ backgroundColor: 'gray', height: 1, paddingHorizontal: 20 }}>-</Text>
            <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                data={cv?.courses} renderItem={({ item }) => (
                  <View >
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', }}>
                        {item.course}
                      </Text>
                      <Text style={{ height: 15, marginTop: -2 }}>|</Text>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                        {item.timeperiod}
                      </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', }}>
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                        {item.institute}
                      </Text>
                    </View>

                  </View>
                )} />
            </SafeAreaView>


            <Text style={{ fontSize: 14, fontFamily: 'poppins_semibold', marginVertical: 10, textAlign: 'center' }}>Interest</Text>
            <Text style={{ backgroundColor: 'gray', height: 1, paddingHorizontal: 20 }}>-</Text>

            <SafeAreaView style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                data={cv?.interests} numColumns={3} renderItem={({ item }) => (
                  <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical: 2, color: 'black', marginLeft: 20 }}>
                    {`\u2022 ${item.interest}`}
                  </Text>
                )} />
            </SafeAreaView>

          </View>

          {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginBottom: 25, marginHorizontal: 5 }}>

            <View style={{ backgroundColor: '#083F5D', flex: 0.6, paddingHorizontal: 20, borderRadius: 10, }}>
              <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, gap: 4 }}>
                <Text style={{ backgroundColor: 'white' }}>.</Text>
                <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color: 'white' }}>Contact</Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'white' }}>Phone:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', color: 'white' }}>{cv?.phone}</Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'white' }}>Email:</Text>
                <Text style={{ fontSize: 8, fontFamily: 'poppins_light', color: 'white' }}>{cv?.email}</Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium', color: 'white' }}>Address:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', color: 'white' }}>{cv?.address}</Text>
              </View>

              <View style={{ paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10, gap: 4 }}>
                  <Text style={{ backgroundColor: 'white' }}>.</Text>
                  <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color: 'white' }}>Skill</Text>
                </View>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.skills} renderItem={({ item }) => (
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical: 2, color: 'white', }}>
                        {`\u2022 ${item.skill}`}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <View style={{ paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, gap: 4 }}>
                  <Text style={{ backgroundColor: 'white' }}>.</Text>
                  <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color: 'white' }}>Interest</Text>
                </View>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.interests} renderItem={({ item }) => (
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical: 2, color: 'white' }}>
                        {`\u2022 ${item.interest}`}

                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <View style={{ paddingBottom: 20 }}>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, gap: 4 }}>
                  <Text style={{ backgroundColor: 'white' }}>.</Text>
                  <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color: 'white' }}>Language</Text>
                </View>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.languages} renderItem={({ item }) => (
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical: 2, color: 'white' }}>
                        {`\u2022 ${item.language}`}

                      </Text>
                    )} />
                </SafeAreaView>
              </View>
            </View>

            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10 }}>About</Text>
                <Text style={{ fontSize: 11, fontFamily: 'poppins_regular' }}>{cv.statement}</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', marginVertical: 10, gap: 4 }}>
                  <Text style={{ backgroundColor: '#083F5D' }}>.</Text>
                  <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', }}>Experience</Text>
                </View>
                <ScrollView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.careers} renderItem={({ item }) => (
                      <View>
                        <View >
                          <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', }}>
                            {item.timeperiod}
                          </Text>
                          <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginRight: 6 }}>
                            {item.job}
                          </Text>
                        </View>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium' }}>
                          Company : {item.company}
                        </Text>
                        <View style={{ flexDirection: 'row', }}>
                          <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginTop: 0, marginBottom: 0, padding: 0 }}>
                            Address : {item.address}
                          </Text>
                        </View>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto', marginTop: 6, marginBottom: 6 }}>
                          Phone : {item.phone}
                        </Text>
                        <Text style={{ backgroundColor: 'black', height: 1 }}>-</Text>
                      </View>
                    )} />
                </ScrollView>
              </View>

              <View>
                <View style={{ flexDirection: 'row', marginVertical: 10, gap: 4 }}>
                  <Text style={{ backgroundColor: '#083F5D' }}>.</Text>
                  <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', }}>Education</Text>
                </View>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.educations} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', }}>
                          {item.institute}
                        </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                          {item.qualification}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', }}>
                          <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                            {item.timeperiod}
                          </Text>
                        </View>
                        <Text style={{ backgroundColor: 'black', height: 1 }}>-</Text>
                      </View>
                    )} />
                </SafeAreaView>
              </View>
              <View>
                <View style={{ flexDirection: 'row', marginVertical: 10, gap: 4 }}>
                  <Text style={{ backgroundColor: '#083F5D', }}>.</Text>
                  <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', }}>Courses</Text>
                </View>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.courses} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>

                        <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', }}>
                          {item.timeperiod}
                        </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                          {item.course}
                        </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto', }}>
                          {item.institute}
                        </Text>
                        <Text style={{ backgroundColor: 'black', height: 1 }}>-</Text>
                      </View>
                    )} />
                </SafeAreaView>
              </View>


            </View>
          </View> */}

        </>}
    </ScrollView>
  );
}

export default Resume;
