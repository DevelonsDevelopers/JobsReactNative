import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';


const DeleteButton = ({
    text = 'DONE',
    onPress = () => {
    },
    disabled = false,
    btnStyle = {},
    isLoading = false
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.container,
                backgroundColor: !disabled ? 'red' : 'grey',
                ...btnStyle,

            }}
            disabled={disabled}
        >
            {isLoading ? <ActivityIndicator size={'small'} /> : <Text style={styles.textStyle}>{text}</Text>}


        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'red'

    },

    textStyle: {
        fontSize: 15,
        fontFamily: 'poppins_bold',
        color: 'white'
    }
});

//make this component available to the app
export default DeleteButton;
