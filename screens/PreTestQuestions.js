import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');

export default class Questions extends Component {
  state = {
    questions: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null,
    username: this.props.navigation.state.params.username,
    profile: [],
    userNo: Number,
    testNo: Number,
    questionNo: Number,
    userAnswer: '',
  }

  componentDidMount() {
    this.fetchQuestions()
    this.getUserNo()
  }

  fetchQuestions() {
    //adb reverse tcp:3003 tcp:3003
    axios.get("http://localhost:3003/questions")
    .then(res => {
      console.log('user no', res.data)
      this.setState({ questions: res.data, loading: false })
    })
    .catch(err => {
      this.setState({ loading: false })
      console.log('AAAAAAAAAAAAAAAAAAA')
    })
  }

  getUserNo() {
    const username = this.state.username
    axios.get("http://localhost:3003/userId/"+ JSON.stringify(username))
    .then(res => {
      console.log('AAAAA', res.data)
        this.setState({ 
            profile: res.data, 
            loading: false,
        })
    })
    .catch(err => {
      this.setState({ loading: false })
    })
  }

  chooseAnswer(answer) {
    this.setState({ selected: answer })
  }

  checkAnswer = (answer) => {
    //const selected = this.setState.select
    //this.setState({ userAnswer: this.state.selected })
    if (this.state.selected) {
      if (answer === this.state.selected) {
        this.setState({
          check: true,
          answer: true,
        })
        this.sendAnswer()
      } 
      else {
        this.setState({
          check: true,
          answer: false,
        })
        this.sendAnswer()
      }
    }
  }

  nextQuestion = () => {
    const { questions, index } = this.state
    if (questions.length === index + 1) {
      console.log("...");
    } else {
      this.setState({
        index: index + 1,
        check: false,
        answer: null,
        selected: ''
      })
    }
  }

  sendAnswer = () => {
    const index = this.state.index
    fetch('http://localhost:3003/answers', { 
        method: 'POST',
        headers: {
            'Accept': 'application/json, text-plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            userNo: this.state.profile[0].UserNo,
            testNo: this.state.questions[0].Test_TestNo,
            questionNo: this.state.questions[index].QuestionNo,
            userAnswer: this.state.selected,
            // userNo: this.state.profile[0].UserNo,
            // testNo: this.state.questions[0].Test_TestNo,
            // questionNo: this.state.questions[0].QuestionNo,
            // userAnswer: this.state.selected,
        })
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    const { questions, loading, index, answer, check, selected } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>             
          <Text ></Text>
          <Text style={{fontSize: 20,color:'#FFFFFF'}}>TEST</Text>
          <Text ></Text>
        </View>
        {
          loading ?
            <View style={styles.contentSpaceBetween}>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View style={styles.wrapper}>
              
              <View>
                {
                  questions.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                      <View >
                        <View style={styles.questionContainer}>
                          <Text style={styles.question}>{questions[index].Question}</Text>
                        </View>

                        <View style={styles.selectContainer}>
                          <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option1)}>
                            <Text style={selected === questions[index].Option1 ? styles.select : styles.selection}> A. {questions[index].Option1} </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option2)}>
                            <Text style={selected === questions[index].Option2 ? styles.select : styles.selection}> B. {questions[index].Option2} </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option3)}>
                            <Text style={selected === questions[index].Option3 ? styles.select : styles.selection}> C. {questions[index].Option3} </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option4)}>
                            <Text style={selected === questions[index].Option4 ? styles.select : styles.selection}> D. {questions[index].Option4} </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                }
              </View>
              {
                check ?
                  <View>
                    {
                      answer ?
                        <View style={styles.bottom}>
                          <TouchableOpacity onPress={() => this.checkAnswer(questions[index].CorrectAnswer)}>
                            <Text style={styles.true}>Result: Right!</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.nextQuestion}>
                            <Text style={styles.check}>Continue</Text>
                          </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.bottom}>
                          <TouchableOpacity>
                            <Text style={styles.false}>Result: Wrong!</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this.nextQuestion}>
                            <Text style={styles.nextFalse}>Continue</Text>
                          </TouchableOpacity>
                        </View>
                    }
                  </View>
                  :
                  <View style={styles.bottom}>
                    {
                      selected ?
                        <TouchableOpacity onPress={() => this.checkAnswer(questions[index].CorrectAnswer)}>
                          <Text style={styles.check}>Check</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={styles.selected}>Check</Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={this.nextQuestion}>
                      <Text style={styles.next}>Next</Text>
                    </TouchableOpacity>
                  </View>
              }
            </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    backgroundColor: '#EAD8AB',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  bottom: {
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#3498db'
  },
  title2: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000'
  },
  question: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#3E3E3E'
  },
  selection: {
    borderColor: '#D6BA84',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '400',
    backgroundColor: '#D6BA84',
  },
  select: {
    backgroundColor: '#FF842B',
    borderColor: '#FFFF',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '500',
  },
  check: {
    color: 'white',
    backgroundColor: '#3498db',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  next: {
    color: 'white',
    backgroundColor: '#67ac00',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  nextFalse: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  selected: {
    color: 'white',
    backgroundColor: 'lightgray',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
  },
  true : {
    fontSize: 18,
    fontWeight: '500',
    color: 'green',
    textAlign: 'center',
  },
  false : {
    fontSize: 18,
    fontWeight: '500',
    color: 'red',
    textAlign: 'center',
  },
  selectContainer: {
    marginTop: 50,
  },
  questionContainer: {
    marginTop: 50,
  },
  topBar: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#7F4F2C',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
  contentSpaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2,
  },

});
