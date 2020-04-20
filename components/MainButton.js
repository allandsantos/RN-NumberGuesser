import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import fontFamilies from '../constants/fontFamilies';
import fontSizes from '../constants/fontSizes';

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
        width: 300,
        height: 50,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: Colors.mainApp
    },
    buttonText: {
        color: Colors.white,
        fontFamily: fontFamilies.openSans,
        fontSize: fontSizes.header
    }
})
