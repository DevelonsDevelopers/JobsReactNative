import React from "react";
import {Image, Modal, Pressable, Text, View} from "react-native";

const ContactModal = ({visible,toggleVisibility ,name,phone,email}) => {
    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleVisibility}>
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(66, 66, 66, 0.4)'
            }}>
                <View style={{
                    margin: 35,
                    elevation: 24,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    opacity: 1,
                    padding: 20,
                    marginHorizontal: 30
                }}>
                    <Text style={{fontFamily:'poppins_medium' , textAlign:'center' ,marginVertical:20,fontSize:19}}>Contact Info </Text>

                    <View style={{ flexDirection:'row',borderWidth:1,padding:10,borderRadius:10 }}>
                        <Image source={require('../assets/profile.png')} style={{height:25,width:25 }}  />
                        <Text style={{ fontFamily:'poppins_medium',textAlign:'right',width:'90%' }}>{name}</Text>
                    </View>

                    <View style={{ flexDirection:'row',borderWidth:1,padding:10,marginVertical:20,borderRadius:10 }}>
                        <Image source={require('../assets/call.png')} style={{height:25,width:25,tintColor:'black' }}  />
                        <Text style={{ fontFamily:'poppins_medium',textAlign:'right',width:'90%' }}>{phone}</Text>
                    </View>

                    <View style={{ flexDirection:'row',borderWidth:1,padding:10,borderRadius:10 }}>
                        <Image source={require('../assets/mail.png')} style={{height:25,width:25,tintColor:'black' }}  />
                        <Text style={{ fontFamily:'poppins_medium',textAlign:'right',width:'90%' }}>{email}</Text>
                    </View>


                    <Text style={{fontFamily:'poppins_bold', textAlign:'center',borderWidth:1,marginLeft:'auto',marginRight:'auto',marginTop:20,paddingHorizontal:30,paddingVertical:5,borderRadius:20,backgroundColor:'#13A3E1',color:'white' }}>Cancel</Text>

                </View>
            </View>
        </Modal>
    )

}
export default ContactModal
