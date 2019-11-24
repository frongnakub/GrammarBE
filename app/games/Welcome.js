import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';


export default class Welcome extends Component {
  constructor(){
    super()
    this.state = {
      bestScore: 0,
    }
    this._getBestScore();
  }
  _onPressButton=() => {
    this.props.navigation.navigate('PlayScreen')
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style = {styles.panlelTop}>
          <View style = {styles.bestScore}>
            <Text style = {styles.scoreText}>
              BEST: {this.state.bestScore}
            </Text>
          </View>
          <View style = {styles.yourscore}>
            <Text style = {styles.scoreText}>
              SCORE: 0
            </Text>
          </View>
        </View>
        <View style= {styles.panelText}>
          <Text style = {styles.gameName}>THINK FAST</Text>
          <Text style = {styles.instructor}>{"\n\nWhich sentence is wrong?"}</Text>
          <Text style = {styles.instructor}>{"- Select  "}<Image
                style={styles.imageButton}
                source={require('../images/tick.png')}
          />{"  when the sentence is correct."}</Text>
          <Text style = {styles.instructor}>{"- Select  "}<Image
                style={styles.imageButton}
                source={require('../images/lose.png')}
          />{"  when the sentence is wrong."}</Text>
        </View>
        <View style = {styles.panelCenter}>
          <TouchableOpacity onPress={this._onPressButton} underlayColor = "#37384D">
              <Image
                style={styles.buttonPlay}
                source={require('../images/play-button.png')}
              />
          </TouchableOpacity>
        </View>

      </View>

    );
  }
  _getBestScore(){
    AsyncStorage.getItem("BEST_SCORE").then((value) => {
      this.setState({
        bestScore: (value == null ? 0 : value)
      });
      // console.log('welcome: ' + value);
    }).done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37384D',
  },
  panlelTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  bestScore: {
    fontFamily: 'comicsansms',
    flex: 1,
    alignItems: 'flex-start',
  },
  yourscore: {
    fontFamily: 'comicsansms',
    flex: 1,
    alignItems: 'flex-end'
  },
  scoreText: {
    fontFamily: 'comicsansms',
    fontSize: 25,
    color: '#fff'
  },
  panelText: {
    fontFamily: 'comicsansms',
    flex: 12,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageButton: {
    width: 50,
    height: 50,
  },
  panelCenter: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPlay: {
    width: 100,
    height: 100
  },
  panelBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableHighlightButton: {
    alignItems: 'center',
  },
  gameName: {
    fontFamily: 'comicsansms',
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  },
  instructor: {
    fontFamily: 'comicsansms',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});