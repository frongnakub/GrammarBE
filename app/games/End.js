import React, { Component } from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';


export default class End extends Component {
    constructor() {
        super()
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.notifiBox}>
                    <View style={styles.notiText}>
                        <View>
                            <Text style={styles.textGameOver}>
                                GAME OVER!
                    </Text>
                        </View>
                        <View>
                            <Text style={styles.textYourScore}>YOUR SCORE: {params.YOUR_SCORE}</Text>
                        </View>
                        <View>
                            <Text style={styles.textBestScore}>BEST SCORE: {params.BEST_SCORE}</Text>
                        </View>
                    </View>
                    <View style={styles.twoButton}>
                        <View style={styles.viewBtnRestart}>
                            <TouchableOpacity onPress={this._onPressButtonRestart} style={styles.btnTouchRestart}>
                                <Image
                                    style={styles.btnRestart}
                                    source={require('../images/restart.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewBtnStop}>
                            <TouchableOpacity onPress={this._onPressButtonStop} style={styles.btnTouchStop}>
                                <Image
                                    style={styles.btnStop}
                                    source={require('../images/stop.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    _onPressButtonRestart = () => {
        this._updateBestScore();
        this.props.navigation.navigate('PlayScreen')
    }
    _onPressButtonStop = () => {
        this._updateBestScore();
        this.props.navigation.navigate('Logged')
    }

    _updateBestScore() {
        const { params } = this.props.navigation.state;
        if (params.BEST_SCORE < params.YOUR_SCORE) {
            AsyncStorage.setItem("BEST_SCORE", params.YOUR_SCORE + '');
            // AsyncStorage.getItem("BEST_SCORE").then((value) => {
            //     console.log('end: ' + value);
            //   }).done();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    notifiBox: {
        height: 300,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    notiText: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    twoButton: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewBtnStop: {
        flex: 1,
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
    },
    viewBtnRestart: {
        flex: 1,
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 50,
    },
    btnTouchRestart: {
        borderRadius: 15,
        backgroundColor: '#1fcc1c',
        padding: 5
    },
    btnTouchStop: {
        borderRadius: 15,
        backgroundColor: '#e81d0b',
        padding: 5
    },
    textGameOver: {
        fontFamily: 'comicsansms',
        fontSize: 35,
        color: '#ed1f1c',
        fontWeight: 'bold',
    },
    textYourScore: {
        fontFamily: 'comicsansms',
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold',
    },
    textBestScore: {
        fontFamily: 'comicsansms',
        fontSize: 28,
        color: '#000000',
        fontWeight: 'bold',
    },
    btnRestart: {
        height: 50,
        width: 50,
    },
    btnStop: {
        height: 50,
        width: 50,
    }
});
