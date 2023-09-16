import { FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCategories } from "../API/actions/categoryActions";

function SentOffers({ navigation }) {

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
            <Pressable onPress={() => navigation.push('Resume')}><Image style={{ width: 200, height: 40, marginTop: 60, alignSelf: 'center' }}
              source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
          </View>
        </View>
        <Text style={{ textAlign: "center", color: 'white', marginTop: -10, marginBottom: 10, fontSize: 16, }}>Provider</Text>
        <Text style={{ color: '#fff', fontSize: 23, fontWeight: '500', width: '100%', textAlign: 'center' }}>Jobs Posted</Text>

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
                <View style={{ flex: 1 }}>

                  <Text style={{ marginLeft: 'auto', textAlign: 'right', fontFamily: 'poppins_medium', fontSize: 13 }}>Today</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text numberOfLines={1} style={{ fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15, textAlign: "center", color: '#0044a9', }}>Invitation for Interview</Text>
                    <Text style={{ fontFamily: 'poppins_medium', marginTop: 0, fontSize: 14, textAlign: "center" }}>john Doe</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{
                    fontFamily: 'poppins_bold',
                    fontSize: 16,
                  }}>React Native Developer</Text>
                </View>
                <View style={{ paddingHorizontal: 64, }}>
                  <Text style={{ fontFamily: 'poppins_medium', fontSize: 13, textAlign: 'center', marginTop: 4, backgroundColor: '#d9d9d9', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10, margin: 'auto', }} >
                    Salary $5000/month
                  </Text>
                </View>
                <View style={{ paddingHorizontal:36,marginTop:4 }}>
                  <Text style={{ backgroundColor:'#143D59',textAlign:"center",borderRadius:20,fontSize:16,fontFamily:'poppins_bold',color:'white',marginVertical:4,paddingVertical:7 }}>View Response</Text>
              </View>
              </View>
            )} />
        </SafeAreaView>


      <View style={{ height: 90 }} />
    </ScrollView>

  </View>
  )
}

export default SentOffers
