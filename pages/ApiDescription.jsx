import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getJobsApiId } from "../API/actions/jobsApi";
import WebsiteModal from "../Components/WebsiteModal";
import Ripple from "react-native-material-ripple";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import jobsApiService from "../server/services/jobsApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginRequireModal from "../Components/LoginRequireModal";

const ApiDescription = ({ route, navigation }) => {
  const { ID } = route.params;

  const [job, setJob] = useState();
  const [loginVal, setLoginVal] = useState();

  useEffect(() => {
    const fetchLoginValue = async () => {
      try {
        const value = await AsyncStorage.getItem("LOGIN");
        setLoginVal(value);
        console.log('login value' ,value);
      } catch (error) {
        console.error("Error retrieving ID:", error);
      }
    };

    fetchLoginValue();
  }, []);

  useEffect(() => {
    if (ID && ID !== "0") {
      jobsApiService.fetchJobsApiId({ id: ID }).then((res) => {
        setJob(res?.data);
      });
    }
  }, [ID]);

  const [webVisible, setWebVisible] = useState(false);
  const toggWebVisibility = () => setWebVisible(!webVisible);

  const [loginVisible, setLoginVisible] = useState(false);
  const toggleLoginVisible = () => setLoginVisible(!loginVisible);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
      <LoginRequireModal
          visible={loginVisible}
          toggleRequireVisible={toggleLoginVisible}
          navigation={navigation}
        />
        <WebsiteModal
          visible={webVisible}
          toggleRequireVisible={toggWebVisibility}
          navigation={navigation}
          url={job?.url}
        />

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
          <View style={{ width: "100%", marginTop: 0, paddingEnd: 90 }}>
            <Pressable>
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
                  color: "black",
                }}
              >
                {job?.company}
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
            <Text
              style={{
                fontSize: 18,
                fontFamily: "poppins_medium",
                marginLeft: 15,
                marginTop: 60,
                marginBottom: 20,
              }}
            >
              Description:
            </Text>

            <Text
              style={{
                marginHorizontal: 25,
                fontFamily: "poppins_medium",
              }}
            >
              {job?.description}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>

      <Ripple
        rippleColor="white"
        onPress={() => {
          if (loginVal === 'true') {
            toggWebVisibility();
          } else {
            toggleLoginVisible()
          }
        }}
        style={{
          height: 50,
          backgroundColor: "#13A3E1",
          width: 150,
          paddingVertical: 10,
          borderRadius: 25,
          paddingTop: 13,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 10,
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
          APPLY
        </Text>
      </Ripple>
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

export default ApiDescription;
