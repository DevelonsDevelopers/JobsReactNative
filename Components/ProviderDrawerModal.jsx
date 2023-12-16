import React from 'react';
import { Image, Modal, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

const ProviderDrawerModal = ({
    visible,
    toggleVisibility,
    toggleLoadingVisibility,
    navigation,
    toggleDrawerVisibility,
    complete,
}) => {
    return (
        <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={toggleDrawerVisibility}>
            <TouchableWithoutFeedback onPress={toggleDrawerVisibility}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <TouchableWithoutFeedback>
                        <View style={{
                            elevation: 24,
                            borderRadius: 15,
                            backgroundColor: '#fff',
                            opacity: 1,
                            padding: 20,
                            marginHorizontal: 20,
                        }}>

                            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text
                                    style={{ width: '100%', fontFamily: 'poppins_semibold', textAlign: 'center' }}>Menu</Text>
                                <Pressable onPress={() => toggleDrawerVisibility()} style={{ padding: 20, marginLeft: 'auto', }}>
                                    <Image style={{ width: 15, height: 15, }}
                                        source={require('../assets/close.png')} />
                                </Pressable>
                            </Pressable>
                            {complete ?
                                <>
                                    <Ripple rippleColor="white" onPress={() => {
                                        toggleDrawerVisibility()
                                        navigation.push('ProviderProfileInfo')
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            backgroundColor: '#13A3E1',
                                            padding: 15,
                                            borderRadius: 10,
                                            marginTop: 10
                                        }}>
                                            <Text style={{
                                                width: '100%',
                                                fontFamily: 'poppins_semibold',
                                                color: '#fff'
                                            }}>Profile</Text>
                                            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }}
                                                source={require('../assets/arrowRight.png')} />
                                        </View>
                                    </Ripple>

                                    <Ripple rippleColor="white" onPress={() => {
                                        toggleDrawerVisibility()
                                        navigation.push('JobPosted')
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            backgroundColor: '#13A3E1',
                                            padding: 15,
                                            borderRadius: 10,
                                            marginTop: 5
                                        }}>
                                            <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>
                                                Jobs</Text>
                                            <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }}
                                                source={require('../assets/arrowRight.png')} />
                                        </View>
                                    </Ripple>
                                    <Ripple rippleColor="white" rippleOpacity={0.3} rippleDuration={600} rippleSize={800}
                                        onPress={() => {
                                            toggleDrawerVisibility()
                                            navigation.push('AppliedUsers')
                                        }}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            backgroundColor: '#13A3E1',
                                            padding: 15,
                                            borderRadius: 10,
                                            marginTop: 4
                                        }}>
                                        <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Applied
                                            Seekers</Text>
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }}
                                            source={require('../assets/arrowRight.png')} />
                                    </Ripple>
                                    <Ripple rippleColor="white" rippleOpacity={0.3} rippleDuration={600} rippleSize={800}
                                        onPress={() => {
                                            toggleDrawerVisibility()
                                            navigation.push('SentOffers')
                                        }}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            backgroundColor: '#13A3E1',
                                            padding: 15,
                                            borderRadius: 10,
                                            marginTop: 4
                                        }}>

                                        <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Offer
                                            Sent</Text>
                                        <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }}
                                            source={require('../assets/arrowRight.png')} />
                                    </Ripple>
                                </>
                                :
                                ''
                            }

                            <Ripple rippleColor="#01579B" rippleOpacity={0.5} rippleDuration={800} rippleSize={500}
                                onPress={async () => {
                                    toggleDrawerVisibility()
                                    toggleLoadingVisibility()
                                }} style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#13A3E1',
                                    padding: 15,
                                    borderRadius: 10,
                                    marginTop: 4
                                }}>
                                <Text style={{ width: '100%', fontFamily: 'poppins_semibold', color: '#fff' }}>Sign Out</Text>
                                <Image style={{ width: 15, height: 15, marginLeft: 'auto', tintColor: '#fff' }}
                                    source={require('../assets/arrowRight.png')} />

                            </Ripple>
                        </View>


                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ProviderDrawerModal;
