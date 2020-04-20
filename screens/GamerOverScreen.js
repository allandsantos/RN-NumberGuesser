import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/colors'
import FontSizes from '../constants/fontSizes'
import LabelText from '../components/LabelText'
import TitleText from '../components/TitleText'
import fontFamilies from '../constants/fontFamilies'
import MainButton from '../components/MainButton'

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
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderColor: Colors.dark,
        overflow: 'hidden',
        marginVertical: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataCard: {
        padding: 30,
        width: 300,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataLabel: {
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    dataText: {
        color: Colors.mainApp,
        marginHorizontal: 3,
        fontFamily: fontFamilies.openSansBold
    },
    endCard: {
        padding: 30,
        width: 300,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        marginBottom: 50,
    },
    endText: {
        color: 'black',
    },
    dataContainer: {
        backgroundColor: Colors.info,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: 30,
        marginTop: 5,
        marginLeft: 5
    },
})
