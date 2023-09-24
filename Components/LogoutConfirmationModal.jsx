import {Image, Modal, Text, View} from "react-native";
import React from "react";

const LogoutConfirmationModal = ({visible, Logout, toggleLoadingVisibility}) => {
  return (
      <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleLoadingVisibility}>
          <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', backgroundColor: 'rgba(66, 66, 66, 0.4)' }}>
              <View style={{ margin: 35, elevation: 24, borderRadius: 15, backgroundColor: '#fff', opacity: 1, padding: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30 }}>
                  <Image style={{ width: 50, height: 50 }} source={require('../assets/runn.png')} />
                  <Text style={{ paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', marginTop: 10 }}>Are You Sure You Want To Quit?</Text>
                  <View style={{ flexDirection: 'row', paddingBottom: 20, paddingTop: 10 }}>
                      <Text onPress={async () => Logout()} style={{ backgroundColor: '#13A3E1', color: 'white', paddingHorizontal: 6, paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', width: 100, textAlign: 'center', borderRadius: 20 }}>Yes</Text>
                      <Text onPress={() => toggleLoadingVisibility()} style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 6, paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', marginLeft: 40, width: 100, textAlign: 'center', borderRadius: 20, borderWidth: 1 }}>No</Text>

                  </View>
              </View>
          </View>
      </Modal>
  )

}

export default LogoutConfirmationModal
