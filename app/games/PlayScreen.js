import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TimerMixin,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

var isTrue, isPlus, num1, num2, result, calc, timer;
var TIME = 10;

export default class PlayScreen extends Component {
  constructor(props) {
    TIME = 10;
    super(props)
    this.state = {
      score: 0,
      bestScore: 0,
      time: TIME,
      index: 0,
      isGameOver: false,
      isTrue: ["","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true",
              "true","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true","true",
              "true","true","true","true","true","true","true","true","true","true","true","true","true","true"],
      result: ["","true","true","true","wrong","true","true","wrong","wrong","true","wrong","wrong","wrong","true","wrong","true","wrong","wrong",
              "wrong","wrong","true","true","wrong","true","wrong","true","wrong","wrong","true","wrong","wrong","true","true","wrong","true",
              "wrong","wrong","true","true","wrong","wrong","true","wrong","wrong","true","wrong","wrong","true","true","wrong","true"],
      calc: ["","I am a student now.","I went to school yesterday.","It has been snowing a lot this week.","What do you usually have for a breakfast?",
            "Aconcagua is the highest mountain outside Asia.","Be careful with this glass of milk. It's hot.","Jack is terrible upset about losing his keys.",
            "If it rains , I would stay at home.","We would pass the exam if we studied harder.","If the weather was fine, the children can walk to school.",
            "If my uncle has told me the way to his office, I would not have arrived so late.","The people drove off in a stoling car.",
            "I heard my mother talking on the phone.","The thieves were arresting by the police.","Let's meet in the afternoon, not at night.",
            "I saw Chris on the bus.","Be nice with your brother.","Our school is much nicer than their.","The bike on the right is your.",
            "The bus stop is near our house.","Jack's car is faster than mine.","Tomorrow will be more sunny than today.","This magazine is cheap, but that one is cheaper.",
            "A Statue of Liberty was dedicated in 1886.","We went shopping at Harrods.","We listen to regularly music.","set -> set -> settle","blow -> blew -> blown",
            "He can rides a bike.","We does not work in a bank.","Snow was falling lightly. Suddenly a reindeer appeared.","Mandy is a pretty girl.",
            "This car is as faster as that car.","I walk to the office four days a week.","He was inviting to the party yesterday.",
            "She avoided to tell him about her other plans.","I was bored to death.","He has called me twice this morning.",
            "If you walk out with your coat on, you will catch a cold.","You write on a blackboard with the chalk.","She waited to buy a basket.",
            "You will work with Miss Helen again when you turn up for work tomorrow.","I have an old records here","Mercedes cars are made in Germany.",
            "They are watching TV when I arrived.","We all know that most apples are ate raw, but they can also be used in cakes, pies, puddings, and jellies.",
            "Here is Emily. She’s six years old. Her brother is nine, so he is the oldest.","Running away from the castle, Cinderella lost a shoe.",
            "An imbalance of chemicals in the body or a lack of sufficient nutrition can slow down or permanently damages the growth of the nervous system.",
            "Lady and gentleman, I'd like to invite you."]
    }
    this._getBestScore();
    this._renderQuestion();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.panlelTop}>
          <View style={styles.bestScore}>
            <Text style={styles.scoreText}>
              BEST: {this.state.bestScore}
            </Text>
          </View>
          <View style={styles.yourscore}>
            <Text style={styles.scoreText}>
              SCORE: {this.state.score}
            </Text>
          </View>
        </View>
        <View style={styles.panelTime}>
          <Text style={styles.txtTime}>{this.state.time}</Text>
        </View>
        <View style={styles.panelCenter}>
          <Text style={styles.calculate}>{calc}</Text>
        </View>
        <View style={styles.panelBottom}>
          <View style={styles.buttonFalse}>
            <TouchableOpacity style={styles.imageButtonFalse} onPress={this._checkButtonFalse}>
              <Image
                style={styles.imageButton}
                source={require('../images/lose.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonTrue}>
            <TouchableOpacity style={styles.imageButtonTrue} onPress={this._checkButtonTrue}>
              <Image
                style={styles.imageButton}
                source={require('../images/tick.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  _getBestScore() {
    AsyncStorage.getItem("BEST_SCORE").then((value) => {
      this.setState({
        bestScore: (value == null ? 0 : value)
      });
    }).done();
  }

  _clearTimer() {
    clearInterval(timer);
    this.setState({ time: TIME });
  }

  _checkButtonTrue = () => {
    this._clearTimer();
    if (isTrue === result) {
      let newScore = this.state.score + 1;
      if (TIME > 2 && newScore % 10 == 0) TIME--;
      console.log(this.state.score);
      this.setState({
        score: newScore
      });
      this._renderQuestion();
    } else if (this.state.isGameOver == false) {
      this.setState({ isGameOver: true });
      this._gameOver();
    }
  }

  _checkButtonFalse = () => {
    this._clearTimer();
    if (isTrue !== result) {
      let newScore = this.state.score + 1;
      if (TIME > 2 && newScore % 10 == 0) TIME--;
      console.log(this.state.score);
      this.setState({
        score: newScore
      });
      this._renderQuestion();
    } else if (this.state.isGameOver == false) {
      this.setState({ isGameOver: true });
      this._gameOver();
    }
  }

  _renderQuestion() {
    var RandomNumber = Math.floor(Math.random() * 50) + 1 ;
      calc = this.state.calc[RandomNumber]
      result = this.state.result[RandomNumber]
      isTrue = this.state.isTrue[RandomNumber]

    time = TIME;
    timer = setInterval(() => {
      time--;
      this.setState({ time: time });
      console.log('time: ' + time);
      if (time == 0) {
        if (this.state.isGameOver == false) {
          this.setState({ isGameOver: true });
          this._gameOver();
        }
      }
    }, 1000);
  }

  _gameOver() {
      this._clearTimer();
      this.state.bestScore = this.state.score > this.state.bestScore ? this.state.score : this.state.bestScore;
      AsyncStorage.setItem("BEST_SCORE", this.state.bestScore.toString());
      this.props.navigation.navigate('End', { BEST_SCORE: this.state.bestScore, YOUR_SCORE: this.state.score })
  }

  _randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    alignItems: 'flex-end',
  },
  scoreText: {
    fontFamily: 'comicsansms',
    fontSize: 25,
    color: '#fff'
  },
  panelTime: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  panelCenter: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calculate: {
    textAlign: 'center',
    fontFamily: 'comicsansms',
    fontSize: 30,
    color: '#5BBD2B',
    fontWeight: 'bold'
  },
  panelBottom: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 90,
  },
  buttonTrue: {
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 7,
  },
  buttonFalse: {
    flex: 1,
    alignItems: 'center',
    marginRight: 7,
    marginLeft: 10,
  },
  imageButtonTrue: {
    backgroundColor: '#23ed04',
    padding: 30,
  },
  imageButtonFalse: {
    backgroundColor: '#f40602',
    padding: 30,
  },
  imageButton: {
      //flex: 1,
  },
  txtTime: {
    fontFamily: 'comicsansms',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});
