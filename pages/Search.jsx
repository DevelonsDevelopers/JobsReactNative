import {Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView} from "react-native";
import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import BottomSheet from "react-native-simple-bottom-sheet";
import {useDispatch, useSelector} from "react-redux";
import {AllCategories} from "../API/actions/categoryActions";
import {AllCompanies} from "../API/actions/companyActions";
import {AllCities} from "../API/actions/cityActions";
import CitySelectModal from "../Components/CitySelectModal";
import CategorySelectModal from "../Components/CategorySelectModal";
import CompanySelectModal from "../Components/CompanySelectModal";

const data = [
    {"name": "Facebook"},
    {"name": "Google"},
    {"name": "Netflix"},
    {"name": "Youtube"}
]

function Search({route, navigation}) {

    const {query} = route.params;

    const [partTime, setPartTime] = useState(false)
    const [fullTime, setFullTime] = useState(false)
    const [remote, setReomote] = useState(false)

    const [search, setSearch] = useState(query)
    const [country, setCountry] = useState("")
    const [countryID, setCountryID] = useState(0)
    const [category, setCategory] = useState([])
    const [categoryID, setCategoryID] = useState()
    const [city, setCity] = useState("")
    const [cityID, setCityID] = useState()
    const [company, setCompany] = useState("")
    const [companyID, setCompanyID] = useState()
    const [startSalary, setStartSalary] = useState("")
    const [salaryEnd, setSalaryEnd] = useState("")
    const [type, setType] = useState("")
    const [isCountry, setIsCountry] = useState("false")
    const [isCategory, setIsCategory] = useState("false")
    const [isCity, setIsCity] = useState("false")
    const [isCompany, setIsCompany] = useState("false")
    const [isSalary, setIsSalary] = useState("false")
    const [isType, setIsType] = useState("false")

    const categories = useSelector(state => state.category.categories)
    const cities = useSelector(state => state.city.cities)
    const companies = useSelector(state => state.company.companies)
    const dispatch = useDispatch();

    const [cityVisibility, setCityVisibility] = useState(false)
    const [categoryVisibility, setCategoryVisibility] = useState(false)
    const [companyVisibility, setCompanyVisibility] = useState(false)

    const toggleCityVisibility = () => setCityVisibility(!cityVisibility)
    const toggleCategoryVisibility = () => setCategoryVisibility(!categoryVisibility)
    const toggleCompanyVisibility = () => setCompanyVisibility(!companyVisibility)

    useEffect(() => {
        if (!categories) {
            dispatch(AllCategories())
        }
    }, [dispatch, navigation, categories]);

    useEffect(() => {
        if (!companies) {
            dispatch(AllCompanies())
        }
    }, [dispatch, navigation, companies]);

    useEffect(() => {
        if (!cities) {
            dispatch(AllCities())
        }
    }, [dispatch, cities]);

    const cityClick = (item) => {
        toggleCityVisibility()
        setCity(item.name)
        setCityID(item.id)

    }

    const categoryClick = (item) => {
        toggleCategoryVisibility()
        setCategory(category => [...category, item.name])
        setCategoryID(item.id)
    }

    const companyClick = (item) => {
        toggleCompanyVisibility()
        setCompany(item.name)
        setCompanyID(item.id)
    }

    const data1 = ["Good", "LevelGood", "New"]

    return (
        <View style={{flex: 1}}>
            <CitySelectModal visible={cityVisibility} toggleVisibility={toggleCityVisibility} list={cities}
                             click={cityClick}/>
            <CategorySelectModal visible={categoryVisibility} toggleVisibility={toggleCategoryVisibility}
                                 list={categories} click={categoryClick}/>
            <CompanySelectModal visible={companyVisibility} toggleVisibility={toggleCompanyVisibility} list={companies}
                                click={companyClick}/>
            <ScrollView style={{flex: 1, backgroundColor: '#F1F1F1'}}>
                <View style={{backgroundColor: '#EAEAEA'}}>
                    <View style={{flexDirection: 'row', height: 90}}>
                        <Pressable onPress={() => navigation.goBack()} style={{ padiingRight:5 }}><Image style={{
                            width: 22,
                            height: 20,
                            marginTop: 70,
                            marginLeft: 30,
                            tintColor: '#000'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'}/></Pressable>
                        <View style={{width: '100%', marginTop: 0, paddingEnd: 90}}>
                            <Pressable onPress={() => navigation.push('AdvanceSearch')}><Image
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
                            elevation: 10
                        }} placeholder={'Search'}/>
                    </View>
                    <SafeAreaView>
                        <FlatList nestedScrollEnabled={false} scrollEnabled={false}
                                  style={{marginHorizontal: 0, marginTop: 20}} data={data} renderItem={({item}) => (
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
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={{
                                        color: '#207A00',
                                        backgroundColor: 'rgba(0,180,18,0.2)',
                                        paddingHorizontal: 10,
                                        paddingTop: 4,
                                        fontSize: 10,
                                        fontFamily: 'poppins_medium',
                                        borderRadius: 5
                                    }}>NEW</Text>
                                    <Text style={{
                                        marginLeft: 'auto',
                                        textAlign: 'right',
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13
                                    }}>Today</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 0.8}}>
                                        <Text numberOfLines={1}
                                              style={{fontFamily: 'poppins_bold', marginTop: 5, fontSize: 15}}>Need
                                            Android Developer</Text>
                                        <Text style={{
                                            fontFamily: 'poppins_regular',
                                            marginTop: 0,
                                            fontSize: 12
                                        }}>Facebook</Text>
                                    </View>
                                    <Image style={{width: 20, height: 20, marginLeft: 'auto', marginTop: 10}}
                                           source={require('../assets/bookmarkIcon.png')}/>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={{
                                        fontFamily: 'poppins_bold',

                                        fontSize: 16,
                                    }}>IT & Communications</Text>
                                    <Text style={{
                                        marginLeft: 'auto',
                                        textAlign: 'right',
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13
                                    }}>Bachelors</Text>
                                </View>
                                <View style={{paddingHorizontal: 64,}}>
                                    <Text style={{
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13,
                                        textAlign: 'center',
                                        marginTop: 4,
                                        backgroundColor: '#d9d9d9',
                                        paddingHorizontal: 10,
                                        paddingVertical: 2,
                                        borderRadius: 10,
                                        margin: 'auto',
                                    }}>
                                        Salary $5000/month
                                    </Text>
                                </View>

                                <View style={{flexDirection: 'row', flex: 1, marginTop: 7,}}>
                                    <Text style={{
                                        color: 'white',
                                        backgroundColor: '#13a3e1',
                                        paddingHorizontal: 10,
                                        paddingTop: 5,
                                        fontSize: 15,
                                        fontFamily: 'poppins_medium',
                                        borderRadius: 14
                                    }}>Full time</Text>
                                    <Text style={{
                                        marginLeft: 'auto',
                                        textAlign: 'right',
                                        fontFamily: 'poppins_medium',
                                        fontSize: 13,
                                        paddingTop: 6,
                                    }}>Lahore</Text>
                                </View>


                            </View>
                        )}/>
                    </SafeAreaView>
                </View>
            </ScrollView>
            <BottomSheet isOpen={false} sliderMaxHeight={800}>
                {(onScrollEndDrag) => (
                    <ScrollView onScrollEndDrag={onScrollEndDrag}>
                        {/*{[...Array(10)].map((_, index) => (*/}
                        {/*    <View key={`${index}`}>*/}
                        {/*        <Text>{`List Item ${index + 1}`}</Text>*/}
                        {/*    </View>*/}
                        {/*))}*/}
                        <View style={{padding: 15, alignItems: 'center'}}>
                            <Text numberOfLines={1} style={{fontFamily: 'poppins_bold', fontSize: 20}}>Advance
                                Search</Text>
                            <View style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
                                <Text numberOfLines={1} style={{
                                    fontFamily: 'poppins_semibold',
                                    marginTop: 7,
                                    fontSize: 12
                                }}>Category</Text>
                                <Pressable onPress={() => toggleCategoryVisibility()}>
                                    <TextInput editable={false}
                                               placeholder={"Select Category"}
                                               style={{
                                                   backgroundColor: '#f5f5f5',
                                                   marginHorizontal: 5,
                                                   height: 50,
                                                   borderRadius: 25,
                                                   paddingHorizontal: 20,
                                                   marginTop: 2,
                                                   elevation: 5,
                                                   color: '#000'
                                               }}></TextInput></Pressable>
                                <SafeAreaView>
                                    <FlatList nestedScrollEnabled={true} scrollEnabled={true} horizontal={true}
                                              style={{marginHorizontal: 0, marginTop: 20}} data={category}
                                              renderItem={({item, index}) => (
                                                  <Pressable onPress={() => setCategory(category.splice(index + 1, 1))}><View
                                                      style={{
                                                          backgroundColor: '#dadada',
                                                          paddingHorizontal: 10,
                                                          paddingVertical: 3,
                                                          marginHorizontal: 3,
                                                          borderRadius: 15,
                                                          flexDirection: "row",
                                                          alignItems: 'center'
                                                      }}><Text>{item}</Text>
                                                      <Image style={{width: 8, height: 8, marginLeft: 10}}
                                                             source={require('../assets/close.png')}/>
                                                  </View>
                                                  </Pressable>
                                              )}/>
                                </SafeAreaView>
                            </View>
                            <View style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
                                <Text numberOfLines={1}
                                      style={{fontFamily: 'poppins_semibold', marginTop: 7, fontSize: 12}}>City</Text>
                                <Pressable onPress={() => toggleCityVisibility()}><TextInput editable={false} style={{
                                    backgroundColor: '#f5f5f5',
                                    marginHorizontal: 5,
                                    height: 50,
                                    borderRadius: 25,
                                    paddingHorizontal: 20,
                                    marginTop: 2,
                                    elevation: 5,
                                    color: '#000'
                                }} placeholder={'Select City'}>{city}</TextInput></Pressable>
                            </View>
                            <View style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
                                <Text numberOfLines={1} style={{
                                    fontFamily: 'poppins_semibold',
                                    marginTop: 7,
                                    fontSize: 12
                                }}>Company</Text>
                                <Pressable onPress={() => toggleCompanyVisibility()}><TextInput editable={false}
                                                                                                style={{
                                                                                                    backgroundColor: '#f5f5f5',
                                                                                                    marginHorizontal: 5,
                                                                                                    height: 50,
                                                                                                    borderRadius: 25,
                                                                                                    paddingHorizontal: 20,
                                                                                                    marginTop: 2,
                                                                                                    elevation: 5,
                                                                                                    color: '#000'
                                                                                                }}
                                                                                                placeholder={'Select Company'}>{company}</TextInput></Pressable>
                            </View>

                            <View style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
                                <Text numberOfLines={1} style={{
                                    fontFamily: 'poppins_semibold',
                                    marginTop: 7,
                                    fontSize: 14,
                                    marginBottom: 10
                                }}>Salary Range</Text>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    marginHorizontal: 45,
                                    gap: 40
                                }}>
                                    <Text style={{
                                        marginRight: 50,
                                        fontSize: 13,
                                        fontFamily: 'poppins_medium'
                                    }}>starting</Text>
                                    <Text
                                        style={{marginRight: 20, fontSize: 13, fontFamily: 'poppins_medium'}}>End</Text>
                                </View><View
                                style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 45}}>
                                <TextInput placeholder={"0"} style={{
                                    textAlign: 'center',
                                    borderWidth: 0.7,
                                    paddingHorizontal: 30,
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    paddingVertical: 5,
                                    borderRadius: 10
                                }}></TextInput>
                                <Text style={{backgroundColor: 'black', width: 7, height: 1, marginTop: 15}}>-</Text>
                                <TextInput placeholder={"0"} style={{
                                    textAlign: 'center',
                                    borderWidth: 0.7,
                                    paddingHorizontal: 30,
                                    fontSize: 14,
                                    fontFamily: 'poppins_medium',
                                    paddingVertical: 5,
                                    borderRadius: 10
                                }}></TextInput>

                            </View>
                            </View>
                            <View style={{width: '100%', flexDirection: 'column', marginTop: 10}}>
                                <Text numberOfLines={1} style={{
                                    fontFamily: 'poppins_semibold',
                                    marginTop: 7,
                                    fontSize: 14,
                                    marginBottom: 10
                                }}>job type</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>

                                    <Pressable onPress={() => setPartTime(!partTime)} style={partTime ? {
                                        backgroundColor: '#13A3E1',
                                        paddingHorizontal: 10,
                                        paddingVertical: 7,
                                        borderRadius: 20
                                    } : {
                                        backgroundColor: '#f5f5f5',
                                        paddingHorizontal: 10,
                                        paddingVertical: 7,
                                        borderRadius: 20
                                    }}>
                                        <Text style={partTime ? {
                                            fontSize: 12,
                                            fontFamily: 'poppins_medium',
                                            color: 'white',
                                        } : {fontSize: 12, fontFamily: 'poppins_medium', color: 'gray',}}>Part
                                            Time</Text>
                                    </Pressable>
                                    <Pressable onPress={() => setFullTime(!fullTime)} style={fullTime ? {
                                        backgroundColor: '#13A3E1',
                                        paddingHorizontal: 10,
                                        paddingVertical: 7,
                                        borderRadius: 20
                                    } : {
                                        backgroundColor: '#f5f5f5',
                                        paddingHorizontal: 10,
                                        paddingVertical: 7,
                                        borderRadius: 20
                                    }}>
                                        <Text style={fullTime ? {
                                            fontSize: 12,
                                            fontFamily: 'poppins_medium',
                                            color: 'white'
                                        } : {fontSize: 12, fontFamily: 'poppins_medium', color: 'gray',}}>Full
                                            Time</Text>
                                    </Pressable>
                                    <Pressable onPress={() => setReomote(!remote)} style={remote ? {
                                        backgroundColor: '#13A3E1',
                                        paddingHorizontal: 10,
                                        paddingVertical: 7,
                                        borderRadius: 20
                                    } : {
                                        backgroundColor: '#f5f5f5',
                                        paddingHorizontal: 10,
                                        paddingVertical: 7,
                                        borderRadius: 20
                                    }}>
                                        <Text style={remote ? {
                                            fontSize: 12,
                                            fontFamily: 'poppins_medium',
                                            color: 'white'
                                        } : {fontSize: 12, fontFamily: 'poppins_medium', color: 'gray',}}>Remote</Text>
                                    </Pressable>

                                </View>
                            </View>

                            <View>
                                <Text style={{
                                    alignItems: 'center',
                                    height: 50,
                                    backgroundColor: '#13A3E1',
                                    color: 'white',
                                    fontSize: 15,
                                    fontFamily: 'poppins_bold',
                                    borderRadius: 20,
                                    paddingHorizontal: 30,
                                    paddingVertical: 3,
                                    marginTop: 20
                                }}>Search</Text>
                            </View>


                        </View>
                    </ScrollView>
                )}
            </BottomSheet>
        </View>
    )
}

export default Search
