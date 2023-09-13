import React, {useEffect, useState} from 'react'
import {Image, Modal, Pressable, Text, TextInput, View} from 'react-native'
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import CitySelectModal from '../Components/CitySelectModal'
import {AllCities} from '../API/actions/cityActions'
import {useDispatch, useSelector} from 'react-redux'
import {AllCountries} from '../API/actions/countryActions'
import CountrySelectModal from '../Components/CountrySelectModal'
import ProviderTypeModal from '../Components/ProviderTypeModal'

const ProviderProfile = ({navigation}) => {

    // city country modal==============
    const dispatch = useDispatch();
    const [cityVisible, setCityVisible] = useState(false)
    const [countryVisible, setCountryVisible] = useState(false)
    const toggleVisibility = () => setCityVisible(!cityVisible)
    const toggleCountryVisibility = () => setCountryVisible(!countryVisible)

    const cities = useSelector(state => state.city.cities)
    const countries = useSelector(state => state.country.countries)

    useEffect(() => {
        if (!cities) {
            dispatch(AllCities())
        }
    }, [dispatch, cities]);

    useEffect(() => {
        if (!countries) {
            dispatch(AllCountries())
        }
    }, [dispatch, countries]);

    const cityClick = (item) => {
        setSeekerData({...seekerData, city: item.id})
        toggleVisibility()
        setNameCity(item.name)
    }

    const countryClick = (item) => {
        setSeekerData({...seekerData, country: item.id})
        toggleCountryVisibility()
        setCountryName(item.name)
    }

    const [type, setType] = useState(false)
    const toggleType = () => setType(!type)

    return (

        <View style={{flex: 1, backgroundColor: '#F0A51E'}}>

            <CitySelectModal visible={cityVisible} toggleVisibility={toggleVisibility} list={cities} click={cityClick}/>
            <CountrySelectModal visible={countryVisible} toggleVisibility={toggleCountryVisibility} list={countries}
                                click={countryClick}/>
            <ProviderTypeModal visible={type} toggleVisibility={toggleType}/>


            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <Text style={{
                    color: 'white',
                    fontFamily: 'poppins_bold',
                    fontSize: 17,
                    width: 250,
                    textAlign: 'center',
                    marginBottom: 10
                }}>
                    Please Complete Your Profile !!!
                </Text>
                <Pressable onPress={() => toggleCountryVisibility()} style={{
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 50,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }}>
                    <TextInput onFocus={() => toggleCountryVisibility()} placeholder='Enter your Country'
                               inputMode={'text'}/>
                </Pressable>
                <Pressable onPress={() => toggleVisibility()} style={{
                    paddingVertical: 10,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }}>
                    <TextInput onFocus={() => toggleVisibility()} placeholder={'Enter your City'}/>
                </Pressable>

                <TextInput style={{
                    height: 50,
                    backgroundColor: '#fff',
                    width: '85%',
                    borderRadius: 25,
                    marginTop: 15,
                    paddingHorizontal: 20,
                    color: '#626262',
                    elevation: 10
                }} placeholder={'Enter your Phone'}/>
              
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                    backgroundColor: '#fff',
                    elevation: 10,
                    borderRadius: 25,
                    width: '85%',
                    paddingRight: 20
                }}>
                    <TextInput style={{
                        height: 50,
                        paddingHorizontal: 20,
                        color: '#626262',
                        flex: 1
                    }} placeholder={'Enter your HeadQuarter Address'}/>

                </View>
                <Pressable onPress={() => toggleType()}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                        backgroundColor: '#fff',
                        elevation: 10,
                        borderRadius: 25,
                        width: '85%',
                        paddingRight: 20
                    }}>

                        <TextInput onFocus={() => toggleType()} style={{
                            height: 50,
                            paddingHorizontal: 20,
                            color: '#626262',
                            flex: 1
                        }} placeholder={'Enter your Company Type'}/>

                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.push('PostJob')} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 50,
                    paddingVertical: 15
                }}><Text style={{color: '#fff', fontWeight: '900', fontSize: 15}}>Continue</Text></Pressable>

            </View>

        </View>

    )
}

export default ProviderProfile
