import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, FlatList, Dimensions } from 'react-native'
import NumberBox from '../components/NumberBox';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import ControlButton from '../components/ControlButton';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/colors';

const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const bgStyle = (color) => {return {backgroundColor: color}};
const renderLog = ({item}) => {
    let icon = 'minus';
    let bgColor = Colors.danger;
    if (item.chosenButton === 'greater') {
        icon = 'plus';
        bgColor = Colors.success;
    }

    return (
        <View style={{ ...logStyle.logContainer, ...bgStyle(bgColor) }}>
            <View style={logStyle.container}>
                <LabelText style={logStyle.text}>{item.numberGuess}</LabelText>
                <LabelText style={logStyle.text}><FontAwesome5 name={icon} size={18} /></LabelText>
            </View>
        </View>
    )
}

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
    const [guessLog, setGuessLog] = useState([])

    const currentLower = useRef(1);
    const currentHigher = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(guessLog.length);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert('Jogue limpo!', 'Você sabe que está trapaçeando neh!', [{ text: 'Foi mal!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigher.current = currentGuess;
        }
        if (direction === 'greater') {
            currentLower.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLower.current, currentHigher.current, currentGuess);
        setCurrentGuess(nextNumber);
        setGuessLog([{ numberGuess: currentGuess, chosenButton: direction }, ...guessLog]);
    }

    return (
        <View style={styles.screen}>
            <LabelText style={styles.label}>Palpite do robô</LabelText>
            <NumberBox>
                {currentGuess}
            </NumberBox>
            <Card style={styles.buttonContainer}>
                <ControlButton onPress={() => nextGuessHandler('lower')}>
                    <FontAwesome5 name="minus" size={_HEIGHT < 600 ? 18 : 22} />
                </ControlButton>
                <ControlButton onPress={() => nextGuessHandler('greater')}>
                    <FontAwesome5 name="plus" size={_HEIGHT < 600 ? 18 : 22} />
                </ControlButton>
            </Card>
            <FlatList
                data={guessLog}
                keyExtractor={(item) => item.index}
                renderItem={renderLog}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    label: {
        fontSize: _HEIGHT < 600 ?  16 : 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: _WIDTH < 350 ? '90%' : '80%',
        paddingVertical: _HEIGHT * 0.052
    }
})

const logStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: _WIDTH * 0.084,
        alignItems: 'center',
        paddingVertical: 2,
    },
    logContainer: {
        marginTop: 10,
        width: _WIDTH * 0.637,
        elevation: 6,
        borderRadius: 10,
        padding: _HEIGHT * 0.026,
    },
    text: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold'
    },
    listContainer:{
        flexGrow: 1,
        justifyContent: 'flex-start',
    }
})
