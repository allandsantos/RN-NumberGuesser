import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontFamilies from '../constants/fontFamilies'
import FontSizes from '../constants/fontSizes'

const TitleText = props => {
    return <Text style={{...styles.default, ...props.style}}>{props.children}</Text>;
}

export default TitleText

const styles = StyleSheet.create({
    default:{
        fontSize: FontSizes.title,
        fontFamily: FontFamilies.openSansBold,
    }
})