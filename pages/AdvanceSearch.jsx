import { Image, TextInput, Text, Pressable, FlatList, SafeAreaView, ScrollView } from "react-native";
import React from 'react'
import { View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Resume from "./Resume";
import BottomSheet from 'react-native-simple-bottom-sheet';

const AdvanceSearch = ({ navigation }) => {
  return (
    
        <View style={{flex: 1}}>
      {/* <View>Your content</View> */}
      <BottomSheet isOpen>
        {(onScrollEndDrag) => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            {[...Array(10)].map((_, index) => (
              <View key={`${index}`}>
                <Text>{`List Item ${index + 1}`}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </BottomSheet>
    </View>

     
    
  )
}

export default AdvanceSearch
