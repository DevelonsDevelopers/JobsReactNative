import {FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AllCategories} from "../API/actions/categoryActions";

function PostJob({navigation}) {

    const dispatch = useDispatch();
    const [login, isLogin] = useState(false);
    const categories = useSelector(state => state.category.categories)
    const loading = useSelector(state => state.category.isLoading)

    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible(!visible)

    useEffect(() => {
        dispatch(AllCategories())
    }, [dispatch, navigation]);

  return (
    <View style={{flex: 1}}>
    <Modal visible={visible} animationType={"fade"} transparent={true}>
        <View onTouchStart={() => toggleVisibility()} style={{ flex:1, alignContent:'center', justifyContent:'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <View style={{ width:'100%', maxWidth:300, margin:48, elevation:24, borderRadius:15, backgroundColor:'#fff', opacity:1, padding: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', textAlign: 'center' }}>Menu</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto' }} source={require('../assets/close.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 10 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Profile</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Applied Jobs</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Saved Jobs</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>History</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Privacy Policy</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Terms & Conditions</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Share</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Rate</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Contact</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#13A3E1', padding: 15, borderRadius: 10, marginTop: 4 }}>
                    <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Sign Out</Text>
                    <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }} source={require('../assets/arrowRight.png')}/>
                </View>
            </View>
        </View>
    </Modal>
    <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1', marginBottom: -75}}>
        <View style={{flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1'}}>
            <View style={{flexDirection: 'row', height: 130}}>
                <Pressable onPress={() => toggleVisibility()}><Image style={{
                    width: 22,
                    height: 20,
                    marginTop: 70,
                    marginLeft: 30,
                    marginBottom: 250,
                    tintColor: '#fff'
                }} source={require('../assets/menu.png')} alt={'Okay'}/></Pressable>
                <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                <Pressable onPress={() => navigation.push('Companies')}><Image style={{width: 200, height: 40, marginTop: 60, alignSelf: 'center'}}
                           source={require('../assets/logo.png')} alt={'Okay'}/></Pressable>
                </View>
            </View>
            <Text style={{ textAlign:"center",color:'white',marginTop:-10,marginBottom:10,fontSize:20, }}>Provider</Text>
            <Text style={{color: '#fff', fontSize: 23, fontWeight: '500', width: '100%', textAlign: 'center'}}>Good
                Morning!</Text>
           
        </View>
     <View style={{ flexDirection:'row',justifyContent:'space-evenly',marginTop:30 }}>
        <View style={{ backgroundColor:'#F0A51E',paddingHorizontal:35,paddingVertical:20,borderRadius:20 }}>
        <Text style={{color:'white',fontSize:24 ,fontFamily:'poppins_medium',textAlign:"center"  }}>Applid </Text>
        <Text style={{color:'white',fontSize:20 ,fontFamily:'poppins_medium',textAlign:"center",marginTop:-5,marginLeft:-4  }}>Users</Text>
        </View>
        <View style={{ backgroundColor:'#F0A51E',paddingHorizontal:45,paddingVertical:20,borderRadius:20 }}>
        <Text style={{color:'white',fontSize:24 ,fontFamily:'poppins_medium',textAlign:"center"  }}>Sent </Text>
        <Text style={{color:'white',fontSize:20 ,fontFamily:'poppins_medium',textAlign:"center",marginTop:-5,marginLeft:-4  }}>Offers</Text>
        </View>
     </View>
       <View style={{ backgroundColor:'#a6d6ec' }}> 
<Text>Post job</Text>
<Text>You can see reports about your </Text>
<Text>job posts and detailed data  on your Portal</Text>
<Text>Post Jobs using your portal</Text>

       </View>
      
        {/* <SafeAreaView style={{flex: 1}}>
            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                      style={{marginHorizontal: 30, marginTop: 10}} data={categories} renderItem={({item}) => (
                <View
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
                          style={{width: '60%', fontFamily: 'poppins_bold', fontSize: 12}}>{item.name}</Text>
                    <Text numberOfLines={1} style={{
                        fontFamily: 'poppins_light',
                        fontSize: 9,
                        marginLeft: 'auto',
                        width: 110
                    }}>{item.name}</Text>
                </View>
            )}
            />
        </SafeAreaView> */}

        
        <View style={{height: 90}}/>
    </ScrollView>
    <View style={{
        flexDirection: 'row',
        backgroundColor: '#13A3E1',
        height: 60,
        borderRadius: 30,
        marginHorizontal: 20,
        marginBottom: 15,
        alignItems: 'center',
        paddingHorizontal: 20
    }}>
        <View style={{
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: 20,
                height: 20,
                tintColor: '#fff'
            }} source={require('../assets/saveIcon.png')} alt={'Okay'}/>
            <Text numberOfLines={1}
                  style={{fontFamily: 'poppins_medium', fontSize: 9, color: '#fff', marginTop: 2}}>Saved
                Jobs</Text>
        </View>
        <View style={{
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: 20,
                height: 20,
                tintColor: '#fff'
            }} source={require('../assets/cvBuilderIcon.png')} alt={'Okay'}/>
            <Text numberOfLines={1}
                  style={{fontFamily: 'poppins_medium', fontSize: 9, color: '#fff', marginTop: 2}}>CV
                Builder</Text>
        </View>
        <View style={{
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: 20,
                height: 20,
                tintColor: '#fff'
            }} source={require('../assets/homeIcon.png')} alt={'Okay'}/>
            <Text numberOfLines={1}
                  style={{fontFamily: 'poppins_medium', fontSize: 9, color: '#fff', marginTop: 2}}>Home</Text>
            <View style={{height: 4, width: 35, borderRadius: 2, backgroundColor: '#F0A51E'}}/>
        </View>
        <View style={{
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: 20,
                height: 20,
                tintColor: '#fff'
            }} source={require('../assets/searchIcon.png')} alt={'Okay'}/>
            <Text numberOfLines={1} style={{
                fontFamily: 'poppins_medium',
                fontSize: 9,
                color: '#fff',
                marginTop: 2
            }}>Advance</Text>
        </View>
        <View style={{
            height: '100%',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image style={{
                width: 20,
                height: 20,
                tintColor: '#fff'
            }} source={require('../assets/profileIcon.png')} alt={'Okay'}/>
            <Text numberOfLines={1} style={{
                fontFamily: 'poppins_medium',
                fontSize: 9,
                color: '#fff',
                marginTop: 2
            }}>Profile</Text>
        </View>
        {/*<View style={{ height: '100%', flex: 1 }}>*/}

        {/*</View>*/}
        {/*<View style={{ height: '100%', flex: 1 }}>*/}

        {/*</View>*/}
        {/*<View style={{ height: '100%', flex: 1 }}>*/}

        {/*</View>*/}
        {/*<View style={{ height: '100%', flex: 1 }}>*/}

        {/*</View>*/}
    </View>
</View>
  )
}

export default PostJob
