import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeaturedProviderJobs } from "../API/actions/jobActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ripple from "react-native-material-ripple";
import LogoutConfirmationModal from "../Components/LogoutConfirmationModal";
import WebsiteModal from "../Components/WebsiteModal";
import ProviderDrawerModal from "../Components/ProviderDrawerModal";
import { CompanyData } from "../API/actions/companyActions";
import VerificationStatusModal from "../Components/VerificationStatusModal";
import NoData from "../Components/NoData";
import jobService from "../server/services/jobService";
import companyService from "../server/services/companyService";

function PostJob({ navigation }) {
  const dispatch = useDispatch();

  const [isComplete, setIsComplete] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  const [loadingVisible, setLoadingVisible] = useState(false);
  const toggleLoadingVisibility = () => setLoadingVisible(!loadingVisible);

  const [webVisible, setWebVisible] = useState(false);
  const toggWebVisibility = () => setWebVisible(!webVisible);

  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawerVisibility = () => setDrawerVisible(!drawerVisible);

  const [verify, setVerify] = useState(false);
  const toggleVerify = () => setVerify(!verify);
  const [text, setText] = useState("Please Complete your Profile First");

  // const companyJobs = useSelector(state => state.job.providerJobsFeatured)
  const [companyJobs, setCompanyJobs] = useState([]);

  //   const company = useSelector((state) => state.company.company);
  const [company, setCompany] = useState();

  const noCompany = useSelector((state) => state.company.noCompany);
  const nodata = useSelector((state) => state.nodata.providerFeaturedNoData);
  const error = useSelector((state) => state.error.providerFeaturedError);
  const success = useSelector((state) => state.success.providerFeaturedSuccess);

  const [noData, setNoData] = useState(false);

  useEffect(() => {
    if (companyJobs?.length === 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }
  }, [companyJobs]);

  const click = (t) => {
    toggleVerify();
    setText(t);
  };

  const [ID, setID] = useState();

  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    const value = await AsyncStorage.getItem("ID");
    setID(value);
  };

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    if (companyJobs && company) {
      setIsLoading(false);
    }
  }, [companyJobs, company]);

  useEffect(() => {
    if (ID) {
      // dispatch(FeaturedProviderJobs(ID))
      jobService
        .getByProviderFeatured({ id: ID })
        .then((res) => {
          setCompanyJobs(res?.data);
        })
        .catch((err) => {
          console.log("error in gets provider", err);
        });

      //   dispatch(CompanyData(ID));
      companyService
        .getCompanyById({ id: ID })
        .then((res) => {
          setCompany(res?.data);
        })
        .catch((err) => {
          console.log("error in gets company ", err);
        });
    }
  }, [ID]);

  useEffect(() => {
    console.log("company", company);
    if (company) {
      if (company?.city === 0 && company?.country === 0) {
        setIsComplete(false);
      } else {
        setIsComplete(true);
      }
      if (company?.verified === "true") {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    }
  }, [ID, company]);

  // useEffect(() => {
  //   if (company?.verified === "true") {
  //     setIsVerified(true);
  //   } else {
  //     setIsVerified(false);
  //   }
  // }, [company]);

  console.log("company ", company?.verified);
  console.log("company complete", isComplete);

  const Logout = async () => {
    await AsyncStorage.setItem("LOGIN", "false");
    await AsyncStorage.setItem("ID", "");
    await AsyncStorage.setItem("USER", "");
    await AsyncStorage.setItem("NAME", "");
    await AsyncStorage.setItem("EMAIL", "");
    navigation.push("UserType");
    toggleLoadingVisibility();
  };

  return (
    <View style={{ flex: 1 }}>
      {isloading ? (
        <View style={{ marginTop: 400 }}>
          <ActivityIndicator size={60} color="#13A3E1" />
        </View>
      ) : (
        <>
          <VerificationStatusModal
            visible={verify}
            toggleVisibility={toggleVerify}
            line={text}
          />

          <WebsiteModal
            visible={webVisible}
            toggleRequireVisible={toggWebVisibility}
          />
          <LogoutConfirmationModal
            toggleLoadingVisibility={toggleLoadingVisibility}
            visible={loadingVisible}
            Logout={Logout}
          />
          <ProviderDrawerModal
            visible={drawerVisible}
            toggleVisibility={toggleVisibility}
            toggleLoadingVisibility={toggleLoadingVisibility}
            navigation={navigation}
            toggleDrawerVisibility={toggleDrawerVisibility}
            complete={isComplete}
          />
          <ScrollView
            style={{ flex: 1, backgroundColor: "#F1F1F1", marginBottom: -75 }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                height: 240,
                backgroundColor: "#13A3E1",
              }}
            >
              <View style={{ flexDirection: "row", height: 130 }}>
                <Pressable
                  onPress={() => toggleDrawerVisibility()}
                  style={{
                    marginTop: 60,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingTop: 10,
                  }}
                >
                  <Image
                    style={{
                      width: 22,
                      height: 20,
                      tintColor: "#fff",
                    }}
                    source={require("../assets/menu.png")}
                    alt={"Okay"}
                  />
                </Pressable>
                <View style={{ width: "100%", paddingEnd: 160 }}>
                  <Pressable>
                    <Image
                      style={{
                        width: 200,
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
                  textAlign: "center",
                  color: "white",
                  marginTop: -10,
                  marginBottom: 10,
                  fontSize: 20,
                }}
              >
                {company?.name}
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 23,
                  fontWeight: "500",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Welcome Back !
              </Text>
            </View>
            {isComplete && isVerified && company?.plan !== 0 ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginLeft: "auto",
                    marginRight: "auto",
                    gap: 10,
                    paddingHorizontal: 20,
                  }}
                >
                  <Ripple
                    rippleColor="#fff"
                    rippleOpacity={0.5}
                    rippleDuration={800}
                    rippleSize={500}
                    onPress={() => navigation.push("AppliedUsers")}
                    style={{
                      width: "45%",
                      backgroundColor: "#F0A51E",
                      borderRadius: 20,
                      paddingVertical: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: "poppins_medium",
                        marginTop: -5,
                        textAlign: "center",
                      }}
                    >
                      Applied
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: "poppins_medium",
                        marginTop: -5,
                        textAlign: "center",
                      }}
                    >
                      Seekers
                    </Text>
                  </Ripple>

                  <Ripple
                    rippleColor="#fff"
                    rippleOpacity={0.5}
                    rippleDuration={800}
                    rippleSize={500}
                    onPress={() => navigation.push("SentOffers")}
                    style={{
                      width: "45%",
                      backgroundColor: "#F0A51E",
                      borderRadius: 20,
                      paddingVertical: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: "poppins_medium",
                        marginTop: -5,
                        textAlign: "center",
                      }}
                    >
                      Sent
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: "poppins_medium",
                        marginTop: -5,
                        textAlign: "center",
                      }}
                    >
                      Offers
                    </Text>
                  </Ripple>
                </View>

                <View
                  style={{
                    backgroundColor: "#a6d6ec",
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    marginTop: 20,
                    marginHorizontal: 30,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#0D25B2",
                      fontSize: 20,
                      fontFamily: "poppins_bold",
                    }}
                  >
                    {" "}
                    Post a job
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      fontFamily: "poppins_medium",
                    }}
                  >
                    You can see reports about your{" "}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 14,
                      fontFamily: "poppins_medium",
                    }}
                  >
                    job posts and detailed data on your Portal
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 17,
                      fontFamily: "poppins_bold",
                      paddingVertical: 10,
                    }}
                  >
                    Post jobs by visiting your Portal{" "}
                  </Text>
                  <View style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Ripple
                      rippleColor="blue"
                      rippleOpacity={0.1}
                      rippleDuration={400}
                      rippleSize={300}
                      onPress={() => toggWebVisibility()}
                      style={{
                        textAlign: "center",
                        backgroundColor: "white",
                        paddingVertical: 8,
                        borderRadius: 20,
                        color: "#0038FF",
                        fontSize: 12,
                        fontFamily: "poppins_medium",
                        paddingHorizontal: 8,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#0038FF",
                        }}
                      >
                        https://www.jobss.com.au{" "}
                      </Text>
                    </Ripple>
                  </View>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#4E4E4E",
                      fontSize: 13,
                      fontFamily: "poppins_medium",
                      marginTop: 10,
                    }}
                  >
                    Login to your portal using app credentials{" "}
                  </Text>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#4E4E4E",
                      fontSize: 13,
                      fontFamily: "poppins_medium",
                    }}
                  >
                    (email and password)
                  </Text>
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 47,
                      marginTop: 30,
                    }}
                  >
                    <Text style={{ fontSize: 17, fontFamily: "poppins_bold" }}>
                      Recent Jobs{" "}
                    </Text>
                    <Pressable onPress={() => navigation.push("JobPosted")}>
                      <Text
                        style={{
                          backgroundColor: "#CBCBCB",
                          paddingHorizontal: 16,
                          paddingVertical: 6,
                          fontSize: 13,
                          fontFamily: "poppins_medium",
                          borderRadius: 20,
                          color: "rgba(0, 0, 0, 0.81)",
                        }}
                      >
                        Show All
                      </Text>
                    </Pressable>
                  </View>
                  {noData ? (
                    <Text
                      style={{
                        textAlign: "center",
                        marginTop: 20,
                        color: "gray",
                      }}
                    >
                      No Recent Jobs Yet
                    </Text>
                  ) : (
                    <>
                      {error ? (
                        <View style={{ marginTop: 10 }}>
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
                          <SafeAreaView style={{ flex: 1 }}>
                            <FlatList
                              scrollEnabled={false}
                              nestedScrollEnabled={true}
                              style={{ marginHorizontal: 30, marginTop: 10 }}
                              data={companyJobs}
                              renderItem={({ item }) => (
                                <Ripple
                                  rippleColor="gray"
                                  rippleOpacity={0.2}
                                  rippleDuration={800}
                                  rippleSize={400}
                                  onPress={() =>
                                    navigation.push("OfferAccepted", {
                                      ID: item.id,
                                    })
                                  }
                                  style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    margin: 5,
                                    backgroundColor: "#fff",
                                    borderColor: "#c2c2c2",
                                    borderWidth: 1,
                                    height: 50,
                                    borderRadius: 25,
                                    elevation: 5,
                                    alignItems: "center",
                                    paddingHorizontal: 20,
                                  }}
                                >
                                  <Text
                                    ellipsizeMode={"tail"}
                                    numberOfLines={1}
                                    style={{
                                      width: "60%",
                                      fontFamily: "poppins_bold",
                                      fontSize: 12,
                                    }}
                                  >
                                    {item.title}
                                  </Text>
                                  <Text
                                    numberOfLines={1}
                                    style={{
                                      fontFamily: "poppins_light",
                                      fontSize: 9,
                                      marginLeft: "auto",
                                    }}
                                  >
                                    {item.qualification}
                                  </Text>
                                </Ripple>
                              )}
                            />
                          </SafeAreaView>
                        </>
                      )}
                    </>
                  )}
                </View>
              </>
            ) : (
              <View>
                <View>
                  <Image
                    source={require("../assets/steps.png")}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      fontFamily: "poppins_semibold",
                    }}
                  >
                    {" "}
                    Few steps more to post your first job{" "}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#F4E0DF",
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    marginTop: 20,
                    marginHorizontal: 30,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "red",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      fontFamily: "poppins_bold",
                      color: "red",
                    }}
                  >
                    Three step Verification{" "}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      paddingLeft: 10,
                      marginTop: 20,
                      padding: 2,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                      }}
                    >
                      1)
                    </Text>

                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                      }}
                    >
                      Complete your profile
                    </Text>
                  </View>

                  <Text style={{ paddingLeft: 20 }}>
                    Open profile and fill the required data{" "}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 40,
                      marginVertical: 10,
                    }}
                  >
                    {isComplete ? (
                      <>
                        <Image
                          style={{ width: 20, height: 20, marginTop: 5 }}
                          source={require("../assets/verified.png")}
                        />
                        <Text
                          onPress={() =>
                            navigation.push("ProviderProfile", { id: ID })
                          }
                          style={{
                            color: "green",
                            fontSize: 14,
                            fontFamily: "poppins_bold",
                            marginLeft: -32,
                            marginTop: 4,
                          }}
                        >
                          Completed
                        </Text>
                      </>
                    ) : (
                      <>
                        <Image
                          style={{ width: 20, height: 20, marginTop: 5 }}
                          source={require("../assets/unverified.png")}
                        />
                        <Text
                          onPress={() =>
                            navigation.push("ProviderProfile", { id: ID })
                          }
                          style={{
                            color: "blue",
                            fontSize: 14,
                            fontFamily: "poppins_bold",
                            marginLeft: -32,
                            marginTop: 4,
                          }}
                        >
                          (Complete Now)
                        </Text>
                      </>
                    )}
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      paddingLeft: 10,
                      padding: 2,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                      }}
                    >
                      2)
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                      }}
                    >
                      Verify your account
                    </Text>
                  </View>
                  <Text style={{ paddingLeft: 20 }}>
                    Enter your phone number to verify that you are real{" "}
                  </Text>

                  {isVerified ? (
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 40,
                        marginVertical: 10,
                      }}
                    >
                      <Image
                        style={{ width: 20, height: 20, marginTop: 5 }}
                        source={require("../assets/verified.png")}
                      />
                      <Text
                        style={{
                          color: "green",
                          fontSize: 14,
                          marginLeft: -32,
                          fontFamily: "poppins_bold",
                          marginTop: 4,
                        }}
                      >
                        Verified
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 40,
                        marginVertical: 10,
                      }}
                    >
                      <Image
                        style={{ width: 20, height: 20, marginTop: 5 }}
                        source={require("../assets/unverified.png")}
                      />
                      <Text
                        style={{
                          color: "blue",
                          fontSize: 14,
                          marginLeft: -32,
                          fontFamily: "poppins_bold",
                          marginTop: 4,
                        }}
                        onPress={() => {
                          if (isComplete) {
                            navigation.push("Verify", {
                              code: company?.code,
                              verifyPhone: company?.phone,
                              type: "PROVIDER",
                              verify: true,
                              ID: ID,
                            });
                          } else {
                            click("Please Complete Profile ");
                          }
                        }}
                      >
                        (Verify Now)
                      </Text>
                    </View>
                  )}

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      paddingLeft: 10,
                      padding: 2,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                      }}
                    >
                      3)
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                      }}
                    >
                      Buy a Plan
                    </Text>
                  </View>
                  <Text style={{ paddingLeft: 20 }}>
                    Buy a plan to post your jobs
                  </Text>
                  {company?.plan !== 0 ? (
                    <View
                      style={{ flexDirection: "row", gap: 40, marginTop: 10 }}
                    >
                      <Image
                        style={{ width: 20, height: 20, marginTop: 5 }}
                        source={require("../assets/verified.png")}
                      />
                      <Text
                        style={{
                          color: "green",
                          fontSize: 14,
                          marginLeft: -32,
                          fontFamily: "poppins_bold",
                          marginTop: 4,
                        }}
                      >
                        Purchased
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={{ flexDirection: "row", gap: 40, marginTop: 10 }}
                    >
                      <Image
                        style={{ width: 20, height: 20, marginTop: 5 }}
                        source={require("../assets/unverified.png")}
                      />
                      <Text
                        style={{
                          color: "blue",
                          fontSize: 14,
                          marginLeft: -32,
                          fontFamily: "poppins_bold",
                          marginTop: 4,
                        }}
                        onPress={() => {
                          if (isVerified) {
                            navigation.push("Plans");
                          } else {
                            click("Please Verify Account ");
                          }
                        }}
                      >
                        (Buy Plan)
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            )}

            <View style={{ height: 90 }} />
          </ScrollView>
        </>
      )}
    </View>
  );
}

export default PostJob;
