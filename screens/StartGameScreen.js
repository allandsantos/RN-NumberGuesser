import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors';
import colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';
import Input from '../components/Input';
import NumberBox from '../components/NumberBox';

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
                            <Text style={styles.chosenNumber}>Número escolhido</Text>
                            <NumberBox>
                                {selectedNumber}
                            </NumberBox>
                        </Card>
                    </View>
                    <TouchableOpacity activeOpacity={0.85} style={styles.containerStartGame} onPressOut={() => props.onStartGame(selectedNumber)}>
                        <Text style={styles.textStartButton}>ESTOU PRONTO</Text>
                    </TouchableOpacity>
                </View>
            );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Inicie um novo jogo!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>Insira um número</Text>
                    <Input
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength={2}
                        value={enteredValue}
                        onChangeText={numberInputHandler} />
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
        fontSize: FontSizes.title,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        textAlign: 'center',
        width: 100,
        backgroundColor: colors.white,
    },
    label: {
        fontSize: FontSizes.label
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,
    },
    button: {
        width: 100
    },
    confirmCard: {
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: Colors.purple,
    },
    chosenNumber: {
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: FontSizes.header
    },
    chosenCard:{
        alignItems: 'center'
    },
    chosenContainer: {
        marginTop: 25,
        alignItems: 'center',
    },
    containerStartGame: {
        width: 300,
        height: 50,
        marginTop: 50,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.success
    },
    textStartButton: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }
})
