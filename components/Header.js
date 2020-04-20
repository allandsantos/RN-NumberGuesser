import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';
import fontFamilies from '../constants/fontFamilies';

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
        height: 90,
        backgroundColor: Colors.mainApp,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 36
    },
    title:{
        color: Colors.white,
        fontSize: FontSizes.header,
        fontFamily: fontFamilies.openSansBold,
    }
})
