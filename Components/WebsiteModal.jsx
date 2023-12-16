import React from 'react';
import { Image, Linking, Modal, Pressable, Text, View, TouchableWithoutFeedback } from 'react-native';

function WebsiteModal({ toggleRequireVisible, visible, url }) {
  return (
    <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={toggleRequireVisible}>
      <TouchableWithoutFeedback onPress={toggleRequireVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ margin: 35, elevation: 94, borderRadius: 15, backgroundColor: '#fff', opacity: 1, padding: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30, marginTop: 'auto', marginBottom: 'auto' }}>
            <Image style={{ width: 160, height: 150 }} source={require('../assets/website.png')} />
            <Text style={{ paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_small', marginTop: 10, textAlign: 'center', color: 'gray' }}>You will be redirected to an external WebPage through this link. Are you sure you want to open it? </Text>
            <View style={{ flexDirection: 'row', paddingBottom: 20, paddingTop: 10, gap: 30 }}>
              <Text onPress={() => { Linking.openURL(url), toggleRequireVisible() }} style={{ backgroundColor: '#13A3E1', color: 'white', paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', width: 130, textAlign: 'center', borderRadius: 20 }}>Open Web </Text>
              <Text onPress={toggleRequireVisible} style={{ backgroundColor: 'white', color: 'black', paddingVertical: 7, fontSize: 16, fontFamily: 'poppins_medium', width: 130, textAlign: 'center', borderRadius: 20, borderWidth: 1 }}>Cancel</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default WebsiteModal;
