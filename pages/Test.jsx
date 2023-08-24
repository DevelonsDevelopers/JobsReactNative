import * as React from 'react';
import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { FlatList, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap } from 'react-native-tab-view';

const data1 = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
  ]
const data = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
  ]

const FirstRoute = () => (

  <GestureHandlerRootView>
    <FlatList nestedScrollEnabled={false} scrollEnabled={false}
      style={{ marginHorizontal: 0, marginTop: 10 }} data={data1} renderItem={({ item }) => (
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
 </GestureHandlerRootView>
);

const SecondRoute = () => (
  <GestureHandlerRootView>
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
                  <Text style={{
                    color: '#207A00',
                    backgroundColor: 'rgba(0,180,18,0.2)',
                    paddingHorizontal: 10,
                    paddingTop: 4,
                    fontSize: 10,
                    fontFamily: 'poppins_medium',
                    borderRadius: 5
                  }}>NEW</Text>
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
  </GestureHandlerRootView>
);

const renderScene = SceneMap({
  'Saved Job' : FirstRoute,
  'Applied job': SecondRoute,
});

export default function Test({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Saved Job', title: 'Saved Job' },
    { key: 'Applied job', title: 'Applied job' },
  ]);

  return (
<>
<View style={{ flexDirection: 'row', height: 90,backgroundColor:'#EAEAEA' }}>
          <Pressable onPress={() => toggleVisibility()}><Image style={{
            width: 22,
            height: 20,
            marginTop: 70,
            marginLeft: 30,
            tintColor: '#000'
          }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
          <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
            <Pressable onPress={() => navigation.push('SavedJobs')}><Image
              style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
    <TabView
   
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      />
       </>
  );
}