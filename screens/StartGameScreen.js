import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, KeyboardAvoidingView, View, Button, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity, ScrollView } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors';
import colors from '../constants/colors';
import FontSizes from '../constants/fontSizes';
import Input from '../components/Input';
import NumberBox from '../components/NumberBox';
import LabelText from '../components/LabelText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

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
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset='30'>
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
            </KeyboardAvoidingView>
        </ScrollView>
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
        marginVertical: _HEIGHT * 0.013,
    },
    cardContainer: {
        width: _WIDTH < 350 ? '90%' : '80%',
        alignItems: 'stretch',
    },
    inputContainer: {
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
        paddingHorizontal: _WIDTH < 350 ? 5 : 15,
        marginTop: _HEIGHT < 600 ? 5 : 15,
    },
    button: {
        width: _WIDTH > 350 ? _WIDTH / 4 : _WIDTH / 3,
    },
    chosenNumber: {
        textAlign: 'center',
        fontSize: FontSizes.header,
    },
    chosenCard: {
        alignItems: 'center'
    },
    chosenContainer: {
        marginTop: _HEIGHT > 600 ? _HEIGHT * 0.065 : _HEIGHT * 0.03,
        marginBottom: _HEIGHT * 0.065,
        alignItems: 'center',
    },
})
