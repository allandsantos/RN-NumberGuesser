import React from 'react'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';
import fontFamilies from '../constants/fontFamilies';


const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

const Header = props => {
    const {title} = props; 
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        maxHeight: 90,
        height: _HEIGHT / 8,
        backgroundColor: Colors.mainApp,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: _HEIGHT / 18,
    },
    title:{
        color: Colors.white,
        fontSize: FontSizes.header,
        fontFamily: fontFamilies.openSansBold,
    }
})
