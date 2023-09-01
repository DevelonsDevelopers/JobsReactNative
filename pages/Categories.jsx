import {Image, TextInput, Text, Pressable, ScrollView, FlatList, SafeAreaView, ActivityIndicator} from 'react-native'
import React, {useEffect} from 'react'
import {View} from 'react-native'
import Termsandconditions from './Termsandconditions'
import {useDispatch, useSelector} from "react-redux";
import {AllCategories} from "../API/actions/categoryActions";

function Categories({navigation}) {

    const categories = useSelector(state => state.category.categories)
    const data = useSelector(state => state.category.nodata)
    const loading = useSelector(state => state.category.isLoading)
    const error = useSelector(state => state.category.error)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories) {
            dispatch(AllCategories())
        }
    }, [dispatch, navigation, categories]);

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
            {loading ?
                <View style={{marginTop: 400}}>
                    <ActivityIndicator size={60} color="#13A3E1"/>
                </View>
                :
                <>
                    {data ? <View style={{marginTop: 200}}>
                            <Image source={require('../assets/nodata.png')}
                                   style={{width: 260, height: 260, marginLeft: 80, marginBottom: -20, marginTop: 40}}/>
                            <Text style={{textAlign: 'center', fontFamily: 'poppins_medium'}}>No Data Found</Text>
                        </View> :
                        <>
                            {error ?
                                <View style={{marginTop: 360}}>
                                    <Image source={require('../assets/delete.png')} style={{
                                        width: 30,
                                        height: 30,
                                        marginLeft: 190,
                                        marginBottom: -20,
                                        marginTop: 40
                                    }}/>
                                    <Text
                                        style={{textAlign: 'center', marginVertical: 20, fontFamily: 'poppins_medium'}}>Network
                                        Error...!</Text>
                                </View> : <>
                                    <View style={{backgroundColor: '#F1F1F1'}}>
                                        <View style={{flexDirection: 'row', height: 90}}>
                                            <Pressable onPress={() => navigation.goBack()} style={{ paddingRight:5 }}><Image style={{
                                                width: 22,
                                                height: 20,
                                                marginTop: 70,
                                                marginLeft: 30,
                                                tintColor: '#000'
                                            }} source={require('../assets/back_arrow.png')} alt={'Okay'}/></Pressable>
                                            <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                                                <Pressable onPress={() => navigation.push('Jobs')}><Image
                                                    style={{width: 150, height: 40, marginTop: 60, alignSelf: 'center'}}
                                                    source={require('../assets/logo.png')} alt={'Okay'}/></Pressable>
                                            </View>
                                        </View>
                                        <View>
                                            <TextInput style={{
                                                backgroundColor: '#fff',
                                                marginHorizontal: 30,
                                                height: 50,
                                                borderRadius: 25,
                                                paddingHorizontal: 20,
                                                marginTop: 30,
                                                borderColor: 'black',
                                                fontSize: 17,
                                                elevation: 10
                                            }} placeholder={'Search'}/>
                                            <Text style={{
                                                fontSize: 18,
                                                fontFamily: 'poppins_bold',
                                                width: '100%',
                                                textAlign: 'center',
                                                marginVertical: 20,
                                                padding: 0
                                            }}>Browse by Categories</Text>
                                        </View>
                                        <SafeAreaView>
                                            <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                                      style={{marginHorizontal: 20}} data={categories}
                                                      renderItem={({item}) => (
                                                          <Pressable
                                                              onPress={() => navigation.push('JobsByCategory', {CATID: item.id})}
                                                              style={{
                                                                  flex: 1,
                                                                  backgroundColor: '#fff',
                                                                  height: 120,
                                                                  alignItems: 'center',
                                                                  padding: 15,
                                                                  borderRadius: 15,
                                                                  margin: 5,
                                                                  justifyContent: 'center'
                                                              }}>
                                                              <Image style={{width: 40, height: 40, marginTop: 5}}
                                                                     source={require('../assets/marketing.png')}/>
                                                              <Text style={{
                                                                  fontSize: 12,
                                                                  fontFamily: 'poppins_semibold',
                                                                  marginTop: 12
                                                              }}>{item.name}</Text>
                                                          </Pressable>
                                                      )}
                                                      numColumns={2}/>
                                        </SafeAreaView>
                                    </View>
                                </>
                            }
                        </>}
                </>}
        </ScrollView>
    )
}

export default Categories
