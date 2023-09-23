import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    BackHandler,
    FlatList,
    Image,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { CompanyData } from '../API/actions/companyActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CitySelectModal from "../Components/CitySelectModal";
import CountrySelectModal from "../Components/CountrySelectModal";
import ProviderTypeModal from "../Components/ProviderTypeModal";
import { AllCities } from "../API/actions/cityActions";
import { AllCountries } from "../API/actions/countryActions";
import PhoneInput from 'react-native-phone-number-input';
import PhoneModal from '../Components/PhoneModal';

const ProviderAccountManage = ({ navigation }) => {

    const dispatch = useDispatch();

    const [ID, setID] = useState()
    const [cityVisible, setCityVisible] = useState(false)
    const [countryVisible, setCountryVisible] = useState(false)
    const [type, setType] = useState(false)


    const [nameCity, setNameCity] = useState()
    const [countryName, setCountryName] = useState()

    const [data, setData] = useState({
        email: '',
        size: '',
        city: '',
        country: '',
        phone: '',
        headquater: '',
        type: ''
    })

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const value = await AsyncStorage.getItem('ID')
        setID(value);
    }

    const company = useSelector(state => state.company.company)

    useEffect(() => {
        if (ID) {
            dispatch(CompanyData(ID))
        }
    }, [dispatch, ID]);


    useEffect(() => {
        if (company) {
            setData({
                ...data,
                email: company?.email,
                size: company?.size,
                city: company?.city,
                country: company?.country,
                phone: company?.phone,
                headquater: company?.headquater,
                type: company?.type
            })
        }
    }, [company])

    const toggleVisibility = () => setCityVisible(!cityVisible)
    const toggleCountryVisibility = () => setCountryVisible(!countryVisible)
    const toggleType = () => setType(!type)

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
        setData({ ...data, city: item.id })
        toggleVisibility()
        setNameCity(item.name)
    }

    const countryClick = (item) => {
        setData({ ...data, country: item.id })
        toggleCountryVisibility()
        setCountryName(item.name)
    }

    const typeClick = (value) => [
        setData({ ...data, type: value })
    ]

    const [phoneVisible, setPhoneVisible] = useState(false)
    const togglePhoneVisible = () => setPhoneVisible(!phoneVisible)




    return (
        <View style={{ flex: 1 }}>
            <CitySelectModal visible={cityVisible} toggleVisibility={toggleVisibility} list={cities} click={cityClick} />
            <CountrySelectModal visible={countryVisible} toggleVisibility={toggleCountryVisibility} list={countries}
                click={countryClick} />

            <PhoneModal visible={phoneVisible} togglePhoneVisible={togglePhoneVisible} />

            <ProviderTypeModal visible={type} toggleVisibility={toggleType} click={typeClick} />
            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1', }}>
                <View style={{ flexDirection: 'column', width: '100%', height: 240, backgroundColor: '#13A3E1' }}>
                    <View style={{ flexDirection: 'row', height: 130 }}>
                        <Pressable onPress={() => navigation.goBack()} style={{ padiingRight: 5 }}><Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            marginBottom: 250,
                            tintColor: '#fff'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Image style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                source={require('../assets/logo.png')} alt={'Okay'} />
                        </View>
                    </View>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        fontFamily: 'poppins_bold',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: 10
                    }}>Company Details</Text>

                    <Text style={{
                        color: '#fff',
                        fontSize: 12,
                        fontFamily: 'poppins_semibold',
                        width: '60%',
                        alignSelf: 'center',
                        textAlign: 'center',
                        marginTop: 5,
                        backgroundColor: '#ff0000',
                        borderRadius: 10,
                        paddingTop: 1
                    }}>Complete Your Profile</Text>

                </View>

                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderTopLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Name</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderTopRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}> {company?.name} </TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Email</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput
                                onChangeText={text => setData({ ...data, email: text })}
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}>{company?.email}</TextInput>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderBottomLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Headquater</Text>
                        </View>
                        <Pressable
                            style={{
                                flex: 1.3,
                                borderBottomRightRadius: 30,
                                borderColor: '#b2b2b2',
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 5
                            }}>
                            <View>
                                <TextInput
                                    onChangeText={text => setData({ ...data, headquater: text })}
                                    placeholder={'Missing!!!'} style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}>{company?.headquater}</TextInput>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column',
                    borderColor: '#b2b2b2',
                    backgroundColor: '#fff',
                    marginHorizontal: 10,
                    marginRight: 30,
                    marginLeft: 30,
                    borderRadius: 30,
                    marginTop: 20
                }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',
                            borderTopLeftRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Type</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderTopRightRadius: 30,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput onChangeText={text => setData({ ...data, type: text })} editable={false} placeholder={'Missing!!!'} style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_medium',
                                width: '100%',
                                textAlign: 'left'
                            }}>{company?.type}</TextInput>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                        <View style={{
                            flex: 0.7,
                            backgroundColor: '#E6E6E6',

                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <Text style={{
                                color: '#000',
                                fontSize: 14,
                                fontFamily: 'poppins_light',
                                width: '100%',
                                textAlign: 'left'
                            }}>Size</Text>
                        </View>
                        <View style={{
                            flex: 1.3,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <TextInput onChangeText={text => setData({ ...data, size: text })}
                                placeholder={'Missing!!!'} style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    width: '100%',
                                    textAlign: 'left'
                                }}>{company?.size}</TextInput>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        borderColor: '#b2b2b2',

                    }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{
                                flex: 0.7,
                                backgroundColor: '#E6E6E6',
                                borderColor: '#b2b2b2',
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_light',
                                    width: '100%',
                                    textAlign: 'left'
                                }}>City</Text>
                            </View>
                            <View style={{
                                flex: 1.3,
                                borderColor: '#b2b2b2',
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 5
                            }}>
                                <Pressable>
                                    <TextInput editable={false}
                                        placeholder={'Missing!!!'}
                                        style={{
                                            color: '#000',
                                            fontSize: 14,
                                            fontFamily: 'poppins_medium',
                                            width: '100%',
                                            textAlign: 'left'
                                        }}> {company?.city_name} </TextInput>
                                </Pressable>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1, marginTop: -1 }}>
                            <View style={{
                                flex: 0.7,
                                backgroundColor: '#E6E6E6',
                                borderBottomLeftRadius: 30,
                                borderColor: '#b2b2b2',
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 5
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontSize: 14,
                                    fontFamily: 'poppins_light',
                                    width: '100%',
                                    textAlign: 'left'
                                }}>Country</Text>
                            </View>
                            <View style={{
                                flex: 1.3,
                                borderBottomRightRadius: 30,
                                borderColor: '#b2b2b2',
                                borderWidth: 1,
                                paddingHorizontal: 20,
                                paddingVertical: 5
                            }}>
                                <Pressable onPress={() => toggleCountryVisibility()}><TextInput editable={false}

                                    placeholder={'Missing!!!'}
                                    style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        width: '100%',
                                        textAlign: 'left'
                                    }}> {company?.country_name} </TextInput></Pressable>
                            </View>
                        </View>
                    </View>




                </View>



                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 'auto', marginRight: 'auto', }}>
                    <TextInput editable={false} style={{
                        textAlign: 'center',
                        paddingHorizontal: 10,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        paddingVertical: 8,
                        borderRightWidth: 1,
                        width: '20%',
                        color: 'black',
                        fontFamily: 'poppins_regular',
                        borderColor: '#b2b2b2',
                        borderTopLeftRadius: 30,
                        borderWidth: 1,
                        borderBottomLeftRadius: 30,
                        backgroundColor: '#E6E6E6',
                    }}>Phone</TextInput>
                    <TextInput onTouchStart={() => togglePhoneVisible()} style={{
                        textAlign: 'center',
                        paddingHorizontal: 6,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        paddingVertical: 8,
                        borderColor: '#b2b2b2',
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderRightWidth: 1
                    }} placeholder="country code" ></TextInput>
                    <TextInput placeholder="Enter Your Number" style={{
                        textAlign: 'left',
                        paddingHorizontal: 10,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        paddingVertical: 8,
                        width: '46%',
                        borderColor: '#b2b2b2',
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderRightWidth: 1
                    }}  >verifyPhone</TextInput>
                </View>


                {/* <View style={{ flexDirection: 'column', marginTop: 20, marginHorizontal: 30 }}>
                    <View style={{ height: 60, borderColor: '#b2b2b2', borderWidth: 1, borderRadius: 10, padding: 4, backgroundColor: 'white' }}>
                        <PhoneInput onChangeText={text => console.log(text)}
                            layout='first'
                            defaultCode='PK'
                        />
                    </View>
                    <Image style={{ width: 14, height: 14, marginLeft: 'auto', position: 'absolute', top: 22, left: '92%' }}
                        source={require('../assets/verified.png')} />
                </View> */}
                {/* <View style={{
                            flex: 1.3,
                            borderColor: '#b2b2b2',
                            borderWidth: 1,
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }}>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    onChangeText={text => setData({ ...data, phone: text })}
                                    placeholder={'Missing!!!'} style={{
                                        color: '#000',
                                        fontSize: 14,
                                        fontFamily: 'poppins_medium',
                                        textAlign: 'left'
                                    }}>{company?.phone}</TextInput>

                                <Image style={{ width: 14, height: 14, marginLeft: 'auto' }}
                                    source={require('../assets/verified.png')} />

                            </View>
                        </View> */}

                <Pressable style={{
                    backgroundColor: '#13A3E1',
                    borderRadius: 25,
                    alignItems: 'center',
                    padding: 15,
                    marginTop: 15,
                    marginHorizontal: 25
                }}>
                    <Text style={{ color: '#fff', fontWeight: '800', fontSize: 15 }}
                    >Update
                    </Text>
                </Pressable>

                <Pressable onPress={() => navigation.push('Verify', { verifyPhone: company?.phone })}
                    style={{
                        borderColor: '#000',
                        backgroundColor: '#000',
                        borderWidth: 1,
                        borderRadius: 25,
                        alignItems: 'center',
                        padding: 15,
                        marginTop: 15,
                        marginHorizontal: 25
                    }}><Text style={{ color: '#fff', fontWeight: '800', fontSize: 15 }}>Verify
                        Phone</Text></Pressable>
            </ScrollView>
        </View>
    )
}

export default ProviderAccountManage
