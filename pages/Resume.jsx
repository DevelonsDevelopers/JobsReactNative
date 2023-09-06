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

          <View style={{ backgroundColor: '#083F5D', marginTop: 40, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', color: 'white', textAlign: 'center' }}>{cv?.name} </Text>
            <Text style={{ fontSize: 11, fontFamily: 'poppins_medium', color: 'white', textAlign: 'center' }}>Developer</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>

            <View style={{ backgroundColor: '#083F5D', flex: 0.6, paddingHorizontal: 20, borderRadius: 10, }}>
              <View style={{ flexDirection:'row',marginTop:20,marginBottom:10,gap:4 }}>
                <Text style={{ backgroundColor:'white' }}>.</Text>
              <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color:'white' }}>Contact</Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium',color:'white' }}>Phone:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium',color:'white' }}>{cv?.phone}</Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium',color:'white' }}>Eamil:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium',color:'white' }}>{cv?.email}</Text>
              </View>
              <View style={{ paddingVertical: 4 }}>
                <Text style={{ fontSize: 12, fontFamily: 'poppins_medium',color:'white' }}>Address:</Text>
                <Text style={{ fontSize: 9, fontFamily: 'poppins_medium',color:'white' }}>{cv?.address}</Text>
              </View>

              <View style={{ paddingBottom: 10 }}>
              <View style={{ flexDirection:'row',marginTop:15,marginBottom:10,gap:4 }}>
                <Text style={{ backgroundColor:'white' }}>.</Text>
              <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color:'white' }}>Skill</Text>
              </View>  
               <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.skills} renderItem={({ item }) => (
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical:2, color:'white',}}>
                        {`\u2022 ${item.skill}`}
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <View style={{ paddingBottom: 10 }}>
              <View style={{ flexDirection:'row',marginTop:10,marginBottom:10,gap:4 }}>
                <Text style={{ backgroundColor:'white' }}>.</Text>
              <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color:'white' }}>Interest</Text>
              </View> 
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.interests} renderItem={({ item }) => (
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical:2,color:'white' }}>
                        {`\u2022 ${item.interest}`}
                      
                      </Text>
                    )} />
                </SafeAreaView>
              </View>
              <View style={{ paddingBottom: 20 }}>
              <View style={{ flexDirection:'row',marginTop:10,marginBottom:10,gap:4 }}>
                <Text style={{ backgroundColor:'white' }}>.</Text>
              <Text style={{ fontSize: 17, fontFamily: 'poppins_medium', textAlign: 'center', color:'white' }}>Language</Text>
              </View>
                 <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.languages} renderItem={({ item }) => (
                      <Text style={{ fontSize: 10, fontFamily: 'poppins_regular', flex: 1, paddingVertical:2, color:'white'}}>
                         {`\u2022 ${item.language}`}
                       
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
              <View style={{marginTop:10 }}>
                <View style={{flexDirection:'row',marginVertical:10,gap:4 }}>
                  <Text style={{backgroundColor:'#083F5D'}}>.</Text>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center',  }}>Experience</Text>
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
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft: 'auto',marginTop:6,marginBottom:6 }}>
                          Phone : {item.phone}
                        </Text>
                        <Text style={{ backgroundColor: 'black', height: 1 }}>-</Text>
                      </View>
                    )} />
                </ScrollView>
              </View>

              <View>
              <View style={{flexDirection:'row',marginVertical:10,gap:4 }}>
                  <Text style={{backgroundColor:'#083F5D'}}>.</Text>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center',  }}>Education</Text>
                </View>   
                <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.educations} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_regular',  }}>
                          {item.institute}
                        </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold', }}>
                          {item.qualification}
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row',  }}>
                          <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft:'auto' }}>
                            {item.timeperiod}
                          </Text>
                        </View>
                        <Text style={{ backgroundColor: 'black', height: 1 }}>-</Text>
                      </View>
                    )} />
                </SafeAreaView>
              </View>
              <View>
              <View style={{flexDirection:'row',marginVertical:10,gap:4 }}>
                  <Text style={{backgroundColor:'#083F5D',}}>.</Text>
                <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', textAlign: 'center',  }}>Courses</Text>
                </View>
                    <SafeAreaView>
                  <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                    data={cv?.courses} renderItem={({ item }) => (
                      <View style={{ flex: 1 }}>

                        <Text style={{ fontSize: 10, fontFamily: 'poppins_regular',   }}>
                          {item.timeperiod}
                        </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_semibold',  }}>
                          {item.course}
                        </Text>
                        <Text style={{ fontSize: 10, fontFamily: 'poppins_medium', marginLeft:'auto', }}>
                          {item.institute}
                        </Text>
                        <Text style={{ backgroundColor: 'black', height: 1 }}>-</Text>
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
