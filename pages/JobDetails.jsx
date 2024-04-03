import {
  Image,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { JobByID } from "../API/actions/jobActions";
import moment from "moment";
import { BOOKMARK_JOB, RESET } from "../Utils/Constants";
import { bookmarkJob, removeBookmark } from "../API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WebView from "react-native-webview";
import { fetchSeeker } from "../API/actions/seekerActions";
import LoginRequireModal from "../Components/LoginRequireModal";
// import ManageCoverLetter from "./ManageCoverLetter";
import Ripple from "react-native-material-ripple";
import WebsiteModal from "../Components/WebsiteModal";
import seekerService from "../server/services/seekerService";
import jobService from "../server/services/jobService";
import cvService from "../server/services/cvService";

const JobDetails = ({ route, navigation }) => {
  const { ID } = route.params;
  const { status } = route.params;

  // const job = useSelector((state) => state.job.job);

  const [job, setJob] = useState();
  const [error, setError] = useState(false);

  // const check = useSelector((state) => state.seeker.check);
  const [check, setCheck] = useState([]);

  // const checkCV = useSelector((state) => state.cv.check);

  const [checkCv, setCheckCv] = useState("");
  const [checkSeeker, setCheckSeeker] = useState("");

  console.log("job detail", job);

  const dispatch = useDispatch();

  const [USERID, setUSERID] = useState();
  const [applied, setApplied] = useState(0);
  const [bookmark, setBookmark] = useState(0);
  const [webHeight, setWebHeight] = useState(0);
  const [login, setLogin] = useState();
  const [plan, setPlan] = useState();
  const [loginVal, setLoginVal] = useState();

  const [isloading, setIsLoading] = useState(true);

  const onWebHeight = (e) => {
    setWebHeight(Number(e.nativeEvent.data));
  };

  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    const value = await AsyncStorage.getItem("ID");
    const loginvalue = await AsyncStorage.getItem("LOGIN");
    setUSERID(value);
    setLoginVal(loginvalue);
  };

  useEffect(() => {
    if (loginVal === "true") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [loginVal]);

  useEffect(() => {
    if (USERID) {
      cvService
        .check({ user: USERID })
        .then((response) => {
          if (response) {
            setCheckCv(response.status);
            console.log("check cv", response?.status);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    seekerService
      .checkSeeker({ id: USERID })
      .then((res) => {
        setCheckSeeker(res);
        // console.log('res' , res);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, [USERID, navigation]);

  useEffect(() => {
    if (USERID && ID && ID !== "0") {
      setIsLoading(true);
      jobService
        .getByID({ user: USERID, id: ID })
        .then((res) => {
          setJob(res?.data);
          console.log("jobs fetch simple", res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("res error", error);
          setError(true);
          setIsLoading(false);
        });
    }
  }, [ID, USERID]);

  useEffect(() => {
    if (job) {
      setApplied(job.applied);
      setBookmark(job.bookmark);
    }
  }, [job]);

  const BookmarkJob = () => {
    bookmarkJob(job.id, USERID).then((res) => {
      const {
        data: { data },
      } = res;
      if (data.affectedRows === 1) {
        setBookmark(data.insertId);
        dispatch({
          type: BOOKMARK_JOB,
          payload: { job: job.id, bookmark: data.insertId },
        });
      }
    });
  };

  // console.log(bookmark)

  const RemoveBookmark = () => {
    removeBookmark(bookmark).then((res) => {
      const {
        data: { data },
      } = res;
      if (data.affectedRows === 1) {
        setBookmark(0);
        dispatch({ type: BOOKMARK_JOB, payload: { job: job.id, bookmark: 0 } });
      }
    });
  };

  // Apply Modal ============
  const [applyVisible, setApplyVisible] = useState(false);
  const toggleApplyVisibility = () => setApplyVisible(!applyVisible);

  const [loginVisible, setLoginVisible] = useState(false);
  const toggleLoginVisible = () => setLoginVisible(!loginVisible);

  const [webVisible, setWebVisible] = useState(false);
  const toggWebVisibility = () => setWebVisible(!webVisible);

  const height = Dimensions.get("window").height;

  var str = `${job?.skills}`;
  var myarray = str.split(",");

  for (var i = 0; i < myarray.length; i++) {
    console.log(myarray[i]);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ backgroundColor: "#F1F1F1" }}>
        <LoginRequireModal
          visible={loginVisible}
          toggleRequireVisible={toggleLoginVisible}
          navigation={navigation}
        />
        {/* <ManageCoverLetter visible={applyVisible} toggleVisible={toggleApplyVisibility} apply={ApplyJob} /> */}
        <WebsiteModal
          visible={webVisible}
          toggleRequireVisible={toggWebVisibility}
          url={job?.link}
          navigation={navigation}
        />

        <View style={{}}>
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
            <View style={{ width: "100%", marginTop: 0, paddingEnd: 90 }}>
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
          {isloading ? (
            <View style={{ marginTop: 300 }}>
              <ActivityIndicator size={60} color="#13A3E1" />
            </View>
          ) : (
            <>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "poppins_bold",
                    width: "100%",
                    paddingHorizontal: 30,
                    textAlign: "center",
                    marginTop: 30,
                    padding: 0,
                  }}
                >
                  {job?.title}
                </Text>
              </View>
              <SafeAreaView style={{ marginTop: 30 }}>
                <View
                  style={{
                    marginBottom: 8,
                    borderColor: "#4C4C4C",
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    paddingVertical: 15,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    minHeight: height,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        paddingTop: 4,
                        fontSize: 14,
                        fontFamily: "poppins_bold",
                        borderRadius: 5,
                        marginLeft: 25,
                      }}
                    >
                      {job?.company === 0 ? job?.company_n : job?.company_name}
                    </Text>

                    <Text
                      style={{
                        marginLeft: "auto",
                        textAlign: "right",
                        fontFamily: "poppins_medium",
                        fontSize: 13,
                        marginRight: 25,
                      }}
                    >
                      {moment(job?.created).format("MMM Do YY")}
                    </Text>
                  </View>

                  {job?.salary ? (
                    <View
                      style={{
                        marginTop: 19,
                        backgroundColor: "#00A224",
                        marginLeft: "auto",
                        marginRight: "auto",
                        paddingTop: 5,
                        paddingBottom: 2,
                        paddingHorizontal: 20,
                        borderRadius: 20,
                      }}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: 15,
                          fontFamily: "poppins_medium",
                        }}
                      >
                        Salary {job?.salary}
                      </Text>
                    </View>
                  ) : (
                    ""
                  )}
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          fontFamily: "poppins_bold",
                          marginTop: 15,
                          fontSize: 17,
                          textAlign: "center",
                        }}
                      >
                        {job?.category_name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "poppins_medium",
                          marginTop: 0,
                          fontSize: 13,
                          textAlign: "center",
                        }}
                      >
                        {job?.city_name}
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "poppins_medium",
                      marginLeft: 15,
                      marginTop: 10,
                    }}
                  >
                    Job Type:
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "poppins_medium",
                      marginLeft: "auto",
                      marginHorizontal: 20,
                    }}
                  >
                    {job?.type}
                  </Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "poppins_medium",
                      marginLeft: 15,
                      marginTop: 10,
                    }}
                  >
                    Qualification:
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "poppins_medium",
                      marginLeft: "auto",
                      marginHorizontal: 20,
                      textAlign: "right",
                      width:'90%'
                    }}
                  >
                    {job?.qualification}
                  </Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "poppins_medium",
                      marginLeft: 15,
                      marginTop: 10,
                    }}
                  >
                    Experience:
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "poppins_medium",
                      width: "90%",
                      marginLeft: "auto",
                      marginRight: 15,
                      textAlign: "right",
                    }}
                  >
                    {job?.experience}
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "poppins_medium",
                      marginLeft: 15,
                      marginTop: 10,
                    }}
                  >
                    Required Skills:{" "}
                  </Text>

                  {myarray?.map((value, index) => {
                    return (
                      <View style={{ marginLeft: "10%" }} key={index}>
                        <Text
                          style={{ fontSize: 13, fontFamily: "poppins_medium" }}
                        >
                          {`\u2022 ${value}`}
                        </Text>
                      </View>
                    );
                  })}

                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "poppins_medium",
                      marginLeft: 15,
                      marginTop: 10,
                    }}
                  >
                    Description:
                  </Text>

                  <WebView
                    source={{ html: job?.description }}
                    style={{
                      height: webHeight,
                      marginHorizontal: 25,
                      fontFamily: "poppins_medium",
                    }}
                    scalesPageToFit={false}
                    onMessage={(e) => onWebHeight(e)}
                    injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
                  />
                </View>
              </SafeAreaView>
            </>
          )}
        </View>
      </ScrollView>
      {!isloading ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 20,
            fontFamily: "poppins_medium",
            paddingVertical: 10,
            backgroundColor: "#fff",
            marginTop: "-4%",
          }}
        >
          {bookmark === 0 ? (
            <Ripple
              rippleColor="white"
              onPress={() => {
                if (login) {
                  BookmarkJob();
                } else {
                  toggleLoginVisible();
                }
              }}
              style={{
                justifyContent: "center",
                height: 50,
                backgroundColor: "#143D59",
                width: 150,
                paddingVertical: 10,
                borderRadius: 25,
                paddingTop: 13,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: "poppins_bold",
                }}
              >
                SAVE
              </Text>
            </Ripple>
          ) : (
            <>
              {status ? (
                <Pressable
                  onPress={() => {
                    RemoveBookmark(), navigation.popToTop();
                  }}
                  style={{
                    justifyContent: "center",
                    height: 50,
                    backgroundColor: "#143D59",
                    width: 150,
                    paddingVertical: 10,
                    borderRadius: 25,
                    paddingTop: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 15,
                      fontFamily: "poppins_bold",
                    }}
                  >
                    SAVED
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    RemoveBookmark();
                  }}
                  style={{
                    justifyContent: "center",
                    height: 50,
                    backgroundColor: "#143D59",
                    width: 150,
                    paddingVertical: 10,
                    borderRadius: 25,
                    paddingTop: 13,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 15,
                      fontFamily: "poppins_bold",
                    }}
                  >
                    SAVED
                  </Text>
                </Pressable>
              )}
            </>
          )}
          {applied === 0 ? (
            <Pressable
              onPress={() => {
                if (login) {
                  if (job?.link) {
                    toggWebVisibility();
                  }
                    else if(checkCv ==='complete' && checkSeeker?.status === 'complete' && checkSeeker?.data?.verified === 'true') {
                      navigation.push("ManageCoverLetter", {
                        job: job?.id,
                        role: job?.role,
                      });
                    }
                  else {
                    navigation.push("VerificationProfile", {
                      checkCv: checkCv,
                      checkSeeker: checkSeeker,
                    });
                  }
                } else {
                  toggleLoginVisible();
                }
              }}
              style={{
                justifyContent: "center",
                height: 50,
                backgroundColor: "#13A3E1",
                width: 150,
                paddingVertical: 10,
                borderRadius: 25,
                paddingTop: 13,
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins_bold",
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                }}
              >
                APPLY NOW
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={{
                justifyContent: "center",
                height: 50,
                backgroundColor: "#13A3E1",
                width: 150,
                paddingVertical: 10,
                borderRadius: 25,
                paddingTop: 13,
              }}
            >
              <Text
                style={{
                  fontFamily: "poppins_bold",
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                }}
              >
                APPLIED
              </Text>
            </Pressable>
          )}
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default JobDetails;
