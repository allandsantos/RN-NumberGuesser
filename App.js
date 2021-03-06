import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GamerOverScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}
export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{ setDataLoaded(true)}} onError={(err) => {console.log('Erro ao carregar as fontes: ' + err)}}/>
  }

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (rounds) =>{
    setGuessRounds(rounds);
  }

  const newGameHandler = () =>{
    setUserNumber();
    setGuessRounds(0);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }
  else if(guessRounds > 0){
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} newGameHandler={newGameHandler}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title={'GUESS A NUMBER'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});
