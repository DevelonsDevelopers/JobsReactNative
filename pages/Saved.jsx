import * as React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AllBookmarks } from "../API/actions/bookmarkActions";
import Ripple from "react-native-material-ripple";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import NoData from "../Components/NoData";
import savedServices from "../server/services/savedServices";

const Saved = ({ navigation }) => {
  const dispatch = useDispatch();

  const [noData, setnoData] = useState();
  const [ID, setID] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const bookmarks = useSelector(state => state.bookmark.bookmarks);
  const [bookmarks, setBookmarks] = useState([]);
  const error = useSelector((state) => state.error.bookmarksError);

  useEffect(() => {
    if (ID) {
      // dispatch(AllBookmarks(ID))
      setIsLoading(true);
     
        savedServices.allSaved({ user: ID }).then((res) => {
          setBookmarks(res?.data);
          console.log('saved jobs' , res);
          setIsLoading(false);
          if (res?.data?.length > 0) {
            setnoData(false);
            setIsLoading(false);
          } else {
            setnoData(true);
            setIsLoading(false);
          }
        }).catch(err => {
            console.log('error' , err);
        })
     
    }
  }, [ID]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const id = await AsyncStorage.getItem("ID");
    setID(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {isLoading ? (
          <View style={{ marginTop: "90%" }}>
            <ActivityIndicator size={60} color="#13A3E1" />
          </View>
        ) : (
          <>
            {noData ? (
              <NoData text={"No Saved Found"} />
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
                          alt={""}
                        />
                      </Pressable>
                      <View
                        style={{ width: "100%", marginTop: 0, paddingEnd: 90 }}
                      >
                        <Pressable onPress={() => null}>
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
                        </Pressable>
                      </View>
                    </View>
                    <Text
                      style={{
                        marginTop: 20,
                        fontFamily: "poppins_medium",
                        marginLeft: 14,
                        fontSize: 16,
                      }}
                    >
                      {" "}
                      Saved Jobs{" "}
                    </Text>
                    <FlatList
                      style={{ marginHorizontal: 0, marginTop: 20 }}
                      data={bookmarks}
                      renderItem={({ item, index }) => (
                        <Ripple
                          key={index}
                          onPress={() =>
                            navigation.push("JobDetails", {
                              ID: item.job,
                              status: 1,
                            })
                          }
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
                          {/* <View style={{flexDirection: 'row', flex: 1}}>

                                                  <Text style={{
                                                      marginLeft: 'auto',
                                                      textAlign: 'right',
                                                      fontFamily: 'poppins_medium',
                                                      fontSize: 13
                                                  }}>{moment(item.created).fromNow()}</Text>
                                              </View> */}
                          <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 0.8 }}>
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
                              <Text
                                style={{
                                  fontFamily: "poppins_regular",
                                  marginTop: 0,
                                  fontSize: 12,
                                }}
                              >
                                {item.company_name}
                              </Text>
                            </View>
                          </View>
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
                          <View
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                          >
                            <Text
                              style={{
                                fontFamily: "poppins_medium",
                                fontSize: 13,
                                textAlign: "center",
                                marginTop: 4,
                                backgroundColor: "#d9d9d9",
                                paddingHorizontal: 10,
                                paddingVertical: 2,
                                borderRadius: 10,
                                margin: "auto",
                              }}
                            >
                              Salary {item.salary}
                            </Text>
                          </View>

                          <View
                            style={{
                              flexDirection: "row",
                              flex: 1,
                              marginTop: 7,
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                backgroundColor: "#13a3e1",
                                paddingHorizontal: 10,
                                paddingTop: 5,
                                fontSize: 15,
                                fontFamily: "poppins_medium",
                                borderRadius: 14,
                              }}
                            >
                              {item.type}
                            </Text>
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
                        </Ripple>
                      )}
                    />
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
};

export default Saved;
