import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/colors';
import fontFamilies from '../constants/fontFamilies';
import fontSizes from '../constants/fontSizes';

const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

const ControlButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.85} onPress={props.onPress} style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ControlButton

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
    },
    button: {
        width: '100%',
        height: _HEIGHT * 0.0658,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: _HEIGHT < 600 ? 15 : 25,
        backgroundColor: Colors.mainApp
    },
    buttonText: {
        color: Colors.white,
        fontFamily: fontFamilies.openSans,
        fontSize: fontSizes.header
    }
})
