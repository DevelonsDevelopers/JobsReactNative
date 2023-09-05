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
    <ScrollView style={{ backgroundColor: '#F1F1F1' }}>

      {isLoading ? (
        <View style={{ marginTop: 400 }}>
          <ActivityIndicator size={60} color="#13A3E1" />
        </View>
      ) : (
        <>
          <View style={{ flexDirection: 'row', height: 90 }}>
            <Pressable onPress={() => navigation.goBack()}
              style={{ paddingRight: 5 }}><Image style={{
                width: 22,
                height: 20,
                marginTop: 70,
                marginLeft: 30,
                tintColor: '#000'
              }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
            <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
              <Pressable onPress={() => navigation.push('Home')}><Image
                style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
            </View>
          </View>

          <View style={{ backgroundColor: '#8FD6E1', marginTop: 40, paddingVertical: 10 }}>
            <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: '#333333', textAlign: 'center' }}>Steven Terry </Text>
            <Text style={{ fontSize: 14, fontFamily: 'poppins_medium', color: '#333333', textAlign: 'center' }}>Graphic Designer</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>

            <View style={{ backgroundColor: '#8FD6E1', flex: 0.6, paddingHorizontal: 20,borderRadius:10 }}>
              <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10, paddingTop: 20 }}>Contact</Text>
              <View style={{ paddingVertical: 6 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium' }}>Phone:</Text>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium' }}>11-22-33-44</Text>
              </View>
              <View style={{ paddingVertical: 6 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium' }}>Eamil:</Text>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium' }}>johndoe@gmail.com</Text>
              </View>
              <View style={{ paddingVertical: 6 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium' }}>Addres:</Text>
                <Text style={{ fontSize: 10, fontFamily: 'poppins_medium' }}>Ghaziabad,Cant,Lahore,Pakistan</Text>
              </View>
              <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10 }}>Skills</Text>
              <SafeAreaView>
                <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                  data={cv?.skills} renderItem={({ item }) => (
                    <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'left' }}>
                      {item.skill}
                      FootBall
                    </Text>
                  )} />
              </SafeAreaView>

              <View>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10 }}>Interest</Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.interests} renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'right' }}>
                        {item.interest}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <View style={{ paddingBottom: 20 }}>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10 }}>Languages</Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.languages} renderItem={({ item }) => (
                      <Text style={{ fontSize: 13, fontFamily: 'poppins_regular', flex: 1, marginTop: 10, textAlign: 'center' }}>
                        {item.language}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
            </View>

            <View style={{ flex: 1, marginHorizontal: 20 }}>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10 }}>About</Text>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ab officiis, minima provident distinctio nobis </Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>Experience</Text>
                <ScrollView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.careers} renderItem={({ item }) => (
                      <View>
                        <View >
                          <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', marginTop: 3 }}>
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

                      </View>
                    )} />
                </ScrollView>
              </View>

              <View>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>Education</Text>
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.educations} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_regular', paddingTop: 2.5 }}>
                          {item.institute}
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold', }}>
                          {item.qualification }
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row', paddingTop: 0, paddingBottom: 0, }}>
                          <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', margin: 0, padding: 0 }}>
                            {item.timeperiod}
                          </Text>
                        </View>
                      </View>
                    )} />
                </SafeAreaView>
              </View>
              <View>
              <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center', paddingBottom: 10, paddingTop: 10 }}>Courses</Text>
              <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.courses} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>

                        <Text style={{ fontSize: 11, fontFamily: 'poppins_regular', paddingTop: 2.5, textAlign: 'right' }}>
                          {item.timeperiod }
                        </Text>
                        <Text style={{ fontSize: 13, fontFamily: 'poppins_semibold', textAlign: 'right' }}>
                          {item.course}
                        </Text>
                        <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', textAlign: 'right' }}>
                          {item.institute}
                        </Text>
                      </View>
                    )} />
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
