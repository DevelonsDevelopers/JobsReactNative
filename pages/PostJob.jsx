import { FlatList, Image, Linking, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllCategories } from "../API/actions/categoryActions";
import { CompanyJobs } from "../API/actions/jobActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ripple from "react-native-material-ripple";
import LogoutConfirmationModal from "../Components/LogoutConfirmationModal";
import WebsiteModal from "../Components/WebsiteModal";
import ProviderDrawerModal from "../Components/ProviderDrawerModal";

function PostJob({ navigation }) {

  const dispatch = useDispatch();
  const [login, isLogin] = useState(false);
  const categories = useSelector(state => state.category.categories)
  const loading = useSelector(state => state.category.isLoading)

  // companyjob dispatch==========
  const [ID, setID] = useState()

  useEffect(() => {
    console.log(ID)
}, [ID])


  useEffect(() => {
    GetData()
  }, []);
  const GetData = async () => {
    const value = await AsyncStorage.getItem('ID')
    setID(value);
  }

  const companyJobs = useSelector(state => state.job.companyJobs)

  useEffect(() => {
    if (ID) {
      if (!companyJobs) {
        dispatch(CompanyJobs(ID))

      }
    }
  }, [dispatch, companyJobs, ID]);


  useEffect(() => {
    console.log(companyJobs)
  }, [companyJobs])


  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)


  const data = [
    { 'name': 'Social media marketing ', 'department': 'IT communication' },
    { 'name': 'Web Developer', 'department': 'IT communication' },
    { 'name': 'Engineer ', 'department': 'IT communication' },
    { 'name': 'Software Developer ', 'department': 'IT communication' },
    { 'name': 'Web Developer', 'department': 'IT communication' },

  ]
  const Logout = async () => {
    await AsyncStorage.setItem("LOGIN", 'false')
    await AsyncStorage.setItem("ID", '')
    await AsyncStorage.setItem("USER", '')
    await AsyncStorage.setItem("NAME", '')
    await AsyncStorage.setItem("EMAIL", '')
    navigation.popToTop()
    navigation.push('UserType')
    toggleLoadingVisibility()
  }
  // log out===================
  const [loadingVisible, setLoadingVisible] = useState(false)
  const toggleLoadingVisibility = () => setLoadingVisible(!loadingVisible);

  const [webVisible,setWebVisible ] = useState(false)
  const toggWebVisibility = () => setWebVisible(!webVisible)

  const [drawerVisible,setDrawerVisible] = useState (false)
  const toggleDrawerVisibility = () => setDrawerVisible(!drawerVisible)


  return (
    <View style={{ flex: 1 }}>
      <WebsiteModal visible={webVisible} toggleRequireVisible={toggWebVisibility} />
      <LogoutConfirmationModal toggleLoadingVisibility={toggleLoadingVisibility} visible={loadingVisible} Logout={Logout} />
    <ProviderDrawerModal visible={drawerVisible} toggleVisibility={toggleVisibility} toggleLoadingVisibility={toggleLoadingVisibility} navigation={navigation}/>
      <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75 }}>
        <View style={{ flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1' }}>
          <View style={{ flexDirection: 'row', height: 130 }}>
            <Pressable onPress={() => toggleDrawerVisibility()} style={{
              marginTop: 60,
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 10
            }}>
              <Image style={{
                width: 22,
                height: 20,
                tintColor: '#fff',
                // backgroundColor:'violet',
              }} source={require('../assets/menu.png')} alt={'Okay'} /></Pressable>
            <View style={{ width: '100%', paddingEnd: 160 }}>
              <Pressable onPress={() => navigation.push('GoogleRegister')} ><Image
                style={{ width: 200, height: 40, marginTop: 60, alignSelf: 'center' }}
                source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
            </View>
          </View>
          <Text style={{
            textAlign: "center",
            color: 'white',
            marginTop: -10,
            marginBottom: 10,
            fontSize: 20,
          }}>Provider</Text>
          <Text style={{ color: '#fff', fontSize: 23, fontWeight: '500', width: '100%', textAlign: 'center' }}>Good
            Morning!</Text>

        </View>
        <View style={{ flexDirection: 'row', flex: 1, marginTop: 30 }}>
          <Ripple rippleColor="#fff" rippleOpacity={0.5} rippleDuration={800} rippleSize={500}
            onPress={() => navigation.push('AppliedUsers')} style={{
              flex: 0.5,
              backgroundColor: '#F0A51E',
              paddingHorizontal: 35,
              paddingVertical: 20,
              borderRadius: 20,
              marginLeft: 30,
              marginRight: 5
            }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'poppins_medium',
              textAlign: "center"
            }}>Applied</Text>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'poppins_medium',
              textAlign: "center",
              marginTop: -5,
              marginLeft: -4
            }}>Users</Text>
          </Ripple>
          <Ripple rippleColor="#fff" rippleOpacity={0.5} rippleDuration={800} rippleSize={500}
            onPress={() => navigation.push('SentOffers')} style={{
              flex: 0.5,
              backgroundColor: '#F0A51E',
              paddingHorizontal: 45,
              paddingVertical: 20,
              borderRadius: 20,
              marginRight: 30,
              marginLeft: 5
            }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'poppins_medium',
              textAlign: "center"
            }}>Sent </Text>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'poppins_medium',
              textAlign: "center",
              marginTop: -5,
              marginLeft: -4
            }}>Offers</Text>
          </Ripple>
        </View>
        <View style={{
          backgroundColor: '#a6d6ec',
          paddingVertical: 20,
          paddingHorizontal: 10,
          marginTop: 20,
          marginHorizontal: 30,
          borderRadius: 20
        }}>
          <Text
            style={{ textAlign: 'center', color: '#0D25B2', fontSize: 20, fontFamily: 'poppins_bold' }}> Post
            job</Text>
          <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'poppins_medium', }}>You can see reports
            about your </Text>
          <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'poppins_medium', }}>job posts and
            detailed data on your Portal</Text>
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            fontFamily: 'poppins_bold',
            paddingVertical: 10
          }}>Post Jobs using your portal</Text>
          <View style={{ paddingHorizontal: 60 }}>
            <Ripple rippleColor="blue" rippleOpacity={0.1} rippleDuration={400} rippleSize={300}
             onPress={() => toggWebVisibility()}
                style={{
                textAlign: 'center',
                backgroundColor: 'white',
                paddingVertical: 8,
                borderRadius: 20,
                color: '#0038FF',
                fontSize: 12,
                fontFamily: 'poppins_medium'
              }}><Text style={{textAlign:'center',color: '#0038FF', }} >https://www.example.com </Text></Ripple>
          </View>
          <Text style={{
            textAlign: 'center',
            color: '#4E4E4E',
            fontSize: 13,
            fontFamily: 'poppins_medium',
            marginTop: 10
          }}>Login to your portal using app credentials </Text>
          <Text style={{ textAlign: 'center', color: '#4E4E4E', fontSize: 13, fontFamily: 'poppins_medium', }}>(email
            and password)</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 47,
          marginTop: 30
        }}>
          <Text style={{ fontSize: 17, fontFamily: 'poppins_bold' }}>Posted Jobs</Text>
          <Pressable onPress={() => navigation.push('JobPosted')}>
            <Text style={{
              backgroundColor: '#CBCBCB',
              paddingHorizontal: 16,
              paddingVertical: 6,
              fontSize: 13,
              fontFamily: 'poppins_medium',
              borderRadius: 20,
              color: 'rgba(0, 0, 0, 0.81)'
            }}>Show All</Text></Pressable>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList scrollEnabled={false} nestedScrollEnabled={true}
            style={{ marginHorizontal: 30, marginTop: 10 }} data={companyJobs} renderItem={({ item }) => (
              <Ripple rippleColor="gray" rippleOpacity={0.2} rippleDuration={800} rippleSize={400}
                onPress={() => navigation.push('OfferAccepted', { ID: item.id })}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  margin: 5,
                  backgroundColor: '#fff',
                  borderColor: '#c2c2c2',
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 25,
                  elevation: 5,
                  alignItems: 'center',
                  paddingHorizontal: 20
                }}>
                <Text ellipsizeMode={'tail'} numberOfLines={1}
                  style={{ width: '60%', fontFamily: 'poppins_bold', fontSize: 12 }}>{item.title}</Text>
                <Text numberOfLines={1} style={{
                  fontFamily: 'poppins_light',
                  fontSize: 9,
                  marginLeft: 'auto',
                  width: 110
                }}>{item.qualification}</Text>
              </Ripple>
            )}
          />
        </SafeAreaView>


        <View style={{ height: 90 }} />
      </ScrollView>

    </View>
  )
}

export default PostJob
