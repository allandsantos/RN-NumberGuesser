import React from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes'
import LabelText from '../components/LabelText'
import TitleText from '../components/TitleText'
import fontFamilies from '../constants/fontFamilies'
import MainButton from '../components/MainButton'

const _WIDTH = Dimensions.get('window').width;
const _HEIGHT = Dimensions.get('window').height;

const GamerOverScreen = props => {

    const { rounds, userNumber, newGameHandler } = props;

    return (
        <View style={styles.container}>
            <TitleText style={styles.endText}>FIM DE JOGO!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/original.png')}
                    resizeMode="cover" />
                {/* <Image 
                fadeDuration={1000}
                source={{uri: 'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg'}}
                style={styles.image}
                resizeMode="cover"
                /> */}
            </View>
            <Card style={styles.dataCard}>
                <LabelText style={styles.dataLabel}>
                    Seu celular precisou de
                    <LabelText style={styles.dataText}> {rounds} </LabelText>
                    tentativa(s) para chegar no número
                    <LabelText style={styles.dataText}> {userNumber}</LabelText>
                    .
                </LabelText>
                <MainButton onPress={newGameHandler}>
                    NOVO JOGO
                </MainButton>
            </Card>
        </View>
    )
}

export default GamerOverScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: _WIDTH * 0.76 / 2,
        borderWidth: _WIDTH < 350 ? 2 : 3,
        borderColor: 'black'
    },
    imageContainer: {
        width: _WIDTH * 0.76,
        height: _WIDTH * 0.76,
        borderColor: Colors.dark,
        overflow: 'hidden',
        marginVertical: _HEIGHT * 0.039,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataCard: {
        padding: _WIDTH < 350 ? 15 : 30,
        width: _WIDTH < 350 ? '90%' : '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataLabel: {
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 15,
        fontSize: _HEIGHT < 600 ? 12 : 16
    },
    dataText: {
        color: Colors.mainApp,
        fontFamily: fontFamilies.openSansBold
    },
})
