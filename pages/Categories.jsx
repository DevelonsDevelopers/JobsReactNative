import {
    Image,
    TextInput,
    Text,
    Pressable,
    ScrollView,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    Dimensions
} from 'react-native'
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import Termsandconditions from './Termsandconditions'
import {useDispatch, useSelector} from "react-redux";
import {AllCategories} from "../API/actions/categoryActions";
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import NoData from '../Components/NoData';
import categoryService from '../server/services/categoryService';

function Categories({navigation}) {

    const [categories, setCategories] = useState([])
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [fetched, setFetched] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        if (fetched) {
            setIsLoading(false)
        }
    }, [fetched])


    useEffect(() => {
        categoryService.all().then(response => {
            setCategories(response.data)
            setFetched(true)
        }).catch(err => {
            console.error(err);
            setFetched(true)
            setError(true)
        })
    }, []);

    useEffect(() => {
        if (categories) {
            setData(categories)
        }
    }, [categories]);

    const search = (query) => {
        const searched = categories.filter((category) => {
            return (category.name).toLowerCase().includes(query.toLowerCase());
        })
        setData(searched)
    }
    const [noSearch, setNoSearch] = useState(false)

    useEffect(() => {
        if (data?.length === 0) {
            setNoSearch(true)
        } else {
            setNoSearch(false)
        }
    }, [data])

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
                {isLoading ?
                    <View style={{marginTop: 400}}>
                        <ActivityIndicator size={60} color="#13A3E1"/>
                    </View>
                    :
                    <>
                        {categories.length === 0 ? <NoData text={"No Categories Found"}/>
                            :
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
                                            style={{
                                                textAlign: 'center',
                                                marginVertical: 20,
                                                fontFamily: 'poppins_medium'
                                            }}>Network
                                            Error...!</Text>
                                    </View>
                                    :
                                    <>
                                        <View style={{backgroundColor: '#F1F1F1'}}>
                                            <View style={{flexDirection: 'row', height: 90}}>
                                                <Pressable onPress={() => navigation.goBack()}
                                                           style={{paddingRight: 5}}><Image style={{
                                                    width: 22,
                                                    height: 20,
                                                    marginTop: 70,
                                                    marginLeft: 30,
                                                    tintColor: '#000'
                                                }} source={require('../assets/back_arrow.png')}
                                                                                            alt={'Okay'}/></Pressable>
                                                <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                                                    <Pressable>
                                                        <Image
                                                            style={{
                                                                width: 150,
                                                                height: 40,
                                                                marginTop: 60,
                                                                alignSelf: 'center'
                                                            }}
                                                            source={require('../assets/logo.png')} alt={'Okay'}/>
                                                    </Pressable>
                                                </View>
                                            </View>
                                            <View>
                                                <TextInput onChangeText={text => search(text)} style={{
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
                                            {noSearch ?
                                                <Text style={{
                                                    textAlign: 'center',
                                                    color: 'gray',
                                                    fontSize: 16,
                                                    marginTop: '20%'
                                                }}>No Search Found</Text>
                                                :
                                                <SafeAreaView style={{paddingBottom: 25}}>
                                                    <FlatList scrollEnabled={false} nestedScrollEnabled={true}
                                                              style={{marginHorizontal: 20}} data={data}
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
                                                                      <Image
                                                                          style={{width: 40, height: 40, marginTop: 5}}
                                                                          source={{uri: `${item.image}`}}/>
                                                                      <Text style={{
                                                                          fontSize: 12,
                                                                          fontFamily: 'poppins_semibold',
                                                                          marginTop: 12,
                                                                          textAlign: 'center'
                                                                      }}>{item.name}</Text>
                                                                  </Pressable>
                                                              )}
                                                              numColumns={2}/>
                                                </SafeAreaView>
                                            }
                                        </View>
                                    </>
                                }
                            </>}
                    </>}
            </ScrollView>

        </View>
    )
}

export default Categories
