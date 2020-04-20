import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/colors';
import fontFamilies from '../constants/fontFamilies';
import fontSizes from '../constants/fontSizes';

const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.85} onPress={props.onPress} style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: _WIDTH * 0.76,
        height:  _HEIGHT * 0.065,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: _WIDTH < 350 ? 20 : 25,
        backgroundColor: Colors.mainApp
    },
    buttonText: {
        color: Colors.white,
        fontFamily: fontFamilies.openSans,
        fontSize: fontSizes.header
    }
})
