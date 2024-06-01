import React from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import DeleteButton from "./DeleteButton";
import deleteService from "../server/services/deleteService";

const DeleteAccountModal = ({ visible, toggleVisibility, id, user , navigation}) => {




  const handleDelete = async () => {
    if (user === "seeker") {
      try {
        const res = await deleteService.deleteSeeker(id);
        console.log("res", res);
        if (res?.responseCode === 200) {
            
            toggleVisibility()
        }
  
        // navigation.popToTop();
        // navigation.replace("Home");
      } catch (err) {
        console.log("err", err);
  
        // navigation.popToTop();
        // navigation.replace("Home");
      }
    }
  };
  

  console.log("id", id);

  return (
    <Modal
      visible={visible}
      animationType={"fade"}
      transparent={true}
      onRequestClose={toggleVisibility}
    >
      <TouchableWithoutFeedback onPress={toggleVisibility}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              margin: 35,
              elevation: 24,
              borderRadius: 15,
              backgroundColor: "#fff",
              opacity: 1,
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 30,
            }}
          >
            <Image
              source={require("../assets/alert.png")}
              style={{ width: 48, height: 45 }}
            />
            <Text
              style={{
                fontSize: 19,
                fontFamily: "poppins_medium",
                color: "gray",
                marginVertical: 20,
              }}
            >
              Are you sure ?
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "poppins_medium",
                color: "gray",
                marginTop: 10,
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Do you really want to delete Your account? This process cannot be
              undone.
            </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Text
                onPress={() => toggleVisibility()}
                style={{
                  backgroundColor: "#F5F5F7",
                  color: "gray",
                  fontFamily: "poppins_medium",
                  fontSize: 17,
                  borderRadius: 10,
                  paddingHorizontal: 40,
                  marginTop: "auto",
                  marginBottom: "auto",
                  paddingTop: 7,
                  paddingBottom: 7,
                }}
              >
                Cancel
              </Text>
              <View
                style={{
                  backgroundColor: "#F53E57",
                  color: "white",
                  fontFamily: "poppins_medium",
                  fontSize: 17,
                  borderRadius: 10,
                  paddingHorizontal: 40,
                  marginTop: "auto",
                  marginBottom: "auto",
                  paddingTop: 7,
                  paddingBottom: 7,
                }}
              >
                <Text
                  onPress={() => handleDelete()}
                  style={{
                    backgroundColor: "#F53E57",
                    color: "white",
                    fontFamily: "poppins_medium",
                    fontSize: 17,
                    borderRadius: 10,
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Delete
                </Text>
              </View>
              {/* <DeleteButton isLoading={isLoad} text={"Delete"} disabled={false} btnStyle={{ backgroundColor: 'red', color: 'white', fontFamily: 'poppins_medium', fontSize: 17, borderRadius: 10, paddingHorizontal: 20, marginTop:'auto',marginBottom:'auto' }}/> */}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DeleteAccountModal;
