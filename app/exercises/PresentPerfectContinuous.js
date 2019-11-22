import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';

import axios from 'axios';

import AwesomeAlert from 'react-native-awesome-alerts';

import styles from '../styles/ExcerciseStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const {width: w} = (Dimensions.get('window'));


export default class PresentPerfectContinuous extends Component {
  state = {
    questions: [],
    loading: true,
    index: 0,
    selected: '',
    check: false,
    answer: null,
    qNo: 1,
    showAlert: false,
    username: this.props.navigation.state.params.username,
    score: 0,
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  fetchQuestions() {
    axios.get("http://localhost:3003/presentPerfectContinuousExercise")
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
    const { score } = this.state
    if (this.state.selected) {
      if (answer === this.state.selected) {
        this.setState({
          check: true,
          answer: true,
          score: score + 1
        })
      } 
      else {
        this.setState({
          check: true,
          answer: false,
          score: score + 0
        })
      }
    }
  }

  previousQuestion = () => {
    const { questions, index, qNo } = this.state
    if (questions.length === index - 1) {
      console.log("...");
    } 
    else {
      if(index !== 0){
        this.setState({
          qNo: qNo - 1,
          index: index - 1,
          check: false,
          answer: null,
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

  showAlert = () => {
    const { score } = this.state
    this.setState({
      showAlert: true
    });
    if(score <= 4){
      return this.state.message = "You need to study more."
    }
    else if(score > 4 && score <= 7){
      return this.state.message = "Good !"
    }
    else{
      return this.state.message = "Excellent !"
    }
  };


  render() {
    const { showAlert, questions, loading, index, answer, check, selected, username, qNo, score, message } = this.state
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.topBar}>             
        <TouchableOpacity>          
          <Icon
            name="home"
            size={30}
            color='#fff'
            paddingRight= {10}
            onPress={() => navigate('Menu',{username: username})}
          />
        </TouchableOpacity> 
        <Text style={{fontSize: 20,color:'#fff',fontFamily: 'comicsansms'}}>Exercise</Text>
        <Text style={styles.textNull}></Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={{padding: 10, textAlign:"right", fontWeight:'400', fontSize: 24, fontFamily: 'comicsansms', color: 'red'}}>Score: {score}/10</Text>
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
                        <Text style={styles.questionText}>{qNo}. {questions[index].Question}</Text>
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
                            <TouchableOpacity onPress={this.previousQuestion} style={styles.checkButton} >
                              <Text style={styles.next}>Back</Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.checkButton}><Text></Text></View>
                          }
                          {/* onPress={() => this.checkAnswer(questions[index].CorrectAnswer)} */}
                          <TouchableOpacity  style={styles.checkButton}>
                            <Text style={styles.true}>Correct</Text>
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity onPress={() => this.showAlert()} style={styles.checkButton}> 
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
                            <TouchableOpacity onPress={this.previousQuestion} style={styles.checkButton}>
                              <Text style={styles.next}>Back</Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.checkButton}><Text></Text></View>
                          }
                          <TouchableOpacity style={styles.checkButton}>
                            <Text style={styles.false}>Wrong</Text>
                          </TouchableOpacity>
                          {questions.length === index + 1 ? (
                            <TouchableOpacity onPress={() => this.showAlert()} style={styles.checkButton}>
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
                        <TouchableOpacity onPress={this.previousQuestion}  style={styles.checkButton}>
                          <View style={styles.next}>
                            <Icon
                            name="arrowleft"
                            size={30}
                            color='#fff'
                            //onPress={() => navigate('Menu',{username: username})}
                            />
                          {/* <Text style={styles.next}>Back</Text> */}
                          </View>
                          
                        </TouchableOpacity>
                        :
                        <View style={styles.checkButton}><Text></Text></View>
                      }
                    {
                      selected ?
                        <TouchableOpacity onPress={() => this.checkAnswer(questions[index].CorrectAnswer)} style={styles.checkButton}>
                          <Text style={styles.check}>Check</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.checkButton}>
                          <Text style={styles.selected}>Check</Text>
                        </TouchableOpacity>
                    }
                      
                      {questions.length === index + 1 ? (
                        <TouchableOpacity onPress={() => this.showAlert()} style={styles.checkButton}>
                          <Text style={styles.next}>Finish</Text>
                        </TouchableOpacity>
                      ) 
                      : 
                      (
                        <TouchableOpacity onPress={this.nextQuestion} style={styles.checkButton}>
                          <View style={styles.next}>
                            <Icon
                            name="arrowright"
                            size={30}
                            color='#fff'
                            //onPress={() => navigate('Menu',{username: username})}
                          />
                          {/* <Text style={styles.next}>Next</Text> */}
                          </View>
                          
                        </TouchableOpacity>
                      )
                    }
                  </View>
              }
          </View>
      }
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={this.state.message}
        titleStyle={{fontSize: 20,fontFamily: 'comicsansms',}}
        messageStyle={{fontSize: 18,fontFamily: 'comicsansms',}}
        message={"You get "+score+" points."}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="HOME"
        confirmButtonColor="#DD6B55"
        confirmButtonStyle={{width: 100}}
        confirmButtonTextStyle={{textAlign: 'center',fontSize: 18,fontFamily: 'comicsansms',}}
        onConfirmPressed={() => {
          this.props.navigation.navigate('Menu',{username: username})
        }}
      />
      </View>
    );
  }
}