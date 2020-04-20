import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors';
import colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';
import Input from '../components/Input';
import NumberBox from '../components/NumberBox';
import LabelText from '../components/LabelText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHanler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Número inválido!',
                'Insira um número entre 1 e 99.',
                [{ text: 'Entendi', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput =
            (
                <View>
                    <View style={styles.chosenContainer}>
                        <Card style={styles.chosenCard}>
                            <LabelText style={styles.chosenNumber}>Número escolhido</LabelText>
                            <NumberBox>
                                {selectedNumber}
                            </NumberBox>
                        </Card>
                    </View>
                    <MainButton onPress={() => props.onStartGame(selectedNumber)}>
                        INICIAR JOGO
                    </MainButton>
                </View>
            );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Inicie um novo jogo!</TitleText>
                <Card style={styles.cardContainer}>
                    <View style={styles.inputContainer}>
                        <LabelText style={styles.label}>Insira um número</LabelText>
                        <Input
                            style={styles.input}
                            keyboardType='number-pad'
                            maxLength={2}
                            value={enteredValue}
                            onChangeText={numberInputHandler} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Resetar' color={Colors.secondary} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirmar' color={Colors.mainApp} onPress={confirmInputHanler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        marginVertical: 10,
    },
    cardContainer: {
        width: '80%',
        maxWidth: '90%',
        minWidth: 300,
        alignItems: 'stretch',
    },
    inputContainer:{
        width: '100%',
        alignItems: 'center',
    },
    input: {
        textAlign: 'center',
        width: 100,
        backgroundColor: colors.white,
    },
    label: {
        fontSize: FontSizes.label,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,
    },
    button: {
        //width: 100
        width: Dimensions.get('window').width / 4
    },
    confirmCard: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: Colors.purple,
    },
    chosenNumber: {
        textAlign: 'center',
        fontSize: FontSizes.header,
    },
    chosenCard: {
        alignItems: 'center'
    },
    chosenContainer: {
        marginVertical: 50,
        alignItems: 'center',
    },
})
