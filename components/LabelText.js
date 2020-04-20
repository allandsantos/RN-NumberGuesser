import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontFamilies from '../constants/fontFamilies'

const LabelText = props => {
    return <Text style={{...styles.default, ...props.style}}>{props.children}</Text>;
}

export default LabelText

const styles = StyleSheet.create({
    default:{
        fontFamily: FontFamilies.openSans,
    }
})
