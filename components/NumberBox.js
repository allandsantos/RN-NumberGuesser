import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes';

const NumberBox = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.confirmedNumber}>{props.children}</Text>
        </View>
    )
}

export default NumberBox

const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        padding: 20,
        borderWidth: 3,
        borderColor: Colors.purple,
        marginTop: 15,
    },  
    confirmedNumber: {
        fontWeight: 'bold',
        fontSize: FontSizes.title,
        color: Colors.purple,
    },
})
