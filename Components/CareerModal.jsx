import React, { useEffect, useState } from 'react'
import { Image, Modal, Pressable, Text, TouchableWithoutFeedback, View, TextInput } from 'react-native'
import company from "../API/reducers/company";
import Toast from 'react-native-toast-message';

const CareerModal = ({ visible, toggleCareerVisibility, add, edit, data }) => {

    const [company, setCompany] = useState('')
    const [job, setJob] = useState('')
    const [timeperiod, setTimePeriod] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        if (data !== null) {
            setCompany(data.company)
            setJob(data.job)
            setTimePeriod(data.timeperiod)
            setAddress(data.address)
            setPhone(data.phone)
        }
    }, [data]);

    console.log(data?.status)

    const Add = () => {

        if (company.length >= 2) {
            if (job.length >= 2) {
                if (timeperiod.length >= 2) {
                    if (address.length >= 2) {
                        // if (phone.length >= 2) {
                        if (data?.status === 0) {
                            edit(company, job, timeperiod, address, phone, data.id)
                        } else {
                            add(company, job, timeperiod, address, phone)
                        }
                        toggleCareerVisibility()
                        // } else {
                        //     Toast.show({ type: 'error', position: 'top', text1: 'Please Enter Company Phone' })
                        // }
                    } else {
                        Toast.show({ type: 'error', position: 'top', text1: 'Please Enter Company Address' })
                    }
                } else {
                    Toast.show({ type: 'error', position: 'top', text1: 'Please Enter Timperperiod' })
                }
            } else {
                Toast.show({ type: 'error', position: 'top', text1: 'Please Enter Job ' })
            }
        } else {
            Toast.show({ type: 'error', position: 'top', text1: 'Please Enter Company Name ' })
        }


    }

    return (
        <Modal visible={visible} animationType={"fade"} transparent={true} onRequestClose={toggleCareerVisibility}>
            <TouchableWithoutFeedback onPress={toggleCareerVisibility}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <View style={{
                        margin: 35,
                        elevation: 24,
                        borderRadius: 25,
                        backgroundColor: '#fff',
                        opacity: 1,
                        padding: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '90%'
                    }}>
                        <Pressable style={{ width: 15, height: 15, marginLeft: 'auto' }}
                            onPress={() => toggleCareerVisibility()}><Image
                                style={{ width: 15, height: 15, marginLeft: 'auto' }}
                                source={require('../assets/close.png')} /></Pressable>
                        <Text style={{ fontSize: 16, fontFamily: 'poppins_bold' }}>Career</Text>
                        <TextInput onChangeText={text => setCompany(text)} placeholder={'Company'} style={{
                            width: '80%',
                            marginTop: 20,
                            borderColor: '#adadad',
                            borderRadius: 20,
                            borderWidth: 0.5,
                            height: 50,
                            textAlign: 'center'
                        }}>{data?.company}</TextInput>
                        <TextInput onChangeText={text => setJob(text)} placeholder={'Job'} style={{
                            width: '80%',
                            marginTop: 8,
                            borderColor: '#adadad',
                            borderRadius: 20,
                            borderWidth: 0.5,
                            height: 50,
                            textAlign: 'center'
                        }}>{data?.job}</TextInput>
                        <TextInput onChangeText={text => setTimePeriod(text)} placeholder={'Time Period'} style={{
                            width: '80%',
                            marginTop: 8,
                            borderColor: '#adadad',
                            borderRadius: 20,
                            borderWidth: 0.5,
                            height: 50,
                            textAlign: 'center'
                        }}>{data?.timeperiod}</TextInput>
                        <TextInput onChangeText={text => setAddress(text)} placeholder={'Address'} style={{
                            width: '80%',
                            marginTop: 8,
                            borderColor: '#adadad',
                            borderRadius: 20,
                            borderWidth: 0.5,
                            height: 50,
                            textAlign: 'center'
                        }}>{data?.address}</TextInput>
                        {/* <TextInput onChangeText={text => setPhone(text)} placeholder={'Phone'} style={{
                        width: '80%',
                        marginTop: 8,
                        borderColor: '#adadad',
                        borderRadius: 20,
                        borderWidth: 0.5,
                        height: 50,
                        textAlign: 'center'
                    }}>{data?.phone}</TextInput> */}
                          {data?.status === 0 ?
                            <Pressable onPress={() => Add()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 10
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Update</Text></Pressable>
                            :
                            <Pressable onPress={() => Add()} style={{
                                paddingHorizontal: 60,
                                paddingVertical: 13,
                                backgroundColor: '#13A3E1',
                                borderRadius: 25,
                                marginTop: 10
                            }}><Text style={{ color: '#fff', fontSize: 14, fontFamily: 'poppins_bold' }}>Add</Text></Pressable>
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <Toast position='top' bottomOffset={20} />
        </Modal>
    )
}

export default CareerModal
