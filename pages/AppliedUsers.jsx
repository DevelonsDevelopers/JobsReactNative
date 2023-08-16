import { FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCategories } from "../API/actions/categoryActions";

function AppliedUsers({ navigation }) {

  const dispatch = useDispatch();
  const [login, isLogin] = useState(false);
  const categories = useSelector(state => state.category.categories)
  const loading = useSelector(state => state.category.isLoading)

  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  useEffect(() => {
    dispatch(AllCategories())
  }, [dispatch, navigation]);
  const data = [
    { 'name': 'Today', 'department': 'React Native ','salary':'5000','category':'Market','b1':'Recommended Users','b2':'Applied Users','b3':'Sent Offers' },
    { 'name': 'Today', 'department': 'React  Developer','salary':'5000','category':'Market','b1':'Recommended Users','b2':'Applied Users','b3':'Sent Offers' },
    { 'name': 'Today', 'department': 'React Native Developer','salary':'5000','category':'Market','b1':'Recommended Users','b2':'Applied Users','b3':'Sent Offers' },
    { 'name': 'Today', 'department': ' Native Developer','salary':'5000','category':'Market','b1':'Recommended Users','b2':'Applied Users','b3':'Sent Offers' },
    { 'name': 'Today', 'department': 'React Native Developer','salary':'5000','category':'Market','b1':'Recommended Users','b2':'Applied Users','b3':'Sent Offers' },


  ]
  return (
    <View style={{ flex: 1 }}>
    <Modal visible={visible} animationType={"fade"} transparent={true}>
      <View onTouchStart={() => toggleVisibility()} style={{ flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <View style={{ width: '100%', maxWidth: 300, margin: 48, elevation: 24, borderRadius: 15, backgroundColor: '#fff', opacity: 1, padding: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', textAlign: 'center' }}>Menu</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto' }} source={require('../assets/close.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 10 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Profile</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Applied Jobs</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Saved Jobs</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>History</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Privacy Policy</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Terms & Conditions</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Share</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Rate</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Contact</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Sign Out</Text>
            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')} />
          </View>
        </View>
      </View>
    </Modal>
    <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75 }}>
      <View style={{ flexDirection: 'column', width: '100%', height: 200, backgroundColor: '#13A3E1' }}>
        <View style={{ flexDirection: 'row', height: 130 }}>
          <Pressable onPress={() => toggleVisibility()}><Image style={{
            width: 22,
            height: 20,
            marginTop: 70,
            marginLeft: 30,
            marginBottom: 250,
            tintColor: '#fff'
          }} source={require('../assets/menu.png')} alt={'Okay'} /></Pressable>
          <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
            <Pressable onPress={() => navigation.push('Response')}><Image style={{ width: 200, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
        <Text style={{ textAlign: "center", color: 'white', marginTop: -10, marginBottom: 10, fontSize: 16, }}>Provider</Text>
        <Text style={{ color: '#fff', fontSize: 23, fontWeight: '500', width: '100%', textAlign: 'center' }}>Applied Users</Text>

      </View>



      <SafeAreaView style={{ flex: 1 }}>
        <FlatList scrollEnabled={false} nestedScrollEnabled={true}
          style={{ marginHorizontal: 26, marginTop: 10 }} data={data} renderItem={({ item }) => (
            <View
              style={{
                margin: 5,
                backgroundColor: '#fff',
                borderColor: '#c2c2c2',
                borderWidth: 1,
                borderRadius: 25,
                paddingVertical:20,
                paddingHorizontal:20
              }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{
                    color: '#207A00',
                    backgroundColor: 'rgba(0,180,18,0.2)',
                    paddingHorizontal: 15,
                    paddingTop: 4,
                    fontSize: 13,
                    fontFamily: 'poppins_medium',
                    borderRadius: 5
                  }}>Verified</Text>
                  <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 12 }}>Today</Text>
                </View>
                <Text style={{ fontSize:17,fontFamily:'poppins_medium',marginTop:10 }}>John Doe</Text>
                <Text>Lahore</Text>
                <Text  style={{ fontSize:17,fontFamily:'poppins_medium',marginBottom:10 }}>Bachelors</Text>
                <View style={{paddingHorizontal:50}}><Text style={{ backgroundColor:'#D9D9D9',textAlign:"center",paddingVertical:6,borderRadius:20,fontSize:12,fontFamily:'poppins_medium' }}>Demand 5000/month</Text></View>
                <View style={{ paddingHorizontal:36,marginTop:4 }}>
                  <Text style={{ backgroundColor:'#143D59',textAlign:"center",borderRadius:20,fontSize:16,fontFamily:'poppins_bold',color:'white',marginVertical:4,paddingVertical:7 }}>View Resume</Text>
              </View>
            </View>

          )}
        />
      </SafeAreaView>


      <View style={{ height: 90 }} />
    </ScrollView>

  </View>
  )
}

export default AppliedUsers
