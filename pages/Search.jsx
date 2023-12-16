import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import BottomSheet from "react-native-simple-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import { AllCategories } from "../API/actions/categoryActions";
import { AllCompanies } from "../API/actions/companyActions";
import { AllCities } from "../API/actions/cityActions";
import CitySelectModal from "../Components/CitySelectModal";
import CategorySelectModal from "../Components/CategorySelectModal";
import CompanySelectModal from "../Components/CompanySelectModal";
import { AllJobs, SearchJobs } from "../API/actions/jobActions";
import { RESET } from "../Utils/Constants";
import moment from "moment/moment";
import { recordInteraction } from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LogoutConfirmationModal from "../Components/LogoutConfirmationModal";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

const data = [
    { "name": "Facebook" },
    { "name": "Google" },
    { "name": "Netflix" },
    { "name": "Youtube" }
]

function Search({ route, navigation }) {

    const { query } = route.params;

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
    const searchJobs = useSelector(state => state.job.searchJobs)

    const error = useSelector(state => state.error.searchJobError)
    // const nodata = useSelector(state => state.nodata.searchJobNoData)
    const [nodata, setnodata] = useState(false);
    const success = useSelector(state => state.success.searchJobSuccess)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const dispatch = useDispatch();
    const [ID, setID] = useState()

    const [cityVisibility, setCityVisibility] = useState(false)
    const [categoryVisibility, setCategoryVisibility] = useState(false)
    const [companyVisibility, setCompanyVisibility] = useState(false)

    const toggleCityVisibility = () => setCityVisibility(!cityVisibility)
    const toggleCategoryVisibility = () => setCategoryVisibility(!categoryVisibility)
    const toggleCompanyVisibility = () => setCompanyVisibility(!companyVisibility)

    useEffect(() => {

        dispatch(SearchJobs(search, countryID, categoryID, cityID, companyID, startSalary, salaryEnd, type, isCountry, isCategory, isCity, isCompany, isSalary, isType))

    }, [dispatch]);

    useEffect(() => {
        if (searchJobs) {
            setData(searchJobs)
        }
    }, [searchJobs])

    useEffect(() => {
        if (data) {

        } else {
            setData(searchJobs)
        }
    }, [searchJobs])

    useEffect(() => {
        if (searchJobs?.length === 0) {
            setnodata(true)
            setLoading(false)
        } else {
            setnodata(false)
        }
    }, [searchJobs])


    useEffect(() => {
        if (data) {
            setLoading(false)
        }
    }, [data]);

    console.log("data", data)
    console.log("searchData", searchJobs)

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         setData("");
    //         setnodata(false)
    //     });
    //     return unsubscribe;
    // }, [navigation])
    

    // useEffect(() => {
    //     console.log(searchJobs)
    // }, [searchJobs]);

    // useEffect(() => {
    //     if (!categories) {
    //         dispatch(AllCategories())
    //     }
    // }, [dispatch, navigation, categories]);
    //
    // useEffect(() => {
    //     if (!companies) {
    //         dispatch(AllCompanies())
    //     }
    // }, [dispatch, navigation, companies]);
    //
    // useEffect(() => {
    //     if (!cities) {
    //         dispatch(AllCities())
    //     }
    // }, [dispatch, cities]);

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

    const JobClick = (id) => {
        recordInteraction(id, ID, '', '', 'JOB').then(res => console.log(res))
        navigation.push('JobDetails', { ID: id })
    }

    useEffect(() => {
        GetData()
    }, []);
    const GetData = async () => {
        const id = await AsyncStorage.getItem('ID')
        setID(id);
    }

    const data1 = ["Good", "LevelGood", "New"]

    // const SearchQuery = () => {
    //     setLoading(true)
    // }

    return (
        <View style={{ flex: 1 }}>
            <CitySelectModal visible={cityVisibility} toggleVisibility={toggleCityVisibility} list={cities}
                click={cityClick} />
            <CategorySelectModal visible={categoryVisibility} toggleVisibility={toggleCategoryVisibility}
                list={categories} click={categoryClick} />
            <CompanySelectModal visible={companyVisibility} toggleVisibility={toggleCompanyVisibility} list={companies}
                click={companyClick} />

            <ScrollView style={{ flex: 1, backgroundColor: '#F1F1F1' }} keyboardShouldPersistTaps="handled">
                <View style={{}}>
                    <View style={{ flexDirection: 'row', height: 90, marginBottom: 20 }}>
                        <Pressable onPress={() => navigation.goBack()} style={{ justifyContent: 'center', paddingHorizontal: 15, paddingTop: 20, marginTop: 60, paddingBottom: 20 }}><Image style={{
                            width: 22,
                            height: 20,

                            tintColor: '#000'
                        }} source={require('../assets/back_arrow.png')} alt={'Okay'} /></Pressable>
                        <View style={{ width: '100%', marginTop: 0, paddingEnd: 90 }}>
                            <Pressable
                            // onPress={() => navigation.push('AdvanceSearch')}
                            ><Image
                                    style={{ width: 150, height: 40, marginTop: 60, alignSelf: 'center' }}
                                    source={require('../assets/logo.png')} alt={'Okay'} /></Pressable>
                        </View>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'poppins_medium', marginLeft: 20, marginTop: 20 }}>Searched Job</Text>
                    {/* <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        marginHorizontal: 30,
                        height: 50,
                        borderRadius: 25,
                        paddingHorizontal: 20,
                        marginTop: 10
                    }}>
                        <TextInput onChangeText={text => setSearch(text)} style={{
                            height: 50,
                        }} placeholder={'Start your Job Search'} />
                        <Pressable onPress={() => SearchQuery()} style={{ marginLeft: 'auto' }}><Image style={{width: 25, height: 25}} source={require('../assets/search-interface-symbol.png')}/></Pressable>
                    </View> */}
                    {nodata ?
                        <View style={{ marginTop: 360 }}>
                            <Text
                                style={{ textAlign: 'center', marginVertical: 20, fontFamily: 'poppins_medium' }}> No Search Found </Text>
                        </View>
                        : <>
                            {loading ?
                                <View style={{ marginTop: '50%' }}>
                                    <ActivityIndicator size={60} color="#13A3E1" />
                                </View>
                                :
                                <SafeAreaView>
                                    <FlatList nestedScrollEnabled={false} scrollEnabled={false}
                                        style={{ marginHorizontal: 0, marginTop: 20 }} data={data} renderItem={({ item }) => (
                                            <Pressable onPress={() => JobClick(item.id)}><View style={{
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
                                                    {/* <Text style={{
                                                        color: '#207A00',
                                                        backgroundColor: 'rgba(0,180,18,0.2)',
                                                        paddingHorizontal: 10,
                                                        paddingTop: 4,
                                                        fontSize: 10,
                                                        fontFamily: 'poppins_medium',
                                                        borderRadius: 5
                                                    }}>NEW</Text> */}
                                                    <Text style={{
                                                        marginLeft: 'auto',
                                                        textAlign: 'right',
                                                        fontFamily: 'poppins_medium',
                                                        fontSize: 13
                                                    }}>{moment(item.created).format("MMM Do YY")}</Text>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <View style={{ flex: 0.8 }}>
                                                        <Text numberOfLines={1} style={{
                                                            fontFamily: 'poppins_bold',
                                                            marginTop: 5,
                                                            fontSize: 15
                                                        }}>{item.title}</Text>
                                                        <Text style={{
                                                            fontFamily: 'poppins_regular',
                                                            marginTop: 0,
                                                            fontSize: 12
                                                        }}>{item.company_name}</Text>
                                                    </View>
                                                    {/* {item.bookmark === 0 ?
                                        <Image style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 'auto',
                                            marginTop: 10
                                        }} source={require('../assets/bookmarked.png')}/>
                                        :
                                        <Image style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 'auto',
                                            marginTop: 10
                                        }} source={require('../assets/bookmark.png')}/>
                                    } */}
                                                </View>
                                                <View style={{ flex: 1 }}>

                                                    <Text style={{
                                                        fontFamily: 'poppins_bold',
                                                        fontSize: 16,
                                                    }}>{item.category_name}</Text>
                                                    <Text style={{
                                                        marginLeft: 'auto',
                                                        textAlign: 'right',
                                                        fontFamily: 'poppins_medium',
                                                        fontSize: 13
                                                    }}>{item.qualification}</Text>
                                                </View>
                                                <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
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
                                                        Salary {item.salary}
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    flex: 1,
                                                    marginTop: 7,
                                                }}>
                                                    <Text style={{
                                                        color: 'white',
                                                        backgroundColor: '#13a3e1',
                                                        paddingHorizontal: 10,
                                                        paddingTop: 5,
                                                        fontSize: 15,
                                                        fontFamily: 'poppins_medium',
                                                        borderRadius: 14
                                                    }}>{item.type}</Text>
                                                    <Text style={{
                                                        marginLeft: 'auto',
                                                        textAlign: 'right',
                                                        fontFamily: 'poppins_medium',
                                                        fontSize: 13,
                                                        paddingTop: 6,
                                                    }}>{item.city_name}</Text>
                                                </View>


                                            </View></Pressable>
                                        )} />
                                </SafeAreaView>
                            }
                        </>}

                </View>
            </ScrollView>
            <BannerAd
                unitId="ca-app-pub-3940256099942544/6300978111"
                size={BannerAdSize.FULL_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />

        </View>
    )
}

export default Search
