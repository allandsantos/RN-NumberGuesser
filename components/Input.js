import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Colors from '../constants/colors';

const Input = props => {
    return (
        <TextInput  {...props} style={{...styles.input, ...props.style}}/>
    )
}

export default Input;

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})
