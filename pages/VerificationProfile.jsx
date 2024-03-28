import React, { useEffect } from "react";
import { useState } from "react";
import { Pressable, View, Text, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchSeeker } from "../API/actions/seekerActions";
import VerificationStatusModal from "../Components/VerificationStatusModal";
import seekerService from "../server/services/seekerService";
import cvService from "../server/services/cvService";

const Verification = ({ navigation }) => {
  const dispatch = useDispatch();

  // const { checkCv, checkSeeker } = route.params;

  const [checkCv, setCheckCv] = useState("");
  const [checkSeeker, setCheckSeeker] = useState("");

  const [seeker, setSeeker] = useState();

  const [loading, setLoading] = useState(true);

  const [isComplete, setIsComplete] = useState(false);
  const [cv, setCv] = useState(false);
  const [verify, setVerify] = useState(false);
  const [text, setText] = useState("Please Complete your Profile First");

  const [ID, setID] = useState();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const value = await AsyncStorage.getItem("ID");
    setID(value);
  };

  useEffect(() => {
    if (ID) {
      //   dispatch(fetchSeeker(ID));
      seekerService.fetchById({ id: ID }).then((res) => {
        setSeeker(res?.data);
        console.log("seeker ", res);
      });
    }
  }, [ID, navigation]);

  useEffect(() => {
    if (ID) {
      cvService
        .check({ user: ID })
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
      .checkSeeker({ id: ID })
      .then((res) => {
        setCheckSeeker(res?.status);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  }, [ID, navigation]);

  useEffect(() => {
    if (seeker?.verified === "true") {
      setVerify(true);
    } else {
      setVerify(false);
    }
  }, [seeker]);

  useEffect(() => {
    if (checkSeeker === "complete") {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [checkSeeker]);

  useEffect(() => {
    if (checkCv === "complete") {
      setCv(true);
    } else {
      setCv(false);
    }
  }, [checkCv]);

useEffect(() => {
  if (checkCv && checkSeeker && seeker) {
    setLoading(false)
  }
},[checkCv , checkSeeker , seeker])



  const click = (t) => {
    toggleVisibility();
    setText(t);
  };

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <View>
       {loading ? (
                <View style={{ marginTop: "70%" }}>
                  <ActivityIndicator size={60} color="#13A3E1" />
                </View>
              ) : (<>
      <VerificationStatusModal
        visible={visible}
        toggleVisibility={toggleVisibility}
        line={text}
      />
      <View style={{}}>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            height: 90,
            marginBottom: 20,
          }}
        >
          <View style={{ flexDirection: "row", height: 130 }}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ paddingRight: 5 }}
            >
              <Image
                style={{
                  width: 22,
                  height: 20,
                  marginTop: 70,
                  marginLeft: 30,
                  marginBottom: 20,
                  tintColor: "gray",
                }}
                source={require("../assets/back_arrow.png")}
                alt={"Okay"}
              />
            </Pressable>
            <View style={{ width: "100%", marginTop: 0, paddingEnd: 90 }}>
              <Text
                style={{
                  marginTop: 67,
                  alignSelf: "center",
                  fontSize: 16,
                  fontFamily: "poppins_medium",
                  color: "gray",
                }}
              >
                Complete Profile
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/job.png")}
          style={{
            width: 250,
            height: 150,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "poppins_semibold",
            fontSize: 16,
          }}
        >
          Few steps more to find your dream job
        </Text>
        <View style={{ marginHorizontal: 20 }}>
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
          {isComplete ? (
            <View style={{ flexDirection: "row", marginLeft: 10, gap: 10 }}>
              <Image
                style={{ width: 20, height: 20, marginTop: 5 }}
                source={require("../assets/verified.png")}
              />
              <Text
                style={{
                  color: "green",
                  fontSize: 14,
                  fontFamily: "poppins_bold",
                  marginTop: 4,
                }}
              >
                Completed
              </Text>
            </View>
          ) : (
            <Pressable
              onPress={() => navigation.replace("PersonalInfo")}
              style={{ flexDirection: "row", marginLeft: 10, gap: 10 }}
            >
              <Image
                style={{ width: 20, height: 20, marginTop: 5 }}
                source={require("../assets/unverified.png")}
              />
              <Text
                style={{
                  color: "red",
                  fontSize: 14,
                  fontFamily: "poppins_medium",
                  marginTop: 4,
                }}
              >
                (Complete Now)
              </Text>
            </Pressable>
          )}

          <View
            style={{
              flexDirection: "row",
              gap: 4,
              paddingLeft: 10,
              marginTop: 10,
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
              Verify your phone number
            </Text>
          </View>
          {verify ? (
            <View style={{ flexDirection: "row", marginLeft: 10, gap: 10 }}>
              <Image
                style={{ width: 20, height: 20, marginTop: 5 }}
                source={require("../assets/verified.png")}
              />
              <Text
                style={{
                  color: "green",
                  fontSize: 14,
                  fontFamily: "poppins_bold",
                  marginTop: 4,
                }}
              >
                Verified
              </Text>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                if (isComplete) {
                  navigation.replace("PersonalInfo");
                } else {
                  click("Complete your Profile First");
                }
              }}
              style={{ flexDirection: "row", marginLeft: 10, gap: 10 }}
            >
              <Image
                style={{ width: 20, height: 20, marginTop: 5 }}
                source={require("../assets/unverified.png")}
              />
              <Text
                style={{
                  color: "red",
                  fontSize: 14,
                  fontFamily: "poppins_medium",
                  marginTop: 4,
                }}
              >
                (Verify now)
              </Text>
            </Pressable>
          )}

          <View
            style={{
              flexDirection: "row",
              gap: 4,
              paddingLeft: 10,
              marginTop: 10,
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
              Create Your CV
            </Text>
          </View>

          {cv ? (
            <View style={{ flexDirection: "row", marginLeft: 10, gap: 10 }}>
              <Image
                style={{ width: 20, height: 20, marginTop: 5 }}
                source={require("../assets/verified.png")}
              />
              <Text
                style={{
                  color: "green",
                  fontSize: 14,
                  fontFamily: "poppins_bold",
                  marginTop: 4,
                }}
              >
                Created
              </Text>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                if (verify) {
                  navigation.replace("AccountInfo", { role: seeker?.role });
                } else {
                  click("Please verify phone first");
                }
              }}
              style={{ flexDirection: "row", marginLeft: 10, gap: 10 }}
            >
              <Image
                style={{ width: 20, height: 20, marginTop: 5 }}
                source={require("../assets/unverified.png")}
              />
              <Text
                style={{
                  color: "red",
                  fontSize: 14,
                  fontFamily: "poppins_regular",
                  marginTop: 4,
                }}
              >
                (Create CV)
              </Text>
            </Pressable>
          )}

          {/* <View style={{ flexDirection: 'row', gap: 4, paddingLeft: 10, marginTop: 10, padding: 2 }}>
						<Text style={{
							textAlign: 'center',
							color: 'black',
							fontSize: 14,
							fontFamily: 'poppins_bold',
						}}>4)</Text>

						<Text style={{
							textAlign: 'center',
							color: 'black',
							fontSize: 14,
							fontFamily: 'poppins_bold',
						}}>Choose a plan </Text>
					</View> */}
          {/* {plan ?
						<View style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
							<Image style={{ width: 20, height: 20, marginTop: 5 }}
								source={require('../assets/verified.png')} />
							<Text style={{ color: 'green', fontSize: 14, fontFamily: 'poppins_bold', marginTop: 4 }}
							>Purchased</Text>
						</View>
						:
						<Pressable onPress={() => {
							if (verify) {
								navigation.push('SeekerPlans')
							} else {
								click('Verify your phone first')
							}
						}}
							style={{ flexDirection: 'row', marginLeft: 10, gap: 10 }}>
							<Image style={{ width: 20, height: 20, marginTop: 5 }}
								source={require('../assets/unverified.png')} />
							<Text style={{ color: 'red', fontSize: 14, fontFamily: 'poppins_regular', marginTop: 4 }}
							>(Choose Plan)</Text>
						</Pressable>
					} */}
        </View>
      </View>
      </>)
}
    </View>
  );
};

export default Verification;
