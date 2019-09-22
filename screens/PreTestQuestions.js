import React, { Component } from 'react';
import {StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';
import axios from 'axios';

export default class Questions extends Component {
  state = {
    questions: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null,
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions() {
    //adb reverse tcp:3003 tcp:3003
    axios.get("http://localhost:3003/questions")
    .then(res => {
      this.setState({ questions: res.data, loading: false })
    })
    .catch(err => {
      this.setState({ loading: false })
    })
  }

  chooseAnswer(answer) {
    this.setState({ selected: answer })
  }

  checkAnswer = (answer) => {
    if (this.state.selected) {
      if (answer === this.state.selected) {
        this.setState({
          check: true,
          answer: true
        })
      } 
      else {
        this.setState({
          check: true,
          answer: false
        })
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

  render() {
    const { questions, loading, index, answer, check, selected } = this.state
    return (
      <View style={styles.container}>
        {
          loading ?
            <View>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View style={styles.wrapper}>
              <View>
                {
                  questions.length === 0 ? <Text style={styles.welcome}>Try Again</Text> :
                    <View>

                      <View>
                        <Text style={styles.question}>{questions[index].Question}</Text>
                      </View>

                      <View>
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
    backgroundColor: 'white',
    color: '#3E3E3E',
    padding: 10,
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
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '400',
    color: '#3E3E3E'
  },
  select: {
    color: '#3498db',
    borderColor: '#3498db',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
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
  }
});
