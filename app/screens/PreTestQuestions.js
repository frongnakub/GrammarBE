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
    results: '',
    qNo: 1,
  }

  componentDidMount() {
    this.fetchQuestions()
    this.getUserNo()
  }

  fetchQuestions() {
    //adb reverse tcp:3003 tcp:3003
    axios.get("http://localhost:3003/pretest1")
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
        return this.state.results = "Correct",
        this.sendAnswer()
      } 
      else {
        this.setState({
          check: true,
          answer: false,
        })
        return this.state.results = "Wrong",
        this.sendAnswer()
      }
    }
  }

  nextQuestion = () => {
    const { questions, index, qNo } = this.state
    if (questions.length === index + 1) {
      console.log("...");
    } else {
      this.setState({
        qNo: qNo + 1,
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
            results: this.state.results,
        })
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  render() {
    const { questions, loading, index, answer, check, selected, username, qNo } = this.state
    return (
      <View style={styles.container}>
        {/* <View style={styles.topBar}>             
          <Text ></Text>
          <Text style={{fontSize: 20,color:'#FFFFFF'}}>PRE-TEST No.1</Text>
          <Text ></Text>
        </View> */}
        <View style={styles.headerContainer}>
          <Text style={{padding: 10,textAlign:"left",fontWeight:200}}> Round 1</Text>
          <Text style={{padding: 10,textAlign:"right"}}>{qNo}/30</Text>
        </View>
        {
          loading ?
            <View style={styles.contentSpaceBetween}>
               <ActivityIndicator style={{marginTop: 20}} size={40} color="#74b9ff" />
            </View>
            :
            <View style={styles.bodyContainer}>
              
              <View>
                {
                  questions.length === 0 ? <Text style={{alignItems:'center'}}>Try Again</Text> :
                      <View >
                        <View style={styles.questionContainer}>
                          <Text style={styles.questionText}>{questions[index].Question}</Text>
                        </View>

                        <View style={styles.choiceContainer}>
                          <TouchableOpacity onPress={() => this.chooseAnswer(questions[index].Option1)} >
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
                  <View style={styles.infoContainer}>
                    {
                      answer ?
                        <View>
                          {/* <TouchableOpacity onPress={() => this.checkAnswer(questions[index].CorrectAnswer)}>
                            {/* <Text style={styles.true}>Result: Correct!</Text>}
                          </TouchableOpacity> */}
                          {questions.length === index + 1 ? (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultScreen',{username: username})} style={styles.checkContainer}> 
                              <Text style={styles.next}>Finish</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity onPress={this.nextQuestion} style={styles.checkContainer}>
                              <Text style={styles.next}>Next</Text>
                            </TouchableOpacity>
                          )}
                          {/* <TouchableOpacity onPress={this.nextQuestion}>
                            <Text style={styles.check}>Continue</Text>
                          </TouchableOpacity> */}
                        </View>
                        :
                        <View>
                          <TouchableOpacity>
                            {/* <Text style={styles.false}>Result: Wrong!</Text> */}
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultScreen',{username: username})} style={styles.checkContainer}>
                              <Text style={styles.next}>Finish</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity onPress={this.nextQuestion} style={styles.checkContainer}>
                              <Text style={styles.next}>Next</Text>
                            </TouchableOpacity>
                          )}
                          {/* <TouchableOpacity onPress={this.nextQuestion}>
                            <Text style={styles.nextFalse}>Continue</Text>
                          </TouchableOpacity> */}
                        </View>
                    }
                  </View>
                  :
                  <View style={styles.infoContainer}>
                    {
                      selected ?
                        <TouchableOpacity onPress={() => this.checkAnswer(questions[index].CorrectAnswer)} style={styles.checkContainer}>
                          <Text style={styles.check}>Check</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.checkContainer}>
                          <Text style={styles.selected}>Check</Text>
                        </TouchableOpacity>
                    }
                    {questions.length === index + 1 ? (
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultScreen',{username: username})} style={styles.checkContainer}>
                        <Text style={styles.next}>Finish</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={this.nextQuestion} style={styles.checkContainer}>
                        <Text style={styles.next}>Next</Text>
                      </TouchableOpacity>
                    )}
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
    flexDirection: 'column',
  },
  headerContainer:{
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 0, 0,0.8)',
    justifyContent: 'space-between', 
  },
  bodyContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  questionContainer:{
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  questionText:{
    fontSize: 18,
    textAlign: 'center'
  },
  choiceContainer:{
    marginTop: 20,
    alignItems: 'center',
  },
  infoContainer:{
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    // padding: 20,
  },
  selection: {
    borderColor: '#D6BA84',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 10,
    width: 300,
    fontSize: 18
  },
  select: {
    borderColor: '#D6BA84',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 10,
    width: 300,
    fontSize: 18,
    backgroundColor:'orange'
  },
  check: {
    color: 'white',
    backgroundColor: '#3498db',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  next: {
    color: 'white',
    backgroundColor: '#67ac00',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  nextFalse: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  selected: {
    color: 'white',
    backgroundColor: 'lightgray',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    fontSize: 17,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'center',
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
  contentSpaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2,
  },
  checkContainer:{
    width: 250,
  },

});