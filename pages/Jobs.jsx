import {
  Image,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AllJobs } from "../API/actions/jobActions";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ripple from "react-native-material-ripple";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import NoData from "../Components/NoData";
import jobService from "../server/services/jobService";
import jobsApiService from "../server/services/jobsApiService";

function Jobs({ navigation }) {
  const [isloading, setIsLoading] = useState(true);
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [ID, setID] = useState();

  useEffect(() => {
    if (fetched) {
      setIsLoading(false);
    }
  }, [fetched]);

  useEffect(() => {
    if (ID) {
      jobsApiService
        .all({ search: "" })
        .then((res) => {
          setJobs(res.data);
          setFetched(true);
        })
        .catch((err) => {
          console.error(err);
          setFetched(true);
          setError(true);
        });
    }
  }, [ID]);

  useEffect(() => {
    GetData();
  }, []);

  const JobClick = (val) => {
    let num = Number(val.company);
    if (isNaN(num)) {
      navigation.push("ApiDescription", { ID: val.id });
    } else {
      navigation.push("JobDetails", { ID: val.id });
    }
  };

  console.log("jobs", jobs);

  const GetData = async () => {
    const id = await AsyncStorage.getItem("ID");
    setID(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
        {isloading ? (
          <View style={{ marginTop: 400 }}>
            <ActivityIndicator size={60} color="#13A3E1" />
          </View>
        ) : (
          <>
            {jobs.length === 0 ? (
              <NoData text={"No Jobs Found"} />
            ) : (
              <>
                {error ? (
                  <View style={{ marginTop: 360 }}>
                    <Image
                      source={require("../assets/delete.png")}
                      style={{
                        width: 30,
                        height: 30,
                        marginLeft: 190,
                        marginBottom: -20,
                        marginTop: 40,
                      }}
                    />
                    <Text
                      style={{
                        textAlign: "center",
                        marginVertical: 20,
                        fontFamily: "poppins_medium",
                      }}
                    >
                      Network Error...!
                    </Text>
                  </View>
                ) : (
                  <>
                    <View style={{ backgroundColor: "#EAEAEA" }}>
                      <View style={{ flexDirection: "row", height: 90 }}>
                        <Pressable
                          onPress={() => navigation.goBack()}
                          style={{ padiingRight: 5 }}
                        >
                          <Image
                            style={{
                              width: 22,
                              height: 20,
                              marginTop: 70,
                              marginLeft: 30,
                              tintColor: "#000",
                            }}
                            source={require("../assets/back_arrow.png")}
                            alt={"Okay"}
                          />
                        </Pressable>
                        <View
                          style={{
                            width: "100%",
                            marginTop: 0,
                            paddingEnd: 90,
                          }}
                        >
                          <Image
                            style={{
                              width: 150,
                              height: 40,
                              marginTop: 60,
                              alignSelf: "center",
                            }}
                            source={require("../assets/logo.png")}
                            alt={"Okay"}
                          />
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: "poppins_bold",
                            width: "100%",
                            paddingHorizontal: 30,
                            textAlign: "left",
                            marginVertical: 20,
                            padding: 0,
                          }}
                        >
                          Jobs
                        </Text>
                      </View>
                      <SafeAreaView>
                        <FlatList
                          nestedScrollEnabled={false}
                          scrollEnabled={false}
                          style={{ marginHorizontal: 0, marginTop: 10 }}
                          data={jobs}
                          keyExtractor={(item, index) => String(index)}
                          renderItem={({ item, index }) => (
                            <Ripple
                              rippleColor="#13a3e1"
                              rippleOpacity={1}
                              onPress={() => JobClick(item)}
                            >
                              <View
                                style={{
                                  marginLeft: 25,
                                  marginRight: 25,
                                  marginBottom: 8,
                                  borderColor: "#4C4C4C",
                                  borderRadius: 15,
                                  paddingHorizontal: 25,
                                  paddingVertical: 15,
                                  display: "flex",
                                  flexDirection: "column",
                                  backgroundColor: "#fff",
                                }}
                              >
                                <View
                                  style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontFamily: "poppins_medium",
                                      fontSize: 13,
                                    }}
                                  >
                                    {item?.company}
                                  </Text>
                                  <Text
                                    style={{
                                      fontFamily: "poppins_medium",
                                      fontSize: 13,
                                    }}
                                  >
                                    {moment(item.created).format("MMM Do YY")}
                                  </Text>
                                </View>
                                <View style={{}}>
                                  <View style={{}}>
                                    <Text
                                      numberOfLines={1}
                                      style={{
                                        fontFamily: "poppins_bold",
                                        marginTop: 5,
                                        fontSize: 15,
                                      }}
                                    >
                                      {item.title}
                                    </Text>
                                    <View
                                      style={{ flexDirection: "row", gap: 4 }}
                                    >
                                      <Image
                                        source={require("../assets/iicon.png")}
                                        style={{ height: 20, width: 20 }}
                                      />

                                      <Text
                                        numberOfLines={1}
                                        style={{
                                          fontFamily: "poppins_regular",
                                          fontSize: 13,
                                          marginTop: 2,
                                        }}
                                      >
                                        {item?.locations}
                                      </Text>
                                    </View>
                                    <Text
                                      numberOfLines={2}
                                      style={{
                                        fontFamily: "poppins_medium",
                                        fontSize: 14,
                                        marginTop: 5,
                                      }}
                                    >
                                      {item?.description}
                                    </Text>
                                  </View>
                                </View>
                                {item?.category_name && item.qualification ? (
                                  <View style={{ flex: 1 }}>
                                    <Text
                                      style={{
                                        fontFamily: "poppins_bold",

                                        fontSize: 16,
                                      }}
                                    >
                                      {item.category_name}
                                    </Text>
                                    <Text
                                      style={{
                                        marginLeft: "auto",
                                        textAlign: "right",
                                        fontFamily: "poppins_medium",
                                        fontSize: 13,
                                      }}
                                    >
                                      {item.qualification}
                                    </Text>
                                  </View>
                                ) : (
                                  ""
                                )}
                                {item?.salary ? (
                                  <View
                                    style={{
                                      marginTop: 10,
                                      backgroundColor: "#d9d9d9",
                                      paddingHorizontal: 20,
                                      paddingVertical: 2,
                                      borderRadius: 10,
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontFamily: "poppins_medium",
                                        fontSize: 13,
                                        textAlign: "center",
                                      }}
                                    >
                                      Salary {item.salary}
                                    </Text>
                                  </View>
                                ) : (
                                  ""
                                )}
                                <View
                                  style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    marginTop: 7,
                                  }}
                                >
                                  {item?.type ? (
                                    <View
                                      style={{
                                        backgroundColor: "#13a3e1",
                                        paddingHorizontal: 10,
                                        paddingTop: 5,
                                        borderRadius: 14,
                                      }}
                                    >
                                      <Text
                                        style={{
                                          color: "white",
                                          fontSize: 15,
                                          fontFamily: "poppins_medium",
                                        }}
                                      >
                                        {item.type}
                                      </Text>
                                    </View>
                                  ) : (
                                    ""
                                  )}
                                  <Text
                                    style={{
                                      marginLeft: "auto",
                                      textAlign: "right",
                                      fontFamily: "poppins_medium",
                                      fontSize: 13,
                                      paddingTop: 6,
                                    }}
                                  >
                                    {item.city_name}
                                  </Text>
                                </View>
                              </View>
                            </Ripple>
                          )}
                        />
                      </SafeAreaView>
                    </View>
                  </>
                )}
              </>
            )}
          </>
        )}
      </ScrollView>
      <BannerAd
        unitId="ca-app-pub-3940256099942544/6300978111"
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

export default Jobs;
