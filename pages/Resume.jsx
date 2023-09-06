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
  const loading = useSelector((state) => state.cv.isLoading);
  const success = useSelector((state) => state.cv.success);

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
    if (success) {
      setIsLoading(false);
    }
  }, [success]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }}>
      {isLoading ? (
        <View style={{ marginTop: 400 }}>
          <ActivityIndicator size={60} color="#13A3E1" />
        </View>
      ) : (
        <>
          <View style={{ backgroundColor: '#EAEAEA', flexDirection: 'row' }}>
            {/* Left Side: Personal Information */}
            <View style={{ flex: 1, padding: 20 }}>
              <Image
                style={{
                  width: 22,
                  height: 20,
                  tintColor: '#000',
                }}
                source={require('../assets/back_arrow.png')}
                alt={'Okay'}
              />
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={{
                    width: 150,
                    height: 40,
                    marginTop: 20,
                    alignSelf: 'center',
                  }}
                  source={require('../assets/logo.png')}
                  alt={'Okay'}
                />
              </Pressable>
              <Text style={{ fontSize: 18, fontFamily: 'poppins_bold', textAlign: 'center', marginVertical: 20 }}>
                Resume
              </Text>
              <View style={{ backgroundColor: '#A2DFF5', padding: 13, width:120,  }}>
                <Text style={{ fontSize: 15, fontWeight: '800', fontFamily: 'poppins_bold', textAlign: 'center' }}>
                  {cv?.name}
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '400', fontFamily: 'poppins_light', textAlign: 'center' }}>
                  App Developer
                </Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', marginTop: 20 }}>Address:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_light' }}>
                {/* {cv?.address}*/} House # 12, Street # 12 Lahore
                  </Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', marginTop: 20 }}>Phone:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_light' }}>
                  {/* {cv?.phone} */} +22345-78643
                  </Text>
                  <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', marginTop: 20}}>Email:</Text>
                    <Text style={{ fontSize: 9, fontFamily: 'poppins_light' }}>
                      {/* {cv?.email} */} thisalkdfj@gmail.com
                      </Text>
                  <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', marginTop: 20 }}>Hobbies:</Text>
                    <Text style={{ fontSize: 9, fontFamily: 'poppins_light' }}>
                      Hockey
                      </Text>
                  <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', marginTop: 20 }}>Skills:</Text>
                    <Text style={{ fontSize: 9, fontFamily: 'poppins_light' }}>
                      Programming
                      </Text>
                  <Text style={{ fontSize: 9, fontFamily: 'poppins_medium', marginTop: 20 }}>Languages:</Text>
                    <Text style={{ fontSize: 9, fontFamily: 'poppins_light' }}>
                      English
                      </Text>
              </View>
            </View>

            {/* Right Side: Experience, Education, Courses, Skills, Languages, and Interests */}
            <View style={{ flex: 2, padding: 20 }}>
              {/* Experience */}
              <View>
              <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 170, textAlign: 'center', backgroundColor: '#A2DFF5', }}>About:</Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_light', marginLeft: 5 }}>
                  {/* {cv?.statement} */}
                  </Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 20, textAlign: 'center', backgroundColor: '#A2DFF5', }}>
                  Experience
                </Text>
                <ScrollView>
                  <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                    data={cv?.careers}
                    renderItem={({ item }) => (
                      <View>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginTop: 3 }}>
                          {item.timeperiod}
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold', marginRight: 6 }}>
                          {item.job}
                        </Text>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium' }}>
                          Company: {item.company}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 4 }}>
                          <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginTop: 0, marginBottom: 0, padding: 0 }}>
                            Address: {item.address}
                          </Text>
                          <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginLeft: 'auto' }}>
                            Phone: {item.phone}
                          </Text>
                        </View>
                        <Text style={{ backgroundColor: '#BDBDBD', height: 1 }}>-</Text>
                      </View>
                    )}
                  />
                </ScrollView>
              </View>

              {/* Education */}
              <View>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 10, textAlign: 'center', backgroundColor: '#A2DFF5', }}>
                  Education
                </Text>
                <SafeAreaView>
                  <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                    data={cv?.educations}
                    renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_regular', paddingTop: 2.5 }}>
                          {item.institute}
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold' }}>
                          {item.qualification}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 0, paddingBottom: 0 }}>
                          <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', margin: 0, padding: 0 }}>
                            {item.timeperiod}
                          </Text>
                        </View>
                        <Text style={{ backgroundColor: '#BDBDBD', height: 1 }}>-</Text>
                      </View>
                    )}
                  />
                </SafeAreaView>
              </View>

              {/* Courses */}
              <View>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 20, textAlign: 'center', backgroundColor: '#A2DFF5', }}>
                  Courses
                </Text>
                <SafeAreaView>
                  <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                    data={cv?.courses}
                    renderItem={({ item }) => (
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
                        <Text style={{ backgroundColor: '#BDBDBD', height: 1 }}>-</Text>
                      </View>
                    )}
                  />
                </SafeAreaView>
              </View>
                      {/* Interests */}
              <View>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 20, textAlign: 'center', backgroundColor: '#A2DFF5', }}>
                  Interests
                </Text>
                <SafeAreaView>
                  <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                    data={cv?.interests}
                    renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'right' }}>
                        {item.interest}
                      </Text>
                    )}
                  />
                </SafeAreaView>
              </View>
              {/* Skills */}
              <View>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 20, textAlign: 'center', paddingVertical: 20 }}>
                  Skills
                </Text>
                <SafeAreaView>
                  <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                    data={cv?.skills}
                    renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'left' }}>
                        {item.skill}
                      </Text>
                    )}
                  />
                </SafeAreaView>
              </View>

              {/* Languages */}
              <View>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', marginTop: 20, textAlign: 'center', paddingVertical: 20 }}>
                  Languages
                </Text>
                <SafeAreaView>
                  <FlatList
                    scrollEnabled={false}
                    nestedScrollEnabled={true}
                    data={cv?.languages}
                    renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'center' }}>
                        {item.language}
                      </Text>
                    )}
                  />
                </SafeAreaView>
              </View>

              
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

export default Resume;
