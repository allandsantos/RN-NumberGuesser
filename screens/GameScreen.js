import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import NumberBox from '../components/NumberBox';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, userChoice));
    const [rounds, setRounds] = useState(0);

    const currentLower = useRef(1);
    const currentHigher = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if(currentGuess === userChoice)
        {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)){
            Alert.alert('Jogue limpo!', 'Você sabe que está errado a escolha', [{text: 'Foi mal!', style:'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentHigher.current = currentGuess;
        }
        if(direction === 'greater'){
            currentLower.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLower.current, currentHigher.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(currentRound => currentRound + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent guess</Text>
            <NumberBox>
                {currentGuess}
            </NumberBox>
            <Card style={styles.buttonContainer}>
                <Button title='MENOR' onPress={() => nextGuessHandler('lower')}/>
                <Button title='MAIOR' onPress={() => nextGuessHandler('greater')}/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})
