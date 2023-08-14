import {Button, Image, Pressable, ScrollView, Text, TextInput, View, StyleSheet} from "react-native";
import {CodeField, useBlurOnFulfill, useClearByFocusCell, Cursor} from "react-native-confirmation-code-field";
import {useState} from "react";

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 47,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#00000030',
        borderRadius: 5,
        textAlign: 'center',
        marginHorizontal: 5
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;

function ChangePassword({ navigation }) {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 70, marginLeft: 30}}>
                <Image style={{tintColor: '#000', width: 40, height: 40}}
                       source={require('../assets/back_arrow.png')}/>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{ height: 200, width: 200, marginTop: 70 }} source={require('../assets/verification_code.png')}/>
                <Text style={{color: '#000', fontFamily: 'poppins_semibold', fontSize: 18, width: '85%', textAlign: 'center', marginTop: 20, alignSelf: 'center'}}>Verification Code</Text>
                <Text style={{color: '#000', fontFamily: 'poppins_regular', fontSize: 12, width: '85%', textAlign: 'center', marginTop: 5, alignSelf: 'center'}}>Please enter your code send
                    to xxxxxxxxxxx</Text>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />
                <Pressable onPress={() => navigation.navigate('Onboarding')} style={{
                    width: '85%',
                    backgroundColor: '#13A3E1',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 100,
                    paddingVertical: 15,
                }}><Text style={{color: '#fff', fontFamily: 'poppins_semibold', fontSize: 15}}>Verify</Text></Pressable>
                <Pressable onPress={() => navigation.navigate('Onboarding')} style={{
                    width: '85%',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: 20,
                    paddingVertical: 15,
                }}><Text style={{color: '#13A3E1', fontFamily: 'poppins_semibold', fontSize: 15}}>Resend Code</Text></Pressable>
            </View>
        </ScrollView>
    );
}

export default ChangePassword
