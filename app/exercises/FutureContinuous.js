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

import styles from '../styles/ExcerciseStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: WIDTH} = Dimensions.get('window');

export default class FutureContinuous extends Component {
  state = {
    questions: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null,
    qNo: 1,
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions() {
    axios.get("http://localhost:3003/futureContinuousExercise")
    .then(res => {
      console.log('user no', res.data)
      this.setState({ questions: res.data, loading: false })
    })
    .catch(err => {
      this.setState({ loading: false })
      console.log('AAAAAAAAAAAAAAAAAAA')
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
          answer: true,
        })
        alert("Correct")
      } 
      else {
        this.setState({
          check: true,
          answer: false,
        })
        alert("Wrong")
      }
    }
  }

  previousQuestion = () => {
    const { questions, index, qNo } = this.state
    if (questions.length === index - 1) {
      console.log("...");
    } else {
      if(index!==0){
        this.setState({
          qNo: qNo - 1,
          index: index - 1,
          check: false,
          answer: null,
          selected: ''
        })
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

  render() {
    const { questions, loading, index, answer, check, selected, username, qNo } = this.state
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.topBar}>             
        <TouchableOpacity>          
          <Icon
            name="home"
            size={30}
            color='#fff'
            paddinRight= {10}
            onPress={() => navigate('Menu',{username: username})}
          />
        </TouchableOpacity> 
        <Text style={{fontSize: 20,color:'#fff',fontFamily: 'comicsansms'}}>Exercise</Text>
        <Text style={styles.textNull}></Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={{padding: 10,textAlign:"right",fontWeight:'400', fontSize: 16}}>{qNo}/10</Text>
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
                        <View style={styles.checkButtonContainer}>
                          { index !== 0 ?
                            <TouchableOpacity style={styles.checkButton} onPress={this.previousQuestion}>
                              <Text style={styles.next}>Previous</Text>
                            </TouchableOpacity>
                            :
                            <View style={{width: (w/3)-1}}><Text></Text></View>
                          }
                          {/* onPress={() => this.checkAnswer(questions[index].CorrectAnswer)} */}
                          <TouchableOpacity  style={styles.checkButton}>
                            <Text style={styles.true}>Result: Correct!</Text>}
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultScreen',{username: username})} style={styles.checkButton}> 
                              <Text style={styles.next}>Finish</Text>
                            </TouchableOpacity>
                          ) : (                
                              <TouchableOpacity onPress={this.nextQuestion} style={styles.checkButton}>
                                <Text style={styles.next}>Next</Text>
                              </TouchableOpacity>
                          )}
                        </View>
                        :
                        <View style={styles.checkButtonContainer}>
                          { index !== 0 ?
                            <TouchableOpacity style={styles.checkButton} onPress={this.previousQuestion}>
                              <Text style={styles.next}>Previous</Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.checkButton}><Text></Text></View>
                          }
                          <TouchableOpacity style={styles.checkButton}>
                            <Text style={styles.false}>Wrong!</Text>
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultScreen',{username: username})} style={styles.checkButton}>
                              <Text style={styles.next}>Finish</Text>
                            </TouchableOpacity>
                          ) : (
                              <TouchableOpacity onPress={this.nextQuestion} style={styles.checkButton}>
                                <Text style={styles.next}>Next</Text>
                              </TouchableOpacity>
                            
                          )}
                        </View>
                    }
                  </View>
                  :
                  <View style={styles.checkButtonContainer}>
                    { index !== 0 ?
                        <TouchableOpacity style={styles.checkButton} onPress={this.previousQuestion}>
                          <Text style={styles.next}>Previous</Text>
                        </TouchableOpacity>
                        :
                        <View style={styles.checkButton}><Text></Text></View>
                      }
                    {
                      selected ?
                        <TouchableOpacity onPress={() => this.checkAnswer(questions[index].CorrectAnswer)} style={styles.checkButton}>
                          <Text style={styles.check}>Submit</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.checkButton}>
                          <Text style={styles.selected}>Submit</Text>
                        </TouchableOpacity>
                    }
                      
                      {questions.length === index + 1 ? (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ResultScreen',{username: username})} style={styles.checkButton}>
                          <Text style={styles.next}>Finish</Text>
                        </TouchableOpacity>
                      ) 
                      : 
                      (
                        <TouchableOpacity onPress={this.nextQuestion} style={styles.checkButton}>
                          <Text style={styles.next}>Next</Text>
                        </TouchableOpacity>
                      )
                    }
                  </View>
              }
          </View>
      }
      </View>
    );
  }
}