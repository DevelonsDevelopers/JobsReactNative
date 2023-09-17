import React from 'react'
import { Image, Text, View } from 'react-native'

const PaymentSuccessful = () => {
  return (
    <View>
        <View style={{ flexDirection:'column',justifyContent:'center',marginLeft:'auto',marginRight:'auto',marginTop:150 }}>
       <Image source={require('../assets/purchase.png') } style={{ marginTop:20,width:220,height:240 }} />
       <Text style={{ textAlign:'center',fontSize:16,fontFamily:'poppins_medium',marginTop:20 }}>Thank you !</Text>
       <Text style={{ textAlign:'center',fontSize:16,fontFamily:'poppins_medium' }}>Purchase with successful</Text>
       <Text style={{ textAlign:'center',fontSize:16,fontFamily:'poppins_medium',backgroundColor:'green',color:'white',marginTop:100,borderRadius:20,paddingVertical:10 }}>Done</Text>
       </View>
         </View>
  )
}

export default PaymentSuccessful
